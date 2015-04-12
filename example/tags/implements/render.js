"use strict";
var render = require("../../render");
var path = require("path");

var src = [ path.resolve(__dirname, "../interface/src.js"), __dirname + "/src.js" ]
render(
    { 
        src: src,
        template: __dirname + "/template.hbs",
        "global-index-format": "none",
        source: src
    },
    __dirname + "/readme.md"
);
