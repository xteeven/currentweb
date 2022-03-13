import { defineHopeConfig } from "vuepress-theme-hope";
import themeConfig from "./themeConfig";
const { path } = require('@vuepress/utils')

export default defineHopeConfig({

  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ],
  ],
  
  base: "/",

  dest: "./dist",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
  ],

  locales: {
    "/": {
      lang: "en-US",
      title: "PostHCI",
      description: "HCI research",
    },
  },

  themeConfig,
});
