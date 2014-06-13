var FileSet = require("file-set"),
    mfs = require("more-fs"),
    path = require("path");

module.exports = function(handlebars){
    var fileSet = new FileSet(path.resolve(__dirname, "..", "partials", "*.hbs"));
    fileSet.files.forEach(function(file){
        handlebars.registerPartial(
            path.basename(file, ".hbs"),
            mfs.read(file)
        );
    });

    var fileSet = new FileSet(path.resolve(__dirname, "..", "helpers", "*.js"));
    fileSet.files.forEach(function(file){
        require(file)(handlebars);
    });
};
