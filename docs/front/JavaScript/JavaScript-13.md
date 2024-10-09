---
title: JavaScript 懒加载
tags:
  - 面试
  - JavaScript
categories:
  - - 面试
    - JavaScript
date: 2024-10-9 10:41:29
---

<!-- @format -->

# JavaScript 懒加载

`JavaScript` 懒加载`（Lazy Loading）`是一种优化技术，用于在需要时才加载资源（如图像、脚本、组件等），以减少初始加载时间和带宽消耗。以下是一些常见的`JavaScript`懒加载技术和示例。

## 图像懒加载

图像懒加载是一种常见的优化技术，只有当图像进入视口时才加载它们。可以使用原生的`loading="lazy"`属性或`Intersection Observer API`来实现。

- 使用`loading="lazy"`

这是最简单的方法，适用于现代浏览器：

```html
<img
  src="image.jpg"
  loading="lazy"
  alt="Lazy loaded image" />
```

- 使用`Intersection Observer API`

`Intersection Observer API`是一种用于检测元素与视口`（viewport）`或其他元素交叉状态的`API`。它可以用于实现懒加载、无限滚动、广告曝光统计等功能。相比于传统的滚动事件监听，`Intersection Observer API`更加高效，因为它是异步的，并且由浏览器优化处理。

基本用法：

1.  创建`Intersection Observer`

    首先，需要创建一个`Intersection Observer`实例，并传入一个回调函数和可选的配置对象。

    ```js
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Element is in view:", entry.target);
            // 可以在这里执行懒加载等操作
            observer.unobserve(entry.target); // 停止观察该元素
          }
        });
      },
      {
        root: null, // 默认为视口
        rootMargin: "0px", // 根元素的外边距
        threshold: 0.1, // 触发回调的阈值（0.1 表示元素 10% 可见时触发）
      }
    );
    ```

2.  观察目标元素

    使用`observe`方法开始观察目标元素。

    ```js
    const target = document.querySelector(".target-element");
    observer.observe(target);
    ```

- 代码示例

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0" />
      <title>Intersection Observer API Example</title>
      <style>
        .image-container {
          height: 1000px;
        }
        .lazy {
          opacity: 0;
          transition: opacity 0.3s;
        }
        .lazy.loaded {
          opacity: 1;
        }
      </style>
    </head>
    <body>
      <div class="image-container">
        <img
          data-src="image1.jpg"
          alt="Lazy loaded image"
          class="lazy" />
      </div>
      <div class="image-container">
        <img
          data-src="image2.jpg"
          alt="Lazy loaded image"
          class="lazy" />
      </div>

      <script>
        // 确保脚本在 DOM 完全加载后执行。
        document.addEventListener("DOMContentLoaded", function () {
          const lazyImages = document.querySelectorAll("img.lazy");
          //检查浏览器是否支持 Intersection Observer API。
          if ("IntersectionObserver" in window) {
            //如果支持，创建一个 Intersection Observer 实例，并在图像进入视口时加载图像。
            const lazyImageObserver = new IntersectionObserver((entries, observer) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  const lazyImage = entry.target;
                  lazyImage.src = lazyImage.dataset.src;
                  lazyImage.classList.remove("lazy");
                  lazyImage.classList.add("loaded");
                  lazyImageObserver.unobserve(lazyImage);
                }
              });
            });

            lazyImages.forEach((lazyImage) => {
              lazyImageObserver.observe(lazyImage);
            });
          } else {
            // 如果不支持，使用滚动事件和节流函数实现懒加载。
            //定义节流超时变量
            let lazyLoadThrottleTimeout;
            //定义懒加载函数
            function lazyLoad() {
              if (lazyLoadThrottleTimeout) {
                clearTimeout(lazyLoadThrottleTimeout);
              }
              //设置一个新的超时，在 20 毫秒后执行懒加载逻辑
              lazyLoadThrottleTimeout = setTimeout(() => {
                // 获取当前页面的滚动位置 scrollTop
                const scrollTop = window.pageYOffset;
                //遍历所有懒加载图像 lazyImages，检查每个图像是否进入视口
                //（即图像的顶部位置小于视口高度加上滚动位置）
                lazyImages.forEach((img) => {
                  if (img.offsetTop < window.innerHeight + scrollTop) {
                    //如果图像进入视口，则设置图像的 src 属性为 data-src，并更新图像的类名以表示图像已加载
                    img.src = img.dataset.src;
                    img.classList.remove("lazy");
                    img.classList.add("loaded");
                  }
                });
                //如果所有懒加载图像都已加载完毕，则移除事件监听器
                if (lazyImages.length == 0) {
                  document.removeEventListener("scroll", lazyLoad);
                  window.removeEventListener("resize", lazyLoad);
                  window.removeEventListener("orientationChange", lazyLoad);
                }
              }, 20);
            }
            //当用户滚动页面时触发 lazyLoad 函数
            document.addEventListener("scroll", lazyLoad);
            //当窗口大小改变时触发 lazyLoad 函数
            window.addEventListener("resize", lazyLoad);
            //当设备方向改变时触发 lazyLoad 函数
            window.addEventListener("orientationChange", lazyLoad);
          }
        });
      </script>
    </body>
  </html>
  ```

## 组件懒加载

在`Vue.js`中，可以使用动态导入和`Webpack`的魔法注释来实现组件懒加载。

- 示例代码：

```Vue
<template>
  <div>
    <button @click="loadComponent">Load Component</button>
    <component :is="lazyComponent"></component>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lazyComponent: null,
    };
  },
  methods: {
    loadComponent() {
      import(/* webpackChunkName: "lazy-component" */ "./LazyComponent.vue")
        .then((module) => {
          this.lazyComponent = module.default;
        })
        .catch((error) => {
          console.error("Failed to load component:", error);
        });
    },
  },
};
</script>
```

## 脚本懒加载

可以使用动态导入`（import()）`来懒加载`JavaScript`模块。

```js
<button id="loadScript">Load Script</button>

<script>
document.getElementById('loadScript').addEventListener('click', () => {
  import('./module.js')
    .then((module) => {
      module.default();
    })
    .catch((error) => {
      console.error('Failed to load module:', error);
    });
});
</script>
```
