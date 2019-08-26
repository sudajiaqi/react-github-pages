const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const root = path.resolve(__dirname, '..');

const publicPath = path.resolve(root, 'dist');
module.exports = (env) => ({
  entry: path.resolve(root, 'src/index.jsx'),
  output: {
    filename: 'js/[name].[contenthash].js',
    path: publicPath,
    publicPath: '/',
  },

  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },

  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, `${env}.env`),
    }),
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin({ verbose: true }),
    new HtmlWebpackPlugin({
      favicon: path.resolve(root, 'favicon.jpeg'),
      template: path.resolve(root, 'index.html'),
      title: 'JiaQi\'s Blog',
    }),
    new HtmlWebpackPlugin({
      filename: '404.html',
      favicon: path.resolve(root, 'favicon.jpeg'),
      template: path.resolve(root, '404.html'),
      title: 'JiaQi\'s Blog',
      files: {
        js: [],
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
});
