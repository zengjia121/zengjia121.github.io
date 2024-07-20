<template>
  <!-- <div class="cloudmiusc" id="aplayer"></div> -->
  <meting-js
    class="cloudmiusc"
    server="netease"
    :type="props.type"
    autoplay="true"
    :id="props.id"
    fixed="true"
    volume="0.4"
    lrc-type="0"
  ></meting-js>
</template>
<script setup lang='ts'>
import { onBeforeMount, onMounted, defineProps } from "vue"
const props = defineProps(["type", "id"])
// import APlayer from "aplayer"
// onMounted(() => {
//   const ap = new APlayer({
//     container: document.getElementById("aplayer"),
//     volume: 0.5,
//   })
// })
</script>

<style lang='scss' scoped>
.cloudmiusc {
  margin-top: 5px;
  margin-left: -30px;
}
</style>
<!-- https://music.163.com/song?id=2142857204&userid=117253482
https://music.163.com/song?id=2142858141&userid=117253482
https://music.163.com/song?id=2147608127&userid=117253482
https://music.163.com/song?id=2152374307&userid=117253482
https://music.163.com/song?id=2051267438&userid=117253482 -->