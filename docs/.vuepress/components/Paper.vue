<template>
  <n-space vertical size="large">
    <n-layout has-sider>
      <n-layout-sider
        collapse-mode="width"
        :collapsed-width="120"
        :width="240"
        show-trigger="bar"
        content-style="padding: 24px;"
        bordered
      >
        <n-image object-fit='scale-down' width="240" v-bind:src="picture" />
      </n-layout-sider>
      <n-layout-content content-style="padding: 24px;">
        <h5>{{ title }}</h5>
        <p>{{ authors }} {{ venue }} {{ year }}</p>
        <n-tabs :bar-width="28" type="line">
          <n-tab-pane name="Download" tab="Download Links">
            <n-button
              tag="a"
              dashed
              type="primary"
              v-bind:href= "link"
              target="_blank"
              >{{ link }}</n-button
            >
          </n-tab-pane>
          <n-tab-pane name="Abstract" tab="Abstract">
            {{ abstract }}
          </n-tab-pane>
        </n-tabs>
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
  NImage,
  NTabs,
  NTabPane,
} from "naive-ui";

export default {
  props: [
    "title",
    "authors",
    "year",
    "venue",
    "link",
    "abstract",
    "bibtex",
    "picture",
  ],
  components: {
    NButton,
    NSpace,
    NLayout,
    NLayoutContent,
    NLayoutSider,
    NH2,
    NImage,
    NTabs,
    NTabPane,
  },
};
</script>

<style>
</style>