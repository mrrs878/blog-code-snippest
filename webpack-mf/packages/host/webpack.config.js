/*
 * @Author: mrrs878@foxmail.com
 * @Date: 2022-06-13 15:32:48
 * @LastEditors: mrrs878@foxmail.com
 * @LastEditTime: 2022-06-14 19:40:07
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
        test: /.jsx$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
      {
        test: /.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        remote: `remote@http://localhost:8081/remoteEntry.js`,
      },
      exposes: {
        "./Profile": "./src/pages/profile/index.jsx",
        "./About": "./src/pages/about/index.jsx",
        "./Home": "./src/pages/home/index.jsx",
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
    port: 8080,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".jsx", ".js"],
  },
};
