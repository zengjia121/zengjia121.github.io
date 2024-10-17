---
title: TypeScript中的高级类型
date: 2024-10-17 10:33:27
tags:
  - 面试
  - TypeScript
categories:
  - - 面试
    - TypeScript
---

<!-- @format -->

# `TypeScript` 中的高级类型

## 基本概念

在探索`TypeScript`的高级类型之前，让我们回顾一下几个基本的类型概念

- **基本类型**：`TypeScript`包括像`number`、`string`、`boolean`这样的基本类型，它们表示简单的数据。

- **对象类型**： 可以使用对象字面量、接口、类等定义对象类型。

- **数组和元组**：`TypeScript`具有内置的数组类型和元组类型，用于处理集合数据。

- **函数类型**：`TypeScript`支持函数类型，包括参数类型和返回值类型。

## 高级类型

### 交叉类型（Intersection Types）

交叉类型用于将多个类型合并为一个类型。新类型将具有所有合并类型的属性。

```ts
interface Person {
  name: string;
}

interface Employee {
  employeeId: number;
}

type EmployeePerson = Person & Employee;

const employee: EmployeePerson = {
  name: "John",
  employeeId: 1234,
};
```

### 联合类型（Union Types）

联合类型表示一个值可以是几种类型之一。

```ts
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}

printId(101);
printId("202");
```

### 类型别名（Type Aliases）

类型别名用于为类型创建新名称。

```ts
type Point = {
  x: number;
  y: number;
};

const point: Point = { x: 10, y: 20 };
```

### 可辨识联合（Discriminated Unions）

可辨识联合是一种类型保护模式，通常与联合类型和字面量类型一起使用。

```ts
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
  }
}
```

### 索引类型（Index Types）

索引类型用于检查对象的动态属性。

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const person = { name: "Alice", age: 25 };
const name = getProperty(person, "name"); // Alice
```

### 映射类型（Mapped Types）

映射类型用于将一个类型的所有属性转换为另一个类型。

```ts
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Person = {
  name: string;
  age: number;
};

const readonlyPerson: Readonly<Person> = {
  name: "Alice",
  age: 25,
};

// readonlyPerson.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property.
```

### 条件类型（Conditional Types）

条件类型根据条件表达式返回不同的类型。

```ts
type IsString<T> = T extends string ? "yes" : "no";

type A = IsString<string>; // "yes"
type B = IsString<number>; // "no"
```

### 内置类型工具（Utility Types）

`TypeScript`提供了一些内置的类型工具，用于常见的类型转换。

- `Partial<T>`：将类型`T`的所有属性变为可选。
- `Required<T>`：将类型`T`的所有属性变为必需。
- `Readonly<T>`：将类型`T`的所有属性变为只读。
- `Pick<T, K>`：从类型`T`中选择一组属性`K`。
- `Omit<T, K>`：从类型`T`中排除一组属性`K`。

```ts
interface Person {
  name: string;
  age: number;
  address?: string;
}

type PartialPerson = Partial<Person>;
type RequiredPerson = Required<Person>;
type ReadonlyPerson = Readonly<Person>;
type PickPerson = Pick<Person, "name" | "age">;
type OmitPerson = Omit<Person, "address">;
```
