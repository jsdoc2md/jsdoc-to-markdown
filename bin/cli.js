#!/usr/bin/env node
"use strict";

var cliArgs = require("command-line-args"),
    dope = require("console-dope"),
    jsdoc2md = require("../lib/jsdoc-to-markdown");
    
var cli = cliArgs([
    { name: "template", alias: "t", type: String,
      description: "A custom handlebars template to insert the rendered documentation into,\noverriding the default" },
    { name: "preset", alias: "p", type: String, value: "default",
      description: "Use a preset template ('default', 'global' or 'modules')" },
    { name: "json", alias: "j", type: Boolean,
      description: "Output the template data only" },
    { name: "help", alias: "h", type: Boolean,
      description: "Print usage information" },
    { name: "src", type: Array, defaultOption: true,
      description: "The javascript source files. The default option." },
    { name: "index", type: Boolean,
      description: "Include an index for each module and class, linking to members" },
    { name: "skip-heading", type: Boolean,
    description: "Skip the module heading, useful if you already have the heading elsewhere\nin your template." },
    { name: "private", type: Boolean,
      description: "Include symbols marked @private in the output" }
]);
var usage = cli.getUsage({
    title: "jsdoc-to-markdown",
    header: "Renders jsdoc documentation as markdown",
    forms: [ "$ jsdoc2md <options> <source_files>" ]
});

try{
    var argv = cli.parse();
} catch(err){
    halt(err);
}

if (argv.help){
    dope.log(usage);
    process.exit(0);
}

jsdoc2md.render(argv, function(err, result){
    if (err) halt(err);
    process.stdout.write(result);
});

function halt(err){
    dope.red.error(err.stack || "Error: " + err.message);
    dope.error(usage);
    process.exit(1);
}
