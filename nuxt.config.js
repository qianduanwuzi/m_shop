const resolve = require('path').resolve
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'test-nuxt',
    meta: [
      { charset: 'utf-8' },
      //  { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
       { src: '/msuit.js' }
    ]
  },
  //
  router: {
    middleware: 'filterBusCom',
    extendRoutes (routes) {
      routes.push({
        name: '/',
        path: '*',
        component: resolve(__dirname, 'pages/index.vue')
      })
    }
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** add transition/public css
  */
  css: ['assets/main.css', 'assets/_main.scss'],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    // extend (config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  },
  plugins: [
    { src: '~plugins/fastclick', ssr: false},
    // { src: '~plugins/pickers', ssr: false},
    { src: '~plugins/components'},
    { src: '~plugins/vant'},
  ]
}
