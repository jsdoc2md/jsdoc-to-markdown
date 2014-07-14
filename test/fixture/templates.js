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
    var buffer = new Buffer(0);
    jsdoc2md.render(files, options).on("readable", function(){
        var chunk = this.read();
        if (chunk) buffer = Buffer.concat([ buffer, chunk ]);
    }).on("end", function(){
        console.log("writing to " + outputPath);
        mfs.write(outputPath, buffer);
    });
}

fs.readdirSync("test/fixture/template").forEach(function(file){
    render(
        "test/fixture/input/**/*.js",
        { template: path.join("test/fixture/template", file) }, 
        path.join("test/fixture/output/template", path.basename(file, ".hbs") + ".md")
    )
});
