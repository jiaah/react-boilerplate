const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
  mode: 'development',
  entry: {
    main: [
      // 'babel-register',
      // 'babel-runtime/regenerator',
      'react-hot-loader/patch',
      'webpack-hot-middleware/client?path=http://localhost:9007/__webpack_hmr&timeout=20000&reload=true',
      './client/index.js',
    ],
  },
  devServer: {
    publicPath: '/',
    contentBase: 'dist',
    overlay: true,
    hot: true,
    historyApiFallback: true,
    stats: {
      colors: true,
      reasons: true,
      chunks: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  devtool: 'cheap-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};

module.exports = merge(baseConfig, config);
