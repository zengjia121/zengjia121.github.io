---
title: "知识图谱平台搭建:防抖和节流"
tags:
  - 前端
  - 知识图谱
categories:
  - - 前端开发
    - 平台搭建
abbrlink: 3010e7ca
date: 2024-04-19 10:16:27
---

<!-- @format -->

# 元素尺寸变化防抖实现

- [元素尺寸变化防抖实现](#元素尺寸变化防抖实现)
  - [el-table 报错调整](#el-table-报错调整)
    - [报错内容分析](#报错内容分析)
    - [解决方法：防抖](#解决方法防抖)
    - [失败的解决方法：节流](#失败的解决方法节流)
  - [防抖和节流](#防抖和节流)
  - [防抖](#防抖)
  - [节流](#节流)

<!--more-->

## el-table 报错调整

具体报错内容：`ResizeObserver loop completed with undelivered notifications.`

### 报错内容分析

百度了一下：
这个错误通常表示 ResizeObserver 无法在一个浏览器帧中传递所有的通知，因为它们需要的处理时间比帧的剩余时间更长。这通常发生在被观察元素的尺寸变化导致了一连串的回调函数被调用时。  
结合错误内容是在 el-table 窗口放大缩小时报的错误，所以初步断定为是由于放大缩小时窗口变化过快，导致一连串回调函数被调用

### 解决方法：防抖

在`main.ts`中对`window.ResizeObserver `类重写，在其回调函数中使用防抖（debounce）功能，也可以加载`App.vue`里面，但加那老是报错...

- 代码如下：

```TS
//防抖代码实现
const debounce = (fn: any, delay: any) => {
  let timer: any
  return (...args: any) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}
const resizeObserver = window.ResizeObserver
window.ResizeObserver = class ResizeObserver extends resizeObserver {
  //创建了一个新的 ResizeObserver 类，该类继承自原始的 ResizeObserver 类
  constructor(callback: any) {
    //接收一个回调函数 callback 作为参数。
    //这个回调函数是在元素的尺寸发生变化时需要执行的函数。
    callback = debounce(callback, 200)
    //super 关键字来调用父类的构造函数，将新的回调函数传递给它。
    super(callback)
  }
}

```

### 失败的解决方法：节流

想着是虽然用防抖解决了这个问题，但是假如窗口持续变化的话，要等窗口停止变化才能进行尺寸更改，所以想使用节流试试，设置一段时间刷新一次。
然而会报错：

```
ResizeObserver loop completed with undelivered notifications.
```

这个错误原因是， ResizeObserver 的回调函数执行时间过长，导致新的观察任务在旧的观察任务完成之前就已经添加到队列中，从而形成了一个无法完成的循环。  
所以还是用防抖会更好一点

- 代码如下：

```TS
const throttle = (fn: any, delay: any) => {
  let last = 0
  return (...args: any) => {
    const now = Date.now()
    if (now - last > delay) {
      last = now
      fn(...args)
    }
  }
}

const resizeObserver = window.ResizeObserver
window.ResizeObserver = class ResizeObserver extends resizeObserver {
  constructor(callback: any) {
    callback = throttle(callback, 200)
    super(callback)
  }
}

```

## 防抖和节流

题外话，梳理一下防抖和节流

## 防抖

防抖的原理是，如果在一段时间内连续触发了同一个事件，那么只有在最后一次事件触发后的一段时间（例如 200ms）才执行一次事件处理函数。  
 如果在这段时间内再次触发了事件，那么之前的计时会被取消，重新开始计时。这样可以确保事件处理函数只在一连串的事件触发完毕后才执行一次。

- 代码实现：

```TS
const debounce = (fn: any, delay: any) => {
  let timer: any
  return (...args: any) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}
```

## 节流

节流的原理是，如果在一段时间内连续触发了同一个事件，那么每隔一段时间（例如 200ms）就执行一次事件处理函数。  
 无论在这段时间内事件触发了多少次，事件处理函数都只会执行一次。这样可以确保事件处理函数在一连串的事件触发过程中，每隔一段时间就执行一次，而不是等到事件触发完毕后才执行。

- 代码实现：

```TS
const throttle = (fn: any, delay: any) => {
  let last = 0
  return (...args: any) => {
    const now = Date.now()
    if (now - last > delay) {
      last = now
      fn(...args)
    }
  }
}

const resizeObserver = window.ResizeObserver
window.ResizeObserver = class ResizeObserver extends resizeObserver {
  constructor(callback: any) {
    callback = throttle(callback, 200)
    super(callback)
  }
}
```
