var test = require("tape");
var jsdoc2md = require("../");
var fs = require("fs");
var path = require("path");
var spawn = require("child_process").spawn;

try{
    fs.mkdirSync("tmp");
} catch(err){
    // dir exists
}

test("returns correct data", function(t){
    t.plan(1);
    
    jsdoc2md.render("test/fixture/input/globals/ignore.js").on("readable", function(){
        var md = this.read();
        if (md) t.ok(/a visible global/.test(md.toString()));
    });
});

// test("cli check", function(t){
//     t.plan(1);
//
//     var inputFile = fs.openSync("test/fixture/input/globals/ignore.js", "r");
//     var outputFile = fs.openSync("tmp/ignore.md", "w");
//
//     var handle = spawn("node", [ path.join("bin", "cli.js") ], {
//         stdio: [ inputFile, outputFile, process.stderr ]
//     });
//     handle.on("close", function(){
//         var md = fs.readFileSync("tmp/ignore.md", "utf8");
//         if (md) t.ok(/a visible global/.test(md.toString()));
//     });
// });
