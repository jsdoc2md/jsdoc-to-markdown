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
    { name: "json", alias: "j", type: Boolean },
    { name: "src", type: Array, defaultOption: true },
]).parse();

if (!argv.src){
    dope.red.error("specify at least one source file");
    process.exit(1);
}

var templatePath = path.resolve(__dirname, "..", "jsdoc-template"),
    cmd = util.format(
		"%s -t %s %s", 
		path.resolve(__dirname, "..", "node_modules", ".bin", "jsdoc"),
		templatePath, 
		argv.src.join(" ")
	);
	console.log("CMD", cmd)

function render(data){
    var template = argv.template
        ? mfs.read(argv.template)
        : mfs.read(path.resolve(__dirname, "..", "templates", "default.hbs"))
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
