import { defineNavbarConfig } from "vuepress-theme-hope";

export default defineNavbarConfig([
  "/", 
  { text: "Publications", icon: "article", link: "/publications/" }, 
  //{ text: "Portfolio", icon: "process", link: "/portfolio/" },
  { text: "Mentoring", icon: "creative", link: "/teaching/" }, 
  { text: "Contact", icon: "quote", link: "/contact/" }, 

]);
