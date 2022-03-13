import { defineSidebarConfig } from "vuepress-theme-hope";

export default defineSidebarConfig([
  "",
  "home",
  "slide",
  {
    icon: "creative",
    text: "Guide",
    prefix: "guide/",
    link: "guide/",
    children: "structure",
  },
]);
