var test = require("tape");
var jsdoc2md = require("../");
var fs = require("fs");
var path = require("path");
var spawn = require("child_process").spawn;

var inputPath = "test/fixture/input/globals/ignore.js";

try{
    fs.mkdirSync("tmp");
} catch(err){
    // dir exists
}

test("stdin check", function(t){
    t.plan(1);

    var inputFile = fs.openSync(inputPath, "r");
    var outputFile = fs.openSync("tmp/ignore.md", "w");

    var handle = spawn("node", [ "bin/cli.js" ], {
        stdio: [ inputFile, outputFile, process.stderr ]
    });
    handle.on("close", function(){
        var md = fs.readFileSync("tmp/ignore.md", "utf8");
        if (md) t.ok(/#visible/.test(md.toString()));
    });
});

test("json option", function(t){
    t.plan(1);

    var outputFile = fs.openSync("tmp/ignore.json", "w");

    var handle = spawn(
        "node", 
        [ "bin/cli.js", "--json", inputPath ], 
        { stdio: [ "ignore", outputFile, "ignore"]}
    );
    handle.on("close", function(){
        var json = fs.readFileSync("tmp/ignore.json", "utf8");
        if (json) t.ok(/"longname": "visible"/.test(json.toString()));
    });
});
