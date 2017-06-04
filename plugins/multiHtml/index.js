function multiHtml(options) {

}

multiHtml.prototype.apply = function(compiler) {
    // compiler.plugin('done', function() {
    //     console.log('Hello World!')
    // })
    compiler.plugin("compilation", function(compilation) {
        // Now setup callbacks for accessing compilation steps:
        compilation.plugin("optimize", function() {
            console.log("Assets are being optimized.");
        });
    });
}

module.exports = multiHtml