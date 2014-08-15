#!/usr/bin/env node
"use strict";

var cliArgs = require("command-line-args"),
    dope = require("console-dope"),
    jsdoc2md = require("../"),
    domain = require("domain");

var cli = cliArgs([
    { name: "src", type: Array, defaultOption: true,
      description: "A list of javascript source files or glob expressions"
    },
    { name: "template", alias: "t", type: String,
      description: "A custom handlebars template to insert the rendered documentation into"
    },
    { name: "json", alias: "j", type: Boolean,
      description: "Output the parsed jsdoc data only"
    },
    { name: "verbose", alias: "v", type: Boolean,
      description: "More verbose error reporting"
    },
    { name: "help", alias: "h", type: Boolean,
      description: "Print usage information"
    },
    { name: "private", type: Boolean,
      description: "Include symbols marked @private in the output"
    },
    { name: "stats", alias: "s", type: Boolean,
      description: "Print a few stats about the doclets parsed."
    },
    { name: "heading-depth", type: Number,
      description: "root heading depth, defaults to 1 (`#`)."
    },
    { name: "plugin", type: Array, alias: "p",
      description: "Use an installed package containing helper and/or partial overrides"
    },
    { name: "helper", type: Array,
      description: "handlebars helper files to override or extend the default set"
    },
    { name: "partial", type: Array,
      description: "handlebars partial files to override or extend the default set"
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
