const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



module.exports = {
    entry: './src/index.js', // 入口文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js'
    }, // 出口文件
    module: {
        rules: [{
         test: /\.(sass|scss|css)$/,
          use: [{
              loader: MiniCssExtractPlugin.loader,
              options: {
                // you can specify a publicPath here
                // by default it use publicPath in webpackOptions.output
                publicPath: './dist'
              }
            },
            'css-loader',
            'sass-loader'
          ]
        }]
      },                // 處理對應模組
    plugins: [
        //html 5 plugin
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "./style.css"
        }),
    ],             // 對應的插件
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3006,
        index :"index.html",
        open : true
        

    }, // 開發伺服器的
    mode: 'development' //"production" | "development" | "none"  開發模式
}