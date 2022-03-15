import { defineNavbarConfig } from "vuepress-theme-hope";

export default defineNavbarConfig([
  "/",
  { text: "Bio", icon: "profile", link: "/bio/" }, 
  { text: "Publications", icon: "article", link: "/publications/" }, 
  { text: "Teaching", icon: "creative", link: "/teaching/" }, 
  { text: "Contact", icon: "quote", link: "/contact/" }, 

]);
