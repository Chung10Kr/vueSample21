const path = require('path')

module.exports = {
  publicPath: '/',
  outputDir: 'dist',

  configureWebpack: {
		resolve: {
			alias: {
				'@': path.join(__dirname, 'src/'),
			},
		},
	},
  devServer: {
    port: process.env.VUE_APP_PORT || 8080,
  }

}