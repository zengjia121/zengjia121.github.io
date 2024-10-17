---
title: TypeScript中的装饰器
date: 2024-10-17 11:30:01
tags:
  - 面试
  - TypeScript
categories:
  - - 面试
    - TypeScript
---

<!-- @format -->

# TypeScript 中的装饰器

装饰器`（Decorators）`是`TypeScript`提供的一种特殊语法，用于修改类及其成员的行为。装饰器可以应用于类、方法、访问器、属性和参数。它们在编译时被应用，可以用于元数据注入、方法拦截、自动绑定等功能。

## 启用装饰器

要在`TypeScript`中使用装饰器，需要在`tsconfig.json`中启用`experimentalDecorators`选项：

```json
{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}
```

## 装饰器的类型

1. 类装饰器：应用于类构造函数，用于修改类的定义或添加元数据。
2. 方法装饰器：应用于类的方法，用于修改方法的行为或添加元数据。
3. 访问器装饰器：应用于类的访问器（getter/setter），用于修改访问器的行为或添加元数据。
4. 属性装饰器：应用于类的属性，用于修改属性的行为或添加元数据。
5. 参数装饰器：应用于方法的参数，用于修改参数的行为或添加元数据。

## 类装饰器

类装饰器是一个应用于类构造函数的函数，可以用于修改类的定义或添加元数据。

```ts
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return `Hello, ${this.greeting}`;
  }
}
```

## 方法装饰器

方法装饰器是一个应用于方法的函数，可以用于修改方法的行为或添加元数据。

```ts
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with arguments:`, args);
    const result = originalMethod.apply(this, args);
    console.log(`Result:`, result);
    return result;
  };
}

class Calculator {
  @log
  add(a: number, b: number): number {
    return a + b;
  }
}

const calculator = new Calculator();
calculator.add(2, 3); // 输出日志信息
```

## 访问器装饰器

访问器装饰器是一个应用于访问器`（getter/setter）`的函数，可以用于修改访问器的行为或添加元数据。

```ts
function configurable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.configurable = value;
  };
}

class Point {
  private _x: number;
  private _y: number;

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  @configurable(false)
  get x() {
    return this._x;
  }

  @configurable(false)
  get y() {
    return this._y;
  }
}
```

## 属性装饰器

属性装饰器是一个应用于属性的函数，可以用于修改属性的行为或添加元数据。

```ts
function readonly(target: any, propertyKey: string) {
  Object.defineProperty(target, propertyKey, {
    writable: false,
  });
}

class Person {
  @readonly
  name: string = "John";
}

const person = new Person();
person.name = "Alice"; // Error: Cannot assign to 'name' because it is a read-only property.
```

## 参数装饰器

参数装饰器是一个应用于方法参数的函数，可以用于修改参数的行为或添加元数据。

```ts
function logParameter(target: any, propertyKey: string, parameterIndex: number) {
  const existingParameters = Reflect.getOwnMetadata("logParameters", target, propertyKey) || [];
  existingParameters.push(parameterIndex);
  Reflect.defineMetadata("logParameters", existingParameters, target, propertyKey);
}

class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }

  greet(@logParameter name: string) {
    return `Hello, ${name}`;
  }
}
```

<!-- @format -->
