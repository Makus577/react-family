const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3000,
        historyApiFallback: true
    }

}
// 1. 简单定义入口跟出口
// 2. 定义一个服务器吧 使用webpack-dev-server,其中发现webpack和webpack-dev-server 全局跟本地都要安装，本地是依赖，全局是不需要书写路径

