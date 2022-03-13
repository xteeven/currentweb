export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-4eaf9f84","v-5a814a99","v-7beb5be1","v-184f4da6","v-0e503981","v-7444f2a0","v-145ac574","v-96536bf0","v-4c863446","v-bf720700","v-0978b044","v-fffb8e28","v-65aff427","v-13c33eef","v-393700ae","v-199562c6"]}},"encrypted":{"/":{"path":"/encrypted/","keys":["v-bf720700"]}},"slide":{"/":{"path":"/slides/","keys":["v-0e503981"]}},"star":{"/":{"path":"/star/","keys":["v-4eaf9f84"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-5a814a99","v-7beb5be1","v-4eaf9f84"]}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  })
}
