"use strict";
var jsdoc2md = require("../../../../");
var fs = require("fs");

var p = {
    input: __dirname + "/../../../src/*.js",
    template: __dirname + "/template.hbs",
    output: __dirname + "/readme.md"
};

jsdoc2md
    .render(p.input, { template: p.template, "no-gfm": true })
    .on("error", console.error)
    .pipe(fs.createWriteStream(p.output));
