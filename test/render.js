"use strict";
var yuidoc2md = require("../"),
    mfs = require("more-fs");

function halt(err){
    console.error("Error: " + err.message);
    process.exit(1);
}

function render(input, output, preset){
    yuidoc2md.render({ preset: preset, src: "test/input/" + input}, function(err, result){
        if (err) halt(err);
        mfs.write("test/output/" + output, result);
    });
}

render("globals/members.js", "globals/members.md", "globals");
render("globals/functions.js", "globals/functions.md", "globals");
render("globals/constants.js", "globals/constants.md", "globals");
render("globals/class-constructors.js", "globals/class-constructors.md", "globals");
render("globals/class-methods.js", "globals/class-methods.md", "globals");
render("globals/class-properties.js", "globals/class-properties.md", "globals");
render("globals/class-all.js", "globals/class-all.md", "globals");
render("globals/*.js", "globals/all.md", "globals");

// jsdoc2md test/input/globals/*.js -p globals > test/output/globals/all.md &&
// jsdoc2md test/input/commonjs/object.js -p modules > test/output/commonjs/object.md &&
// jsdoc2md test/input/commonjs/object.js -p modules --index > test/output/commonjs/object-with-index.md &&
// jsdoc2md test/input/commonjs/module.js -p modules > test/output/commonjs/module.md &&
// jsdoc2md test/input/commonjs/class.js -p modules > test/output/commonjs/class.md &&
// jsdoc2md test/input/commonjs/object-with-alias.js -p modules > test/output/commonjs/object-with-alias.md