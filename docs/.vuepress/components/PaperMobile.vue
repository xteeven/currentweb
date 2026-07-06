<!-- docs/.vuepress/components/DetailsCard.vue -->
<template>
  <n-config-provider :theme="isDark ? darkTheme : lightTheme">
    <n-global-style />

    <n-space vertical size="large">
      <!-- desktop/tablet -->
      <n-layout has-sider v-if="!isMobile">
        <n-layout-sider
          default-collapsed
          collapse-mode="width"
          :collapsed-width="200"
          :width="300"
          show-trigger="arrow-circle"
          content-style="padding: 24px;"
          bordered
        >
          <n-image
            object-fit="scale-down"
            width="240"
            :src="picture"
            lazy
            :img-props="{ decoding: 'async', loading: 'lazy' }"
          />
        </n-layout-sider>

        <n-layout-content content-style="padding: 24px;">
          <h4>{{ title }}</h4>
          <p>{{ authors }}</p>
          <p>{{ venue }} <strong>{{ year }}</strong></p>

          <n-tabs :bar-width="28" type="line">
            <n-tab-pane name="Download" tab="Download Links">
              <n-button
                v-if="pdf"
                tag="a"
                strong
                secondary
                round
                type="primary"
                :href="pdf"
                target="_blank"
              >
                PDF
              </n-button>

              <n-button
                v-if="alias !== 'None' && link"
                tag="a"
                strong
                secondary
                round
                :href="link"
                target="_blank"
              >
                {{ alias || 'Publisher' }}
              </n-button>

              <n-button
                v-else
                disabled
                strong
                secondary
                round
              >
                Publisher
              </n-button>

              <n-button
                v-if="bibtex"
                strong
                secondary
                round
                @click="copyBibtex"
              >
                {{ copied ? 'Copied!' : 'BibTeX' }}
              </n-button>
            </n-tab-pane>

            <n-tab-pane name="Abstract" tab="Abstract">
              <n-scrollbar style="max-height: 120px">
                {{ abstract || 'Abstract not available.' }}
              </n-scrollbar>
            </n-tab-pane>
          </n-tabs>
        </n-layout-content>
      </n-layout>

      <!-- mobile -->
      <n-layout v-else>
        <n-layout-sider
          class="center"
          default-collapsed
          collapse-mode="width"
          :collapsed-width="240"
          :width="300"
          content-style="padding: 24px;"
        >
          <n-image
            class="center"
            object-fit="scale-down"
            width="240"
            :src="picture"
            lazy
            :img-props="{ decoding: 'async', loading: 'lazy' }"
          />
        </n-layout-sider>

        <n-layout-content content-style="padding: 24px;">
          <h4>{{ title }}</h4>
          <p>{{ authors }} {{ venue }} {{ year }}</p>

          <n-tabs :bar-width="28" type="line">
            <n-tab-pane name="Download" tab="Download Links">
              <n-button
                v-if="pdf"
                tag="a"
                strong
                secondary
                round
                type="primary"
                :href="pdf"
                target="_blank"
              >
                PDF
              </n-button>

              <n-button
                v-if="alias !== 'None' && link"
                tag="a"
                strong
                secondary
                round
                :href="link"
                target="_blank"
              >
                {{ alias || 'Publisher' }}
              </n-button>

              <n-button
                v-else
                disabled
                strong
                secondary
                round
              >
                Publisher
              </n-button>

              <n-button
                v-if="bibtex"
                strong
                secondary
                round
                @click="copyBibtex"
              >
                {{ copied ? 'Copied!' : 'BibTeX' }}
              </n-button>
            </n-tab-pane>

            <n-tab-pane name="Abstract" tab="Abstract">
              {{ abstract || 'Abstract not available.' }}
            </n-tab-pane>
          </n-tabs>
        </n-layout-content>
      </n-layout>
    </n-space>
  </n-config-provider>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useDarkMode } from '@vuepress/helper/client'
import {
  NConfigProvider,
  NGlobalStyle,
  lightTheme,
  darkTheme,
  NButton,
  NSpace,
  NLayout,
  NLayoutContent,
  NLayoutSider,
  NImage,
  NTabs,
  NTabPane,
  NScrollbar,
} from 'naive-ui'

const props = defineProps<{
  title: string
  authors: string
  year: string | number
  venue: string
  link: string
  alias: string
  abstract: string
  picture: string
  pdf: string
  bibtex: string
}>()

const isDark = useDarkMode()

const isMobile = ref(false)
function onResize() {
  isMobile.value = typeof window !== 'undefined' && window.innerWidth < 600
}
onMounted(() => {
  onResize()
  window.addEventListener('resize', onResize)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
})

const copied = ref(false)
function copyBibtex() {
  if (!props.bibtex) return
  navigator.clipboard?.writeText(props.bibtex).then(() => {
    copied.value = true
    setTimeout(() => (copied.value = false), 1500)
  })
}
</script>

<style scoped>
.center {
  margin-left: auto;
  margin-right: auto;
}
</style>
