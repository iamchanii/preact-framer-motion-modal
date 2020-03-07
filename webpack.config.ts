import * as webpack from 'webpack';
import * as path from 'path';
import HtmlWebpackPlugin = require('html-webpack-plugin');

const config: webpack.ConfigurationFactory = (env, args) => ({
  mode: args.env === 'development' ? 'development' : 'production',

  entry: ['./src/index.tsx'],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loaders: ['babel-loader'],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: ['node_modules'],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
});

export default config;
