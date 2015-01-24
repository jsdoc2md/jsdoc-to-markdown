"use strict";
var jsdoc2md = require("../");
var fs = require("fs");

/* global-index-format */
jsdoc2md
    .render("example/src/*.js", { template: "example/template/global-index.hbs"})
    .pipe(fs.createWriteStream("example/md/global-index-format.md"));

/* module-index-format */
jsdoc2md
    .render("example/src/commonJS/*.js", { template: "example/template/module-index.hbs"})
    .pipe(fs.createWriteStream("example/md/module-index-format.md"));

/* param-list-format */
jsdoc2md
    .render("example/src/function.js", { template: "example/template/param-list-format.hbs"})
    .pipe(fs.createWriteStream("example/md/param-list-format.md"));

/* property-list-format */
jsdoc2md
    .render("example/src/enum.js", { template: "example/template/property-list-format.hbs"})
    .pipe(fs.createWriteStream("example/md/property-list-format.md"));
