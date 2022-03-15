import { defineThemeConfig } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default defineThemeConfig({
  hostname: "https://posthci.com",

  author: {
    name: "Steeven Villa",
    url: "https://posthci.com",
  },

  darkmode: 'disable',

  iconPrefix: "iconfont icon-",

  logo: "/images/PostHCI.svg",

  //repo: "https://github.com/xteeven",

  //docsDir: "demo/src",

  // navbar
  navbar: navbar,

  // sidebar
  //sidebar: sidebar,
  sidebar: false,
  footer: "PostHCI @ 2022",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    description: "HCI researcher",
    intro: "/intro.html",
    medias: {
      Discord: "https://example.com",
      Email: "https://example.com",
      GitHub: "https://example.com",
      Instagram: "https://example.com",
      Linkedin: "https://example.com",
      Twitter: "https://example.com",
    },
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },



    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
