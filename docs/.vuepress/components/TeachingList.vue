<template>
    <n-timeline size="large">
      <n-timeline-item
        v-for="group in groups"
        :key="group.year"
        :title="group.year"
      >
        <n-space vertical :size="4">
          <n-card
            v-for="lec in group.items"
            :key="lec.code + lec.title"
            class="course-card"
            size="small"
            :bordered="false"
            hoverable
          >
            <div class="row">
              <div class="badges">
                <n-tag type="success" size="small" round>{{ lec.code }}</n-tag>
                <n-tag
                  type="warning"
                  size="small"
                  round
                  style="margin-left: 6px"
                >
                  {{ lec.term }}
                </n-tag>
              </div>
  
              <div class="title">{{ lec.title }}</div>
            </div>
          </n-card>
        </n-space>
      </n-timeline-item>
    </n-timeline>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import {
    NCard,
    NTag,
    NSpace,
    NTimeline,
    NTimelineItem
  } from 'naive-ui'
  
  /* props */
  const { entries } = defineProps({
    entries: { type: Array, required: true }
  })
  
  /* sort + group by academic year */
  const groups = computed(() => {
    const map = new Map()
    ;[...entries]
      .sort((a, b) => b.year.localeCompare(a.year)) // newest first
      .forEach(item => {
        if (!map.has(item.year)) map.set(item.year, [])
        map.get(item.year).push(item)
      })
    return [...map].map(([year, items]) => ({ year, items }))
  })
  </script>
  
  <style scoped>
  .course-card {
    --n-border-color: var(--n-neutral-color-3);
    padding: 4px 14px;
  }
  
  .row {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .badges {
    flex-shrink: 0;
    width: 100px;
    text-align: center;
  }
  
  .title {
    flex: 1;
    font-size: 1.05rem;
    font-weight: 500;
  }
  
  /* subtle divider between cards */
  .course-card + .course-card {
    margin-top: 4px;
  }
  </style>
  