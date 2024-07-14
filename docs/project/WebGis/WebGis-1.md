---
title:
tags:
  - 前端
  - WebGis
categories:
  - - 前端开发
    - 平台搭建
abbrlink: 52de6a43
date: 2024-7-12 19:42:59
---

<!-- @format -->

# WebGis 平台搭建(一):Node.js 服务器设置

第一次使用`Express`框架搭建`Node.js`服务器，然后连接`MongoDB`数据库

## Node.js 服务器

使用`Node.js`技术构建的服务器。`Node.js`是一个基于`Chrome V8 JavaScript`引擎的`JavaScript`运行环境，它允许在服务器端运行`JavaScript`代码。使用`Node.js`，开发者可以构建快速的、可扩展的网络应用程序。Node.js 的特点包括非阻塞 I/O 和事件驱动，这使得它特别适合处理大量并发连接，例如在 Web 应用程序、实时通信系统和云服务中。

## Express

`Express`是一个灵活的`Node.js Web`应用程序框架，提供了一系列强大的特性帮助创建各种`Web`和移动设备应用。它被设计为简单和灵活，使得`Node.js`的`Web`应用程序开发变得更加快速和容易。

## 搭建步骤

1. 导入并创建 Express 应用

   ```ts
   import express from "express";
   const app = express();
   ```

2. 使用中间件解析 Json

   ```ts
   // 解析客户端发送的application/x-www-form-urlencoded格式的请求体
   app.use(express.urlencoded({ extended: false }));
   // 解析JSON格式的请求体
   app.use(express.json());
   // 初始化Passport.js，用于身份验证。
   app.use(passport.initialize());
   ```

3. 定义路由  
   将所有以`/api/users`开头的`URL`路径的请求委托给`users`路由处理器
   ```ts
   // 使用routers
   app.use("/api/users", users);
   ```
4. 设置端口与启动服务器

   ```ts
   const port = process.env.PORT || 5050;

   app.listen(port, () => {
     console.log(`Server running on port ${port}`);
   });
   ```

## 服务器启动

开始是想用`nodemon`进行服务器启动，但一直会报错

```sh
TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".ts"

```

查了一下发现是因为`nodemon`默认只识别`JavaScript`文件, 使用`ts`文件需要使用 `TypeScript`编译器`（tsc）`将`TypeScript`代码编译为 `JavaScript`，或者使用一个工具如`ts-node`来直接运行`TypeScript`代码
后面，改用了`ts-node`也报了同样的错误，上网搜了一下，发现使用`npx tsx`可以成功运行，所以改成了这样

```sh
>nodemon --exec tsx server.ts
或者
>npx tsx server.ts
```

就可以成功启动了

## 文件配置

最后在`package.json`中配置，后续使用`npm start`就可以了

```json
  "version": "0.0.0",
  "scripts": {
    "start": "npx tsx server.ts",
  }
```
