"use strict";
var jsdoc2md = require("../../../");
var fs = require("fs");
var dmd = require("dmd");
var util = require("util");
var path = require("path");

var p = {
    src: path.resolve(__dirname, "../../src/*.js"),
    json: path.resolve(__dirname, "./source.json"),
    output: path.resolve(__dirname, "./%s.md")
}

/* we only need to parse the source code once.. cache it */
jsdoc2md({ src: p.src, json: true })
    .pipe(fs.createWriteStream(p.json))
    .on("close", dataReady);

function dataReady(){
    /* parse the jsdoc-parse output.. */
    var data = require(p.json);
    
    /* ..because we want an array of class names */
    var classes = data.reduce(function(prev, curr){
        if (curr.kind === "class") prev.push(curr.name);
        return prev;
    }, []);

    /* render an output file for each class */
    renderMarkdown(classes, 0);
}

function renderMarkdown(classes, index){
    var className = classes[index];
    var template = util.format('{{#class name="%s"}}{{>docs}}{{/class}}', className);
    console.log(util.format(
        "rendering %s, template: %s", className, template
    ));
    return fs.createReadStream(p.json)
        .pipe(dmd({ template: template }))
        .pipe(fs.createWriteStream(util.format(p.output, className)))
        .on("close", function(){
            var next = index + 1;
            if (classes[next]){
                renderMarkdown(classes, next);
            } else {
                fs.unlinkSync(p.json);
            }
        });
}
