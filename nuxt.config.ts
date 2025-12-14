// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "96x96",
          href: "/favicon.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
      ],
      meta: [
        {
          name: "google-site-verification",
          content: "r9rvLpe3DW-KVtzEcxfpC_Q9rzx2_lOMw5N_eL0iUTQ",
        },
        {
          name: "color-scheme",
          content: "dark",
        },
        {
          name: "theme-color",
          content: "#c48259",
        },
      ],
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@pinia/nuxt"],
  css: ["@/styles/main.scss"],
  routeRules: {
    "/": { redirect: "/fleas" },
    "/fleas": { prerender: true },
  },
  devServer: {
    host: "",
  },
});
