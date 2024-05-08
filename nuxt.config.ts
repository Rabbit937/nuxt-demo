// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-tradingview'],
  app: {
    head: {
      script: [
        { src: "https://cdn.jsdelivr.net/npm/vue@3.4.27/dist/vue.global.min.js", type: 'text/javascript' },
        { src: '/js/index.js', type: "text/javascript" },
      ]
    }
  },
})
