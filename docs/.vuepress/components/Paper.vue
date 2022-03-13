<template>

<h2>{{title}}</h2>
<h2>{{authors}}</h2>
<p>SNO: {{year}}</p>

 <n-button>naive-ui</n-button>
</template>

<script>

  import { defineComponent } from 'vue'
  import { NButton } from 'naive-ui'

export default {
  props: ['title', 'authors', 'year', 'venue'],
   components: {
      NButton
    }
}
</script>


<style lang="scss">

</style>
