const nodeExternals = require('webpack-node-externals')
const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './src/server.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
    publicPath: '/'
  },
  target: 'node',
  externals: nodeExternals(),
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};