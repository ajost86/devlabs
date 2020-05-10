let merge = require('webpack-merge');
let common = require('./common.js');

const devConfig = merge(common, {
  devServer: {
    port: 3000,
    hot: true,
  },
  devtool: 'cheap-module-eval-source-map',
});

module.exports = devConfig;
