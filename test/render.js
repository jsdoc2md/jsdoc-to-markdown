"use strict";
var jsdoc2md = require("../"),
    fs = require("fs"),
    path = require("path"),
    mfs = require("more-fs");

function halt(err){
    console.error(err.stack || "Error: " + err.message);
    process.exit(1);
}

function render(input, output, preset, index){
    jsdoc2md.render({ preset: preset, src: input, index: index }, function(err, result){
        if (err) halt(err);
        mfs.write(output, result);
    });
}

fs.readdirSync("test/input/commonjs").forEach(function(file){
    render(
        path.join("test/input/commonjs", file), 
        path.join("test/output/commonjs", path.basename(file, ".js") + ".md")
    );
});

fs.readdirSync("test/input/amd").forEach(function(file){
    render(
        path.join("test/input/amd", file), 
        path.join("test/output/amd", path.basename(file, ".js") + ".md")
    );
});

fs.readdirSync("test/input/globals").forEach(function(file){
    render(
        path.join("test/input/globals", file), 
        path.join("test/output/globals", path.basename(file, ".js") + ".md")
    );
});

render("test/input/globals/*.js", "test/output/globals/all.md");
render("test/input/commonjs/object.js", "test/output/commonjs/object-with-index.md", "modules", true);
render("test/input/commonjs/file-set.js", "test/output/commonjs/fileset-with-index.md", "modules", true);
render("test/input/amd/file-pet.js", "test/output/amd/filepet-with-index.md", "modules", true);
