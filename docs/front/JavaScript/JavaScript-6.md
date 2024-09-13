---
title: for...in 和 for..of
tags:
  - 面试
  - JavaScript
categories:
  - - 面试
    - JavaScript
date: 2024-6-5 15:35:35
---

<!-- @format -->

# for...in 和 for..of 区别

`for...in` 循环更适合遍历对象的属性，而 `for...of` 循环更适合遍历集合的元素。

## `for...in`

主要用于遍历对象的键名或数组的索引。
访问对象的所有键 **（包括从原型链上继承的键）** 并执行某些操作时非常有用

```js
let obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  console.log(key); // 输出：a, b, c
}
```

## `for..of`

主要用于遍历可迭代对象（如数组、字符串、Map、Set 等）的元素值

```js
let arr = [1, 2, 3];
for (let value of arr) {
  console.log(value); // 输出：1, 2, 3
}
```
