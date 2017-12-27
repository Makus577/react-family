const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[hash].js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3000,
        historyApiFallback: true
    },
    plugins: [
        new htmlWebpackPlugin({
            path: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        })
    ]

}
// 1. 简单定义入口跟出口
// 2. 定义一个服务器吧 使用webpack-dev-server,其中发现webpack和webpack-dev-server 全局跟本地都要安装，本地是依赖，全局是不需要书写路径
// 3 .gitignore 配置该文件
// 4. 模板HTML文件,下载插件 html-webpack-plugin
// 5. 缓存技术,在output.filename,加上hash
// 6. babel加载，新建.babelrc

