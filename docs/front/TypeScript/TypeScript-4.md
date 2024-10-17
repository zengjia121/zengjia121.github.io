---
title: TypeScript中的泛型
date: 2024-10-17 11:06:13
tags:
  - 面试
  - TypeScript
categories:
  - - 面试
    - TypeScript
---

<!-- @format -->

# TypeScript 中的泛型

## 基本概念

泛型`（Generics）`是`TypeScript`提供的一种强大功能，用于创建可重用的组件。通过使用泛型，你可以创建一个可以处理多种类型而不必牺牲类型安全性的组件。泛型允许你在定义函数、类或接口时不指定具体的类型，而是在使用时再指定具体的类型。

## 泛型函数

泛型函数允许你在函数定义时使用类型参数，并在调用函数时指定具体的类型。

```ts
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("Hello, TypeScript!"); // 明确指定类型
let output2 = identity("Hello, TypeScript!"); // 类型推断
```

## 泛型接口

你可以使用泛型定义接口，使接口中的属性或方法可以使用不同的类型。

```ts
interface GenericIdentityFn<T> {
  (arg: T): T;
}

function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;
```

## 泛型类

泛型类允许你在类定义时使用类型参数，并在实例化类时指定具体的类型。

```ts
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = (x, y) => x + y;
```

## 泛型约束

有时你可能希望限制泛型类型的范围，这时可以使用泛型约束。

```ts
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // 现在可以访问 length 属性
  return arg;
}

loggingIdentity({ length: 10, value: "Hello" });
```

## 使用多个类型参数

你可以在泛型中使用多个类型参数，以处理多个类型。

```ts
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

let swappedTuple = swap([7, "seven"]); // [string, number]
```

## 泛型工具类型

`TypeScript`提供了一些内置的泛型工具类型，用于常见的类型转换和操作。

```ts
interface Person {
  name: string;
  age: number;
  address?: string;
}

type PartialPerson = Partial<Person>; // 将所有属性变为可选
type ReadonlyPerson = Readonly<Person>; // 将所有属性变为只读
type PickPerson = Pick<Person, "name" | "age">; // 选择部分属性
type OmitPerson = Omit<Person, "address">; // 排除部分属性
```

<!-- @format -->
