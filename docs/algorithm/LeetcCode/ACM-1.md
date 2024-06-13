---
title: JavaScript的ACM模式
tags:
  - leetcode
  - 日常刷题
categories:
  - LeetCode
date: 2024-5-29 10:54:05
---

<!-- @format -->

# JavaScript 的 ACM 模式

## V8 模式

### 读取数据

好像有两种，但具体用`readline();`的比较多...吧？

```js
read_line();
readline();
```

### 输出

```js
console.log();
```

## Nodejs 模式

输入有三大步骤：

1. 引入 readline 模块

2. 调用 readline.createInterface()，创建一个 readline 的接口实例

3. 监听 line 事件，事件处理函数的参数就是输入的行

之后的处理都是在`function (line)`里面进行处理的

```js
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  //
});
```
