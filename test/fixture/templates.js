"use strict";
var jsdoc2md = require("../../"),
    fs = require("fs"),
    path = require("path"),
    mfs = require("more-fs");

function halt(err){
    console.error(err.stack || "Error: " + err.message);
    process.exit(1);
}

function render(files, options, outputPath){
    jsdoc2md.render(files, options).pipe(mfs.writeStream(outputPath));
}

fs.readdirSync("test/fixture/template").forEach(function(file){
    render(
        "test/fixture/input/**/*.js",
        { template: path.join("test/fixture/template", file) }, 
        path.join("test/fixture/output/template", path.basename(file, ".hbs") + ".md")
    )
});
