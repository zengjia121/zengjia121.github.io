<template>
  <div>
    <div id="vcomments"></div>
  </div>
</template>
<script setup lang='ts'>
import { onMounted } from "vue"
import Valine from "valine"
import { useData } from "vitepress"
import { usePageId } from "../composables"
const { theme } = useData()
const pageId = usePageId()
const { visitor } = theme.value
onMounted(() => {
  new Valine({
    el: "#vcomments",
    appId: "fCdfcJuzbLAvebzaHbh0Atfx-gzGzoHsz",
    appKey: "NIzvVdueG6ekaX3mFpq3Y8r8",
    placeholder: "说点什么吧...",
    avatar: "hide",
    path: visitor.badgeId ? `${visitor.badgeId}.${pageId}` : pageId,
    visitor: true,
    recordIP: true,
  })
})
</script>


<style lang='scss' scoped>
#vcomments {
  margin-top: 20px;
}
</style>