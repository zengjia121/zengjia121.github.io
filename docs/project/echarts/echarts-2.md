---
title: echarts使用高德地图作为底图
tags:
  - 插件使用
  - echarts
  - amap
categories:
  - - 前端开发
    - 杂物堆
abbrlink: 555f53d3
date: 2024-03-26 22:16:59
---

<!-- @format -->

# echarts 使用高德地图作为底图

- [echarts 使用高德地图作为底图](#echarts-使用高德地图作为底图)
  - [echarts-extension-amap 插件使用](#echarts-extension-amap-插件使用)
  - [echarts Option 设置](#echarts-option-设置)
  - [高德控件的加入](#高德控件的加入)

## echarts-extension-amap 插件使用

前面已经使用 echarts 的散点图+极坐标画出了类似雷达图的效果，这次是希望将高德地图直接作为底图，而不是放一张静态的矢量图作为底图，而且由于区域较小，所以不能直接拿行政区划图导入 echarts 进行绘制
查了下，找到一个插件叫`echarts-extension-amap`,具体导入语句：

```HTML
<!-- 导入高德 -->
 <script
    type="text/javascript"
    src="https://webapi.amap.com/maps?v=2.0&key=[高德的key]2&plugin=AMap.Scale,AMap.ToolBar"
  ></script>
  <!-- 导入echarts -->
  <script
    type="text/javascript"
    src="https://registry.npmmirror.com/echarts/5.5.0/files/dist/echarts.min.js"
  ></script>
  <!-- 导入echarts-extension-amap -->
  <script src="https://cdn.jsdelivr.net/npm/echarts-extension-amap/dist/echarts-extension-amap.min.js"></script>
```

## echarts Option 设置

导入后的使用很简单，在 option 中设置 amap 属性即可

```JavaScript
    option = {
      backgroundColor: 'transparent', // 设置图表背景色为透明
      amap: {
        center: [118.9148, 32.1137],
        zoom: 24,
        mapStyle: 'amap://styles/dark',//设置地图样式
      },
      //其他属性
    }
```

## 高德控件的加入

在这里添加了比例尺的控件，也可以添加高德的其他控件以及图层（控件要在开头导入），主要是在 echarts 渲染完后获取其中的高德地图的组件

```JavaScript
// 获取 ECharts 高德地图组件
var amapComponent = chart.getModel().getComponent('amap');
// 获取高德地图实例，使用高德地图自带的控件(需要在高德地图js API script标签手动引入)
var amap = amapComponent.getAMap();
// 添加控件
amap.addControl(new AMap.Scale());
amap.addControl(new AMap.ToolBar());
// 禁用 ECharts 图层交互，从而使高德地图图层可以点击交互
amapComponent.setEChartsLayerInteractive(false);
```

:::tip 参考
<https://github.com/plainheart/echarts-extension-amap/blob/master/README.zh-CN.md>
:::
