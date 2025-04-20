<!-- docs/.vuepress/components/DetailPane.vue -->
<template>
  <n-config-provider :theme="isDark ? darkTheme : lightTheme">
    <n-global-style />

    <n-space vertical size="large">
      <!-- desktop/tablet -->
      <n-layout has-sider v-if="!isMobile">
        <n-layout-sider
          default-collapsed = "false"
          collapse-mode="width"
          :collapsed-width="240"
          :width="340"
          show-trigger="round"
          content-style="padding: 24px;"
        >
         <n-image
           class="detail-image"
           object-fit="scale-down"
           :src="picture"
        />
        </n-layout-sider>
        <n-layout-content content-style="padding: 24px;">
          <h5>{{ title }}</h5>
          <n-divider title-placement="left"> Abstract </n-divider>
          <div class="abstract">{{ abstract }}</div>
          <n-divider title-placement="right"> Skills To Develop </n-divider>
          <slot />
        </n-layout-content>
      </n-layout>

      <!-- mobile -->
      <n-layout v-else>
        <n-layout-sider
          default-expanded
          collapse-mode="width"
          :collapsed-width="240"
          :width="300"
          content-style="padding: 24px;"
        >
         <n-image
           class="detail-image"
           object-fit="scale-down"
          :src="picture"
         />
        </n-layout-sider>
        <n-layout-content content-style="padding: 24px;">
          <h5>{{ title }}</h5>
          <n-divider title-placement="left"> Abstract </n-divider>
          <div class="abstract">{{ abstract }}</div>
          <n-divider title-placement="right"> Skills To Develop </n-divider>
          <slot />
        </n-layout-content>
      </n-layout>
    </n-space>
  </n-config-provider>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useDarkMode }                 from '@vuepress/helper/client'
import {
  NConfigProvider,
  NGlobalStyle,
  lightTheme,
  darkTheme,
  NSpace,
  NLayout,
  NLayoutContent,
  NLayoutSider,
  NDivider,
  NImage,
} from 'naive-ui'

const props = defineProps<{
  title: string
  abstract: string
  picture: string
}>()

// Dark‑mode reactive flag
const isDark = useDarkMode()

// track mobile breakpoint
const isMobile = ref(window.innerWidth < 600)
function onResize() {
  isMobile.value = window.innerWidth < 600
}
onMounted(() => window.addEventListener('resize', onResize))
onBeforeUnmount(() => window.removeEventListener('resize', onResize))
</script>

<style scoped>
.abstract {
  margin-bottom: 16px;
}
</style>
