#!/usr/bin/env node
"use strict";
var fs = require("fs");
var cliArgs = require("command-line-args");
var dope = require("console-dope");
var jsdoc2md = require("../");
var domain = require("domain");
var dmd = require("dmd");
var jsdocParse = require("jsdoc-parse");
var loadConfig = require("config-master");
var homePath = require("home-path");
var path = require("path");
var o = require("object-tools");
var cliOptions = require("../lib/cli-options");

var cli = cliArgs(cliOptions);

var usage = cli.getUsage({
    title: "jsdoc-to-markdown",
    description: "Markdown API documentation generator.",
    footer: "Project home: [underline]{https://github.com/jsdoc2md/jsdoc-to-markdown}",
    forms: [
        "$ jsdoc2md [<options>] --src <source_files>",
        "$ jsdoc2md --help",
        "$ jsdoc2md --config",
        "$ jsdoc2md --stats <source_files>",
        "$ jsdoc2md --json <source_files>"
    ],
    groups: {
        jsdoc2md: { 
            title: "jsdoc2md",
            description: "General options."
        },
        jsdocParse: { 
            title: "jsdoc-parse",
            description: "These options affect how the javascript source is parsed."
        },
        dmd: { 
            title: "dmd",
            description: "These options affect how the markdown output looks."
        }
    }
});

try{
    var argv = cli.parse();
} catch(err){
    halt(err);
}

var dmdConfig = loadConfig(
    path.join(homePath(), ".dmd.json"),
    path.join(process.cwd(), ".dmd.json"),
    { jsonPath: path.join(process.cwd(), "package.json"), configProperty: "dmd" }
);
var parseConfig = loadConfig(
    path.join(homePath(), ".jsdoc-parse.json"),
    path.join(process.cwd(), ".jsdoc-parse.json"),
    { jsonPath: path.join(process.cwd(), "package.json"), configProperty: "jsdoc-parse" }
);
var jsdoc2mdConfig = loadConfig(
    path.join(homePath(), ".jsdoc2md.json"),
    path.join(process.cwd(), ".jsdoc2md.json"),
    { jsonPath: path.join(process.cwd(), "package.json"), configProperty: "jsdoc2md" }
);

var config = o.extend(parseConfig, dmdConfig, jsdoc2mdConfig, argv._all);

if (config.template){
    config.template = fs.readFileSync(config.template, "utf8");
}

if (config.help){
    dope.log(usage);
    process.exit(0);
}

if (config.config){
    console.log(JSON.stringify(o.without(config, "config"), null, "  "));
    process.exit(0);
}

var d = domain.create();
d.on("error", halt);
d.run(function(){
    if(config.src){
        jsdoc2md(config).pipe(process.stdout);
    } else {
        process.stdin.pipe(jsdoc2md(config)).pipe(process.stdout);
    }
});

function halt(err){
    if (err.code === "EPIPE") process.exit(0); /* no big deal */

    if (config){
        if (config.verbose){
            dope.red.error(err.stack || err);
        } else {
            dope.red.error("Error: " + err.message);
            dope.red.error("(run jsdoc2md with --verbose for a stack trace)");
        }
    } else {
        dope.red.error(err.stack);
    }
    dope.error(usage);
    process.exit(1);
}
