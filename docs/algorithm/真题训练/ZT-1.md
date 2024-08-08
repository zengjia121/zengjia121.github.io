---
title: 23年小米笔试真题
tags:
  - leetcode
  - 日常刷题
categories:
  - LeetCode
date: 2024-8-6 11:04:11
---

<!-- @format -->

# 23 年小米笔试真题

- [题目链接](https://kamacoder.com/contest.php?cid=1054)

## 小米手机通信校准

小米手机生产过程中会经过严苛的测试环节，其中包括手机通讯功能中的射频校准。射频校准会打点数据上报到云端。

其中包含两组数据:第一组数据中会包含此次校准的频道号(freq)信息；第二组会上传一批数据，包含一组频道号(freg)和其对应的损失值(loss)，其中这一组频道号(freg)不会重复，且是有序的。

现在需要根据第一组数据中的频道号(freg)，找到离第二组中频道号(freq)最近的那个 freq 对应的 loss 值，如果两边一样近，则取两边 loss 的平均。 注：输入为 int，输出为 double 类型四舍五入保留 1 位小数

### 解题思路

遍历数组，记录最小差值

### 代码实现

```js
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let rline = 0;
let freq = 0;
rl.on("line", function (line) {
  if (rline === 0) {
    freq = parseInt(line);
  }
  if (rline === 1) {
    let loss = 0;
    let res = [];
    let min = Infinity;
    let map = new Map();
    let arr = line.split(" ");
    arr.forEach((item) => {
      let [f, l] = item.split(":");
      f = parseInt(f);
      l = parseInt(l);
      let cur = Math.abs(freq - f);
      if (cur < min) {
        min = cur;
        res = [f];
      } else if (cur === min) {
        res.push(f);
      }
      map.set(f, l);
    });
    let sum = 0;
    res.forEach((item) => {
      sum += map.get(item);
    });
    let average = sum / res.length; // 计算平均值
    average = average.toFixed(1);
    console.log(average);
  }
  rline++;
});
```

## 手机流畅运行的秘密

- [题目链接](https://kamacoder.com/problempage.php?pid=1229)

8 月份发布会一结束，米小兔就在公司领到了一台最新发布的 Xiaomi MIX Fold 3 手机，这是一款小米旗舰折叠屏手机，并搭载了全新升级架构的 MIU114 系统。其先进的应用引擎不仅让系统更流畅，应用体验也大幅提升。 在一个优化项中，为了尽可能提升用户白天使用手机的体验和续航，某些已经在系统中注册过的任务会被设置为空闲任务，仅在手机空闲时运行 (比如数据备份或 AI 相册整理)。

现在系统中注册了若干组空闲任务，每个任务有各自的耗电量以及允许任务运行的最低初始电量，我们需要计算手机能够串行完成全部任务的最低初始电量。

注意点 1: 所有电量以 mAh(毫安时)计，Xiaomi MIX Fold 3 的大电池容量是 4800mAh。

注意点 2: 本题目假设手机在运行空闲任务期间，不处于充电状态，也没有额外耗电行为。

注意点 3: 智能应用引擎会以最合适的顺序串行运行任务。

### 解题思路

电量初始值和衰耗的差值意思是电量剩余值，贪心就是从电量剩余值最小（即不能被别的任务运行提供电量帮助）开始，依次攀爬式上升（即当前最低电量+电量剩余值比当前大的任务的衰耗值与当前电量初始值取最大，这样就能保证在加一个任务的剩余电量被当前任务所消耗，）

### 代码实现

```js
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  let arr = line.split(",");
  let rw = new Map();
  let light = new Array(arr.length).fill(0).map(() => new Array(2).fill(0));
  for (let i = 0; i < arr.length; i++) {
    let [r, w] = arr[i].split(":");
    light[i][0] = parseInt(r);
    light[i][1] = parseInt(w);
  }
  light.sort((a, b) => a[1] - a[0] - (b[1] - b[0]));
  let res = 0;
  for (let i = 0; i < light.length; i++) {
    res = Math.max(res + light[i][0], light[i][1]);
  }
  console.log(res <= 4800 ? res : -1);
});
```

<!-- @format -->
