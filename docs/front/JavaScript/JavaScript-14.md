---
title: 前端垃圾回收机制
tags:
  - 面试
  - JavaScript
categories:
  - - 面试
    - JavaScript
date: 2024-10-9 10:41:29
---

<!-- @format -->

# 前端垃圾回收机制

前端垃圾回收机制是`JavaScript`引擎自动管理内存的一种方式，主要目的是识别和释放不再使用的内存，以防止内存泄漏。

`JavaScript` 引擎通过特定的垃圾回收算法（如标记-清除、引用计数等）来判断哪些对象已经不再被引用，从而将其占用的内存释放。

## 特点

- 自动化：前端垃圾回收机制是自动进行的，无需开发者手动管理内存。

- 周期性：垃圾回收器会按照固定的时间间隔周期性地执行垃圾回收操作。

- 减少内存泄漏：通过自动释放不再使用的内存，垃圾回收机制有助于减少内存泄漏问题。

## 常见的垃圾回收算法

### 标记-清除算法（Mark-and-Sweep）

这是最常见的垃圾回收算法。其基本思想是通过标记和清除两个阶段来管理内存。

- **工作原理**：

  - 标记阶段：从根对象（通常是全局对象）开始，递归地标记所有可达的对象。

  - 清除阶段：遍历内存中的所有对象，清除那些没有被标记的对象。

- **优点**

  - 简单易实现。

  - 能够处理循环引用的问题。

- **缺点**

  - 标记和清除阶段可能会导致程序暂停（Stop-the-World），影响性能。

- 示例

```js
let obj1 = { a: 1 };
let obj2 = { b: 2 };
obj1.next = obj2; // obj1 引用 obj2
obj2.next = obj1; // obj2 引用 obj1

// 解除引用
obj1 = null;
obj2 = null;

// 垃圾回收机制会检测到 obj1 和 obj2 不再被引用，并清除它们
```

### 引用计数算法（Reference Counting）

引用计数算法通过维护每个对象的引用计数来管理内存。当对象的引用计数为零时，表示该对象不再被引用，可以被回收。

- **工作原理**:

  - 增加引用：当一个对象被引用时，引用计数加一。

  - 减少引用：当一个引用被解除时，引用计数减一。

  - 回收内存：当对象的引用计数为零时，回收该对象的内存。

- **优点**

  - 实现简单。

  - 能够实时回收内存。

- **缺点**

  - 无法处理循环引用的问题。

- 示例

```js
function createCycle() {
  let obj1 = { a: 1 };
  let obj2 = { b: 2 };
  obj1.next = obj2; // obj1 引用 obj2
  obj2.next = obj1; // obj2 引用 obj1

  return obj1;
}

let cycle = createCycle();
cycle = null; // 解除引用，垃圾回收机制会检测到循环引用并清除它们
```

### 分代回收算法（Generational Garbage Collection）

分代回收算法基于对象的生命周期假设，将内存分为几代，并对不同代的对象采用不同的回收策略。

- **工作原理**

  - **新生代**：存放生命周期较短的对象，使用复制算法进行回收。
  - **老年代**：存放生命周期较长的对象，使用标记-清除或标记-压缩算法进行回收。

- **优点**

  - 提高了垃圾回收的效率。
  - 减少了程序暂停的时间。

- **缺点**
  - 实现复杂。
  - 需要额外的内存空间。

* **示例**

```js
let youngGen = [];
let oldGen = [];

function allocate() {
  let obj = { data: "some data" };
  youngGen.push(obj);
  return obj;
}

function promote(obj) {
  let index = youngGen.indexOf(obj);
  if (index !== -1) {
    youngGen.splice(index, 1);
    oldGen.push(obj);
  }
}

let obj = allocate();
promote(obj);
```
