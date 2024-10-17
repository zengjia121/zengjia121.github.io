---
title: TypeScript中的interface和type
date: 2024-10-17 10:52:42
tags:
  - 面试
  - TypeScript
categories:
  - - 面试
    - TypeScript
---

<!-- @format -->

# interface 和 type

在`TypeScript`中，`interface`和`type`都可以用来定义对象的形状（即对象的类型）。虽然它们在很多情况下可以互换使用，但它们也有一些区别和各自的优缺点。以下是对`interface`和`type`的详细解释和对比：

## interface

`interface` 是`TypeScript`提供的一种用于定义对象类型的语法。它主要用于描述对象的结构，并且可以通过继承和实现来扩展。

- 特点
  - 继承：`interface`可以通过`extends`关键字继承其他接口。
  - 实现：类可以通过`implements`关键字实现接口。
  - 声明合并：多个同名的接口会自动合并为一个接口。

```ts
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
}

class Developer implements Employee {
  name: string;
  age: number;
  employeeId: number;
  constructor(name: string, age: number, employeeId: number) {
    this.name = name;
    this.age = age;
    this.employeeId = employeeId;
  }
}
```

## type

`type` 是`TypeScript`提供的另一种用于定义类型的语法。它不仅可以定义对象类型，还可以定义联合类型、交叉类型、元组等。

- 特点
  - 灵活性：`type` 可以用于定义联合类型、交叉类型、元组等，不仅限于对象类型。
  - 别名：`type` 可以为任何类型创建别名。
  - 不可继承：`type` 不能通过`extends`关键字继承其他类型，但可以通过交叉类型实现类似的效果。

```ts
type Person = {
  name: string;
  age: number;
};

type Employee = Person & {
  employeeId: number;
};

const developer: Employee = {
  name: "Alice",
  age: 30,
  employeeId: 1234,
};
```

## 选择建议

- 使用`interface`：当你需要定义对象类型，并且希望利用继承和实现功能时，推荐使用 `interface`。此外，如果你需要声明合并功能（如在第三方库中扩展类型），`interface` 也是更好的选择。

- 使用 `type`：当你需要定义复杂类型（如联合类型、交叉类型、元组等）或为现有类型创建别名时，推荐使用 `type`。`type` 的灵活性使其在很多情况下更为方便。

<!-- @format -->
