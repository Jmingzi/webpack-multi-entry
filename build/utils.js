var config = require('../config')
var path = require('path')

module.exports = {
    resolve(dir) {
        return path.join(__dirname, '..', dir)
    },

    assetsPath(_path) {
        var assetsSubDirectory = process.env.NODE_ENV === 'production'
            ? config.build.assetsSubDirectory
            : config.dev.assetsSubDirectory
        return path.join(assetsSubDirectory, _path).replace(/\\/g, '/')
    }
}