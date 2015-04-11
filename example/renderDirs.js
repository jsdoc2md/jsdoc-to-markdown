"use strict";
var fs = require("fs");
var path = require("path");

function renderDir(dir){
    fs.readdirSync(dir).forEach(function(file){
        file = path.resolve(dir, file);
        if (fs.statSync(file).isDirectory()){
            var render = path.resolve(file, "render");
            console.log("running: " + render);
            require(render);
        }
    });
    
}

renderDir(__dirname + "/options/formatting options");
renderDir(__dirname + "/options/parse options");
renderDir(__dirname + "/scripting");
renderDir(__dirname + "/templating/selector helpers");
renderDir(__dirname + "/tags");
