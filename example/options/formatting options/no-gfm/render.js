"use strict";
var render = require("../../../render");

var src = __dirname + "/../../../src/function-taze.js";
render(
    { 
        src: src,
        template: __dirname + "/param-list.hbs",
        source: src
    },
    __dirname + "/param-list.md"
);

src = __dirname + "/../../../src/enum.js";
render(
    { 
        src: src,
        template: __dirname + "/properties.hbs",
        source: src
    },
    __dirname + "/properties.md"
);
