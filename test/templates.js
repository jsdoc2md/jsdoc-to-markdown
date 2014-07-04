"use strict";
var jsdoc2md = require("../"),
    fs = require("fs"),
    path = require("path"),
    mfs = require("more-fs");

function halt(err){
    console.error(err.stack || "Error: " + err.message);
    process.exit(1);
}

function render(options, output){
    jsdoc2md.render(options, function(err, result){
        if (err) halt(err);
        mfs.write(output, result);
    });
}

render({
    src: "test/input/commonjs/exports-class.js",
    template: "test/template/module-full.hbs"    
}, "test/output/template/module-full.md");
