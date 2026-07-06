<template>
  <article class="portfolio-card">
    <div class="media">
      <video
        v-if="video"
        :src="video"
        autoplay
        loop
        muted
        playsinline
        preload="metadata"
        :poster="poster"
      ></video>
      <img
        v-else-if="image"
        :src="image"
        :alt="title"
        loading="lazy"
        decoding="async"
      />
      <iframe
        v-else-if="youtube"
        :src="`https://www.youtube.com/embed/${youtube}?controls=0&rel=0`"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        loading="lazy"
      ></iframe>
    </div>
    <div class="body">
      <h3>{{ title }}</h3>
      <p v-if="description">{{ description }}</p>
      <slot />
    </div>
  </article>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    video: { type: String, default: '' },
    image: { type: String, default: '' },
    youtube: { type: String, default: '' },
    poster: { type: String, default: '' }
  }
}
</script>
