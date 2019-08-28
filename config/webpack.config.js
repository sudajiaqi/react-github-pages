const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

const root = path.resolve(__dirname, '..');

const publicPath = path.resolve(root, 'dist');
module.exports = (env) => ({
  entry: path.resolve(root, 'src/index.jsx'),
  output: {
    filename: 'js/[name].[contenthash].js',
    chunkFilename: 'js/[name].bundle.js',
    path: publicPath,
    publicPath: '/',
  },

  optimization: {
    // minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router|history|axios|js-cookie|react-router-dom|axios)[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
        highlight: {
          test: /[\\/]node_modules[\\/](highlight.js)[\\/]/,
          name: 'highlight',
          chunks: 'all',
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg|ico)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
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
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, `${env}.env`),
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new CleanWebpackPlugin({ verbose: true }),
    new HtmlWebpackPlugin({
      favicon: path.resolve(root, 'favicon.ico'),
      template: path.resolve(root, 'index.html'),
      title: 'JiaQi\'s Blog',
      alwaysWriteToDisk: true,
    }),
    new HtmlWebpackPlugin({
      filename: '404.html',
      favicon: path.resolve(root, 'favicon.ico'),
      template: path.resolve(root, '404.html'),
      title: 'JiaQi\'s Blog',
      inject: false,
    }),
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
});
