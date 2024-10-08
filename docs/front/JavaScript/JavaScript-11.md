---
title: 前端性能优化手段
tags:
  - 面试
  - JavaScript
categories:
  - - 面试
    - JavaScript
date: 2024-9-14 10:41:05
---

<!-- @format -->

# 前端性能优化手段

前端性能优化手段从以下几个方面入手：

- 加载优化
- 执行优化
- 渲染优化
- 样式优化
- 脚本优化

## 加载优化

- 减少`HTTP`请求：尽量减少页面的请求数(首次加载同时请求数不能超过 4 个)，移动设备浏览器同时响应请求为 4 个请求(`Android` 支持 4 个，`iOS5+`支持 6 个)

- 缓存资源：使用缓存可减少向服务器的请求数，节省加载时间，所有静态资源都要在服务器端设置缓存，并且尽量使用长缓存(使用时间戳更新缓存)

- 压缩代码：减少资源大小可加快网页显示速度，对代码进行压缩，并在服务器端设置 GZip

- 无阻塞：头部内联的样式和脚本会阻塞页面的渲染，样式放在头部并使用`link`方式引入，脚本放在尾部并使用异步方式加载

- 首屏加载：首屏快速显示可大大提升用户对页面速度的感知，应尽量针对首屏的快速显示做优化

- 按需加载：将不影响首屏的资源和当前屏幕不用的资源放到用户需要时才加载，可大大提升显示速度和降低总体流量(按需加载会导致大量重绘，影响渲染性能)

- 预加载：大型资源页面可使用`Loading`，资源加载完成后再显示页面，但加载时间过长，会造成用户流失

- 压缩图像：使用图像时选择最合适的格式和大小,，然后使用工具压缩，同时在代码中用`srcset`来按需显示

- 减少 `Cookie`：`Cookie`会影响加载速度，静态资源域名不使用`Cookie`

- 避免重定向：重定向会影响加载速度，在服务器正确设置避免重定向

- 异步加载第三方资源：第三方资源不可控会影响页面的加载和显示，要异步加载第三方资源

## 执行优化

- `CSS` 写在头部，`JS` 写在尾部并异步

- 避免`img`、`iframe` 等的`src`为空：空`src`会重新加载当前页面，影响速度和效率

- 尽量避免重置图像大小：多次重置图像大小会引发图像的多次重绘，影响性能

- 图像尽量避免使用`DataURL`：`DataURL`图像没有使用图像的压缩算法

## 渲染优化

- 设置`viewport`：HTML 的`viewport`可加速页面的渲染

- 减少`DOM`节点：`DOM`节点太多影响页面的渲染，尽量减少`DOM`节点

- 优化高频事件: 使用节流、防抖等减少渲染次数

- `GPU`加速：使用某些`HTML5`标签和`CSS3`属性会触发`GPU`渲染，请合理使用

## 样式优化

- 避免在`HTML`中书写`style`

- 避免`CSS`表达式：`CSS`表达式的执行需跳出`CSS`树的渲染

- 移除`CSS`空规则：`CSS`空规则增加了`CSS`文件的大小，影响`CSS`树的执行

## 脚本优化

- 减少重绘和回流

- 缓存`DOM`选择与计算

- 尽量使用事件代理

- 尽量使用`id`选择器
