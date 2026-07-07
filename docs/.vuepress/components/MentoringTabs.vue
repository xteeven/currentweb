<template>
  <div class="mentoring-tabs">
    <div class="mentoring-tab-list" role="tablist" aria-label="Mentoring sections">
      <button
        v-for="tab in tabs"
        :key="tab.name"
        class="mentoring-tab"
        :class="{ active: activeTab === tab.name }"
        type="button"
        role="tab"
        :aria-selected="activeTab === tab.name"
        @click="activeTab = tab.name"
      >
        {{ tab.label }} <span>{{ tab.count }}</span>
      </button>
    </div>

    <Transition name="mentoring-panel" mode="out-in">
      <div :key="activeTab" class="mentoring-tab-panel" role="tabpanel">
        <TeachingList :entries="activeEntries" />
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import TeachingList from './TeachingList.vue'

const props = defineProps({
  lectures: { type: Array, required: true },
  workshops: { type: Array, required: true },
  theses: { type: Array, required: true }
})

const activeTab = ref('courses')

const tabs = computed(() => [
  { name: 'courses', label: 'Courses', count: props.lectures.length },
  { name: 'workshops', label: 'Workshops', count: props.workshops.length },
  { name: 'advised', label: 'Advised', count: props.theses.length }
])

const activeEntries = computed(() => {
  if (activeTab.value === 'workshops') return props.workshops
  if (activeTab.value === 'advised') return props.theses
  return props.lectures
})
</script>

<style scoped>
.mentoring-tabs {
  margin-top: 1.5rem;
}

.mentoring-tab-list {
  position: sticky;
  top: calc(var(--navbar-height) + 0.75rem);
  z-index: 9;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 6px;
  margin-bottom: 1.25rem;
  padding: 6px;
  border: 1px solid rgba(127, 127, 127, 0.18);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.42);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  backdrop-filter: saturate(180%) blur(18px);
  -webkit-backdrop-filter: saturate(180%) blur(18px);
}

[data-theme="dark"] .mentoring-tab-list {
  border-color: rgba(255, 255, 255, 0.12);
  background: rgba(24, 24, 27, 0.46);
  box-shadow: 0 16px 34px rgba(0, 0, 0, 0.3);
}

.mentoring-tab {
  min-width: 0;
  min-height: 42px;
  padding: 8px 12px;
  border: 1px solid transparent;
  border-radius: 7px;
  background: transparent;
  color: var(--text-color);
  font: inherit;
  font-weight: 600;
  line-height: 1.2;
  cursor: pointer;
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    color 0.2s ease;
}

.mentoring-tab span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.65em;
  margin-left: 0.35rem;
  padding: 0.05rem 0.4rem;
  border-radius: 999px;
  background: rgba(62, 175, 124, 0.14);
  color: var(--theme-color);
  font-size: 0.82em;
}

.mentoring-tab:hover,
.mentoring-tab:focus-visible {
  border-color: rgba(62, 175, 124, 0.32);
  background: rgba(62, 175, 124, 0.08);
  color: var(--theme-color);
  outline: none;
}

.mentoring-tab.active {
  border-color: rgba(62, 175, 124, 0.42);
  background: rgba(255, 255, 255, 0.64);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  color: var(--theme-color);
}

[data-theme="dark"] .mentoring-tab.active {
  background: rgba(62, 175, 124, 0.16);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.28);
}

.mentoring-tab-panel {
  padding-top: 0.25rem;
}

.mentoring-panel-enter-active,
.mentoring-panel-leave-active {
  transition:
    opacity 0.22s ease,
    transform 0.22s ease;
}

.mentoring-panel-enter-from,
.mentoring-panel-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

@media (max-width: 719px) {
  .mentoring-tab-list {
    top: calc(var(--navbar-mobile-height) + 0.5rem);
    grid-template-columns: 1fr;
  }
}
</style>
