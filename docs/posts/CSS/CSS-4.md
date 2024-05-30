---
title: 回流和重绘
tags:
  - 面试
  - CSS
categories:
  - - 面试
    - CSS
date: 2024-5-30 17:20:01
---

<!-- @format -->

# 回流和重绘

- [回流和重绘](#回流和重绘)
  - [什么是回流](#什么是回流)
  - [什么是重绘](#什么是重绘)
  - [回流和重绘会带来什么影响](#回流和重绘会带来什么影响)
  - [如何减少回流和重绘](#如何减少回流和重绘)

1. 回流：布局引擎会根据各种样式计算每个盒子在页面上的大小与位置

2. 重绘：当计算好盒模型的位置、大小及其他属性后，浏览器根据每个盒子特性进行绘制

## 什么是回流

回流，也称为重计算布局`（Recompute Layout）`，是一种当页面的**部分或全部**的**几何属性**发生改变时，浏览器需要重新计算元素的位置和大小的过程。这通常发生在以下情况：

- 页面一开始渲染的时候
- 浏览器的窗口尺寸变化（因为回流是根据视口的大小来计算元素的位置和大小的）
- 内容发生变化，比如文本变化或图片被另一个不同尺寸的图片所替代
- 页面的滚动位置改变
- 添加或删除可见的 DOM 元素
- 元素的隐藏与现实（改变元素的可视性属性）
- 元素的位置发生变化
- 元素的尺寸发生变化

:::tip
获取一些特定属性的值的时候也可能触发回流：

`offsetTop`、`offsetLeft`、` offsetWidth`、`offsetHeight`、`scrollTop`、`scrollLeft`、`scrollWidth`、`scrollHeight`、`clientTop`、`clientLeft`、`clientWidth`、`clientHeight`

这些属性有一个共性，就是需要通过即时计算得到。因此浏览器为了获取这些值，也会进行回流
:::

当这些情况发生时，浏览器需要重新计算元素的几何属性，包括位置、尺寸和可见性等。这个过程被称为回流。

## 什么是重绘

重绘，也称为重绘渲染树`（Redraw Tree）`，是一种当元素的外观发生改变时，浏览器需要**重新绘制元素**的过程。**触发回流一定会触发重绘，重绘并不一定会触发回流**，此外还有些行为也会触发重绘:

- 颜色的修改
- 文本方向的修改
- 阴影的修改

## 回流和重绘会带来什么影响

1. **性能消耗**：回流和重绘都需要浏览器消耗资源来重新计算元素的几何属性或重新绘制元素。如果回流和重绘的次数过多，会导致页面的响应速度变慢，影响用户体验。

2. **占用更多的系统资源**：回流和重绘过程中，浏览器需要消耗 CPU 和内存资源。如果回流和重绘的次数过多，可能会导致系统资源占用过高，影响其他应用程序的运行。

3. **导致页面闪烁**：频繁的回流和重绘可能会导致页面出现闪烁或者卡顿的现象，影响用户体验。

:::tip 浏览器优化机制

由于每次重排都会造成额外的计算消耗，因此大多数浏览器都会通过队列化修改并批量执行来优化重排过程。浏览器会将修改操作放入到队列里，直到过了一段时间或者操作达到了一个阈值，才清空队列

当你获取布局信息的操作的时候，会强制队列刷新，包括前面讲到的 offsetTop 等方法都会返回最新的数据

因此浏览器不得不清空队列，触发回流重绘来返回正确的值

:::

## 如何减少回流和重绘

- 避免逐项更改样式  
  不要逐个更改样式，而是通过改变 class，或者使用 cssText 属性一次性更改样式。

  ```js
  // 不推荐
  el.style.borderLeft = "1px";
  el.style.borderRight = "2px";
  el.style.padding = "5px";

  // 推荐
  el.style.cssText = "border-left: 1px; border-right: 2px; padding: 5px;";
  // 或者
  el.className = "active";
  ```

* "离线"更新  
  设置元素属性 display: none，将其从页面上去掉，然后再进行后续操作，这些后续操作也不会触发回流与重绘

  ```js
  let container = document.getElementById('container')
  container.style.display = 'none'
  container.style.width = '100px'
  container.style.height = '200px'
  container.style.border = '10px solid red'
  container.style.color = 'red'
  ...（省略了许多类似的后续操作）
  container.style.display = 'block'

  ```

* 缓存布局信息  
  如果需要多次使用某个布局属性，考虑将它缓存到一个变量中

  ```js
  // 不推荐
  for (let i = 0; i < 1000; i++) {
    console.log(document.querySelector(".my-element").offsetHeight);
  }

  // 推荐
  let height = document.querySelector(".my-element").offsetHeight;
  for (let i = 0; i < 1000; i++) {
    console.log(height);
  }
  ```

* 避免使用表格布局  
  可能很小的一个小改动会导致整个表格的重新布局

:::tip 参考链接
<https://juejin.cn/post/6844903942137053192>  
<https://segmentfault.com/a/1190000017329980>

:::
