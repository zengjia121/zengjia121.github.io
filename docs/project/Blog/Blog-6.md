---
title: 博客页面访问统计
  - VitePress
categories:
  - - 前端开发
    - 博客搭建
date: 2024-6-15 16:02:24
---

<!-- @format -->

# 博客搭建（六）：实现页面访问统计

这里使用的是[`visitor-badge`](https://gitcode.com/jwenjian/visitor-badge)实现的页面统计

### 插件介绍：

`visitor-badge` 是一个简洁而实用的徽章生成服务，专为记录`Markdown`文件访问量而设计。它可以帮助你在`GitHub README`文件中添加动态的访客计数徽章，以便轻松地追踪你的仓库或页面的受欢迎程度。

## 功能实现

### 主页访问统计

这个放在了导航栏那边显示，需要在`Layout.vue`的添加插槽`#nav-bar-title-after`，并将组件放在里面

- 添加插槽

```html
<template #nav-bar-title-after>
  <NavVisitor />
</template>
```

- 组件代码

```ts
<script setup lang="ts">
import { useData } from "vitepress"
import { inject, Ref } from "vue"

const { theme } = useData()
//这里可以更换成自己的网页地址
const { visitor } = theme.value
</script>

<template>
  <img
    v-if="visitor"
    class="visitor"
    :src="`https://visitor-badge.laobi.icu/badge?page_id=${visitor.badgeId}`"
    onerror="this.style.display='none'"
  />
</template>

<style scoped>
.visitor {
  margin-left: 8px;
}

@media (min-width: 768px) and (max-width: 920px) {
  .visitor {
    display: none;
  }
}
</style>

```

### 博客访问统计

在这里其实在上次的版权组件里面添加就好了

- 添加代码

```html
<div
  v-if="!DEV && visitor && isDocFooterVisible"
  v-show="hasSidebar"
  class="m-doc-footer">
  <strong class="rainbow">本页面访客：</strong>
  <img
    class="visitor"
    :src="`https://visitor-badge.laobi.icu/badge?page_id=${visitor.badgeId}.${pageId}
          &left_text=Hello%20Hello`"
    onerror="this.style.display='none'" />
</div>
```

<!-- @format -->
