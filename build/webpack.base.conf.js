var path = require('path')
var utils = require('./utils')
var config = require('../config')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.hbs', '.json'],
    alias: {
      '@': resolve('src'),
      'redux-devtools/lib': path.join(__dirname, '..', '..', 'src'),
      'redux-devtools': path.join(__dirname, '..', '..', 'src')
    }
  },
  module: {
    rules: [
      {
          test: /\.hbs/,
          loader: 'handlebars-loader',
          query: {
            helperDirs: [
              resolve('src/helpers')
            ],
            runtime: 'handlebars/runtime',
          },
          exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
