const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js", // your entry file path;
  output: {
    path: path.resolve(__dirname, "dist"), // your output folder path
    filename: "bundle.js", // your output file name
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "images",
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // your html template path
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
};
