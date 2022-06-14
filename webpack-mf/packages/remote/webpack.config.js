/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2022-06-13 15:32:48
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2022-06-14 19:28:16
 */

const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { dependencies } = require("./package.json");

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "remote",
      filename: "remoteEntry.js",
      remotes: {
        host: `host@http://localhost:8080/remoteEntry.js`,
      },
      exposes: {
        "./Button": "./src/components/button/index.jsx",
        "./Header": "./src/components/header/index.jsx",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: dependencies.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: dependencies["react-dom"],
        },
        "react-router-dom": {
          singleton: true,
          requiredVersion: dependencies["react-router-dom"],
        },
        "react-router": {
          singleton: true,
          requiredVersion: dependencies["react-router"],
        },
        antd: {
          singleton: true,
          requiredVersion: dependencies.antd,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    port: 8081,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  resolve: {
    extensions: [".jsx", ".js"],
  },
};
