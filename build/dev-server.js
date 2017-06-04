const express = require('express'),
    webpack = require('webpack'),
    webpackConfig = require('./webpack.dev'),
    compiler = webpack(webpackConfig),
    webpackMiddleware = require("webpack-dev-middleware"),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    app = express()


app.use(webpackMiddleware(compiler, {
    noInfo: false,
    quiet: true,
    stats: {
        colors: true
    }
}))

app.use(webpackHotMiddleware(compiler))

app.listen(8080, function(){
    console.log('11');
})