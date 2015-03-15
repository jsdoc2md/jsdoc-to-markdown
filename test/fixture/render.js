"use strict";
var jsdoc2md = require("../../");
var fs = require("fs");
var path = require("path");

function halt(err){
    console.error(err.stack || "Error: " + err.message);
    process.exit(1);
}

function render(input, outputPath){
    jsdoc2md.render(input).pipe(fs.createWriteStream(outputPath));
}

fs.readdirSync("test/fixture/input/commonjs").forEach(function(file){
    render(
        path.join("test/fixture/input/commonjs", file),
        path.join("test/fixture/output/commonjs", path.basename(file, ".js") + ".md")
    );
});

fs.readdirSync("test/fixture/input/amd").forEach(function(file){
    render(
        path.join("test/fixture/input/amd", file),
        path.join("test/fixture/output/amd", path.basename(file, ".js") + ".md")
    );
});

fs.readdirSync("test/fixture/input/globals").forEach(function(file){
    render(
        path.join("test/fixture/input/globals", file),
        path.join("test/fixture/output/globals", path.basename(file, ".js") + ".md")
    );
});

render("test/fixture/input/globals/*.js", "test/fixture/output/globals/all.md");
