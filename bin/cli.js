#!/usr/bin/env node
"use strict";

// $ jsdoc2md --template README.hbs --src lib/* 

var Model = require("nature").Model,
    cp = require("child_process"),
    path = require("path"),
    util = require("util"),
    boil = require("boil-js"),
    mfs = require("more-fs");

var argv = new Model()
    .define({ name: "template", type: "string" })
    .define({ name: "src", type: Array, defaultOption: true })
    .set(process.argv);

var templatePath = path.resolve(__dirname, "..", "jsdoc-template"),
    cmd = util.format("jsdoc -t %s %s", templatePath, argv.src);

boil.registerHelpers(path.resolve(__dirname, "..", "helpers", "*.js"));
boil.registerHelpers(path.resolve(__dirname, "..", "node_modules", "handlebars-array", "lib", "*.js"));
boil.registerPartials(path.resolve(__dirname, "..", "partials", "*.hbs"));

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
    console.log(stdout);
    render(JSON.parse(stdout));
});
