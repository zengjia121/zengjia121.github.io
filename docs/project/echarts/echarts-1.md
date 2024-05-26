---
title: echarts 散点图仿声呐图实现
tags:
  - 插件使用
  - echarts
categories:
  - - 前端开发
    - 杂物堆
date: 2024-5-26 17:09:24
---

<!-- @format -->

# echarts 实现散点图的点出现又消失

前段时间帮忙画了张图，大概就是像电影里面那种声呐图的感觉，具体要求如下：

1. 点会在 360° 的范围内出现，然后在一段时间后消失
2. 即开即用，打开 html 就可以展现图

要的时间还比较急，所以做的还是比较糙的（乐

大概思路就是：使用`echarts`的散点图 + 极坐标 + 定时器 实现

## 极坐标图例的绘制

首先,要在设置里将图像设置为极坐标系，然后设置`angleAxis`的`type`为`category'`，这样会保证始终都为一个 `360°` 的圆，然后设置`axisLabel` 每个`15°`显示一次，不然会默认`13°`显示一次

```js
//制作底图
const degrees = Array.from({ length: 360 }, (_, index) => index);
const degreeStrings = degrees.map((degree) => degree + "°");

var option = {
  //...其他设置
  polar: {},
  angleAxis: {
    type: "category",
    data: degreeStrings,
    boundaryGap: false,
    splitLine: {
      show: true,
      lineStyle: {
        color: "gray",
        opacity: 0.5, // 将轴线的颜色设置为红色
      },
    },
    axisLine: {
      show: false,
    },
    axisLabel: {
      interval: function (index, value) {
        // 根据索引或值来决定是否显示标签
        // 例如，只显示索引为0, 15, 30等的标签
        return index % 15 === 0;
      },
      textStyle: {
        color: "black",
        fontSize: 20,
      },
    },
  },
};
```

## 散点动态出现

这里使用定时器，每三秒加入一批新的点，并将原先的点删除掉，这里主要是每批加入的点具有相同的属性，因此从头开始遍历数组，遇到不一样属性的就`break`即可,最后在更新数组的时候，使用`splice`方法，将需要加入的数组去除

```js
setInterval(function () {
  // 这里移除数据，比如移除第一个数据点
  let nextData = [];
  let time = seriesData[0].time;
  let i = 1; // 获取第一个数据点的时间
  for (i = 1; i < data.length; i++) {
    if (seriesData[i].time !== time) {
      break;
    }
  }
  // 更新图表
  myChart.setOption({
    series: [
      {
        type: "scatter",
        symbol: symbol,
        //
        data: seriesData.splice(0, i),
      },
    ],
  });
}, 2000); // 3000毫秒后执行，可以根据需要调整时间
```

<!-- @format -->
