---
title: 底部版权声明组件
tags:
  - VitePress
categories:
  - - 前端开发
    - 博客搭建
date: 2024-5-25 16:45:08
---

<!-- @format -->

# 博客搭建（三）：文章底部版权声明

- [博客搭建（三）：文章底部版权声明](#博客搭建三文章底部版权声明)
  - [实现效果](#实现效果)
  - [文章末尾自动加入](#文章末尾自动加入)
    - [vue 组件构建](#vue-组件构建)
    - [插槽使用](#插槽使用)
  - [路径的自动切换](#路径的自动切换)
    - [`index.ts`的设置](#indexts的设置)
    - [组件的设置](#组件的设置)

这次整了个小玩意，很常见的文章版权声明，这次主要的难点在：

1. 怎么在每篇文章末尾自动加入
2. 切换文章的时候实现路径的自动切换

## 实现效果

- [GitHub 地址](https://github.com/zengjia121/vitepress-footer)

![版权声明实现效果](../images/blog-2024-05-25-16-15-37.png)

## 文章末尾自动加入

### vue 组件构建

- 网页布局

```html
<div class="footer-content">
  <div class="Content">
    <strong class="rainbow">作者：</strong>
    <span>RoastDuck</span>
  </div>

  <div
    class="Content Cursor"
    @click.prevent="copyToClipboard">
    <strong class="rainbow">本文网址({{ isCopy }})：</strong>
    <a
      :href="currentUrl"
      target="_blank">
      {{ currentUrl }}
    </a>
  </div>
  <div class="Content">
    本文采用
    <a
      class="rainbow"
      href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
      target="_blank">
      <strong class="rainbow">BY-NC-SA 4.0</strong>
    </a>
    协议进行授权。转载请注明出处
  </div>
</div>
```

- 点击粘贴设置
  这里是希望点击链接的时候，直接将内容存储到剪切板，这里用的`navigator.clipboard.writeText()`方法
  ```ts
  async function copyToClipboard(event) {
    await navigator.clipboard.writeText(currentUrl.value);
    isCopy.value = "复制成功";
    setTimeout(() => (isCopy.value = "点击复制"), 2000); // 持续时间 2 秒
  }
  ```

### 插槽使用

这里是用到了 `vitepress` 中自己提供的插槽`doc-footer-before`，写在提供的`Layout.vue`中，这样就可以固定在文章末尾添加一个版权声明的组件

```html
<template #doc-footer-before>
  <ContentFooter />
</template>
```

## 路径的自动切换

这里一开始使用的是`window.location.href`，但是它好像并不会随着路由的变化而变化，所以改用`Vue-Router`，来实现本文网址的自动生成

### `index.ts`的设置

由于路由的变化在组件中监测不到，所以需要从外部将 url 传入到组件里面，这里选择是在`theme/index.ts`中监测，并使用`provide`和`inject`进行组件间的传输

1. 在`enhanceApp({ app, router }: EnhanceAppContext)`中创建`currentUrl`,注意是要创建为响应式的，这样后面变动时，子组件也会一起更改
2. 在路由变化时，生成每次访问的新链接
3. 使用`provide`传递下去，其实这里`provide`只会在创建的时候调用一次，但由于我们数据是响应式的，所以后续变动的时候，子组件的数据也会发生变动

```ts
 enhanceApp({ app, router }: EnhanceAppContext){
    //...其他设置
  const currentUrl = ref(null);
  if (typeof window !== "undefined") {
    router.onBeforeRouteChange = (to) => {
      currentUrl.value = window.location.origin + "/" + to.split("/").slice(-3).join("/");
    };
    app.provide("currentUrl", currentUrl);
  }
}
```

### 组件的设置

组件的接收就很简单了，直接`inject`就可以了

```ts
const currentUrl = inject("currentUrl");
```

<!-- @format -->
