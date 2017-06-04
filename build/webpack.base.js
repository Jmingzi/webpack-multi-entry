var path = require('path')
var config = require('../config')
var utils = require('./utils')
var resolve = utils.resolve
var assetsPath = utils.assetsPath
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var mutiHtmlPlugin = require('./multiEntryHtmlPlugin')
mutiHtmlPlugin.setEntry('src/views/**/index.js')
var result = mutiHtmlPlugin.produce()

module.exports = {
    entry: result.entry,
    
    output: {
        path: config.build.assetsRoot,
        filename: assetsPath('js/[name].js'),
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            '@': resolve('src')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                include: [resolve('src')]
            },
            {
                test: /\.scss$/,
                include: [resolve('src')],
                use: ExtractTextPlugin.extract({
                    // fallback: "style-loader",
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugins: result.plugin
}
