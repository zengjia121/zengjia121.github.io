---
title: WebGis 平台搭建(七):Geojson的导出与加载
tags:
  - 前端
  - WebGis
categories:
  - - 前端开发
    - 平台搭建
date: 2024-7-30 16:05:03
---

<!-- @format -->

# WebGis 平台搭建(七):Geojson 的导出与加载

上次完成了点线面元素的绘制，画完之后就是实现矢量的导出和加载，这里主要是使用`geojson`来实现的

## 矢量的导出

绘制的时候创建了 一个矢量源`vectorSource`,用于存储绘制的矢量,所以导出主要思路就是将这个矢量源转换为`geojson`的格式，然后下载是使用常见的下载思路：

1. 创建一个用于下载的`blob`对象
2. 创建一个下载链接`<a>`,设置`href` 为指向`Blob`对象的`URL`
3. 设置下载文件的名字，将`<a>`加入到网页中，模拟点击
4. 完成后将`<a>`元素移除

- 具体代码：

```ts
// 导出矢量图层的功能
const exportVectorLayer = () => {
  // 创建一个GeoJSON格式的实例用于导出
  const format = new GeoJSON();
  // 从矢量源中获取所有要素，并将它们转换为GeoJSON格式的字符串
  const data = format.writeFeatures(vectorSource.value.getFeatures(), {
    dataProjection: "EPSG:4326", // 目标投影
    featureProjection: map.value.getView().getProjection(), // 当前地图投影
  });

  // 创建一个用于下载的blob对象
  const blob = new Blob([data], { type: "application/json" });

  // 创建一个下载链接
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "exported.geojson";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
```

## 矢量的导入

导入部分主要涉及几个步骤:

1. 文件的选取
2. 矢量图层的载入

### 文件的选取与加载

这里使用`element-plus`中的`Upload`组件实现的,因为不用传到后端，所以将`actions`设置为`"#"`

```html
<el-upload
  v-model="fileName"
  actions="#"
  :limit="1"
  :on-change="handleChange"
  :show-file-list="false">
  <el-button
    type="primary"
    size="small">
    Upload
  </el-button>
</el-upload>
```

### 矢量图层的载入

选中文件之后,会调用`on-change`函数，进行文件的自动上传,所以在这里将文件解析出来,并加入矢量图层

```ts
const handleChange = (file, fileList) => {
  //用于读取文件内容
  const reader = new FileReader();
  //设置 FileReader 的 onload 事件处理函数，当文件读取完成时触发。
  reader.onload = (e) => {
    const content = e.target.result;
    loadGeoJSON(content);
  };
  //以文本形式读取文件内容。file.raw 是文件对象的原始数据
  reader.readAsText(file.raw);
};
const loadGeoJSON = (geojsonData) => {
  const vectorSource = new VectorSource({
    //读取 GeoJSON 数据并将其转换为地图特征。
    features: new GeoJSON().readFeatures(geojsonData, {
      featureProjection: map.value.getView().getProjection(),
    }),
  });

  const vectorLayer = new VectorLayer({
    source: vectorSource,
    style: style,
  });
};
```

<!-- @format -->
