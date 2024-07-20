---
title: Aplayer搭配MetingJS实现音乐播放器
tags:
  - VitePress
categories:
  - - 前端开发
    - 博客搭建
date: 2024-7-20 15:15:16
---

<!-- @format -->

# Aplayer 搭配 MetingJS 实现音乐播放器

之前一直是直接用网易云外链实现音乐播放的，但那样调不了声音而且歌单里只能播放十首，所以这次使用`Aplayer`搭配`MetingJS`搭建一个音乐播放器

## 安装

`Aplayer`安装

```sh
npm install aplayer --save
```

`MetingJS`安装

```sh
npm i meting
```

## 引入

引入这里搞了很久，因为`MetingJS`好像不能使用`import`引入，而`vitepress`框架里又没有`index.html`，所以这里是用`HeadConfig[]`引入的
:::info `HeadConfig[]`
要在页面`HTML`的`<head>`标签中呈现的其他元素。用户添加的标签在结束`head`标签之前呈现，在 `VitePress`标签之后。
:::

```ts
//head.ts

import type { HeadConfig } from "vitepress";

export const head: HeadConfig[] = [
  //...其他设置
  ["script", { src: "https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js", type: "module" }],
  // 添加 APlayer 的样式表
  ["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css" }],
  // 添加 APlayer 的脚本
  ["script", { src: "https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js" }],
];
```

## 组件

引入了之后就很简单，直接按照文档里面的写就可以了，使用`meting-js`解析网易云歌单，然后再使用`Aplayer`播放.(这些都打包在`meting-js`里面了)

```html
<meting-js
  class="cloudmiusc"
  server="netease"
  type="playlist"
  id="8751986160"
  fixed="true"
  volume="0.5"></meting-js>
```

## 插入文档

最后在`Layout.vue`添加个插槽把组件放进去即可

```html
<template #doc-top>
  <cloud-music />
</template>
```

<!-- @format -->
