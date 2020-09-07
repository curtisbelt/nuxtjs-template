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

  buildModules: ['@nuxtjs/eslint-module'],

  eslint: {
    fix: true,
  },

  modern: isProd,

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        'postcss-flexbugs-fixes': {},
      },
      preset: {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    },
    parallel: isDev,
    cache: isDev,
    hardSource: isDev,
  },
}
