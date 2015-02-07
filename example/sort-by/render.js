"use strict";
var jsdoc2md = require("../../");
var fs = require("fs");

/* none */
jsdoc2md
    .render("example/src/sorting.js", { "sort-by": "none", "global-index-format": "grouped" })
    .pipe(fs.createWriteStream("example/sort-by/none.md"));

/* kind */
jsdoc2md
    .render("example/src/sorting.js", { "sort-by": "kind", "global-index-format": "grouped" })
    .pipe(fs.createWriteStream("example/sort-by/kind.md"));

/* scope */
jsdoc2md
    .render("example/src/sorting.js", { "sort-by": "scope", "global-index-format": "grouped" })
    .pipe(fs.createWriteStream("example/sort-by/scope.md"));

/* scope,kind */
jsdoc2md
    .render("example/src/sorting.js", { "sort-by": "scope,kind", "global-index-format": "grouped" })
    .pipe(fs.createWriteStream("example/sort-by/scope,kind.md"));

/* kind,scope */
jsdoc2md
    .render("example/src/sorting.js", { "sort-by": "kind,scope", "global-index-format": "grouped" })
    .pipe(fs.createWriteStream("example/sort-by/kind,scope.md"));
