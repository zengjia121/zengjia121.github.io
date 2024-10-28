---
title: Vue 路由的两种模式
tags:
  - 面试
  - Vue
categories:
  - - 面试
    - Vue
date: 2024-10-28 15:41:24
---

<!-- @format -->

# Vue 路由的两种模式

在`Vue.js`中，`Vue Router`是官方提供的路由管理器，用于构建单页面应用`（SPA）`。`Vue Router` 提供了两种主要的路由模式：**hash 模式**和**history 模式**。每种模式都有其特点和适用场景。

## Hash 模式

- 特点

  - **URL 中包含`#`**：在 hash 模式下，URL 中会包含一个 # 符号，后面的部分称为哈希值（hash）。

  - **不发送请求到服务器**：哈希值不会被包含在 HTTP 请求中，因此不会发送到服务器。

  - **兼容性好**：hash 模式在所有浏览器中都支持，包括一些较老的浏览器。

- 工作原理

  - 哈希变化：当`URL`中的哈希值变化时，浏览器不会重新加载页面，而是触发`hashchange`事件。

  - 路由解析：`Vue Router`监听`hashchange`事件，根据新的哈希值解析并渲染对应的组件。

## History 模式

- 特点

  - **URL 中不包含` #`**：在 history 模式下，URL 是正常的路径，不包含 # 符号。

  - **需要服务器配置**：由于 history 模式使用 HTML5 的 History API，需要服务器配置支持所有路径都返回同一个 HTML 文件。

  - **SEO 友好**：history 模式的 URL 更加美观和简洁，有利于搜索引擎优化（SEO）。

- 工作原理

  - **History API**：`history` 模式使用 HTML5 的`pushState`和`replaceState`方法来管理浏览历史记录。

  - **路由解析**：`Vue Router`监听`popstate`事件，根据新的路径解析并渲染对应的组件。
    示例
