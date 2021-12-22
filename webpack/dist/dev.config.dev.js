"use strict";

var path = require('path');

var htmlWebpackPlugin = require('html-webpack-plugin');

var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  devtool: "eval-source-map",
  module: {
    rules: [{
      test: /\.(woff|svg|eot|ttf)\??.*$/,
      loader: 'url-loader'
    }, {
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader']
    }]
  },
  devServer: {
    contentBase: [path.resolve(__dirname, 'public'), './dist'],
    proxy: {
      '/': {
        target: 'http://10.1.21.81:20219/',
        pathRewrite: {
          '^/': ''
        },
        changeOrigin: true,
        secure: false
      }
    }
  },
  plugins: [new htmlWebpackPlugin({
    template: 'public/index.html'
  }), new CopyWebpackPlugin([{
    from: path.resolve(__dirname, '../public/luckysheet'),
    to: path.resolve(__dirname, '../dist/luckysheet')
  }, {
    from: path.resolve(__dirname, '../public/luckysheet/css'),
    to: path.resolve(__dirname, '../dist/css')
  }])]
};