export const data = {
  "key": "v-13c33eef",
  "path": "/publications/",
  "title": "Publications",
  "lang": "en-US",
  "frontmatter": {
    "summary": "Publications <Paper v-for=\"paper in posts\" :year=\"paper.id\" :title=\"paper.title\" /> export default { // ... data() { return { posts: [ { id: 1, title: 'My journey with Vue' }, { id",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://posthci.com/publications/"
        }
      ],
      [
        "meta",
        {
          "property": "og:site_name",
          "content": "PostHCI"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "Publications"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "article"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "en-US"
        }
      ],
      [
        "meta",
        {
          "name": "twitter:card",
          "content": "summary_large_image"
        }
      ],
      [
        "meta",
        {
          "name": "twitter:image:alt",
          "content": "PostHCI"
        }
      ],
      [
        "meta",
        {
          "property": "article:author",
          "content": "Steeven Villa"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [],
  "readingTime": {
    "minutes": 0.14,
    "words": 42
  },
  "filePathRelative": "publications/README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
