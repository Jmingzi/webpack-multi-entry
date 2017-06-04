var webpack = require('webpack')
var path = require('path')
var merge = require('webpack-merge')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

var config = require('../config')
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base')

// add hot-reload
Object.keys(baseWebpackConfig.entry).forEach(function(name) {
    baseWebpackConfig.entry[name] = [
        'webpack-dev-server/client?http://localhost:8080/',
        'webpack/hot/only-dev-server'
    ].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
    devtool: "cheap-eval-source-map",
    
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: config.dev.env
            }
        }),
        
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module, count) {
                // any required list inside node_modules are extracted to vendor
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(
                        path.join(__dirname, '../node_modules')
                    ) === 0
                )
            }
        }),
        
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            minChunks: Infinity,
            chunks: ['vendor']
        }),
        
        // extract css
        new ExtractTextPlugin({
            filename: utils.assetsPath('css/[name].css')
        }),
        
        new webpack.NoEmitOnErrorsPlugin(),
      
        new FriendlyErrorsPlugin(),
    
        new webpack.HotModuleReplacementPlugin(),
    
        new webpack.NamedModulesPlugin()
    ]
})