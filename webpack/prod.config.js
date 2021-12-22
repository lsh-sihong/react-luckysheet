const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/ReactLuckysheet/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  externals: [nodeExternals()],
  plugins: [
    new CopyWebpackPlugin([
      {from:path.resolve(__dirname,'../public/luckysheet'),to:path.resolve(__dirname,'../dist/luckysheet')},
      {from:path.resolve(__dirname,'../public/luckysheet/css'),to:path.resolve(__dirname,'../dist/css')}
    ])
  ],
};
