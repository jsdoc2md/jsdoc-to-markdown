"use strict";
var jsdoc2md = require("../../../../");
var fs = require("fs");

var p = {
    input: __dirname + "/../../../src/commonJS/*.js",
    output: __dirname + "/output.md"
};

jsdoc2md
    .render(p.input, { separators: true })
    .on("error", console.error)
    .pipe(fs.createWriteStream(p.output));
