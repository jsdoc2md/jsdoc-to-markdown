#!/usr/bin/env node
"use strict";

var cliArgs = require("command-line-args"),
    dope = require("console-dope"),
    jsdoc2md = require("../");

var cli = cliArgs([
    { name: "template", alias: "t", type: String,
      description: "A custom handlebars template to insert the rendered documentation into"
    },
    { name: "json", alias: "j", type: Boolean,
      description: "Output the template data only"
    },
    { name: "verbose", alias: "v", type: Boolean,
      description: "More verbose output and error reporting"
    },
    { name: "help", alias: "h", type: Boolean,
      description: "Print usage information"
    },
    { name: "src", type: Array, defaultOption: true,
      description: "The javascript source files. The default option."
    },
    { name: "private", type: Boolean,
      description: "Include symbols marked @private in the output"
    },
    { name: "heading-depth", type: Number,
      description: "root heading depth to begin the documentation from, defaults to 2 (`##`)."
    },
    { name: "stats", alias: "s", type: Boolean,
      description: "Print a few stats about the doclets parsed."
    }
]);
var usage = cli.getUsage({
    title: "jsdoc-to-markdown",
    header: "Markdown API documentation generator, good for Github projects",
    forms: [
        "$ jsdoc2md [<options>] <source_files>",
        "$ cat doclets.json | jsdoc2md [<options>]"
    ]
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

if(argv.src){
    var mdStream = jsdoc2md.render(argv.src, argv)
    mdStream.pipe(process.stdout);
    mdStream.on("error", halt);
} else {
    process.stdin.pipe(jsdoc2md.render(argv)).pipe(process.stdout);
}

function halt(err){
    if (argv){
        dope.red.error(argv.verbose ? err.stack : err.message);
    } else {
        dope.red.error(err);
    }
    dope.error(usage);
    process.exit(1);
}
