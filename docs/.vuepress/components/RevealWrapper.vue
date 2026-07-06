<template>
  <component
    :is="tag"
    ref="root"
    :class="[effect === 'scale' ? 'reveal-scale' : 'reveal']"
    :style="styleVars"
  >
    <slot />
  </component>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  tag: { type: String, default: 'div' },
  effect: { type: String, default: 'up' }, // 'up' | 'scale'
  delay: { type: Number, default: 0 },      // ms
  threshold: { type: Number, default: 0.15 }
})

const root = ref(null)
const isVisible = ref(false)
let observer = null

const styleVars = computed(() => ({
  '--i': `${props.delay / 80}`
}))

onMounted(() => {
  if (!window.IntersectionObserver) {
    isVisible.value = true
    root.value?.classList.add('is-visible')
    return
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Respect the CSS transition-delay via inline --i
          setTimeout(() => {
            entry.target.classList.add('is-visible')
            isVisible.value = true
          }, props.delay)
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: props.threshold, rootMargin: '0px 0px -40px 0px' }
  )

  if (root.value) observer.observe(root.value)
})

onBeforeUnmount(() => {
  if (observer && root.value) observer.unobserve(root.value)
})
</script>
