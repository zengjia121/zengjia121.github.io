---
title: 闭包及其使用场景
tags:
  - 面试
  - JavaScript
categories:
  - - 面试
    - JavaScript
date: 2024-7-5 11:07:03
---

<!-- @format -->

# 闭包及其使用场景

- [闭包及其使用场景](#闭包及其使用场景)
  - [什么是闭包](#什么是闭包)
  - [闭包的使用场景](#闭包的使用场景)
    - [数据封装和私有变量](#数据封装和私有变量)
    - [模拟私有方法](#模拟私有方法)
    - [回调函数中的状态保持](#回调函数中的状态保持)
    - [函数柯里化（Currying）](#函数柯里化currying)
    - [循环中创建闭包](#循环中创建闭包)
  - [闭包的注意事项](#闭包的注意事项)

## 什么是闭包

一个函数和对其周围状态（lexical environment，词法环境）的引用捆绑在一起（或者说函数被引用包围），这样的组合就是闭包（closure）

也就是说，闭包让你可以在**一个内层函数中访问到其外层函数的作用域**

- 示例

```js
function init() {
  var name = "Mozilla"; // name 是一个被 init 创建的局部变量
  function displayName() {
    // displayName() 是内部函数，一个闭包
    alert(name); // 使用了父函数中声明的变量
  }
  displayName();
}
init();
```

`displayName()`没有自己的局部变量。然而，由于闭包的特性，它可以访问到外部函数的变量

## 闭包的使用场景

### 数据封装和私有变量

闭包允许在对象外部隐藏变量，只通过定义在闭包中的函数来访问这些变量，实现了数据的封装和私有化。

```js
function createCounter() {
  let count = 0;
  return {
    increment: function () {
      count++;
    },
    decrement: function () {
      count--;
    },
    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment();
console.log(counter.getCount()); // 输出: 1
counter.decrement();
console.log(counter.getCount()); // 输出: 0
```

### 模拟私有方法

`JavaScript`类中的方法都是公开的。闭包可以用来模拟私有方法，这些方法不可以从类的外部被访问。

```js
var makeCounter = function () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
};

var counter1 = makeCounter();
console.log(counter1.value()); // 输出: 0
counter1.increment();
counter1.increment();
console.log(counter1.value()); // 输出: 2
```

### 回调函数中的状态保持

在异步编程中，闭包允许回调函数访问外部函数中的变量，即使外部函数已经执行完毕。

```js
function asyncGreeting(name) {
  setTimeout(function () {
    console.log("Hello, " + name);
  }, 1000);
}

asyncGreeting("Alice"); // 1秒后输出: Hello, Alice
```

### 函数柯里化（Currying）

闭包允许部分应用一个函数的参数，返回一个新的函数，等待接收剩余的参数。

```js
function multiply(a, b) {
  return a * b;
}

function curriedMultiply(a) {
  return function (b) {
    return multiply(a, b);
  };
}

var double = curriedMultiply(2); // 创建一个新函数，这个函数将一个数乘以2
console.log(double(3)); // 输出: 6
```

### 循环中创建闭包

在循环中使用闭包解决经典的“循环变量问题”，确保循环体内的异步操作能够获取到正确的索引值。

```js
for (var i = 0; i < 3; i++) {
  (function (index) {
    setTimeout(function () {
      console.log("Index: " + index);
    }, 1000);
  })(i);
}
```

## 闭包的注意事项

如果不是某些特定任务需要使用闭包，在其它函数中创建函数是不明智的，因为闭包在处理速度和内存消耗方面对脚本性能具有负面影响

例如，在创建新的对象或者类时，方法通常应该关联于对象的原型，而不是定义到对象的构造器中。

原因在于每个对象的创建，方法都会被重新赋值

```js
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
  this.getName = function () {
    return this.name;
  };

  this.getMessage = function () {
    return this.message;
  };
}
```
