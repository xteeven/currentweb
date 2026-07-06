<template>
  <n-config-provider :theme="isDark ? darkTheme : lightTheme">
    <n-global-style />

    <div class="pub-toolbar">
      <n-space align="center" wrap>
        <span class="pub-label">Filter by year:</span>
        <n-button
          v-for="y in years"
          :key="y"
          size="small"
          round
          :type="selectedYear === y ? 'primary' : 'default'"
          @click="selectedYear = selectedYear === y ? null : y"
        >
          {{ y }}
        </n-button>
        <n-button size="small" round @click="selectedYear = null">
          Clear
        </n-button>
      </n-space>
    </div>

    <n-space vertical size="large">
      <RevealWrapper
        v-for="(paper, idx) in visiblePapers"
        :key="paper.title"
        :delay="idx < 6 ? idx * 80 : 0"
      >
        <Paper
          :year="paper.year"
          :title="paper.title"
          :authors="paper.authors"
          :venue="paper.venue"
          :link="paper.link"
          :alias="paper.alias"
          :abstract="paper.abstract"
          :picture="paper.picture"
          :pdf="paper.pdf"
          :bibtex="paper.bibtex"
        />
      </RevealWrapper>
    </n-space>

    <p v-if="visiblePapers.length === 0" class="no-results">
      No publications match the selected filter.
    </p>
  </n-config-provider>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDarkMode } from '@vuepress/helper/client'
import {
  NConfigProvider,
  NGlobalStyle,
  lightTheme,
  darkTheme,
  NSpace,
  NButton
} from 'naive-ui'
import Paper from './Paper.vue'
import RevealWrapper from './RevealWrapper.vue'

const props = defineProps({
  papers: { type: Array, required: true }
})

const isDark = useDarkMode()
const selectedYear = ref(null)

const years = computed(() => {
  const set = new Set(props.papers.map((p) => p.year).filter(Boolean))
  return [...set].sort((a, b) => b - a)
})

const visiblePapers = computed(() => {
  let list = [...props.papers]
  if (selectedYear.value) {
    list = list.filter((p) => p.year === selectedYear.value)
  }
  return list
})
</script>

<style scoped>
.pub-toolbar {
  margin: 12px 0 24px;
}

.pub-label {
  font-size: 0.95rem;
  opacity: 0.85;
}

.no-results {
  text-align: center;
  opacity: 0.7;
  margin: 32px 0;
}
</style>
