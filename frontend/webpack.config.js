import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

import Dotenv from "dotenv-webpack";

export default {
  entry: "./index.js",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(process.cwd(), "dist"),
    publicPath: "/",
  },
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader", // Injects styles into the DOM
          "css-loader", // Translates CSS into CommonJS
          "sass-loader", // Compiles Sass to CSS
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new Dotenv(),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
