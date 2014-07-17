var test = require("tape");
var jsdoc2md = require("../");
var fs = require("fs");
var path = require("path");
var spawn = require("child_process").spawn;

var inputFile = "test/fixture/input/globals/ignore.js";

test("simple", function(t){
    t.plan(1);
    
    jsdoc2md.render(inputFile).on("readable", function(){
        var md = this.read();
        if (md) t.ok(/a visible global/.test(md.toString()));
    });
});

test("json option", function(t){
    t.plan(1);
    
    jsdoc2md.render(inputFile, { json: true }).on("readable", function(){
        var md = this.read();
        if (md) t.ok(/"longname": "visible"/.test(md.toString()));
    });
});
