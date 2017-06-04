const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.dev')
const opn = require('opn')

const compiler = webpack(webpackConfig)
const server = new WebpackDevServer(compiler, {
    compress: true,
    hot: true,
    
    stats: {
        colors: true
    },
    quiet: true
})

server.listen(8080, function() {
    opn('http://localhost:8080')
    
    console.log("Starting server on http://localhost:8080")
})


