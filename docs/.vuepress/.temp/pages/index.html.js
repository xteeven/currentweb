export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "PostHCI",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "icon": "home",
    "title": "PostHCI",
    "heroImage": "/logo.svg",
    "heroText": "Steeven Villa",
    "tagline": "HCI Researcher @ LMU Munich",
    "actions": [
      {
        "text": "Bio 👤",
        "link": "/bio/"
      },
      {
        "text": "Updates 📝",
        "link": "/blog/",
        "type": "secondary"
      }
    ],
    "features": [
      {
        "title": "Publications",
        "icon": "article",
        "details": "A compilation of my recent publications in the field of HCI",
        "link": "/publications/"
      },
      {
        "title": "Teaching",
        "icon": "creative",
        "details": "A Summary of my teaching activities, including courses, tutorials, workshops and adviced thesis",
        "link": "/teaching/"
      },
      {
        "title": "Available Theses",
        "icon": "read",
        "details": "A list of currently available Masters and Bachelors theses",
        "link": "/theses/"
      },
      {
        "title": "Contact",
        "icon": "quote",
        "details": "Email, Phone, and social networks to get in touch",
        "link": "/contact/"
      }
    ],
    "copyright": false,
    "footer": "MIT Licensed | Copyright © 2022 Steeven Villa",
    "summary": "",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://posthci.com/"
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
          "content": "PostHCI"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "website"
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
    "minutes": 0,
    "words": 0
  },
  "filePathRelative": "README.md"
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
