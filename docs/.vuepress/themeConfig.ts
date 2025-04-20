import type { hopeTheme } from "vuepress-theme-hope";
import type { HopeThemeConfig } from "vuepress-theme-hope";
// simple array, no defineNavbarConfig()

export const navbarConfig = [
  { text: "Home", icon: "article", link: "/" }, 


];


const themeConfig: HopeThemeConfig = {
  hostname: "https://posthci.com",  // required
  author: { name: "Steeven Villa", url: "https://github.com/xteeven" },
  repo: "xteeven/currentweb",

  // ← use the plain array here
  navbar: navbarConfig,
  sidebar: false,

  plugins: {
    icon: {
      // point at your Alibaba iconfont stylesheet
      assets: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css", 
      // default prefix for iconfont is "iconfont icon-"
      // but your CSS might use a different prefix, e.g. "icon-" or "icon_"
      // adjust this if your classes are .icon_article instead of .icon-article:
      //prefix: "icon-", 
    },
    // … any other theme plugins …
  },

  // …any other theme options
};

export default themeConfig;
