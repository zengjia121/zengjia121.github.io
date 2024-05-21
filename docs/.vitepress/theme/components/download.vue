<template>
  <button @click="downloadFile">下载PPT</button>
</template>

<script setup lang='ts'>
import { ref } from "vue"

const downloadFile = () => {
  // 使用 window.open() 下载文件
  // window.open('http://example.com/file.pdf')

  // 或者创建一个隐藏的 a 标签来下载文件
  let link = document.createElement("a")
  link.href = "/ppt/数据结构.pptx"
  link.download = "数据结构.pptx"
  // link.href = "/ppt/数据结构.ppt"
  // link.download = "数据结构.ppt"
  link.style.display = "none"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>

<style lang='scss' scoped>
</style>