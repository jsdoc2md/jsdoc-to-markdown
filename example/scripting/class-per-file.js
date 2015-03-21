var jsdoc2md = require("../../");
var fs = require("fs");
var dmd = require("dmd");

try {
    fs.mkdirSync("tmp");
} catch(err){
   /* directory exists */
}

/* we only need to parse the source code once.. cache it */
jsdoc2md
    .render("example/src/*.js", { json: true })
    .pipe(fs.createWriteStream("tmp/source.json"))
    .on("close", dataReady);

function dataReady(){
    /* parse the json */
    var data = require("../../tmp/source");
    
    /* get a list of class names */
    var classes = data.reduce(function(prev, curr){
        if (curr.kind === "class") prev.push(curr.name);
        return prev;
    }, []);
    
    /* create a template per class, render each with dmd */
    renderMarkdown(classes, 0);
}

function renderMarkdown(classes, index){
    var className = classes[index];
    console.log("rendering: " + className);
    var template = '{{#class name="' + className + '"}}{{>docs}}{{/class}}';
    return fs.createReadStream("tmp/source.json")
        .pipe(dmd({ template: template }))
        .pipe(fs.createWriteStream("tmp/" + className + ".md"))
        .on("close", function(){
            var next = index + 1;
            if (classes[next]) renderMarkdown(classes, next);
        });
}
