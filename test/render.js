"use strict";
var yuidoc2md = require("../"),
    mfs = require("more-fs");

function halt(err){
    console.error("Error: " + err.message);
    process.exit(1);
}

function render(input, output, preset, index){
    yuidoc2md.render({ preset: preset, src: "test/input/" + input, index: index }, function(err, result){
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

render("commonjs/object.js", "commonjs/object.md", "modules");
render("commonjs/object.js", "commonjs/object-with-index.md", "modules", true);
render("commonjs/module.js", "commonjs/module.md", "modules");
render("commonjs/class.js", "commonjs/class.md", "modules");
render("commonjs/object-with-alias.js", "commonjs/object-with-alias.md", "modules");
