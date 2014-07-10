"use strict";
var jsdoc2md = require("../"),
    fs = require("fs"),
    path = require("path"),
    mfs = require("more-fs");

function halt(err){
    console.error(err.stack || "Error: " + err.message);
    process.exit(1);
}

function render(options, outputPath){
    jsdoc2md.render(options, function(err, result){
        if (err) halt(err);
        mfs.write(outputPath, result);
    });
}

fs.readdirSync("test/template").forEach(function(file){
    render(
        {
            src: "test/input/**/*.js",
            template: path.join("test/template", file)
        }, 
        path.join("test/output/template", path.basename(file, ".hbs") + ".md")
    )
});
