import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("Icons", defineAsyncComponent(() => import("C:/Repositories/Web/docs/.vuepress/components/Icons.vue"))),
  app.component("Paper", defineAsyncComponent(() => import("C:/Repositories/Web/docs/.vuepress/components/Paper.vue")))
}
