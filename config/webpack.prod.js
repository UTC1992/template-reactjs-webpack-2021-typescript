const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const { default: merge } = require('webpack-merge');
const webpackCommon = require('./webpack.common');

/** @type {import('webpack').Configuration}*/
const prodConfig = {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
};

module.exports = merge( webpackCommon, prodConfig );