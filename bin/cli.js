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

var argv = cliArgs([
    { name: "template", alias: "t", type: String },
    { name: "preset", alias: "p", type: String },
    { name: "json", alias: "j", type: Boolean },
    { name: "src", type: Array, defaultOption: true },
]).parse();

if (!argv.src){
    dope.red.error("specify at least one source file");
    process.exit(1);
}

var jsdocTemplatePath = path.resolve(__dirname, "..", "jsdoc-template"),
    cmd = util.format(
		"%s -t %s %s", 
		path.resolve(__dirname, "..", "node_modules", ".bin", "jsdoc"),
		jsdocTemplatePath, 
		argv.src.join(" ")
	);

function render(data){
	var template = "";
	if (argv.template){
		template = mfs.read(argv.template);
	} else if (argv.preset){
		template = mfs.read(path.resolve(__dirname, "..", "templates", argv.preset + ".hbs"));
	} else {
		template = mfs.read(path.resolve(__dirname, "..", "templates", "default.hbs"));
	}
    console.log(boil.render(template, data));
}

cp.exec(cmd, function(err, stdout, stderr){
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
