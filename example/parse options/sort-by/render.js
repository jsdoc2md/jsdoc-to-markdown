"use strict";
var jsdoc2md = require("../../../");
var fs = require("fs");

var src = __dirname + "/sorting.js";

/* none */
jsdoc2md
    .render(src, { "sort-by": "none", "global-index-format": "grouped" })
    .pipe(fs.createWriteStream(__dirname + "/none.md"));

/* kind */
jsdoc2md
    .render(src, { "sort-by": "kind", "global-index-format": "grouped" })
    .pipe(fs.createWriteStream(__dirname + "/kind.md"));

/* scope */
jsdoc2md
    .render(src, { "sort-by": "scope", "global-index-format": "grouped" })
    .pipe(fs.createWriteStream(__dirname + "/scope.md"));

/* scope,kind */
jsdoc2md
    .render(src, { "sort-by": "scope,kind", "global-index-format": "grouped" })
    .pipe(fs.createWriteStream(__dirname + "/scope,kind.md"));

/* kind,scope */
jsdoc2md
    .render(src, { "sort-by": "kind,scope", "global-index-format": "grouped" })
    .pipe(fs.createWriteStream(__dirname + "/kind,scope.md"));

/* name */
jsdoc2md
    .render(src, { "sort-by": "name", "global-index-format": "grouped" })
    .pipe(fs.createWriteStream(__dirname + "/name.md"));
