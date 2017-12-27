const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    // publicPath: '/',
    entry:{
        main: path.join(__dirname, './src/index.js'),
        vender: ['react', 'react-dom']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader?cacheDirectory=true'],
                include: path.join(__dirname, 'src')
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3000,
        historyApiFallback: true,
        hot: true
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vender'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        })
    ]

}
// 1. 简单定义入口跟出口
// 2. 定义一个服务器吧 使用webpack-dev-server,其中发现webpack和webpack-dev-server 全局跟本地都要安装，本地是依赖，全局是不需要书写路径
// 3 .gitignore 配置该文件
// 4. 模板HTML文件,下载插件 html-webpack-plugin
// 5. 缓存技术,在output.filename,加上hash
// 6. babel加载，新建.babelrc， module.rules 增加，这里正则有问题？ 关键词test use include 
// 7. 提取公共模块， new webpack.optimize.CommonChunkPlugin({ name: '' })
// 8. 热模块替换

