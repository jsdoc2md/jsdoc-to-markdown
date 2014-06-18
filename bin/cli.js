#!/usr/bin/env node
"use strict";

var cliArgs = require("command-line-args"),
    cp = require("child_process"),
    path = require("path"),
    util = require("util"),
    boil = require("boil-js"),
    mfs = require("more-fs"),
    dope = require("console-dope");

require("../")(boil);

var cli = cliArgs([
    { name: "template", alias: "t", type: String,
      description: "A custom handlebars template to insert the rendered documentation into" },
    { name: "preset", alias: "p", type: String, value: "modules",
      description: "Use a preset template" },
    { name: "json", alias: "j", type: Boolean,
      description: "Output the template data only" },
    { name: "help", alias: "h", type: Boolean,
      description: "Print usage information" },
    { name: "src", type: Array, defaultOption: true,
      description: "The javascript source files. The default option." },
    { name: "index", type: Boolean,
      description: "Print usage information" },
]);
var usage = cli.usage({
    forms: [ "$ jsdoc2md <options> <source_files>" ]
});

try{
    var argv = cli.parse();
} catch(err){
    halt(err.message);
}
// console.dir(argv)

if (argv.help){
    dope.log(usage);
    process.exit(0);
}

if (!argv.src){
    halt("specify at least one source file");
}

var jsdocTemplatePath = path.resolve(__dirname, "..", "jsdoc-template"),
    cmd = util.format(
		"%s -t %s %s",
		path.resolve(__dirname, "..", "node_modules", ".bin", "jsdoc"),
		jsdocTemplatePath,
		argv.src.join(" ")
	);

function render(data){
    data.argv = argv;
	var templateFile;
	if (argv.template){
		templateFile = argv.template;
	} else {
		templateFile = path.resolve(__dirname, "..", "templates", argv.preset + ".hbs");
	}
    var template = mfs.read(templateFile);
    if (template){
        console.log(boil.render(template, data));
    } else {
        halt(template === null ? "Template file doesn't exist" : "Template file is empty");
    }
}

cp.exec(cmd, { maxBuffer: 1000 * 1024 }, function(err, stdout, stderr){
    if (err){
        console.error(err)
        throw err;
    }
    if (argv.json){
        console.log(stdout);
    } else {
        render(JSON.parse(stdout));
    }
});

function halt(msg){
    dope.red.error("Error: " + msg);
    dope.log(usage);
    process.exit(1);
}
