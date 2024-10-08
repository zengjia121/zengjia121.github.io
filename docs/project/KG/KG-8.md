---
title: "知识图谱平台搭建:大文件分片上传与断点续传（二）"
tags:
  - 前端
  - 知识图谱
categories:
  - - 前端开发
    - 平台搭建
abbrlink: 52de6a43
date: 2024-9-18 16:54:50
---

<!-- @format -->

# 使用 Express.js 框架编写 Node.js 服务器

## 构建服务器

`Node.js`服务器配置

```js
import express from "express";
import { resolve, join } from "node:path";
import fse from "fs-extra";
import multiparty from "multiparty";
import { Buffer } from "node:buffer";

const port = 3000;

// 创建一个 express 实例
const app = express();

// 设置视图引擎为 ejs
app.set("view engine", "ejs");
// 设置视图文件目录
app.set("views", resolve(import.meta.dirname, "views"));

// 创建一个路由实例
const router = express.Router();

// 设置路由中间件
router.use((req, res, next) => {
  console.log(Date.now(), "路由级中间件");
  next();
});

// 将路由挂载到 express 实例上
app.use("/", router);

// 设置应用级中间件
app.use((req, res, next) => {
  // 允许跨域
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  //调用 next() 函数将控制权传递给下一个中间件
  next();
});

// 针对 OPTIONS 请求，返回 200 状态码
// 用于浏览器在发起实际请求之前进行的预检请求，以检查服务器是否允许实际请求的方法和头。
app.options("*", (req, res) => {
  res.sendStatus(200);
});

// 监听端口
app.listen(port, () => console.log("文件上传接口启动： 监听端口：" + port));

// 文件存储目录
const UPLOAD_DIR = resolve(import.meta.dirname, "fileTarget");
```

## 接收上传的文件

```js
// 上传
app.post("/upload", async (req, res) => {
  // console.log(req)
  try {
    // 处理文件表单
    const form = new multiparty.Form();
    form.parse(req, async (err, fields, files) => {
      // fields 是一个对象，其属性名称是字段名称，值是字段值数组。
      // files 是一个对象，其属性名称是字段名称，值是文件对象数组。
      if (err) {
        res.send(createResponse(20000, err, "切片上传失败"));
        return;
      }
      // fileds 是 formdata 中的数据
      // 文件hash，切片hash，文件名称
      const { fileHash, chunkHash, fileName } = fields;
      // files 是传过来的文件所在的真实路径以及内容
      const { chunkFile } = files;
      // 创建一个临时文件目录用于临时存储所有文件切片
      const chunkCache = getChunkDir(fileHash);
      // 如果临时目录不存在则创建
      if (!fse.existsSync(chunkCache)) {
        await fse.mkdirs(chunkCache);
      }
      // 将上传的文件切片移动到指定的存储文件目录
      // fse.move 方法默认不会覆盖已经存在的文件。
      // 将 overwrite: true 设置为 true，这样当目标文件已经存在时，将会被覆盖。
      // 把上传的文件移动到 /fileTarget/chunkCache_fileHash/chunkHash
      await fse.move(chunkFile[0].path, `${chunkCache}/${chunkHash}`, { overwrite: true });
      const data = { fileHash: fileHash.toString(), chunkHash: chunkHash.toString(), fileName: fileName.toString() };
      res.send(createResponse(10000, data, "切片上传成功"));
    });
  } catch (error) {
    res.send(createResponse(20000, error, "切片上传失败"));
  }
});
```

## 解析请求参数

用于解析`HTTP POST`请求的参数，将接收到的数据块拼接成一个字符串，然后解析为`JSON`对象

```js
// 用于解析请求参数
const resolvePost = (req) => {
  // 所有接收到的数据块拼接成一个字符串，然后解析为 JSON 对象。
  return new Promise((resolve, reject) => {
    let body = [];
    // let strData = ''
    // 监听请求对象 req 的 data 事件。每当有数据块传输过来时，处理程序就会被调用。
    req.on("data", (data) => {
      // data的类型为 buffer，使用数组接收，可以避免大字符串占用内存高的问题
      // strData += data
      body.push(data);
    });
    req.on("end", () => {
      // 使用 Buffer.concat 将所有数据块合并为一个 Buffer
      const buffer = Buffer.concat(body);
      // 将 Buffer 转换为字符串（假设是 UTF-8 编码）
      const stringData = buffer.toString("utf8");
      try {
        // JSON.parse(strData)
        const parsedData = JSON.parse(stringData);
        resolve(parsedData);
      } catch (error) {
        reject(new Error("参数解析失败"));
      }
    });
    req.on("error", (err) => {
      reject(err);
    });
  });
};
```

## 合并上传的文件

将文件切片合并成一个完整的文件

```js
// 合并切片
app.post("/merge", async (req, res) => {
  try {
    const data = await resolvePost(req);
    console.log(data);
    const { fileHash, fileName, chunkSize } = data;
    const ext = extractExt(fileName);
    const filePath = resolve(UPLOAD_DIR, `${fileHash}${ext}`);
    await mergeFileChunk({ filePath, fileHash, chunkSize });
    res.send(createResponse(10000, "", "文件合并成功"));
  } catch (error) {
    res.send(createResponse(20000, error, "文件合并失败"));
  }
});

// 合并切片
const mergeFileChunk = async ({ chunkSize, fileHash, filePath }) => {
  try {
    const chunkCache = getChunkDir(fileHash);
    // 读取临时所有切片目录 chunkCache 下的所有文件和子目录，并返回这些文件和子目录的名称。
    const chunkPaths = await fse.readdir(chunkCache);

    // 根据切片下标进行排序
    chunkPaths.sort((a, b) => a.split(".")[1] - b.split(".")[1]);

    let promiseList = [];
    for (let i = 0; i < chunkPaths.length; i++) {
      // fileTarget/chunkCache_fileHash/chunkHash 文件切片位置
      const chunkPath = resolve(chunkCache, chunkPaths[i]);
      // 根据 index * chunkSize 在指定位置创建可写流
      const writeStream = fse.createWriteStream(filePath, {
        start: i * chunkSize,
      });
      promiseList.push(pipStream(chunkPath, writeStream));
    }
    // 等待所有切片处理完成
    return Promise.all(promiseList)
      .then(() => {
        console.log("所有文件切片已成功处理并删除");
        // 如果文件切片存在，则删除
        if (fse.pathExistsSync(chunkCache)) {
          fse.remove(chunkCache);
          console.log(`chunkCache目录:${chunkCache}已删除`);
        } else {
          console.log(`${chunkCache} 不存在，不能删除`);
        }
        return Promise.resolve();
      })
      .catch((error) => {
        return Promise.reject(`'合并切片失败：${error}`);
      });
  } catch (error) {
    console.log("切片合并过程中发生错误：", error);
    return Promise.reject(`'合并切片失败：${error}`);
  }
};

// 把文件切片合并成一个文件流
const pipStream = (chunkPath, stream) => {
  return new Promise((resolve, reject) => {
    // 创建可读流
    const readStream = fse.createReadStream(chunkPath);
    readStream.on("error", (error) => {
      reject(error);
    });
    // 在一个指定位置写入文件流
    readStream.pipe(stream).on("finish", () => {
      // 写入完成后，删除原切片文件
      fse.unlinkSync(chunkPath);
      resolve();
    });
  });
};
```

## 验证文件

验证文件是否已存在。如果文件已存在，则返回不需要上传的响应；如果文件不存在，则返回需要上传的响应，并附带已上传的文件切片列表。

```js
// 验证文件是否已存在
app.post("/verify", async (req, res) => {
  try {
    const data = await resolvePost(req);
    const { fileHash, fileName } = data;
    // 获取文件后缀
    const ext = extractExt(fileName);
    const filePath = resolve(UPLOAD_DIR, `${fileHash}${ext}`);
    if (fse.existsSync(filePath)) {
      res.send(createResponse(10000, { shouldUpload: false, uploadedList: [] }, "已存在该文件"));
    } else {
      res.send(
        createResponse(
          10000,
          { shouldUpload: true, uploadedList: await createUploadedList(fileHash) },
          "需要上传文件或部分切分"
        )
      );
    }
  } catch (error) {
    res.send(createResponse(20000, error, "上传失败"));
  }
});

const createUploadedList = async (fileHash) => {
  return fse.existsSync(getChunkDir(fileHash)) ? fse.readdirSync(getChunkDir(fileHash)) : [];
};
```

<!-- @format -->
