---
title: "知识图谱平台搭建:大文件分片上传与断点续传（一）"
tags:
  - 前端
  - 知识图谱
categories:
  - - 前端开发
    - 平台搭建
abbrlink: 52de6a43
date: 2024-9-18 14:13:25
---

<!-- @format -->

# 大文件分片上传与断点续传

大致流程：

- 将大文件按照一定的大小进行分割，并将切片按照次序编号。
- 将切片一个个发送到服务端。
- 全部切片提交到服务端后，将切片合并为一个文件。
- 如果再次上传同一个文件时，由于 `hash` 值相同，不在重新发送到服务端，即为秒传。

## Web Worker 并行分割文件

如果文件过大，在主线程中进行文件切片，计算文件 `hash`(主要用于确定文件的唯一性与完整性)，会导致 `UI` 阻塞，出现假死现象。所以，需要使用 `web Worker`。

### 创建`Web Worker`脚本

创建一个单独的`JavaScript`文件`fileWorker.js`，用于处理文件切片和计算 hash

- 主线程中使用`Web Worker`:

```js
// 使用 web worker 解析文件: 文件切片，计算文件 md5
const useWorker = (file, inTaskArrItem) => {
  return new Promise((resolve) => {
    const worker = new fileWroker();
    workerMap.set(inTaskArrItem, worker);
    worker.postMessage({
      file,
      chunkSize,
    });

    worker.addEventListener("message", function (e) {
      console.log("主线程收到信息", e.data);
      const { percentage, fileHash, fileChunkList } = e.data;
      inTaskArrItem.percentage = percentage;
      if (fileHash) {
        resolve({
          percentage,
          fileHash,
          fileChunkList,
        });
      }
    });

    worker.addEventListener("error", (err) => {
      // 主线程可以监听 Worker 是否发生错误。如果发生错误，Worker 会触发主线程的 error 事件。
      console.log("%c主线程 worker error 监听事件: ", "color: red", err);
      worker.terminate();
    });
  });
};
```

### `Web Worker`接收主线程文件

通过监听`message`事件来接收主线程发送的数据，从事件数据中解构出`file`和`chunkSize`

```js
self.addEventListener("message", async (e) => {
  console.log(e);
  const { file, chunkSize } = e.data;
  const fileChunkList = await createFileChunk(file, chunkSize);
  await calculateChunksHash(fileChunkList);
});
```

### 创建文件切片

`File` 对象是一种特定类型的 `Blob`，继承了 `Blob` 接口的属性，`Blob` 实例对象可以通过 `slice()` 方法获取子集 `blob`。

```js
// 创建文件切片
function createFileChunk(file, chunkSize) {
  return new Promise((resolve) => {
    let fileChunkList = [];
    let cur = 0;
    while (cur < file.size) {
      fileChunkList.push({ chunkFile: file.slice(cur, cur + chunkSize) });
      cur += chunkSize;
    }
    resolve(fileChunkList);
  });
}
```

### 计算文件 hash

使用 `spark-md5.js` 三方库，分块读取文件并计算文件`md5`值。

```js
// 记载并计算文件切片的 md5
async function calculateChunksHash(fileChunkList = []) {
  //用于计算文件MD5哈希值
  const spark = new SparkMD5.ArrayBuffer();

  // 计算切片进度
  let percentage = 0;

  try {
    const fileHash = await loadNext();
    //发送包含最终 MD5 值和进度的消息到主线程
    self.postMessage({ percentage: 100, fileHash, fileChunkList });
    self.close();
  } catch (err) {
    self.postMessage({ name: "error", data: err });
    self.close();
  }

  // 递归函数，处理文件的切片
  async function loadNext(index = 0) {
    // 所有的切片都已处理完毕
    if (index >= fileChunkList.length) {
      // 返回最终的MD5值
      return spark.end();
    }
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsArrayBuffer(fileChunkList[index].chunkFile);
      reader.onload = (e) => {
        //当读取成功时，将读取的结果追加到 SparkMD5 实例中
        spark.append(e.target.result);
        percentage += 100 / fileChunkList.length;
        self.postMessage({
          percentage,
        });
        //递归调用 loadNext 处理下一个切片
        resolve(loadNext(index + 1));
      };
      reader.onerror = (err) => reject(err);
    });
  }
}
```

## 文件上传

### 添加文件

```html
<div class="input_btn">
  选择文件上传
  <input
    ref="inputEl"
    type="file"
    multiple
    class="is_input"
    @change="handleUploadFileChanage" />
</div>
```

监听文件输入框的`change`事件。当用户选择文件时，函数会处理文件并开始上传

```js
// 输入框change事件
const handleUploadFileChanage = async (e) => {
  //获取触发事件的文件输入元素
  const fileEl = e.target;
  // 如果没有文件内容
  if (!fileEl || fileEl.files?.length === 0) {
    return false;
  }
  const files = fileEl.files;
  // console.log(files);
  [...files].forEach(async (file, i) => {
    // console.log({ file });
    // 需要使用 reactive 包裹，否则无法触发响应式追踪，视图不更新
    const inTaskArrItem = reactive({
      id: Date.now() + i,
      fileName: file.name,
      fileSize: file.size,
      state: 0, // 0什么都不做,1文件处理中,2上传中,3暂停,4上传完成,5上传中断，6上传失败
      sourceHash: "", // 文件原始hash
      fileHash: "", // 文件hash
      allChunkList: [], // 所有需要上传的切片，用于请求数据
      whileRequests: [], // 正在请求中的请求，目前是要永远都保存请求个数为6
      finishNumber: 0, //请求完成的个数
      errNumber: 0, // 报错的个数,默认是0个,超过3个就是直接上传中断
      percentage: 0, // 单个文件上传进度条
    });
    uploadFileList.value.push(inTaskArrItem);
    await nextTick();
    // 开始解析文件
    inTaskArrItem.state = 1;
    if (!inTaskArrItem.fileSize) {
      inTaskArrItem.state = 6;
      return;
    }
    console.log("文件解析开始");
    const { percentage, fileHash, fileChunkList } = await useWorker(file, inTaskArrItem);
    console.log("文件解析完成, hash: ", fileHash);
    inTaskArrItem.percentage = percentage;

    // 解析完成后开始上传
    const reg = /(.*)\..*/;
    // 获取文件名，不包含后缀
    let baseName = reg.exec(file.name)[1];
    if (!baseName) {
      baseName = file.name;
    }
    // 确保文件名不同的文件即使内容相同也会被视为不同的文件。
    inTaskArrItem.fileHash = `${fileHash}${baseName}`;
    inTaskArrItem.sourceHash = fileHash;
    handleFileUploadStart(file, inTaskArrItem, fileChunkList);
  });
};
```

### 文件上传预处理

处理文件上传的开始过程，包括检查文件是否已经存在、生成文件切片信息、过滤已上传的切片以及启动文件上传。

```js
const handleFileUploadStart = async (file, inTaskArrItem, fileChunkList) => {
  inTaskArrItem.state = 2;
  inTaskArrItem.percentage = 0;
  //检查文件是否存在
  const res = await checkFile({
    fileName: inTaskArrItem.fileName,
    fileHash: inTaskArrItem.fileHash,
  });
  if (!res.success) return;
  const { shouldUpload, uploadedList } = res.data;
  //处理文件存在的情况
  if (!shouldUpload) {
    console.log(`文件: ${file.name} 已存在，无需上传`);
    ElMessage.warning(`文件: ${file.name} 已存在，无需上传`);
    finishTask(inTaskArrItem);
    return;
  }
  //遍历 fileChunkList，为每个切片生成包含文件信息和切片信息的对象，并存储在 inTaskArrItem.allChunkList 中
  inTaskArrItem.allChunkList = fileChunkList.map((item, index) => {
    return {
      fileHash: inTaskArrItem.fileHash, // 总文件hash
      fileSize: file.size, // 文件总大小
      fileName: file.name, // 文件名称
      index: index, // 切片索引
      chunkFile: item.chunkFile, // 切片
      chunkHash: `${inTaskArrItem.sourceHash}-${index}`, // 切片hash
      chunkSize: item.chunkFile.size, // 切片文件大小
      chunkNumber: fileChunkList.length, // 切片个数
      finish: false, // 切片是否已经完成
      cancel: null, // 用于取消切片上传接口
    };
  });
  // 如果已存在部分文件切片，则过滤已经上传过的切片
  if (uploadedList.length) {
    inTaskArrItem.allChunkList = inTaskArrItem.allChunkList.filter((item) => !uploadedList.includes(item.chunkHash));
  }
  // 如果需要上传，但是未缺少要上传的文件切片时，可能因为文件未合并
  if (!inTaskArrItem.allChunkList.length) {
    await handleMerge(inTaskArrItem);
    return;
  }
  // 切片数量调整
  inTaskArrItem.allChunkList = inTaskArrItem.allChunkList.map((item) => {
    return {
      ...item,
      chunkNumber: inTaskArrItem.allChunkList.length,
    };
  });
  console.log(uploadFileList.value);
  uploadSignFile(inTaskArrItem);
};
```

### 文件上传

负责处理文件切片的上传，包括动态计算并发请求数、上传单个切片、处理上传失败重试以及在所有切片上传完成后合并文件。

```js
const uploadSignFile = async (item) => {
  // 如果没有需要上传的切片，或者正在上传的切片还未传完，就不做处理
  if (!item.allChunkList.length || item.whileRequests.length > 0) {
    return;
  }
  // 过滤去需要上传的文件列表
  const isTaskArrIng = uploadFileList.value.filter((e) => [1, 2].includes(e.state));
  // 动态计算并发请求数，每次调用前都获取一次最大并发数
  // chrome浏览器同域名同一时间请求的最大并发数限制为 6
  // 例如：有三个文件同时上传，那么每个文件切片的并发请求数最多为 6/3 = 2
  maxRequestNumber.value = Math.ceil(6 / isTaskArrIng.length);
  // 从尾部提取 maxRequestNumber 个需要上传的切片
  let whileRequests = item.allChunkList.slice(-maxRequestNumber.value);
  // 加入上传列表
  item.whileRequests.push(...whileRequests);
  // 将已加入上传列表的移出 allChunkList
  if (item.allChunkList.length > maxRequestNumber.value) {
    item.allChunkList.splice(-maxRequestNumber.value);
  } else {
    item.allChunkList = [];
  }
  // 每个切片开始上传
  for (const item of whileRequests) {
    uploadChunk(item);
  }
  // 单个切片上传请求
  const uploadChunk = async (chunk = {}) => {
    const fd = new FormData();
    const { finish, cancel, ...rest } = chunk;
    for (let key in rest) {
      fd.append(key, rest[key]);
    }
    const res = await uploadFile(fd, (cancelCb) => {
      chunk.cancel = cancelCb;
    });
    // 先判断是不是处于暂停还是取消状态
    // 你的状态都已经变成暂停或者中断了,就什么都不要再做了,及时停止
    if ([3, 5].includes(item.state)) return;
    if (res.success) {
      // 单个文件上传失败次数大于 0 则要减少一个
      item.errNumber > 0 ? item.errNumber-- : 0;
      // 单个文件切片上传成功数 +1
      item.finishNumber++;
      // 单个切片上传完成
      chunk.finish = true;
      // 更新进度条
      fileProgress(chunk, item);
      // 上传成功了就删掉请求中数组中的那个请求
      item.whileRequests.splice(
        item.whileRequests.findIndex((e) => e.chunkFile === chunk.chunkFile),
        1
      );
    } else {
      console.log(item);
      item.errNumber++;
      // 超过3次之后直接上传中断
      if (item.errNumber > 3) {
        pauseUpload(item, false);
        console.log("切片上传失败超过三次了，中断上传");
        ElMessage.error("切片上传失败超过三次了，中断上传");
      } else {
        // 失败了一片,继续当前分片请求
        uploadChunk(chunk);
      }
    }
    // 如果全部切片都上传完成了，则合并文件
    if (item.finishNumber === chunk.chunkNumber) {
      handleMerge(item);
    } else {
      uploadSignFile(item);
    }
  };
};
```

### 文件切片合并

文件上传完毕后，发送上传完毕请求，后台合并文件

```js
// 文件切片合并
const handleMerge = async (item) => {
  const { fileName, fileHash } = item;
  const res = await mergeChunk({ fileName, fileHash, chunkSize: chunkSize });
  if (res.success) {
    finishTask(item);
  } else {
    pauseUpload(item);
  }
  item.finishNumber = 0;
};
```

<!-- @format -->
