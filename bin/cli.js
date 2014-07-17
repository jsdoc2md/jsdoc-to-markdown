#!/usr/bin/env node
"use strict";

var cliArgs = require("command-line-args"),
    dope = require("console-dope"),
    jsdoc2md = require("../"),
    domain = require("domain");

var cli = cliArgs([
    {
        groups: "General",
        options: [
            { name: "src", type: Array, defaultOption: true,
              description: "The javascript source files."
            },
            { name: "template", alias: "t", type: String,
              description: "A custom handlebars template to insert the rendered documentation into"
            },
            { name: "json", alias: "j", type: Boolean,
              description: "Output the template data only"
            },
            { name: "verbose", alias: "v", type: Boolean,
              description: "More verbose error reporting"
            },
            { name: "help", alias: "h", type: Boolean,
              description: "Print usage information"
            }
        ]
    },
    {
        groups: "Parsing",
        options: [
            { name: "private", type: Boolean,
              description: "Include symbols marked @private in the output"
            },
            { name: "stats", alias: "s", type: Boolean,
              description: "Print a few stats about the doclets parsed."
            }
        ]
    },
    {
        groups: "Markdown",
        options: [
            { name: "heading-depth", type: Number,
              description: "root heading depth to begin the documentation from, defaults to 1 (`#`)."
            },
            { name: "plugin", type: Array, alias: "p",
              description: "Packages containing helper and/or partial overrides"
            },
            { name: "helper", type: Array,
              description: "helper overrides"
            },
            { name: "partial", type: Array,
              description: "partial overrides"
            }
        ]
    }
]);
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
console.dir(argv)
if(argv.General.src){
    var d = domain.create();
    d.on("error", halt);
    d.run(function(){
        var mdStream = jsdoc2md.render(argv.General.src, argv).pipe(process.stdout);
    });
    
} else {
    dope.error("No javascript source files specified, listening on stdin..");
    process.stdin.pipe(jsdoc2md.render(argv.src, argv)).pipe(process.stdout);
}

function halt(err){
    if (argv){
        dope.red.error(argv.verbose ? (err.stack || err) : err.message);
    } else {
        dope.red.error(err.stack);
    }
    dope.error(usage);
    process.exit(1);
}
