export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'markdown-editor',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/_variables.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/markdownit',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyB63xQ5vDXQyrjwO2oxvhr0iqK9kGp0aYM',
          authDomain: 'md-editor-x.firebaseapp.com',
          projectId: 'md-editor-x',
          storageBucket: 'md-editor-x.appspot.com',
          messagingSenderId: '284378257366',
          appId: '1:284378257366:web:f92f50528a8f7e327fb677',
        },
        services: {
          auth: true,
          firestore: true,
        },
      },
    ],
  ],
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    runtime: true,
    use: [
      'markdown-it-div',
      'markdown-it-attrs',
      'markdown-it-sub',
      'markdown-it-sup',
      'markdown-it-video',
      'markdown-it-footnote',
    ],
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
