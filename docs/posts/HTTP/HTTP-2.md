---
title: 跨域及其解决方案
abbrlink: 1663e6f
date: 2024-03-20 21:23:35
tags:
  - 面试
  - HTTP
categories:
  - - 面试
    - HTTP
---

<!-- @format -->

# 前端解决跨域问题

- [前端解决跨域问题](#前端解决跨域问题)
  - [一、什么是跨域](#一什么是跨域)
    - [同源策略](#同源策略)
  - [二、跨域如何解决](#二跨域如何解决)
    - [CORS （由后端配置 CORS）](#cors-由后端配置-cors)
    - [JSONP](#jsonp)
    - [websocket](#websocket)
    - [Proxy 代理](#proxy-代理)
    - [Nginx 反向代理](#nginx-反向代理)
  - [三、Vue 中使用 axios 发送跨域请求（含二次封装）](#三vue-中使用-axios-发送跨域请求含二次封装)

## 一、什么是跨域

跨域本质是**浏览器基于同源策略**的一种安全手段

### 同源策略

一种约定，它是浏览器最核心也最基本的安全功能，同源具有以下三个相同点：

- 协议相同
- 主机相同
- 端口相同

非同源请求，也就是协议、端口、主机其中一项不相同的时候，这时候就会产生跨域

同源策略限制了一下行为：

- Cookie、LocalStorage 和 IndexDB 无法读取
- DOM 和 JS 对象无法获取
- Ajax 请求发送不出去

## 二、跨域如何解决

### CORS （由后端配置 CORS）

CORS（Cross-Origin Resource Sharing，跨源资源共享）是一种机制，**它由一系列传输的 HTTP 头组成**，这些 HTTP 头决定浏览器是否阻止前端 JavaScript 代码获取跨域请求的响应。只要服务器实现了 CORS 接口，就可以实现跨域通信

### JSONP

JSONP 是服务器与客户端跨源通信的常用方法。最大特点就是简单适用，兼容性好（兼容低版本 IE），缺点是只支持 get 请求，不支持 post 请求，并且因为是通过`<script>`标签来获取数据，对于一些错误没有办法处理。
核心思想：网页通过添加一个`<script>`标签，向服务器请求 JSON 数据，服务器收到请求后，将数据放在一个指定名字的回调函数(这个回调函数的名字需要我们前后端进行协商，共同定义的参数位置传回来)

- 代码示例：

```JS
  <script src="http://www.xtxs.com?callback=gettingdata"></script>
  // 向服务器发出请求，该请求包含一个callback参数，用来指定回调函数的名字

  // 处理服务器返回回调函数的数据
  <script type="text/javascript">
      function gettingdata(res){
          // 获得的数据
          console.log(res.data)
      }
  </script>
```

### websocket

Websocket 是 HTML5 的一个持久化的协议，它实现了浏览器与服务器的全双工通信，同时也是跨域的一种解决方案。WebSocket 和 HTTP 都是应用层协议，都基于 TCP 协议。但是 WebSocket 是一种双向通信协议，在建立连接之后，WebSocket 的 服务器与 客户端都能主动向对方发送或接收数据。同时，WebSocket 在建立连接时需要借助 HTTP 协议，连接建立好了之后 client 与 server 之间的双向通信就与 HTTP 无关了。

### Proxy 代理

代理（Proxy）也称网络代理，是一种特殊的网络服务，允许一个（一般为客户端）通过这个服务与另一个网络终端（一般为服务器）进行非直接的连接。一些网关、路由器等网络设备具备网络代理功能。一般认为代理服务有利于保障网络终端的隐私或安全，防止攻击

- 方案一
  如果是通过 vue-cli 脚手架工具搭建项目，我们可以通过 webpack 为我们起一个本地服务器作为请求的代理对象  
  通过该服务器转发请求至目标服务器，得到结果再转发给前端，但是最终发布上线时如果 web 应用和接口服务器不在一起仍会跨域
  在`vue.config.js`中新增以下代码：

  ```JavaScript
    amodule.exports = {
      devServer: {
          host: '127.0.0.1',
          port: 8084,
          open: true,// vue项目启动时自动打开浏览器
          proxy: {
              '/api': { // '/api'是代理标识，用于告诉node，url前面是/api的就是使用代理的
                  target: "http://xxx.xxx.xx.xx:8080", //目标地址，一般是指后台服务器地址
                  changeOrigin: true, //是否跨域
                  pathRewrite: { // pathRewrite 的作用是把实际Request Url中的'/api'用""代替
                      '^/api': ""
                  }
              }
          }
      }
  }
  ```

- 方案二  
   通过服务端实现代理请求转发，你需要在服务端设置一个代理接口，该接口将客户端的请求转发到目标服务器，然后将目标服务器的响应返回给客户端
  `express`框架为例：

  ```JavaScript
   const express = require('express');
   const { createProxyMiddleware } = require('http-proxy-middleware');

   const app = express();

   app.use('/api', createProxyMiddleware({
     target: 'http://example.com',  // 你的后端 API 地址
     changeOrigin: true,  // 如果你的后端 API 服务器不支持 CORS，设置这个选项
     pathRewrite: {
       '^/api': '',  // 如果你的后端 API 路径不需要 '/api' 前缀，设置这个选项
     },
   }));

   app.listen(3000);
  ```

### Nginx 反向代理

在 Nginx 中，你可以通过配置反向代理来实现跨域。
基本配置示例：

```JavaScript
server {
  listen 80;
  server_name your-domain.com;

  location /api/ {
      proxy_pass http://example.com;  # 你的后端 API 地址
      proxy_set_header Host $host;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  }
}
```

## 三、Vue 中使用 axios 发送跨域请求（含二次封装）

- 二次封装原因：
  1. 统一设置请求参数：在 axios 实例中，你可以统一设置请求的 baseURL、headers、timeout 等参数，这样你就不需要在每个请求中单独设置。
  2. 统一处理请求和响应：通过请求和响应拦截器，你可以统一处理所有请求和响应。例如，你可以在请求拦截器中添加 token，或者在响应拦截器中处理错误。
  3. 简化 API 调用：通过封装，你可以将 API 调用简化为一个函数调用，这样可以使代码更简洁，也更易于理解。
  4. 提高可维护性：如果你的 API 调用逻辑分散在各个组件中，那么当 API 变更时，你需要在多个地方修改代码。通过封装，你可以将 API 调用逻辑集中在一处，这样当 API 变更时，你只需要修改一处代码。

* 二次封装示例

```JavaScript
// http.js
import axios from 'axios';

const http = axios.create({
  baseURL: 'http://example.com/api',  // 你的 API 基础地址
  timeout: 5000,  // 请求超时时间
});

// 请求拦截器
http.interceptors.request.use(
  config => {
    // 在这里你可以设置请求头，比如设置 token
    // config.headers['Authorization'] = 'Bearer ' + token;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器
http.interceptors.response.use(
  response => {
    // 在这里你可以对响应数据进行处理
    return response.data;
  },
  error => {
    // 在这里你可以对错误进行处理
    return Promise.reject(error);
  }
);

export default http;
```
