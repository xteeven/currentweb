# Publications
  
<Paper 
v-for="paper in posts"
:year="paper.id"
:title="paper.title"
/>
 




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