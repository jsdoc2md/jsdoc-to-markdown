"use strict";
var jsdoc2md = require("../../../");
var fs = require("fs");

var p = {
    input: __dirname + "/index.html",
    output: __dirname + "/output.md"
};

jsdoc2md
    .render(p.input, { html: true })
    .on("error", console.error)
    .pipe(fs.createWriteStream(p.output));
