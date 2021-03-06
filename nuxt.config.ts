import colors from 'vuetify/es5/util/colors';

const nuxtConfig = {
  ssr: false,
  head: {
    titleTemplate: '%s - ' + 'Doctor Visit App',
    title: 'Doctor Visit Application',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  pwa: {
    manifest: {
      name: 'Doctor Visit App',
      short_name: 'Dova',
      lang: 'id',
      useWebmanifestExtension: false,
      start_url: '/',
      theme_color: '#ff6666'
    }
  },
  css: [],
  plugins: [],
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify'],
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/dotenv'],
  axios: {},
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      options: { customProperties: true },
      themes: {
        light: {
          primary: '#39ac37',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
          tone: '#f5f5f5'
        },
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  build: {
    optimizeCSS: true,
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 10000,
        maxSize: 200000
      }
    },
    transpile: ['vuetify/lib']
  }
};

export default nuxtConfig;
