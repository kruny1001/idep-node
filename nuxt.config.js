module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  
  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.css', '~/node_modules/tachyons/css/tachyons.min.css', 
    '~/node_modules/swiper/dist/css/swiper.css'],
  
  /*
  ** Add axios globally
  */
  plugins:[
    { src: '~/plugins/swiper.js', ssr: false },
    { src: '~/plugins/fbConn.js', ssr: false },

    // { src: '~/plugins/axios.js', ssr: false }
  ],
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    // extend (config, ctx) {
    //   if (ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  },
  serverMiddleware: [
    '~/server/api/logger'
  ]
}
