---
title: Vue3组件间通信方式
tags:
  - 面试
  - Vue
categories:
  - - 面试
    - Vue
date: 2024-8-1 15:39:24
---

<!-- @format -->

# Vue3 组件间通信方式

- [Vue3 组件间通信方式](#vue3-组件间通信方式)
  - [父传子](#父传子)
  - [子传父](#子传父)
  - [兄弟组件传参](#兄弟组件传参)
  - [`expose / ref`](#expose--ref)
  - [`$attrs`](#attrs)
  - [`v-model`](#v-model)
  - [`provide/inject`](#provideinject)
  - [路由传参](#路由传参)
    - [通过 URL 参数传递](#通过-url-参数传递)
    - [通过查询参数传递](#通过查询参数传递)
  - [全局共享状态](#全局共享状态)
  - [浏览器缓存](#浏览器缓存)

## 父传子

父组件通过冒号` ：`绑定变量，然后子组件用`const props = defineProps({})`进行接收参数

- 父组件

```vue
<template>
  <child :name="name"></child>
</template>

<script setup>
import { ref } from "vue";
import child from "./child.vue";

const name = ref("鸭鸭");
</script>
```

- 子组件

```vue
<template>
  <div>{{ props.name }}</div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  name: {
    type: String,
    default: "",
  },
});
</script>
```

## 子传父

子组件用`const emits = defineEmits(['触发的方法'])`注册某个在父组件的事件，然后通过`emits('触发的事件', 参数)`触发父组件事件并且带上参数。

- 子组件  
  注册`addEvent`事件后， 用`emits('addEvent', name.value)`触发父组件的`addEvent`事件

```vue
<template>
  <button @click="handleSubmit"></button>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const name = ref("鸭鸭");
const emits = defineEmits(["addEvent"]);
const handleSubmit = () => {
  emits("addEvent", name.value);
};
</script>
```

- 父组件

  触发`addEvent`事件后，在对应的方法里面直接能拿到传过来的参数

```vue
<template>
  <child @addEvent="handle"></child>
</template>

<script setup>
import { ref } from "vue";
import child from "./child.vue";

const handle = (value) => {
  console.log(value); // '鸭鸭'
};
</script>
```

## 兄弟组件传参

以前`vue2`是用`EventBus`事件总线跨组件实现兄弟组件通信的。但`vue3`中没有，`vue3`目前主流使用`mitt.js`插件来进行替代实现兄弟通信。

1. 在`main.js`文件进行全局挂载,`$bus`是自定义属性名

```js
import mitt from "mitt";
const app = createApp(App);
app.config.globalProperties.$bus = new mitt();
```

2. 传参组件

```js
import mitt from "mitt";
const emitter = mitt();
emitter.emit("自定义的事件名称", "参数");
```

3. 接受参数组件

```js
import mitt from "mitt";
const emitter = mitt();
emitter.on("自定义的事件名称", "参数");
```

## `expose / ref`

父组件可以通过`ref`和`expose`获取子组件的属性或调用子组件的方法。

- 子组件

```vue
<template>
  <div></div>
</template>

<script setup>
import { defineExpose } from "vue";

const chileMethod = () => {
  console.log("我是方法");
};
const name = ref("鸭鸭");

defineExpose({
  // 对外暴露
  name,
  chileMethod,
});
</script>
```

- 父组件

```vue
<template>
  <child ref="myref"></child>
  <button @click="myClick">点击</button>
</template>

<script setup>
import child from "./child.vue";
import { ref } from "vue";
const myref = ref(null);
const myClick = () => {
  console.log(myref.value.name); // 直接获取到子组件的属性
  myref.value.chileMethod(); // 直接调用子组件的方法
};
</script>
```

## `$attrs`

`$attrs`是一个包含父组件传递给子组件的非`props`属性的对象。它通常用于将这些属性传递给子组件的根元素或其他内部组件。

- 父组件  
  传两个属性过去，一个在子组件`props`中，一个不在

```vue
<template>
  <child
    :name="鸭鸭"
    data="AD1231" />
</template>

<script setup>
import child from "./child.vue";
</script>
```

- 子组件  
  `$attrs`接收到`props`以外的内容，所以用`useAttrs()`打印出来没有`name`只有`data`

```vue
<template>
  <div>{{ props.name }} // '鸭鸭'</div>
</template>

<script setup>
import { defineProps, useAttrs } from "vue";
const props = defineProps({
  name: {
    type: String,
  },
});

const myattrs = useAttrs();
console.log(myattrs); //  { "data": "AD1231" }
</script>
```

## `v-model`

v-model 其实语法糖，如下两行代码作用是一样, 上面是下面的简写。

```htm
<chile v-model:title="title" />

<chile
  :title="title"
  @update:title="title = $event" />
```

- 父组件

```vue
<template>
  <div>
    <h1>父组件</h1>
    <!-- 使用 v-model 传递参数 -->
    <ChildComponent v-model:title="title" />
    <p>标题: {{ title }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ChildComponent from "./ChildComponent.vue";

const title = ref("初始标题");
</script>
```

- 子组件

```vue
<template>
  <div>
    <h2>子组件</h2>
    <input
      v-model="localTitle"
      placeholder="编辑标题" />
  </div>
</template>

<script setup>
import { defineProps, defineEmits, watch } from "vue";
const props = defineProps({
  title: String,
});
const emit = defineEmits(["update:title"]);
const localTitle = ref(props.title);
watch(localTitle, (newTitle) => {
  emit("update:title", newTitle);
});
</script>
```

## `provide/inject`

`provide`和`inject`叫依赖注入，是`vue`官方提供的`API`，它们可以实现多层组件传递数据，无论层级有多深，都可以通过这`API`实现。

- 祖宗组件  
  `provide('名称', 传递的参数)`向后代组件提供数据, 只要是后代都能接收

```vue
<template>
  <div></div>
</template>

<script setup>
import { ref, provide } from "vue";
const name = ref("天天鸭");
// 向后代组件提供数据, 只要是后代都能接收
provide("name", name.value);
</script>
```

- 子孙组件  
  无论层级多深，用`inject(接收参数)`进行接收即可

```vue
<template>
  <div>{{ name }}</div>
</template>

<script setup>
import { inject } from "vue";
// 接收顶层组件的通信
const name = inject("name");
</script>
```

## 路由传参

### 通过 URL 参数传递

1. 在`router/index.js`中定义路由，并使用`:id`占位符来表示参数：

```js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Detail from "../views/Detail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: Detail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
```

2. 在组件中使用`<router-link>`传递参数

```vue
<template>
  <div>
    <router-link :to="{ name: 'Detail', params: { id: 123 } }">Go to Detail</router-link>
  </div>
</template>
```

3. 在目标组件中使用`useRoute`钩子函数接收参数

```vue
<template>
  <div>
    <h1>Detail Page</h1>
    <p>ID: {{ id }}</p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id;
</script>
```

### 通过查询参数传递

1. 在组件中使用 `<router-link>`传递查询参数

```vue
<template>
  <div>
    <router-link :to="{ name: 'Detail', query: { id: 123 } }">Go to Detail</router-link>
  </div>
</template>
```

2. 在目标组件中使用`useRoute`钩子函数接收查询参数

```vue
<template>
  <div>
    <h1>Detail Page</h1>
    <p>ID: {{ id }}</p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.query.id;
</script>
```

## 全局共享状态

比如使用`Vuex`或者`pinia`,以`pinia`作为示例

1. 创建 Pinia 仓库

```js
import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++;
    },
  },
});
```

2. 在`Vue`应用中使用`Pinia`

```js
import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.mount("#app");
```

3. 在组件中使用`Pinia`

```vue
<template>
  <div>
    <p>{{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup>
import { useMainStore } from "./store";
import { storeToRefs } from "pinia";

const mainStore = useMainStore();
const { count } = storeToRefs(mainStore);

const increment = () => {
  mainStore.increment();
};
</script>
```

## 浏览器缓存

`sessionStorage`（临时存储）：为每一个数据源维持一个存储区域，在浏览器打开期间存在，包括页面重新加载

`localStorage`（长期存储）：与`sessionStorage`一样，但是浏览器关闭后，数据依然会一直存在

```js
// 存储数据
localStorage.setItem("key", "value");
sessionStorage.setItem("key", "value");

// 获取数据
const valueFromLocalStorage = localStorage.getItem("key");
const valueFromSessionStorage = sessionStorage.getItem("key");

// 删除数据
localStorage.removeItem("key");
sessionStorage.removeItem("key");

// 清空所有数据
localStorage.clear();
sessionStorage.clear();
```
