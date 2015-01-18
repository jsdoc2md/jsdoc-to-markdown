"use strict";
var jsdoc2md = require("../");
var fs = require("fs");

/* global-index */
jsdoc2md
    .render("example/src/*.js", { template: "example/template/global-index.hbs"})
    .pipe(fs.createWriteStream("example/md/global-index.md"));
