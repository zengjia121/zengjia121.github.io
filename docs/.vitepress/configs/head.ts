/** @format */

import type { HeadConfig } from "vitepress";

export const head: HeadConfig[] = [
  ["meta", { name: "theme-color", content: "#3eaf7c" }],
  ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
  ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
  ["link", { rel: "apple-touch-icon", href: "/favicon.ico" }],
  ["link", { rel: "mask-icon", href: "/favicon.ico", color: "#3eaf7c" }],
  ["meta", { name: "msapplication-TileImage", content: "/favicon.ico" }],
  ["meta", { name: "msapplication-TileColor", content: "#000000" }],
  ["script", { src: "https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js", type: "module" }],
  // 添加 APlayer 的样式表
  ["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css" }],
  // 添加 APlayer 的脚本
  ["script", { src: "https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js" }],
  // 添加 Tianli GPT 的本地样式表
  ["link", { rel: "stylesheet", href: "/tianli_gpt/tianli_gpt.min.css" }],
  // 添加 Tianli GPT 的脚本和配置
  [
    "script",
    {},
    `
    let tianliGPT_postSelector = '#VPContent > div > div > div.content > div > main > div > div';
    let tianliGPT_key = 'dlxecybj9Tx';
  `,
  ],
  ["script", { src: "/tianli_gpt/tianli_gpt.min.js" }],
];
