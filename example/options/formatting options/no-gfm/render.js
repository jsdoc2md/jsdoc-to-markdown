"use strict";
var render = require("../../../render");
render(
    { 
        src: __dirname + "/../../../src/*.js",
        template: __dirname + "/template.hbs",
        "no-gfm": true
    },
    __dirname + "/readme.md"
);
