<template>
  <div>
    <div id="vcomments"></div>
  </div>
</template>
<script setup lang='ts'>
import { onMounted } from "vue"
import Valine from "valine"
import path from "path"
onMounted(() => {
  new Valine({
    el: "#vcomments",
    appId: "fCdfcJuzbLAvebzaHbh0Atfx-gzGzoHsz",
    appKey: "NIzvVdueG6ekaX3mFpq3Y8r8",
    placeholder: "说点什么吧...",
    avatar: "hide",
    // path: window.location.pathname,
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