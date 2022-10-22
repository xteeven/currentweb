<template>
  <n-space vertical size="large">
    <n-layout has-sider v-if="!isMobile">
      <n-layout-sider
      default-collapsed
        collapse-mode="width"
        :collapsed-width="200"
        :width="300"
        show-trigger="round"
        content-style="padding: 24px;"
        bordered
      >
        <n-image object-fit="scale-down" width="240" v-bind:src="picture" />
      </n-layout-sider>

      <n-layout-content content-style="padding: 24px;">
        <h4>{{ title }}</h4>
        <p>{{ authors }} </p>
        <p>{{ venue }} <strong> {{ year }}</strong></p> 
        <n-tabs :bar-width="28" type="line">
          <n-tab-pane name="Download" tab="Download Links">


            <n-button
              tag="a"
               strong secondary round type="primary"
              v-bind:href="pdf"
              target="_blank"
              >PDF</n-button>

            <n-button v-if="alias === 'None'"
              tag="a"
              disabled strong secondary round
              target="_blank"
              >Publisher</n-button>

              <n-button v-else
              tag="a"
               strong secondary round
              v-bind:href="link"
              target="_blank"
              >{{ alias }}</n-button>


          </n-tab-pane>
          <n-tab-pane name="Abstract" tab="Abstract">
            <n-scrollbar style="max-height: 120px" >
            {{ abstract }}
             </n-scrollbar>
          </n-tab-pane>
        </n-tabs>
      </n-layout-content>
    </n-layout>

    
    <n-layout h v-if="isMobile">
      <n-layout-sider class="center"
        default-collapsed
        collapse-mode="width"
        :collapsed-width="240"
        :width="300"
 
        content-style="padding: 24px;"

      >
        <n-image class="center" object-fit="scale-down" width="240" v-bind:src="picture" />
      </n-layout-sider>

      <n-layout-content content-style="padding: 24px;">
        <h4>{{ title }}</h4>
        <p>{{ authors }} {{ venue }} {{ year }}</p>
        <n-tabs :bar-width="28" type="line">
          <n-tab-pane name="Download" tab="Download Links">
           
            <n-button
              tag="a"
               strong secondary round type="primary"
              v-bind:href="pdf"
              target="_blank"
              >PDF</n-button>

            <n-button v-if="alias === 'None'"
              tag="a"
              disabled strong secondary round
              target="_blank"
              >Publisher</n-button>

              <n-button v-else
              tag="a"
               strong secondary round
              v-bind:href="link"
              target="_blank"
              >{{ alias }}</n-button>
          </n-tab-pane>
          <n-tab-pane name="Abstracta" tab="Abstract">
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
  NScrollbar,
} from "naive-ui";

export default {
  props: [
    "title",
    "authors",
    "year",
    "venue",
    "link",
    "alias",
    "abstract",
    "bibtex",
    "picture",
    "pdf",
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
    NScrollbar,
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