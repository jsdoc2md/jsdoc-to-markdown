"use strict";
var jsdoc2md = require("../../../");
var fs = require("fs");
var path = require("path");

var p = {
    input: [ path.resolve(__dirname, "../interface/src.js"), __dirname + "/src.js" ],
    template: __dirname + "/template.hbs",
    output: __dirname + "/output.md"
};

var source = "";
p.input.forEach(function(file){
    source += fs.readFileSync(file, "utf8");
});

jsdoc2md
    .render(p.input, {
        "global-index-format": "none",
        template: p.template,
        source: source
    })
    .on("error", console.error)
    .pipe(fs.createWriteStream(p.output));
