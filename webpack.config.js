/**
 * Created by roger on 2017. 9. 25..
 */
'use strict'

const path = require('path');

//noinspection JSUnresolvedVariable
module.exports = {
  devtool: 'source-map',
  entry: {
    main: ['./src/main.js']
  },

  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].js',
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, './src'),
      }
    ]
  },
  plugins: [],

  devServer: {
    host: 'localhost',
    port: 8000,
    contentBase: "./public",
    inline: true
  },

};