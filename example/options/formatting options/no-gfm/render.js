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

src = __dirname + "/../../../src/class-animal.js";
render(
    { 
        src: src,
        template: __dirname + "/separator.hbs",
        "global-index-format": "none",
        "separators": true,
        source: src
    },
    __dirname + "/separator.md"
);
