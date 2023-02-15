<template>
  <n-layout embedded content-style="padding: 12px;">
    <n-card>
      <n-space justify="space-between">
        <n-h2>
      Title
    </n-h2>
    <n-button strong secondary round>
      Paper
    </n-button>
  </n-space>

<iframe width="100%" height="450px" src="https://www.youtube.com/embed/Nc_YeJMSCDE?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      All you need to do to look to those clouds,<br>
      and every day be in a good mood.

    </n-card>
  </n-layout>
</template>





<script>
import {
  NTag,
  NButton,
  NSpace,
  NLayout,
  NLayoutContent,
  NLayoutSider,
  NH2,
  NImage,
  NTabs,
  NTabPane,
  NScrollbar,
  NCard,
  NIcon,
  NThing,
} from "naive-ui";

export default {
  props: [
    "title",
  ],
  components: {
    NTag,
    NButton,
    NSpace,
    NLayout,
    NLayoutContent,
    NLayoutSider,
    NH2,
    NImage,
    NTabs,
    NTabPane,
    NScrollbar,
    NCard,
    NIcon,
    NThing,
  },
  data() {
    return {
      isMobile: window.innerWidth < 600,
    };
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  },
};
</script>

<style>
.center {
  margin-left: auto;
  margin-right: auto;
}
</style>