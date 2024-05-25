<template>
  <div class="divider"></div>
  <div class="footer-content">
    <!-- 在这里添加你想在每篇文章末尾显示的内容 -->
    <!-- <p>每篇文章末尾显示的内容</p> -->
    <div class="Content">
      <strong class="rainbow">作者：</strong><span>RoastDuck</span>
    </div>

    <div class="Content Cursor" @click.prevent="copyToClipboard">
      <strong class="rainbow">本文网址({{ isCopy }})：</strong
      ><a :href="currentUrl" target="_blank">{{ currentUrl }}</a>
    </div>
    <div class="Content">
      本文采用
      <a
        class="rainbow"
        href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
        target="_blank"
      >
        <strong class="rainbow"> BY-NC-SA 4.0</strong></a
      >
      协议进行授权。转载请注明出处
    </div>
  </div>
</template>

<script>
import { inject, watch, ref } from "vue"
export default {
  name: "FooterContent",
  setup() {
    const currentUrl = inject("currentUrl")
    let isCopy = ref("点击复制")
    async function copyToClipboard(event) {
      await navigator.clipboard.writeText(currentUrl.value)
      isCopy.value = "复制成功"
      setTimeout(() => (isCopy.value = "点击复制"), 2000) // 持续时间 2 秒
    }

    return { currentUrl, isCopy, copyToClipboard }
  },
}
</script>

<style scoped>
@import "../styles/rainbow.scss";
.divider {
  border-bottom: 1px solid var(--vp-c-gutter);
}
.footer-content {
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px 0 5px 20px;
  border-left: 5px double var(--vp-c-brand-1);
  font-size: 14px;
  line-height: 1.8;
  animation: rainbow 246s linear infinite;
}
.footer-content .Content {
  margin-bottom: 10px;
}
.Content .rainbow {
  color: var(--vp-c-brand-1);
}
.Cursor {
  cursor: pointer;
}
</style>