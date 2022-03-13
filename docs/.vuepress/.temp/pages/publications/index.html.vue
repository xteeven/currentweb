<template><h1 id="publications" tabindex="-1"><a class="header-anchor" href="#publications" aria-hidden="true">#</a> Publications</h1>
<Paper 
v-for="paper in posts"
:year="paper.id"
:title="paper.title"
/>
</template>

<script>
    export default {
  // ...
  data() {
    return {
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ]
    }
  }
}
</script>