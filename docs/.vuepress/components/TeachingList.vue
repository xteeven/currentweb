<!-- docs/.vuepress/components/CourseTimeline.vue -->
<template>
  <n-config-provider :theme="isDark ? darkTheme : lightTheme">
    <n-global-style />

    <n-timeline size="large">
      <n-timeline-item
        v-for="group in groups"
        :key="group.year"
        :title="group.year"
      >
        <n-space vertical :size="4">
          <RevealWrapper
            v-for="lec in group.items"
            :key="lec.code + lec.title"
            :delay="lec.revealIndex < 6 ? lec.revealIndex * 80 : 0"
          >
            <n-card
              class="course-card"
              size="small"
              :bordered="false"
              hoverable
            >
              <div class="row">
                <div class="badges">
                  <n-tag type="success" size="small" round>{{ lec.code }}</n-tag>
                </div>

                <div class="title">{{ lec.title }}</div>
              </div>
            </n-card>
          </RevealWrapper>
        </n-space>
      </n-timeline-item>
    </n-timeline>
  </n-config-provider>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useDarkMode } from "@vuepress/helper/client";
import {
  NConfigProvider,
  NGlobalStyle,
  lightTheme,
  darkTheme,
  NCard,
  NTag,
  NSpace,
  NTimeline,
  NTimelineItem,
} from "naive-ui";
import RevealWrapper from "./RevealWrapper.vue";

/* props */
const { entries } = defineProps<{
  entries: Array<{ year: string; code: string; term: string; title: string }>;
}>();

/* group by academic year */
const groups = computed(() => {
  const map = new Map<string, typeof entries>();
  let revealIndex = 0;
  [...entries]
    .sort((a, b) => b.year.localeCompare(a.year)) // newest first
    .forEach((item) => {
      if (!map.has(item.year)) map.set(item.year, []);
      map.get(item.year)!.push({ ...item, revealIndex });
      revealIndex += 1;
    });
  return [...map].map(([year, items]) => ({ year, items }));
});

// Dark-mode reactive flag
const isDark = useDarkMode();
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
  width: auto;
  min-width: 48px;
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
