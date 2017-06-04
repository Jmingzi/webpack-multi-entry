// 参考 https://github.com/Coffcer/Blog/issues/1

var HtmlWebpackPlugin = require('html-webpack-plugin')
var glob = require('glob');

// 获取指定路径下的入口文件
function getEntries(globPath) {
    var files = glob.sync(globPath),
        entries = {};
    
    files.forEach(function(filepath) {
        // 取倒数第二层(view下面的文件夹)做包名
        var split = filepath.split('/')
        var name = split[split.length - 2]
    
        entries[name] = './' + filepath
    });
    
    return entries;
}

module.exports = {
    entries: '',
    
    setEntry(path) {
        this.entries = getEntries(path)
    },
    
    produce() {
        var entry = {}, pluginArr = [], _this = this
        
        Object.keys(this.entries).forEach(function(name) {
            entry[name] = _this.entries[name]
        
            // https://github.com/ampedandwired/html-webpack-plugin
            var plugin = new HtmlWebpackPlugin({
                filename: name + '.html',
                template: './src/template/'+ name +'.html',
                inject: true,
                // cache: true,
                hash: true,
                minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true
                    // more options:
                    // https://github.com/kangax/html-minifier#options-quick-reference
                },
                chunks: ['manifest', 'vendor', name]
            });
    
            pluginArr.push(plugin)
        })
        
        return {
            entry: entry,
            plugin: pluginArr
        }
    }
}