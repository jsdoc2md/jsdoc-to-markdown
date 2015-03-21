"use strict";
var jsdoc2md = require("../../");
var fs = require("fs");

/* class */
jsdoc2md
    .render("example/src/*.js", { template: "example/identifier-blocks/template/single-class.hbs"})
    .pipe(fs.createWriteStream("example/identifier-blocks/single-class.md"));

/* modules */
jsdoc2md
    .render("example/src/commonJS/*.js", { template: "example/identifier-blocks/template/modules.hbs"})
    .pipe(fs.createWriteStream("example/identifier-blocks/modules.md"));

