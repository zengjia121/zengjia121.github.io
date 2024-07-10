/** @format */

import { DefaultTheme } from "vitepress";
import { generateSidebar } from "../Plugin/generateSidebar";
import path from "path";

const postDir = path.resolve(__dirname, "../../posts");
const algorithmDir = path.resolve(__dirname, "../../algorithm");
const projectDir = path.resolve(__dirname, "../../project");
const preferredOrder = [
  "ES6",
  "HTTP",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Vue",
  "Git",
  "KG",
  "Blog",
  "AI系列",
  "echarts",
  "算法",
  "设计模式",
  "动态规划",
  "Leetcode",
  "其他",
]; // 你的优先顺序

export const sidebar: DefaultTheme.Config["sidebar"] = {
  "/posts/": generateSidebar(postDir, preferredOrder),
  "/algorithm/": generateSidebar(algorithmDir, preferredOrder),
  "/project/": generateSidebar(projectDir, preferredOrder),
};
