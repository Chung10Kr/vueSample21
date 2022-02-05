const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')
const dotenv = require('dotenv');
const webpack = require('webpack');

module.exports = () => {

  dotenv.config( {path:'./.env'});

  return {
    devServer: {
      port: process.env.VUE_APP_PORT || 8080,
    },
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      extensions: ['.js','.vue'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    mode : 'development',
    //진입점
    entry: {
        app: path.join(__dirname, 'src/main.js') //별칭
    },
    // 결과물에 대한 설정
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js', //app.js
    },
    module: {
      rules : [
        {
          test : /\.css$/,
          use : ['style-loader','css-loader']
        },
        {
          test : /\.png$|PNG|jpg|JPG|jpeg|gif/,
          use : [{
            loader : 'file-loader',
            options : {
              name: '[name].[ext]?[hash]'
            }
          }]
        },
        {
          test : /\.vue$/,
          use : 'vue-loader'
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template : './src/index.html'
      }),
      new CleanWebpackPlugin(),
      new VueLoaderPlugin(),
      new webpack.DefinePlugin({
        "process.env.VUE_APP_API_BASE_URL" : JSON.stringify(process.env.VUE_APP_API_BASE_URL)
      })
    ]
  }
}