---
title: em/px/rem/vh/vw区别
tags:
  - 面试
  - CSS
categories:
  - - 面试
    - CSS
date: 2024-8-7 23:46:05
---

<!-- @format -->

# em/px/rem/vh/vw 区别

从 CSS3 开始，浏览器对计量单位的支持又提升到了另外一个境界，新增了`rem`、`vh`、`vw`、`vm`等一些新的计量单位

利用这些新的单位开发出比较良好的响应式页面，适应多种不同分辨率的终端，包括移动设备等

## 单位

在`css`单位中，可以分为长度单位、绝对单位，如下表所指示
| CSS 单位 | |
| -------------- | -------------------------------------- |
| 相对长度单位 | em、ex、ch、rem、vw、vh、vmin、vmax、% |
| 绝对长度单位 | cm、mm、in、px、pt、pc |

### `px`

`px`，表示像素，所谓像素就是呈现在我们显示器上的一个个小点，每个像素点都是大小等同的，所以像素为计量单位被分在了绝对长度单位中

### `em`

`em `是相对长度单位，会继承父级元素的字体大小。**相对于当前对象内文本的字体尺寸**。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸（1em = 16px）

### `rem`

`rem`，相对单位，相对的只是`HTML`根元素`font-size`的值，和`em`不同的是`rem`总是相对于根元素，而不像`em`一样使用级联的方式来计算尺寸

### `vh`、`vw`

`vw`，就是根据窗口的宽度，分成 100 等份，`100vw`就表示满宽，`50vw`就表示一半宽。（`vw`始终是针对窗口的宽），同理，`vh`则为窗口的高度

<!-- @format -->
