import * as webpack from 'webpack';
import * as path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { TypedCssModulesPlugin } from 'typed-css-modules-webpack-plugin';

const config: webpack.ConfigurationFactory = (env, args) => ({
  mode: args.env === 'development' ? 'development' : 'production',

  entry: ['./src/index.tsx'],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loaders: ['babel-loader'],
      },

      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: ['node_modules'],
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    },
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },

  plugins: [
    new MiniCssExtractPlugin(),

    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),

    new TypedCssModulesPlugin({
      globPattern: './src/**/*.css',
    }),
  ],
});

export default config;
