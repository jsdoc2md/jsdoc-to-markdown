"use strict";
var jsdoc2md = require("../");
var fs = require("fs");

/* fully-baked class */
jsdoc2md
    .render("example/src/uzi-lover.js")
    .pipe(fs.createWriteStream("example/md/fully-baked-class.md"));
