import { defineThemeConfig } from "vuepress-theme-hope";
import navbar from "./navbar";
//import sidebar from "./sidebar";

export default defineThemeConfig({
  hostname: "https://posthci.com",

  author: {
    name: "Steeven Villa",
    url: "https://posthci.com",
  },

  darkmode: 'disable',

  colorModeSwitch: false,
  
  iconPrefix: "iconfont icon-",

  logo: "/images/PostHCI.svg",

  //repo: "https://github.com/xteeven",

  //docsDir: "demo/src",

  // navbar
  navbar: navbar,

  // sidebar
  //sidebar: sidebar,
  sidebar: false,
  footer: "PostHCI @ 2025",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    description: "HCI researcher",
    intro: "/bio",
    medias: {
      Discord: "https://discordapp.com/users/405513843708788737",
      GitHub: "https://github.com/xteeven",
      Instagram: "https://www.instagram.com/xteevenv/",
      Linkedin: "https://www.linkedin.com/in/steevenv/",
      Twitter: "https://twitter.com/steevenvs",
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
