<!-- docs/.vuepress/components/PaperCard.vue -->
<template>
  <n-config-provider :theme="isDark ? darkTheme : lightTheme">
    <n-global-style />
    <n-card
      :segmented="{ content: true }"
      :content-style="{ padding: '24px' }"
    >
      <!-- responsive two‑column layout -->
      <n-grid
        :cols="isMobile ? 1 : 9"
        :x-gap="24"
        item-responsive
        class="paper-card-grid"
      >
        <!-- picture column -->
        <n-gi :span="isMobile ? 1 : 3">
          <n-image
            class="paper-thumb"
            :src="picture"
            object-fit="cover"
            width="240"
            height="160"         
            preview-disabled
          />
        </n-gi>

        <!-- text / actions column -->
        <n-gi :span="isMobile ? 1 : 6">
          <h4 class="paper-title">{{ title }}</h4>
          <p class="paper-meta">{{ authors }}</p>
          <p class="paper-meta">
            {{ venue }}
            <strong>{{ year }}</strong>
          </p>

          <n-tabs size="small" :bar-width="28">
            <n-tab-pane name="download" tab="Download Links">
              <n-space wrap align="center">
                <n-button
                  v-if="pdf"
                  tag="a"
                  type="primary"
                  round
                  secondary
                  :href="pdf"
                  target="_blank"
                >
                  PDF
                </n-button>

                <n-button
                  v-if="alias !== 'None' && link"
                  tag="a"
                  round
                  secondary
                  :href="link"
                  target="_blank"
                >
                  {{ alias || 'Publisher' }}
                </n-button>

                <n-button
                  v-else
                  disabled
                  round
                  secondary
                >
                  Publisher
                </n-button>
              </n-space>
            </n-tab-pane>

            <n-tab-pane name="abstract" tab="Abstract">
              <n-scrollbar style="max-height: 140px">
                {{ abstract }}
              </n-scrollbar>
            </n-tab-pane>
          </n-tabs>
        </n-gi>
      </n-grid>
    </n-card>
  </n-config-provider>
</template>

<script setup>
import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { useDarkMode } from '@vuepress/helper/client'
import {
  NConfigProvider,
  NGlobalStyle,
  lightTheme,
  darkTheme,
  NButton,
  NCard,
  NGrid,
  NGi,
  NImage,
  NScrollbar,
  NSpace,
  NTabPane,
  NTabs
} from 'naive-ui'

const props = defineProps({
  title: String,
  authors: String,
  year: [String, Number],
  venue: String,
  link: String,
  alias: String,
  abstract: String,
  picture: String,
  pdf: String
})

/* reactive breakpoint:  ≤600 px → mobile layout */
const { width } = useWindowSize()
const isMobile = computed(() => width.value < 600)

/* dark‑mode reactive flag */
const isDark = useDarkMode()
</script>

<style scoped>
.paper-card-grid {
  /* optional visual tweak on very wide screens */
  max-width: 100%;
}

.paper-title {
  margin: 0 0 4px 0;
}

.paper-meta {
  margin: 0 0 8px 0;
  line-height: 1.35;
  font-size: 0.95rem;
}

.paper-thumb::v-deep img {
  transition: transform .2s ease;
}

.paper-thumb:hover::v-deep img,
.paper-thumb:focus-visible::v-deep img {
  transform: scale(1.2);
  box-shadow: 0 4px 12px rgba(0, 0, 0, .15);
}
</style>
