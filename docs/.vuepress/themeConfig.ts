import type { HopeThemeConfig } from "vuepress-theme-hope";

// simple array, no defineNavbarConfig()
export const navbarConfig = [
  { text: "Home", icon: "home", link: "/" },
  { text: "About", icon: "info", link: "/about/" },
  {
    text: "Projects",
    icon: "rocket",
    children: [
      { text: "Current", link: "/projects/current/" },
      { text: "Archive", link: "/projects/archive/" },
    ],
  },
];

const themeConfig: HopeThemeConfig = {
  hostname: "https://your-domain.com",  // required
  author: { name: "Steeven Villa", url: "https://github.com/xteeven" },
  repo: "xteeven/currentweb",

  // ← use the plain array here
  navbar: navbarConfig,

  // likewise, if you had defineSidebarConfig(), just use object/array directly:
  sidebar: {
    "/guide/": ["", "getting-started", "advanced"],
  },

  // …any other theme options
};

export default themeConfig;
