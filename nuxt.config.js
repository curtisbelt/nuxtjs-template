const isDev = process.env.NODE_ENV !== 'production'

export default {
  head: {
    title: 'Nuxt.js Template'
  },

  plugins: [],

  modules: ['@nuxtjs/axios'],

  devModules: ['@nuxtjs/tailwindcss', '@nuxtjs/eslint-module'],

  eslint: {
    fix: true
  },

  modern: isDev,

  build: {
    parallel: isDev,
    cache: isDev,
    hardSource: isDev
  }
}
