<template>
  <div>
    <div id="vcomments"></div>
  </div>
</template>
<script setup lang='ts'>
import { onMounted, ref } from "vue"
import { useData } from "vitepress"
import { usePageId } from "../composables"
const { theme } = useData()
const pageId = usePageId()
const { visitor } = theme.value
onMounted(async () => {
  if (typeof window === "undefined") {
    return
  }
  const Valine = await (await import("valine")).default
  new Valine({
    el: "#vcomments",
    appId: "fCdfcJuzbLAvebzaHbh0Atfx-gzGzoHsz",
    appKey: "NIzvVdueG6ekaX3mFpq3Y8r8",
    placeholder: "说点什么吧...",
    avatar: "hide",
    path: window.location.pathname,
    visitor: true,
    recordIP: true,
    meta: ["nick"],
  })
})
</script>


<style lang='scss' scoped>
#vcomments {
  margin-top: 30px;
  border-radius: 2%;
}
</style>