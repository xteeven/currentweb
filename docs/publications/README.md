---
article: false
pageClass: custom-page-class
description: Selected publications by Steeven Villa on Human-AI interaction, haptics, virtual reality, neurophysiology, robotics, and human augmentation.
next: '/teaching/'
prev:
  text: Steeven Villa
  link: '/'
  icon: home
---

# Publications

<ClientOnly>
  <PublicationList :papers="publications" />
</ClientOnly>

## Patents

<ClientOnly>
  <PaperMobile
    title='Intervention drive system comprising an umbilical'
    year="2021"
    venue="US Patent"
    link="https://patentimages.storage.googleapis.com/eb/9d/5a/5f26a1222bed8b/US20210396342A1.pdf"
    alias="patentimages"
    abstract="The present invention relates to an intervention drive pig comprising an umbilical. In this scenario, the present invention provides an intervention drive pig comprising an umbilical, wherein the umbilical (6) is manufactured from a low-density material, wherein the umbilical (6) comprises an external covering of material having a low coefficient of friction."
    picture="/images/papers/Patent.jpg"
    pdf="https://patentimages.storage.googleapis.com/eb/9d/5a/5f26a1222bed8b/US20210396342A1.pdf"
  />
</ClientOnly>

<script setup>
import { ref, onMounted } from 'vue'
import PublicationList from '../.vuepress/components/PublicationList.vue'

const publications = ref([])

onMounted(async () => {
  const res = await fetch('/publications.json')
  if (res.ok) {
    publications.value = await res.json()
  }
})
</script>
