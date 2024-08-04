---
title: Vue3中的插槽
tags:
  - 面试
  - Vue
categories:
  - - 面试
    - Vue
date: 2024-8-2 00:22:20
---

<!-- @format -->

# Vue3 中的插槽

- [Vue3 中的插槽](#vue3-中的插槽)
  - [什么是插槽](#什么是插槽)
  - [默认插槽](#默认插槽)
  - [具名插槽](#具名插槽)
  - [作用域插槽](#作用域插槽)
  - [动态插槽名](#动态插槽名)

## 什么是插槽

在`Vue3`中，插槽`（slot）`是一种用于在父组件中向子组件传递内容的机制。它允许我们在子组件的模板中定义可插入的内容，并在父组件中传递具体的内容给子组件。

`Vue3`中的插槽相对于`Vue2`有一些重要的改进。在`Vue3`中，插槽有两种类型：`作用域插槽（scoped slots）`和`默认插槽（default slots）`。这两种插槽类型都可以通过`<slot>`元素在子组件的模板中定义。

## 默认插槽

默认插槽是一种在子组件中定义的未命名的插槽,不需要通过`v-slot`指令进行声明,而是可以直接在子组件的模板中使用`<slot>`元素。父组件中的内容会自动传递给默认插槽。

- 父组件

```vue
<template>
  <ChildComponent>
    <p>这是插入到子组件中的内容。</p>
  </ChildComponent>
</template>

<script setup>
import ChildComponent from "./ChildComponent.vue";
</script>
```

- 子组件

```vue
<template>
  <div>
    <slot>这是默认内容，如果没有提供插槽内容时显示。</slot>
  </div>
</template>

<script setup></script>
```

## 具名插槽

Vue3 中的具名插槽`（named slots）`允许在子组件中插入多个不同位置的内容。

- 父组件

```vue
<template>
  <ChildComponent>
    <template #header>
      <h1>这是头部内容。</h1>
    </template>
    <template #footer>
      <p>这是尾部内容。</p>
    </template>
  </ChildComponent>
</template>

<script setup>
import ChildComponent from "./ChildComponent.vue";
</script>
```

- 子组件

```vue
<template>
  <div>
    <header>
      <slot name="header">默认头部内容</slot>
    </header>
    <main>
      <slot>默认主体内容</slot>
    </main>
    <footer>
      <slot name="footer">默认尾部内容</slot>
    </footer>
  </div>
</template>

<script setup></script>
```

## 作用域插槽

`Vue3`中的作用域插槽是一种可以让父组件向子组件传递数据,并且在子组件中使用这些数据的方法。

- 父组件

```vue
<template>
  <ChildComponent>
    <template #default="slotProps">
      <p>计数器的值是：{{ slotProps.count }}</p>
    </template>
  </ChildComponent>
</template>

<script setup>
import ChildComponent from "./ChildComponent.vue";
</script>
```

- 子组件

```vue
<template>
  <div>
    <slot :count="count"></slot>
  </div>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);

setInterval(() => {
  count.value++;
}, 1000);
</script>
```

## 动态插槽名

动态插槽名允许根据父组件的状态动态地选择插槽。

- 父组件

```vue
<template>
  <ChildComponent>
    <template #[currentSlot]>
      <p>这是动态插槽内容。</p>
    </template>
  </ChildComponent>
</template>

<script setup>
import { ref } from "vue";
import ChildComponent from "./ChildComponent.vue";

const currentSlot = ref("default");
</script>
```

- 子组件

```vue
<template>
  <div>
    <slot name="default">默认插槽内容</slot>
    <slot name="alternative">备用插槽内容</slot>
  </div>
</template>

<script setup></script>
```

<!-- @format -->
