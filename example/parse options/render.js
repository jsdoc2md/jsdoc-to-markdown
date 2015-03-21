"use strict";
var fs = require("fs");
var path = require("path");

fs.readdirSync(__dirname).forEach(function(file){
    file = path.resolve(__dirname, file);
    if (fs.statSync(file).isDirectory()){
        var render = path.resolve(file, "render");
        console.log("running: " + render);
        require(render);
    }
});
