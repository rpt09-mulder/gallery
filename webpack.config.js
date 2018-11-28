const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: __dirname + '/client',
  entry: './index.js',
  module: {
    rules: [{
        test: /\.jsx$/,
        exclude: /node_modules/,
        options: {
          presets: ['react', 'es2015', 'env']
        },
        loader: 'babel-loader'
    }]
},
  output: {
    path: __dirname + '/public',
    filename: 'app.js',
  }
};


