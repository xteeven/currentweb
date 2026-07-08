// docs/.vuepress/config.ts
import { defineUserConfig }        from "vuepress";
import { hopeTheme }               from "vuepress-theme-hope";
import { viteBundler }             from "@vuepress/bundler-vite";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { path }                    from "@vuepress/utils";
import themeConfig                 from "./themeConfig";

const siteTitle = "PostHCI";
const profileName = "Steeven Villa";
const siteDescription =
  "Senior HCI/UX researcher working on Human-AI interaction, haptics, virtual reality, neurophysiology, and robotics.";
const siteUrl = "https://posthci.com";
const socialImage = `${siteUrl}/images/social-preview.png`;

export default defineUserConfig({
  base: "/",
  lang: "en-US",
  title: siteTitle,
  description: siteDescription,
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
    ["meta", { charset: "utf-8" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
      },
    ],
    ["meta", { name: "author", content: profileName }],
    ["meta", { name: "description", content: siteDescription }],
    ["meta", { property: "og:image", content: socialImage }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:image", content: socialImage }],
    [
      "script",
      { type: "application/ld+json" },
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: profileName,
        honorificSuffix: "PhD",
        url: siteUrl,
        image: socialImage,
        jobTitle: "Senior HCI/UX Researcher",
        knowsAbout: [
          "Human-AI interaction",
          "Haptics",
          "Virtual reality",
          "Neurophysiology",
          "Robotics",
          "UX research",
        ],
        sameAs: [
          "https://fr.linkedin.com/in/steevenv",
          "https://scholar.google.com/citations?user=j6rFI50AAAAJ",
          "https://orcid.org/0000-0002-4881-1350",
          "https://steevenvilla.medium.com",
        ],
      }),
    ],
  ],

  bundler: viteBundler({
    viteOptions: {
      build: {
        rollupOptions: {
          onwarn(warning, warn) {
            if (warning.code === "INVALID_ANNOTATION") return;
            warn(warning);
          },
        },
      },
      ssr: {
        // Force naive-ui to be bundled (so its ESM build is used),
        // rather than imported as an external CJS package.
        noExternal: ["naive-ui", "vueuc", "@css-render/vue3-ssr"],
      },
    },
  }),
  theme: hopeTheme(themeConfig),

  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
  ],
});
