<template>
  <div class="cloudmiusc">
    <!-- 网易云音乐嵌入代码 -->
    <iframe
      frameborder="no"
      border="0"
      marginwidth="0"
      marginheight="0"
      width="280"
      height="210"
      src="//music.163.com/outchain/player?type=0&id=9597294859&auto=1&height=430"
    ></iframe>

    <!-- 其他内容 -->
  </div>
</template>
<script setup lang='ts'>
// import { ref, reactive, computed } from "vue"
// const musicList = [2142857204, 2142858141, 2147608127, 2152374307, 2051267438]
// const randomMusicId = computed(() => {
//   const index = Math.floor(Math.random() * musicList.length)
//   return musicList[index]
// })
</script>


<style lang='scss' scoped>
.cloudmiusc {
  margin-top: 5px;
  margin-left: -30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
<!-- https://music.163.com/song?id=2142857204&userid=117253482
https://music.163.com/song?id=2142858141&userid=117253482
https://music.163.com/song?id=2147608127&userid=117253482
https://music.163.com/song?id=2152374307&userid=117253482
https://music.163.com/song?id=2051267438&userid=117253482 -->