import type { hopeTheme } from "vuepress-theme-hope";
import type { ThemeOptions } from "vuepress-theme-hope";
// simple array, no defineNavbarConfig()

export const navbarConfig = [
  { text: "Home", icon: "home", link: "/" },
  {
    text: "Publications",
    icon: "book-open", // You can choose an appropriate icon
    link: "/publications/", // Make sure this is the correct path
  },
  {
    text: "Projects",
    icon: "flask", // You can choose an appropriate icon
    link: "/theses/", // You used this link in your features, assuming it's correct
  },
  {
    text: "Mentoring",
    icon: "graduation-cap", // You can choose an appropriate icon
    link: "/teaching/", // You used this link in your features, assuming it's correct
  },
  {
    text: "Contact",
    icon: "at", // You can choose an appropriate icon
    link: "/contact/", // Make sure this is the correct path
  },
];


const themeConfig: ThemeOptions = {
  hostname: "https://posthci.com",  // required
  //author: { name: "Steeven Villa", url: "https://github.com/xteeven" },
  //repo: "xteeven/currentweb",
  

  // ← use the plain array here
  navbar: navbarConfig,
  sidebar: false,


  plugins: {
    
    icon: {
      // point at your Alibaba iconfont stylesheet
      assets: "fontawesome",
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
