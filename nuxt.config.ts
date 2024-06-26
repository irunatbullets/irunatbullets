// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt'
  ],
  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/css/main.css',
  ],
  app: {
    baseURL: '/irunatbullets/',
    head: {
      title: 'irunatbullets',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    }
  }
})
