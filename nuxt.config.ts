import { resolve } from "path";

export default defineNuxtConfig({
  modules: ['@gits-id/ui-nuxt', '@nuxtjs/tailwindcss'],
  alias: {
    "@": resolve(__dirname, "/"),
  },
  css: ["~/assets/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      link: [
        {rel: "stylesheet", href: "https://unpkg.com/aos@2.3.1/dist/aos.css"},
      ],
      script: [
        {src: "https://unpkg.com/aos@2.3.1/dist/aos.js"}
      ],
    }
  },
  plugins: [
    { src: '~/plugins/aos', mode: 'client' },
  ],
});
