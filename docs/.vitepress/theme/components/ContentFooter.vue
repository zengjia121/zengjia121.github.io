<template>
  <div class="divider"></div>
  <div class="footer-content">
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
    <div
      v-if="!DEV && visitor && isDocFooterVisible"
      v-show="hasSidebar"
      class="m-doc-footer"
    >
      <strong class="rainbow">本页面访客：</strong>
      <img
        class="visitor"
        :src="`https://visitor-badge.laobi.icu/badge?page_id=${visitor.badgeId}.${pageId}
          &left_text=Hello%20Hello`"
        onerror="this.style.display='none'"
      />
    </div>
  </div>
</template>

<script  setup lang="ts">
import { inject, computed, Ref, ref } from "vue"
import { useData } from "vitepress"
import { useSidebar } from "vitepress/theme"
import { usePageId } from "../composables"

const DEV = inject<Ref<boolean>>("DEV")
const { theme } = useData()
const { footer, visitor } = theme.value
const { hasSidebar } = useSidebar()
const pageId = usePageId()
console.log("🚀 ~ pageId:", pageId)
const isDocFooterVisible = computed(() => {
  return !DEV || footer.message || footer.copyright || visitor.badgeId
})
const currentUrl = inject("currentUrl")
let isCopy = ref("点击复制")
async function copyToClipboard(event) {
  await navigator.clipboard.writeText(currentUrl.value)
  isCopy.value = "复制成功"
  setTimeout(() => (isCopy.value = "点击复制"), 2000) // 持续时间 2 秒
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
.m-doc-footer {
  display: flex;
  align-items: center;
}
.rainbow {
  color: var(--vp-c-brand-1);
}
.Cursor {
  cursor: pointer;
}
.visitor {
  margin-right: 8px;
}
@media (max-width: 414px) {
  .visitor {
    display: none;
  }
  .m-doc-footer {
    display: none;
  }
}
</style>