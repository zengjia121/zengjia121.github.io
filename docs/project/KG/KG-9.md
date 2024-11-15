---
title: "知识图谱平台搭建:不同用户的动态路由"
tags:
  - 前端
  - 知识图谱
categories:
  - - 前端开发
    - 平台搭建
abbrlink: 52de6a43
date: 2024-11-15 21:12:07
---

<!-- @format -->

# 不同用户角色实现动态路由

在开发中，动态路由可以根据用户权限、后台返回的菜单等动态加载。这对于构建权限管理、多人角色系统的应用非常有用。

## 实现原理

1. 登录的时候，根据登录用户返回可以访问的页面的路由和 token
2. 前端将路由存储到`sessionStorage`和`pinia`中

## 保存用户信息与 Token

- 将后端返回的`token`和路由存储起来，供后续请求和路由配置使用
- 使用`sessionStorage`进行持久化存储，确保页面刷新后数据不丢失

- 使用`pinia`进行全局状态管理，方便组件间共享数据。

```js
// 在登录成功后，保存 token 和 routes
const { token, routes } = await login(userCredentials);

// 获取 userStore
import { useUserStore } from "@/store";
const userStore = useUserStore();

// 保存到 pinia 中
userStore.setToken(token);
userStore.setRoutes(routes);

// 保存到 sessionStorage 中
sessionStorage.setItem("token", token);
sessionStorage.setItem("routes", JSON.stringify(routes));
```

## 格式化路由并动态添加

- 后端返回的路由信息需要转换为`Vue Router`识别的格式。
- 动态添加路由可以使用`router.addRoute()`方法。

```js
// 定义一个函数，用于格式化路由
function formatRoutes(routes) {
  const res = [];
  routes.forEach((route) => {
    const { path, component, name, meta, children } = route;
    const formattedRoute = {
      path: path,
      name: name,
      meta: meta,
      component: () => import(`@/views/${component}.vue`),
    };
    if (children && children.length) {
      formattedRoute.children = formatRoutes(children);
    }
    res.push(formattedRoute);
  });
  return res;
}

// 动态添加路由
function addDynamicRoutes(routes) {
  routes.forEach((route) => {
    router.addRoute(route);
  });
}
```

## 路由守卫中处理动态路由

- 在全局前置守卫中，判断用户是否已登录（`token` 是否存在）。

- 如果用户已登录且还未添加过动态路由，则从`sessionStorage`中获取路由，格式化并添加。

```js
import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "@/store";

// 定义静态路由
const staticRoutes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: staticRouates,
});

// 路由守卫
router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore();
  const token = userStore.token || sessionStorage.getItem("token");

  if (token) {
    if (!userStore.routes.length) {
      // 如果没有加载过路由，则加载
      let routes = sessionStorage.getItem("routes");
      if (routes) {
        routes = JSON.parse(routes);
        // 格式化路由
        const formattedRoutes = formatRoutes(routes);
        // 添加路由
        addDynamicRoutes(formattedRoutes);
        // 保存到 pinia 中
        userStore.setRoutes(routes);
        next({ ...to, replace: true }); // 确保 addRoute 生效，重新进入当前路由
      } else {
        // 如果 sessionStorage 中没有 routes，可能是用户刷新了页面，需要重新登录
        next("/login");
      }
    } else {
      next();
    }
  } else {
    if (to.path === "/login") {
      next();
    } else {
      next("/login");
    }
  }
});

export default router;
```

## 页面刷新后的处理

- 页面刷新后，`Vue`实例被重新创建，`pinia`中的状态会丢失。
- 需要从`sessionStorage`中重新加载`token`和`routes`，重新添加动态路由。

```ts
// 在 main.js 中，应用初始化时
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import pinia from "./store";
import { useUserStore } from "@/store";

const app = createApp(App);
app.use(pinia).use(router).mount("#app");

// 应用初始化时，检查是否有 token
const userStore = useUserStore();
const token = sessionStorage.getItem("token");
if (token) {
  userStore.setToken(token);
  let routes = sessionStorage.getItem("routes");
  if (routes) {
    routes = JSON.parse(routes);
    // 保存到 pinia
    userStore.setRoutes(routes);
    // 格式化并添加路由
    const formattedRoutes = formatRoutes(routes);
    formattedRoutes.forEach((route) => {
      router.addRoute(route);
    });
  }
}
```
