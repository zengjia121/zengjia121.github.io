---
title: 对BFC的理解
tags:
  - 面试
  - CSS
categories:
  - - 面试
    - CSS
date: 2024-9-4 10:47:25
---

<!-- @format -->

# 对 BFC 的理解

# 什么是 BFC

首先要了解常见的定位方案，总共 3 种：

- 普通流

![普通流](../images/blog-2024-09-04-11-03-32.png)

- 浮动

![浮动](../images/blog-2024-09-04-11-04-12.png)

- 绝对定位

![绝对定位](../images/blog-2024-09-04-11-04-22.png)

而`BFC`是**属于普通流**的，可以把`BFC`看作为页面的一块渲染区域，他有着自己的渲染规则

![`BFC`](../images/blog-2024-09-04-11-05-34.png)

# 触发条件

触发`BFC`的条件包含不限于：

- 根元素，即`HTML`元素

- 浮动元素：`float`值为`left`、`right`

- `overflow`值不为`visible`，为`auto`、`scroll`、`hidden`

- `display`的值为`inline-block`、`inltable-cell`、`table-caption`、`table`、`inline-table`、`flex`、`inline-flex`、`grid`、`inline-grid`

- `position`的值为`absolute`或`fixed`

# BFC 作用

## 防止`margin`(外边距)重叠

- 无`BFC`的情况，块的上外边距和下外边距合并为单个边距

  ![外边距重叠](../images/blog-2024-09-04-11-15-02.png)

- 有`BFC`的情况，边距则不会重叠

  ![外边距不重叠](../images/blog-2024-09-04-11-34-08.png)

## 清除内部浮动

- 无`BFC`，添加了浮动，脱离了文档流

  ![无`BFC`](../images/blog-2024-09-04-11-35-41.png)

- 有`BFC`，清除浮动

  ![有`BFC`](../images/blog-2024-09-04-11-36-26.png)

## 阻止元素被浮动元素覆盖

- 无`BFC`，元素被浮动覆盖

  ![无`BFC`](../images/blog-2024-09-04-11-39-04.png)

- 有`BFC`，元素互不干扰

  ![有`BFC`](../images/blog-2024-09-04-11-41-27.png)
