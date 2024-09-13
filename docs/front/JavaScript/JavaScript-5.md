---
title: typeof 与 instanceof 区别
tags:
  - 面试
  - JavaScript
categories:
  - - 面试
    - JavaScript
date: 2024-5-27 22:42:59
---

<!-- @format -->

# typeof 与 instanceof 区别

- [typeof 与 instanceof 区别](#typeof-与-instanceof-区别)
  - [typeof](#typeof)
  - [instanceof](#instanceof)
    - [instanceof 的实现原理](#instanceof-的实现原理)
- [区别](#区别)
  - [`Object.prototype.toString`](#objectprototypetostring)

## typeof

`typeof`操作符返回一个字符串，表示未经计算的操作数的类型。  
它可以用于基本类型（如 `number`、`string`、`boolean`、`undefined`）和复杂类型（如 `function` 和 `object`）。但是，对于 **`null` 和数组**，`typeof` 返回的都是 `object`，这可能会导致混淆。

```javascript
typeof 1; // 'number'
typeof "1"; // 'string'
typeof undefined; // 'undefined'
typeof true; // 'boolean'
typeof Symbol(); // 'symbol'
typeof null; // 'object'
typeof []; // 'object'
typeof {}; // 'object'
typeof console; // 'object'
typeof console.log; // 'function'
```

## instanceof

`instanceof`是一个二元操作符，**用于检查一个对象是否是一个类的实例**。它对于基本类型不太有用，但对于自定义类和内置对象（如 `Date`、`Array`、`Function` 等）很有用。

```js
const date = new Date();
date instanceof Date; // true
date instanceof Object; // true
date instanceof Array; // false

const arr = [];
arr instanceof Array; // true
arr instanceof Object; // true
arr instanceof Date; // false
```

### instanceof 的实现原理

顺着原型链去找，直到找到相同的原型对象，返回`true`，否则为`false`

```js
function myInstanceof(left, right) {
  // 这里先用typeof来判断基础数据类型，如果是，直接返回false
  if (typeof left !== "object" || left === null) return false;
  // getProtypeOf是Object对象自带的API，能够拿到参数的原型对象
  let proto = Object.getPrototypeOf(left);
  while (true) {
    if (proto === null) return false;
    if (proto === right.prototype) return true; //找到相同原型对象，返回true
    proto = Object.getPrototypeof(proto);
  }
}
```

# 区别

- `typeof`会返回一个变量的基本类型，`instanceof`返回的是一个布尔值

- `typeof`可以用于基本类型（如 `number`、`string`、`boolean`、`undefined`）和复杂类型（如`function`和`object`）。但是，对于`null`和数组，`typeof`返回的都是 `object`，这可能会导致混淆

```js
typeof 123; // "number"
typeof "abc"; // "string"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof function () {}; // "function"
typeof {}; // "object"
typeof null; // "object"
typeof []; // "object"
```

- `instanceof`可以准确地判断复杂引用数据类型，但是不能正确判断基础类型，但对于自定义类和内置对象（如 `Date`、`Array`、`Function` 等）很有用

```js
123 instanceof Number; // false
"abc" instanceof String; // false
true instanceof Boolean; // false
undefined instanceof Object; // false
null instanceof Object; // false

const date = new Date();
date instanceof Date; // true
date instanceof Object; // true
date instanceof Array; // false

const arr = [];
arr instanceof Array; // true
arr instanceof Object; // true
arr instanceof Date; // false
```

### `Object.prototype.toString`

如果需要通用检测数据类型，可以采用`Object.prototype.toString`，调用该方法，统一返回格式`[object Xxx]`的字符串

```js
const num = 123;
const str = "abc";
const bool = true;
const undef = undefined;
const func = function () {};
const obj = {};
const nullVar = null;
const arr = [];

console.log(Object.prototype.toString.call(num)); // "[object Number]"
console.log(Object.prototype.toString.call(str)); // "[object String]"
console.log(Object.prototype.toString.call(bool)); // "[object Boolean]"
console.log(Object.prototype.toString.call(undef)); // "[object Undefined]"
console.log(Object.prototype.toString.call(func)); // "[object Function]"
console.log(Object.prototype.toString.call(obj)); // "[object Object]"
console.log(Object.prototype.toString.call(nullVar)); // "[object Null]"
console.log(Object.prototype.toString.call(arr)); // "[object Array]"
```
