"use strict";
var jsdoc2md = require("../../");
var fs = require("fs");

/* class */
jsdoc2md
    .render("example/src/*.js", { template: "example/identifier-blocks/template/class.hbs"})
    .pipe(fs.createWriteStream("example/identifier-blocks/class.md"));
