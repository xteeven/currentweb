<template>
<n-space horizontal>
<n-image object-fit='scale-down' width="25" v-bind:src="icon" /> <a v-bind:href= "link" target="_blank">{{name}}</a>
</n-space>
</template>

<script>

import {
  NImage,
  NSpace,
} from "naive-ui";

export default {
  props: [
    "icon",
    "name",
    "link"
  ],
  components: {
    NImage,
    NSpace,
  },
};

</script>
