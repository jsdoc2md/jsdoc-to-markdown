"use strict";
var jsdoc2md = require("../../");
var fs = require("fs");

/* global-index-format */
jsdoc2md
    .render("example/src/*.js", { template: "example/format-options/template/global-index.hbs"})
    .pipe(fs.createWriteStream("example/format-options/md/global-index-format.md"));

/* module-index-format */
jsdoc2md
    .render("example/src/commonJS/*.js", { template: "example/format-options/template/module-index.hbs"})
    .pipe(fs.createWriteStream("example/format-options/md/module-index-format.md"));

/* param-list-format */
jsdoc2md
    .render("example/src/function.js", { template: "example/format-options/template/param-list-format.hbs"})
    .pipe(fs.createWriteStream("example/format-options/md/param-list-format.md"));

/* property-list-format */
jsdoc2md
    .render("example/src/enum.js", { template: "example/format-options/template/property-list-format.hbs"})
    .pipe(fs.createWriteStream("example/format-options/md/property-list-format.md"));

/* class-member-index */
jsdoc2md
    .render("example/src/*.js", { template: "example/format-options/template/class-member-index.hbs"})
    .pipe(fs.createWriteStream("example/format-options/md/class-member-index.md"));

/* separators */
jsdoc2md
    .render("example/src/commonJS/*.js", { separators: true })
    .pipe(fs.createWriteStream("example/format-options/md/separators.md"));

/* name-format */
jsdoc2md
    .render("example/src/commonJS/*.js", { "name-format": true, template: "example/format-options/template/name-format.hbs" })
    .pipe(fs.createWriteStream("example/format-options/md/name-format.md"));

/* no-gfm */
jsdoc2md
    .render("example/src/function.js", { template: "example/format-options/template/no-gfm.hbs" })
    .pipe(fs.createWriteStream("example/format-options/md/no-gfm.md"));

