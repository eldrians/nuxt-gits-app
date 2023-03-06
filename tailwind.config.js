/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    './node_modules/@gits-id/**/src/**/*.{vue,js,ts,jsx,tsx,css}',
  ],
  presets: [require('@gits-id/tailwind-config/preset')],
  theme: {
    extend: {
      fontFamily: {
        Lora: ['Lora'],
      }
    },
  },
  plugins: [],
}