const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/'),
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
          test : /\.(png|PNG|jpg|JPG|jpeg|gif)$/,
          use : [{
            loader : 'file-loader',
            options : {
              name: '[name].[ext]?[hash]'
            }
          }]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template : './src/index.html'
      }),
      new CleanWebpackPlugin()
    ]
}