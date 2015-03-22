"use strict";
var jsdoc2md = require("../../../");
var fs = require("fs");

var p = {
    input: __dirname + "/src.js",
    template: __dirname + "/template.hbs",
    output: __dirname + "/output.md"
};

var source = fs.readFileSync(p.input, "utf8");

jsdoc2md
    .render(p.input, {
        "global-index-format": "none",
        template: p.template,
        source: source
    })
    .on("error", console.error)
    .pipe(fs.createWriteStream(p.output));
