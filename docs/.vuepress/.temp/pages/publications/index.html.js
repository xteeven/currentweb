export const data = {
  "key": "v-13c33eef",
  "path": "/publications/",
  "title": "Publications",
  "lang": "en-US",
  "frontmatter": {
    "summary": "Publications <Paper v-for=\"paper in posts\" :year=\"paper.year\" :title=\"paper.title\" :authors=\"paper.authors\" :venue=\"paper.venue\" :link=\"paper.link\" :abstract=\"paper.abstract\" :pict",
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
    "minutes": 7.79,
    "words": 2336
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
