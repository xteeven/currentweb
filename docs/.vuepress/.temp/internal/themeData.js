export const themeData = {
  "hostname": "https://posthci.com",
  "author": {
    "name": "Steeven Villa",
    "url": "https://posthci.com"
  },
  "iconPrefix": "iconfont icon-",
  "logo": "/logo.svg",
  "repo": "https://github.com/steevenvs",
  "docsDir": "demo/src",
  "navbar": [
    "/",
    {
      "text": "Bio",
      "icon": "profile",
      "link": "/bio/"
    },
    {
      "text": "Publications",
      "icon": "article",
      "link": "/publications/"
    },
    {
      "text": "Teaching",
      "icon": "creative",
      "link": "/teaching/"
    }
  ],
  "sidebar": false,
  "footer": "Steeven @ 2022",
  "displayFooter": true,
  "pageInfo": [
    "Author",
    "Original",
    "Date",
    "Category",
    "Tag",
    "ReadingTime"
  ],
  "blog": {
    "description": "HCI researcher",
    "intro": "/intro.html",
    "medias": {
      "Discord": "https://example.com",
      "Email": "https://example.com",
      "GitHub": "https://example.com",
      "Instagram": "https://example.com",
      "Linkedin": "https://example.com",
      "Twitter": "https://example.com"
    },
    "articleInfo": [
      "Author",
      "Original",
      "Date",
      "Category",
      "Tag",
      "ReadingTime"
    ],
    "articlePerPage": 10,
    "sidebarDisplay": "mobile"
  },
  "encrypt": {
    "config": {
      "/guide/encrypt.html": [
        "$2a$10$kUss0tzbk5GeXSFZNVslWe7LM6Qv44oxFM4r3qD7skl76a/i9U8Vy"
      ]
    },
    "global": false
  },
  "locales": {
    "/": {
      "lang": "en-US",
      "navbarLocales": {
        "langName": "English",
        "selectLangText": "Language",
        "selectLangAriaLabel": "Select language"
      },
      "metaLocales": {
        "prev": "Prev",
        "next": "Next",
        "lastUpdated": "Last update",
        "contributors": "Contributors",
        "editLink": "Edit this page"
      },
      "blogLocales": {
        "article": "Articles",
        "articleList": "Article List",
        "category": "Category",
        "tag": "Tags",
        "timeline": "Timeline",
        "timelineTitle": "Yesterday Once More!",
        "all": "All",
        "intro": "Personal Intro",
        "star": "Star",
        "slides": "Slides",
        "encrypt": "Encrypted"
      },
      "outlookLocales": {
        "themeColor": "Theme Color",
        "darkmode": "Theme Mode",
        "fullscreen": "Full Screen"
      },
      "encryptLocales": {
        "title": "Please enter password",
        "errorHint": "Please enter the correct password!"
      },
      "routeLocales": {
        "404msg": [
          "There’s nothing here.",
          "How did we get here?",
          "That’s a Four-Oh-Four.",
          "Looks like we've got some broken links."
        ],
        "back": "Go back",
        "home": "Take me home"
      }
    }
  },
  "repoDisplay": true,
  "navbarIcon": true,
  "navbarAutoHide": "mobile",
  "hideSiteNameonMobile": true,
  "sidebarIcon": true,
  "headingDepth": 2,
  "pure": false,
  "darkmode": "auto-switch",
  "themeColor": {
    "red": "#e74c3c",
    "blue": "#3498db",
    "green": "#3eaf7c",
    "orange": "#f39c12",
    "purple": "#8e44ad"
  },
  "fullScreen": true
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
