/// <binding ProjectOpened='Hot' />
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var pkg = require('./package.json');

// bundle dependencies in separate vendor bundle
var vendorPackages = Object.keys(pkg.dependencies).filter(function (el) {
  return el.indexOf('font') === -1; // exclude font packages from vendor bundle
});

module.exports = {
  devServer: {
    contentBase: './build',
    host: 'localhost',
    port: 3000
  },
  entry: {
    main: [
      'webpack-dev-server/client?http://localhost:3000/public',
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      './src/index'
    ],
    vendor: vendorPackages
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      __API_URL__: JSON.stringify(process.env.API_URL || '//localhost:51407')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
      minChunks: Infinity
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
	new webpack.ProvidePlugin({
   $: "jquery",
   jQuery: "jquery"
  })
	
  ],
  resolveLoader: {
     modules: ["node_modules"]
   // root: path.join(__dirname, 'node_modules')       
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader'],
      exclude: /node_modules/,
      include: __dirname
    }, {
      test: /\.css?$/,
      use: ['style-loader', 'raw-loader'],
      include: __dirname
    }]
  }
};
