const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {

  entry: {
    app: './app/main.js',
  },

  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/ }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({}),
    new CopyWebpackPlugin([
      { from: 'node_modules/bootstrap/dist', to: 'lib/bootstrap' },
      { from: 'app/img', to: './img' },
      { from: 'app/css', to: './css' },
    ]),
    new HtmlWebpackPlugin({ template: 'app/index.html' }),
  ],
}
