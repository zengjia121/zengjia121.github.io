<template>
  <div>
    <!-- 网易云音乐嵌入代码 -->
    <iframe
      frameborder="no"
      border="0"
      marginwidth="0"
      marginheight="0"
      width="220"
      height="86"
      :src="`//music.163.com/outchain/player?type=2&id=${randomMusicId}&auto=1&height=66`"
    ></iframe>
    <!-- 其他内容 -->
  </div>
</template>
<script setup lang='ts'>
import { ref, reactive, computed } from "vue"
const musicList = [2142857204, 2142858141, 2147608127, 2152374307, 2051267438]
const randomMusicId = computed(() => {
  const index = Math.floor(Math.random() * musicList.length)
  return musicList[index]
})
</script>


<style lang='scss' scoped>
</style>
<!-- https://music.163.com/song?id=2142857204&userid=117253482
https://music.163.com/song?id=2142858141&userid=117253482
https://music.163.com/song?id=2147608127&userid=117253482
https://music.163.com/song?id=2152374307&userid=117253482
https://music.163.com/song?id=2051267438&userid=117253482 -->