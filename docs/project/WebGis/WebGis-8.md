---
title: WebGis 平台搭建(八):图层矢量修改
tags:
  - 前端
  - WebGis
categories:
  - - 前端开发
    - 平台搭建
date: 2024-8-7 22:53:28
---

<!-- @format -->

# WebGis 平台搭建(八):图层矢量修改

前面完成了矢量的绘画与导出，这次完成绘画的时候矢量修改的功能

## 矢量修改

这里是使用`Openlayers`中`Modify`实现，首先需要新建`Modify`元素，并设置`source`为我们绘制的矢量源，这样就可以实现矢量元素的修改了

```ts
// 添加 Modify 交互工具
modify.value = new Modify({ source: vectorSource.value });
map.value.addInteraction(modify.value);
```

<!-- @format -->
