---
title: 本地存储的方式
tags:
  - 面试
  - JavaScript
categories:
  - - 面试
    - JavaScript
abbrlink: 3955bc30
date: 2024-03-29 22:26:25
---

<!-- @format -->

# Javascript 本地存储的方式

- [Javascript 本地存储的方式](#javascript-本地存储的方式)
  - [Cookie](#cookie)
    - [特点](#特点)
    - [常用属性](#常用属性)
    - [使用](#使用)
  - [localStorage](#localstorage)
    - [特点](#特点-1)
    - [使用](#使用-1)
  - [sessionStorage](#sessionstorage)
    - [使用](#使用-2)
  - [indexedDB](#indexeddb)
    - [使用](#使用-3)
  - [各缓存方式应用场景](#各缓存方式应用场景)

<!--more-->

## Cookie

### 特点

- `Cookie`，类型为「小型文本文件」，指某些网站为了**辨别用户身份**而储存在**用户本地终端上的数据**。
- 一般**不超过 4KB 的小型文本数据**，它由一个名称（Name）、一个值（Value）和其它几个用于控制 cookie 有效期、安全性、使用范围的可选属性组成
- `Cookie`是为了解决 HTTP 协议无状态性导致的问题而设计的。HTTP 协议是无状态的，意味着服务器无法从一个请求知道用户在上一个请求中做了什么。Cookie 可以**帮助服务器记住用户的状态**，例如用户的登录状态、购物车中的商品等
- `Cookie` 在每次 HTTP 请求时都会被发送到服务器，所以如果使用过多的 `Cookie`可能会影响网站的性能。最后，`Cookie`也可能引发隐私问题，因为它们可以被用来跟踪用户的浏览行为。

### 常用属性

- `Expires` 用于设置 `Cookie` 的过期时间
  ```JavaScript
  Expires=Wed, 21 Oct 2015 07:28:00 GMT
  ```
- `Max-Age` 用于设置在 `Cookie` 失效之前需要经过的秒数（优先级比 Expires 高）
  ```JavaScript
  Max-Age=604800
  ```
- `Domain`指定了 `Cookie` 可以送达的主机名
- Path 指定了一个 URL 路径，这个路径必须出现在要请求的资源的路径中才可以发送`Cookie`首部
  ```JavaScript
  Path=/docs   //请求/docs/Web/ 下的资源会带 Cookie 首部
  ```
- 标记为 `Secure`的 `Cookie`只应通过被 HTTPS 协议加密过的请求发送给服务端
  ```JavaScript
  document.cookie = "username=John Doe; Secure";
  ```

### 使用

- 设置`Cookie`  
  创建一个名为 "username" 的 `Cookie`，其值为 `"John Doe"`，过期时间为 `"Thu, 18 Dec 2023 12:00:00 UTC"`，并且这个 `Cookie` 在整个网站下都是可用的（由 path=/ 指定）。

  ```JavaScript
  document.cookie = "username=John Doe; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";
  ```

- 读取`Cookie`  
  `document.cookie` 属性会返回所有的 `Cookie`，每个`Cookie`之间用分号和空格分隔。如果你想要读取特定的 `Cookie`，需要对`document.cookie` 返回的字符串进行解析

  ```JavaScript
  let allCookies = document.cookie;
  ```

- 修改`Cookie`

  ```JavaScript
  let oldCookie = getCookie("username"); // 假设 getCookie 是一个可以获取 Cookie 值的函数
  document.cookie = "username=" + oldCookie + "; expires=Fri, 19 Dec 2023 12:00:00 UTC; path=/";
  ```

- 删除`Cookie`  
  最常用的方法就是给`Cookie`设置一个过期的事件，这样`Cookie`过期后会被浏览器删除

## localStorage

在客户端存储数据的方式，常常被用在以下场景中：

- **保存用户的偏好设置**：例如，用户的主题选择（深色模式或浅色模式）、语言选择等。
- **保存用户的会话信息**：例如，用户的登录状态、购物车中的商品等。这样即使用户关闭了浏览器，再次打开时也能恢复他们的会话。
- **缓存数据**：如果你的应用需要频繁地从服务器获取数据，你可以将这些数据缓存到 localStorage 中，以减少服务器的负载和提高应用的响应速度。
- **保存应用的状态**：对于一些复杂的单页应用（SPA），你可以将应用的状态保存到 localStorage 中，这样即使用户刷新了页面，应用也能恢复到之前的状态。
- **离线应用**：对于一些可以离线使用的应用，将应用的数据保存到 localStorage 中，这样即使在没有网络连接的情况下，用户也能使用应用。

### 特点

- 生命周期：持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的
- 存储的信息在同一域中是共享的
- 当本页操作（新增、修改、删除）了 localStorage 的时候，本页面不会触发 storage 事件,但是别的页面会触发 storage 事件。
- 大小：5M（跟浏览器厂商有关系）
- localStorage 本质上是对字符串的读取，如果存储内容多的话会消耗内存空间，会导致页面变卡
- 受同源策略的限制
- 无法像 Cookie 一样设置过期时间
- 只能存入字符串，无法直接存对象

### 使用

注：`localStorage` **只能存储字符串**。如果你想要存储对象，你需要先将对象转换为 JSON 字符串，然后再存储。

- 设置数据
  ```JavaScript
  localStorage.setItem('myKey', 'myValue');
  ```
- 获取数据
  ```JavaScript
  let data = localStorage.getItem('myKey');
  ```
- 删除数据
  ```JavaScript
  localStorage.removeItem('myKey');
  ```
- 清除所有数据
  ```JavaScript
  localStorage.clear();
  ```

## sessionStorage

`sessionStorage`和 `localStorage`使用方法基本一致，唯一不同的是生命周期，**一旦页面（会话）关闭，`sessionStorage` 将会删除数据**

### 使用

使用示例：

```JavaScript
let obj = {name: 'John', age: 30};
sessionStorage.setItem('myObj', JSON.stringify(obj));

let data = JSON.parse(sessionStorage.getItem('myObj'));
console.log(data.name); // 输出 "John"
```

注：`sessionStorage` **只能存储字符串**。如果你想要存储对象，你需要先将对象转换为 JSON 字符串，然后再存储。

- 设置数据
  ```JavaScript
  sessionStorage.setItem('myKey', 'myValue');
  ```
- 获取数据
  ```JavaScript
  let data = sessionStorage.getItem('myKey');
  ```
- 删除数据
  ```JavaScript
  sessionStorage.removeItem('myKey');
  ```
- 清除所有数据
  ```JavaScript
  sessionStorage.clear();
  ```

## indexedDB

`indexedDB` 是一个在浏览器中存储大量结构化数据的低级 API。`indexedDB` 提供了对事务的完全控制，可以存储和检索 `JavaScript` 对象，这些对象由索引组织，使得高性能搜索成为可能。

### 使用

- 打开数据库

  ```JavaScript
  let openRequest = indexedDB.open("myDatabase", 1);
  ```

- 创建对象存储

  ```JavaScript
  openRequest.onupgradeneeded = function(e) {
    let db = e.target.result;
    if (!db.objectStoreNames.contains('myStore')) {
        db.createObjectStore('myStore', {keyPath: 'id'});
    }
  };
  ```

- 添加数据

  ```JavaScript
  let transaction = db.transaction("myStore", "readwrite");
  let store = transaction.objectStore("myStore");
  let item = {id: 1, name: 'John', age: 30};
  store.add(item);
  ```

- 获取数据

  ```JavaScript
  let transaction = db.transaction("myStore", "readonly");
  let store = transaction.objectStore("myStore");
  let request = store.get(1);
  request.onsuccess = function(e) {
      let item = e.target.result;
      console.log(item.name); // 输出 "John"
  };
  ```

- 删除数据
  ```JavaScript
  let transaction = db.transaction("myStore", "readwrite");
  let store = transaction.objectStore("myStore");
  store.delete(1);
  ```

## 各缓存方式应用场景

1. 标记用户与跟踪用户行为的情况，推荐使用 cookie
2. 适合长期保存在本地的数据（令牌），推荐使用 localStorage
3. 敏感账号一次性登录，推荐使用 sessionStorage
4. 存储大量数据的情况、在线文档（富文本编辑器）保存编辑历史的情况，推荐使用 indexedDB

:::tip 参考
<https://mp.weixin.qq.com/s/mROjtpoXarN--UDfEMqwhQ>
<https://github.com/chenstarx/GoDB.js>
:::
