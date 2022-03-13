import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("Biography", defineAsyncComponent(() => import("C:/Repositories/Web/docs/.vuepress/components/Biography.vue"))),
  app.component("Paper", defineAsyncComponent(() => import("C:/Repositories/Web/docs/.vuepress/components/Paper.vue")))
}
