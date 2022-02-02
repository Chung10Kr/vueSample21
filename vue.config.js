const path = require('path')

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  chainWebpack: config => {
    config.resolve.alias.set('@', path.resolve(__dirname, 'src/'))
  },

  devServer: {
    port: process.env.VUE_APP_PORT || 8080,
  }

}