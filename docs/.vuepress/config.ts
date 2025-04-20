// docs/.vuepress/config.ts
import { defineUserConfig }        from "vuepress";
import { hopeTheme }               from "vuepress-theme-hope";
import { viteBundler }             from "@vuepress/bundler-vite";             // ← add this
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
//import { searchPlugin }            from "@vuepress/plugin-search";
import { path }                    from "@vuepress/utils";
import themeConfig                 from "./themeConfig";

export default defineUserConfig({
  // --- existing options ---
  base: "/",
  lang: "en-US",
  title: "Steeven Villa · HCI & UX Research",
  description: "HCI researcher - Steeven Villa",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
  ],

  // ← tell VuePress which bundler to use:

  bundler: viteBundler({
    viteOptions: {
      ssr: {
        // Force naive-ui to be bundled (so its ESM build is used),
        // rather than imported as an external CJS package.
        noExternal: ["naive-ui", "vueuc", "@css-render/vue3-ssr"],
      },
    },
  }),
  // ← your theme
  theme: hopeTheme(themeConfig),

  // ← plugins
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),

  ],
});
