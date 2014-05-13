var mfs = require("more-fs"),
    path = require("path");

module.exports = function(handlebars){
    var fileSet = new mfs.FileSet(path.resolve(__dirname, "..", "partials", "*.hbs"));
    fileSet.files.forEach(function(file){
        handlebars.registerPartial(
            path.basename(file, ".hbs"),
            mfs.read(file)
        );
    });
};
