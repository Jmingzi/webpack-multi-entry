var webpack = require('webpack')
var webpackConfig = require('./webpack.prod')

webpack(webpackConfig, (err, stats)=> {
    if (err) throw err
    
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n\n')
})

