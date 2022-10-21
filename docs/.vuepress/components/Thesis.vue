<template>
  <n-space vertical size="large">
    <n-layout has-sider v-if="!isMobile">
      <n-layout-sider
       default-collapsed
        collapse-mode="width"
        :collapsed-width="120"
        :width="240"
        show-trigger="round"
        content-style="padding: 24px;"
      >
        <n-image object-fit="scale-down" width="240" v-bind:src="picture" />
      </n-layout-sider>
      <n-layout-content content-style="padding: 24px;">
        <h5>{{ title }}</h5>
        <n-divider title-placement="left"> Abstract </n-divider>
        {{ abstract }}
        <n-divider title-placement="right"> Skills To Develop </n-divider>
        <slot />
      </n-layout-content>
    </n-layout>

    <n-layout v-else>
      <n-layout-sider
        default-expanded
        collapse-mode="width"
        :collapsed-width="240"
        :width="300"
        content-style="padding: 24px;"
      >
        <n-image object-fit="scale-down" width="240" v-bind:src="picture" />
      </n-layout-sider>
      <n-layout-content content-style="padding: 24px;">
        <h5>{{ title }}</h5>
        <n-divider title-placement="left"> Abstract </n-divider>
        {{ abstract }}
        <n-divider title-placement="right"> Skills To Develop </n-divider>
        <slot />
      </n-layout-content>
    </n-layout>



  </n-space>
</template>

<script>
import {
  NButton,
  NSpace,
  NLayout,
  NLayoutContent,
  NLayoutSider,
  NH2,
  NDivider,
  NImage,
  NTabs,
  NTabPane,
} from "naive-ui";

export default {
  props: ["title", "abstract", "picture"],
  components: {
    NButton,
    NSpace,
    NLayout,
    NLayoutContent,
    NLayoutSider,
    NH2,
    NDivider,
    NImage,
    NTabs,
    NTabPane,
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
