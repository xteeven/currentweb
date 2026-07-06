<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    class="social-link"
    :aria-label="name"
  >
    <img :src="icon" :alt="name" width="22" height="22" loading="lazy" decoding="async" />
    <span>{{ name }}</span>
  </a>
</template>

<script>
export default {
  props: ['icon', 'name', 'link']
}
</script>
