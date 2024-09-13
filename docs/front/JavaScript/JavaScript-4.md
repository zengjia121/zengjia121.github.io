---
title: 深拷贝和浅拷贝
tags:
  - 面试
  - JavaScript
categories:
  - - 面试
    - JavaScript
abbrlink: d8afa4d2
date: 2024-05-12 17:34:41
---

<!-- @format -->

# 深拷贝和浅拷贝

- [深拷贝和浅拷贝](#深拷贝和浅拷贝)
  - [JavaScript 中的数据类型存储](#javascript中的数据类型存储)
  - [浅拷贝](#浅拷贝)
    - [浅拷贝实现](#浅拷贝实现)
    - [浅拷贝出现情况](#浅拷贝出现情况)
  - [深拷贝](#深拷贝)
    - [深拷贝的实现](#深拷贝的实现)

<!--more-->

## JavaScript 中的数据类型存储

`JavaScript`中存在两大数据类型:

- 基本类型
- 引用类型

基本类型数据保存在在栈内存中
引用类型数据保存在堆内存中，引用数据类型的变量是一个指向堆内存中实际对象的引用，存在栈中

## 浅拷贝

- 浅拷贝，指的是创建新的数据，这个数据有着原始数据属性值的一份精确拷贝
- 如果属性是基本类型，拷贝的就是基本类型的值。如果属性是引用类型，拷贝的就是内存地址
- **浅拷贝是拷贝一层，深层次的引用类型则共享内存地址**

## 浅拷贝实现

```JS
function shallowCopy(obj) {
    if (typeof obj !== 'object') return;
    let newObj = obj instanceof Array ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}
```

## 浅拷贝出现情况

- **赋值操作**

  当我们把一个对象赋值给一个新的变量时，赋值操作只会复制对象的引用，而不会创建一个新的对象。这就意味着，如果我们修改新的变量，原始的对象也会被修改。、

- **参数传递**

  当我们把一个对象作为参数传递给一个函数时，也是传递的对象的引用。所以如果函数内部修改了这个对象，原始的对象也会被修改。

- **使用 `Object.assign` 或扩展运算符进行对象合并**  
  这两种方法都只会进行浅拷贝。也就是说，如果被合并的对象有属性值是对象，那么合并后的新对象和原始的对象会共享这个属性值。

  ```JS
  let obj1 = { a: 1, b: { c: 2 } };
  let obj2 = Object.assign({}, obj1);
  obj2.b.c = 3;
  console.log(obj1.b.c); // 输出 3

  let obj3 = { a: 1, b: { c: 2 } };
  let obj4 = { ...obj3 };
  obj4.b.c = 3;
  console.log(obj3.b.c); // 输出 3
  ```

- **`Array.prototype.slice()`和`Array.prototype.concat() `**

  `Array.prototype.slice()`和`Array.prototype.concat()`方法在处理数组时，都会返回一个新的数组，这个新的数组是原始数组的浅拷贝。  
  即，如果数组的元素是基本类型，那么它们会被复制到新的数组中。但是，如果数组的元素是对象或数组（即引用类型），那么在新的数组中的是对原始元素的引用。

  ```JS
  // 使用 slice 方法
  let arr1 = [1, 2, { a: 3 }];
  let arr2 = arr1.slice();
  arr2[2].a = 4;
  console.log(arr1); // 输出 [1, 2, { a: 4 }]

  // 使用 concat 方法
  let arr3 = [1, 2, { a: 3 }];
  let arr4 = arr3.concat();
  arr4[2].a = 4;
  console.log(arr3); // 输出 [1, 2, { a: 4 }]
  ```

## 深拷贝

深拷贝开辟一个新的栈，两个对象属完成相同，但是对应两个不同的地址，修改一个对象的属性，不会改变另一个对象的属性

## 深拷贝的实现

- `JSON.stringify`和`JSON.parse`方法

  这种方式存在弊端，会忽略`undefined`、`symbol`和`函数`

  ```JS
  const obj2=JSON.parse(JSON.stringify(obj1));

  //弊端
  const obj = {
    name: 'A',
    name1: undefined,
    name3: function() {},
    name4:  Symbol('A')
  }
  const obj2 = JSON.parse(JSON.stringify(obj));
  console.log(obj2); // {name: "A"}

  ```

- 递归实现深拷贝

  ```JS
  function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    let copy = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }

    return copy;
  }

  let obj1 = { a: 1, b: { c: 2 } };
  let obj2 = deepCopy(obj1);

  obj2.b.c = 3;
  console.log(obj1.b.c); // 输出 2
  console.log(obj2.b.c); // 输出 3
  ```

- \_.cloneDeep()

  `_.cloneDeep() `是 `lodash` 库中的一个方法，用于进行深拷贝。这个方法会递归地复制对象的所有属性，包括原型链上的属性，以及不可枚举的属性。

  ```JS
  import _ from 'lodash';

  let obj1 = { a: 1, b: { c: 2 } };
  let obj2 = _.cloneDeep(obj1);

  obj2.b.c = 3;
  console.log(obj1.b.c); // 输出 2
  console.log(obj2.b.c); // 输出 3
  ```
