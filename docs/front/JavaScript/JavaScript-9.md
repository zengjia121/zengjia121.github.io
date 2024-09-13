---
title: DOM常见的操作
tags:
  - 面试
  - JavaScript
categories:
  - - 面试
    - JavaScript
date: 2024-7-8 21:36:52
---

<!-- @format -->

# DOM 与其常见的操作

- [DOM 与其常见的操作](#dom-与其常见的操作)
  - [DOM](#dom)
  - [操作](#操作)
    - [创建节点](#创建节点)
    - [获取节点](#获取节点)
    - [更新节点](#更新节点)
    - [添加节点](#添加节点)
    - [删除节点](#删除节点)

## DOM

文档对象模型`(DOM)`是`HTML`和`XML`文档的编程接口

提供了对文档的结构化的表述，并定义了一种方式可以使从程序中对该结构进行访问，从而改变文档的结构，样式和内容

任何`HTML`或`XML`文档都可以用`DOM`表示为一个由节点构成的层级结构

```js
<div>
  <p title="title">content</p>
</div>
```

`div`、`p`就是元素节点，`content`就是文本节点，`title`就是属性节点

## 操作

`DOM`常见的操作，主要分为:

- 创建节点
- 查询节点
- 更新节点
- 添加节点
- 删除节点

### 创建节点

- `createElement`

  创建新元素，接受一个参数，即要创建元素的标签名

```js
const divEl = document.createElement("div");
```

- `createTextNode`

  创建一个文本节点

```js
const textEl = document.createTextNode("content");
```

- `createDocumentFragment`

  用来创建一个文档碎片，它表示一种轻量级的文档，主要是用来存储临时节点，然后把文档碎片的内容一次性添加到`DOM`中

```js
const fragment = document.createDocumentFragment();
```

- `createAttribute`
  创建属性节点，可以是自定义属性

```js
const dataAttribute = document.createAttribute("custom");
consle.log(dataAttribute);
```

### 获取节点

- `querySelector`
  传入任何有效的`css`选择器，即可选中单个`DOM`元素（首个）

```js
document.querySelector(".element");
document.querySelector("#element");
```

- `querySelectorAll`
  返回一个包含节点子树内所有与之相匹配的`Element`节点列表，如果没有相匹配的，则返回一个空节点列表

```js
const notLive = document.querySelectorAll("p");
```

### 更新节点

- `innerHTML`
  不但可以修改一个`DOM`节点的文本内容，还可以直接通过`HTML`片段修改`DOM`节点内部的子树

```js
// 获取<p id="p">...</p >
var p = document.getElementById("p");
// 设置文本为abc:
p.innerHTML = "ABC"; // <p id="p">ABC</p >
// 设置HTML:
p.innerHTML = 'ABC <span style="color:red">RED</span> XYZ';
// <p>...</p >的内部结构已修改
```

- `innerText`、`textContent`

  自动对字符串进行`HTML`编码，保证无法设置任何`HTML`标签

```js
// 获取<p id="p-id">...</p >
var p = document.getElementById("p-id");
// 设置文本:
p.innerText = '<script>alert("Hi")</script>';
// HTML被自动编码，无法设置一个<script>节点:
// <p id="p-id">&lt;script&gt;alert("Hi")&lt;/script&gt;</p >
```

两者的区别在于读取属性时，`innerText` 不返回隐藏元素的文本，而`textContent`返回所有文本

- `style`

  `DOM`节点的`style`属性对应所有的`CSS` ，可以直接获取或设置。遇到`-`需要转化为驼峰命名

```js
// 获取<p id="p-id">...</p >
const p = document.getElementById("p-id");
// 设置CSS:
p.style.color = "#ff0000";
p.style.fontSize = "20px"; // 驼峰命名
p.style.paddingTop = "2em";
```

### 添加节点

- `innerHTML`

  如果这个`DOM`节点是空的，例如，`<div></div>`，那么，直接使用 `innerHTML = '<span>child</span>'`就可以修改`DOM`节点的内容，相当于添加了新的`DOM`节点

- `appendChild`

  把一个子节点添加到父节点的最后一个子节点

```js
//<!-- HTML结构 -->
<div id="list">
    <p id="java">Java</p >
    <p id="python">Python</p >
    <p id="scheme">Scheme</p >
    //<!-- 添加元素 -->
    <p id="js">JavaScript</p >
</div>


const js = document.getElementById("js");
js.innerHTML = "JavaScript";
const list = document.getElementById("list");
list.appendChild(js);
```

- `insertBefore`

  把子节点插入到指定的位置，使用方法如下：

```js
parentElement.insertBefore(newElement, referenceElement);
```

子节点会插入到`referenceElement`之前

- `setAttribute`

在指定元素中添加一个属性节点，如果元素中已有该属性改变属性值

```js
const div = document.getElementById("id");
div.setAttribute("class", "white"); //第一个参数属性名，第二个参数属性值。
```

### 删除节点

删除一个节点，首先要获得该节点本身以及它的父节点，然后，调用父节点的`removeChild`把自己删掉

```js
// 拿到待删除节点:
const self = document.getElementById("to-be-removed");
// 拿到父节点:
const parent = self.parentElement;
// 删除:
const removed = parent.removeChild(self);
removed === self; // true
```

:::tip 参考链接  
https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model  
https://vue3js.cn/interview/JavaScript/Dom.html#%E4%BA%8C%E3%80%81%E6%93%8D%E4%BD%9C
:::
