#!/usr/bin/env node
"use strict";

var cliArgs = require("command-line-args");
var dope = require("console-dope");
var jsdoc2md = require("../");
var domain = require("domain");
var dmd = require("dmd");
var jsdocParse = require("jsdoc-parse");

var args = [
    { name: "verbose", alias: "v", type: Boolean,
      description: "More verbose error reporting"
    },
    { name: "help", alias: "h", type: Boolean,
      description: "Print usage information"
    },
    { name: "json", alias: "j", type: Boolean,
      description: "Output the parsed jsdoc data only"
    }
];

var cli = cliArgs(args.concat(jsdocParse.cliOptions).concat(dmd.cliOptions));

var usage = cli.getUsage({
    title: "jsdoc-to-markdown",
    header: "Markdown API documentation generator, good for Github projects",
    forms: [
        "$ jsdoc2md [<options>] <source_files>"
    ]
});

try{
    var argv = cli.parse({ unexpectedType: "string" });
} catch(err){
    halt(err);
}

if (argv.help){
    dope.log(usage);
    process.exit(0);
}

var d = domain.create();
d.on("error", halt);
d.run(function(){
    if(argv.src){
        jsdoc2md.render(argv.src, argv).pipe(process.stdout);
    } else {
        process.stdin.pipe(jsdoc2md.render(argv)).pipe(process.stdout);
    }
});

function halt(err){
    if (err.code === "EPIPE") process.exit(0); /* no big deal */

    if (argv){
        if (argv.verbose){
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
