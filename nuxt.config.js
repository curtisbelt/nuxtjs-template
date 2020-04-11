const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd

export default {
  head: {
    titleTemplate: (titleChunk) =>
      titleChunk ? `${titleChunk} - Nuxt.js Template` : 'Nuxt.js Template',
  },

  router: {
    trailingSlash: false,
  },

  css: ['assets/css/tailwind'],

  plugins: [],

  modules: ['@nuxtjs/axios'],

  buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/eslint-module'],

  eslint: {
    fix: true,
  },

  modern: isProd,

  build: {
    parallel: isDev,
    cache: isDev,
    hardSource: isDev,
  },
}
