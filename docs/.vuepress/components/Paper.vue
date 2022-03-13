<template>

<h2>{{title}}</h2>
<h2>{{authors}}</h2>
<p>SNO: {{year}}</p>
</template>

<script>
export default {
  props: ['title', 'authors', 'year', 'venue']
}
</script>


<style lang="scss">

</style>
