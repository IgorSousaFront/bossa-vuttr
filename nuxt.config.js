export default {
  head: {
    htmlAttrs: {
      lang: 'pt-BR',
    },
    title: 'VUTTR',
    meta: [
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
      { hid: 'title', name: 'title', content: 'VUTTR' },
      {
        hid: 'description',
        name: 'description',
        content: 'Desafio de frontend Bossabox'
      }
    ],
  },
  html: {
    minify: {
      collapseWhitespace: true,
      collapseInlineTagWhitespace: true,
      conservativeCollapse: true
    }
  },
  css: [
    '~/scss/index.scss'
  ],
  srcDir: 'app/',
}