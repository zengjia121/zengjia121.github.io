/** @format */

import { DefaultTheme } from "vitepress";
import { generateSidebar } from "../Plugin/generateSidebar";
import path from "path";

const frontDir = path.resolve(__dirname, "../../front");
const algorithmDir = path.resolve(__dirname, "../../algorithm");
const projectDir = path.resolve(__dirname, "../../project");
const knowledgeDir = path.resolve(__dirname, "../../knowledge");
const frontOrder = ["ES6", "HTTP", "CSS", "JavaScript", "TypeScript", "Vue", "Git"];
const algorithmOrder = ["算法", "设计模式", "动态规划", "回溯", "Leetcode", "真题训练"];
const projectOrder = ["KG", "WebGis", "Blog", "AI系列", "echarts", "其他"];
const knowledgeOrder = ["操作系统"];
export const sidebar: DefaultTheme.Config["sidebar"] = {
  "/front/": generateSidebar(frontDir, frontOrder),
  "/algorithm/": generateSidebar(algorithmDir, algorithmOrder),
  "/project/": generateSidebar(projectDir, projectOrder),
  "/knowledge/": generateSidebar(knowledgeDir, knowledgeOrder),
};
