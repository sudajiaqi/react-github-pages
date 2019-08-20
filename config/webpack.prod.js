const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.js');

const root = path.resolve(__dirname, '..');

const publicPath = path.resolve(root, 'dist');

module.exports = merge(baseConfig('prod'), {
  mode: 'production',
});
