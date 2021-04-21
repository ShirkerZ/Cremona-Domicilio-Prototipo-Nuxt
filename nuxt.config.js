export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'cremona-domicilio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap' }
    ],
    script: [
      { src: "https://kit.fontawesome.com/1640a3f9de.js", crossorigin: "anonymous" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
    'nuxt-gsap'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-i18n'
  ],

  i18n: {
    straetegy: "prefix_except_default",
    lazy: true,
    locales: [
      {
        code: "en",
        name: "English",
        iso: "en-US",
        file: "en-US.js"
      },
      {
        code: "it",
        name: "Italiano",
        iso: "it-IT",
        file: "it-IT.js"
      },
    ],
    langDir: "./static/translations/",
    parsePages: false,

    pages: {
      'stores/index': {
        it: '/negozi',
        en: '/stores',
      },

      'stores/_municipality': {
        it: '/negozi/:comune?',
        en: '/stores/:municipality?',
      },

      'stores/_store': {
        it: '/negozi/:store',
        en: '/stores/:store',
      },

      'categories/index': {
        it: '/categorie',
        en: '/categories',
      },

      'categories/_category': {
        it: '/categorie/:category',
        en: '/categories/:category',
      },

      'municipalities/_municipality': {
        it: '/comuni/:municipality',
        en: '/municipalities/:municipality',
      },

      join: {
        it: '/aderisci',
        en: '/join',
      }
    },
    defaultLocale: 'it',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
