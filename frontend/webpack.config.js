const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin=require('html-webpack-plugin')

module.exports = {
  entry: {
    app: "./src/index.js",
    print: './src/print.js'

  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Hot Module Replacment"
    })
  ],
  devServer: {
    static: './dist',
    hot: true,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true,
  },
};