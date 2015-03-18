#!/usr/bin/env node
"use strict";
var cliArgs = require("command-line-args");
var dope = require("console-dope");
var jsdoc2md = require("../");
var domain = require("domain");
var dmd = require("dmd");
var jsdocParse = require("jsdoc-parse");

var cliOptions = [
    { 
        groups: ["jsdoc2md options", "all"],
        options: [
            { name: "verbose", alias: "v", type: Boolean,
              description: "More verbose error reporting"
            },
            { name: "help", alias: "h", type: Boolean,
              description: "Print usage information"
            },
            { name: "json", alias: "j", type: Boolean,
              description: "Output the parsed jsdoc data only"
            }
        ]
    },
    { 
        groups: ["jsdoc-parse options", "all"],
        options: jsdocParse.cliOptions
    },
    { 
        groups: ["dmd options", "all"],
        options: dmd.cliOptions
    }
];

var cli = cliArgs(cliOptions);

var usage = cli.getUsage({
    title: "jsdoc-to-markdown",
    header: "Markdown API documentation generator",
    forms: [
        "$ jsdoc2md [<options>] <source_files>"
    ],
    groups: [ "jsdoc2md options", "jsdoc-parse options", "dmd options" ]
});

try{
    var argv = cli.parse();
} catch(err){
    halt(err);
}

if (argv.all.help){
    dope.log(usage);
    process.exit(0);
}

var d = domain.create();
d.on("error", halt);
d.run(function(){
    if(argv.all.src){
        jsdoc2md.render(argv.all.src, argv.all).pipe(process.stdout);
    } else {
        process.stdin.pipe(jsdoc2md.render(argv.all)).pipe(process.stdout);
    }
});

function halt(err){
    if (err.code === "EPIPE") process.exit(0); /* no big deal */

    if (argv.all){
        if (argv.all.verbose){
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
