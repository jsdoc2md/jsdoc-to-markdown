"use strict";
var jsdoc2md = require("../../../../");
var fs = require("fs");
var path = require("path");

var p = {
    input: __dirname + "/index.html",
    template: __dirname + "/template.hbs",
    output: __dirname + "/readme.md"
};

var source = fs.readFileSync(p.input, "utf8");

jsdoc2md
    .render(p.input, {
        html: true,
        template: p.template,
        source: source
    })
    .on("error", console.error)
    .pipe(fs.createWriteStream(p.output));
