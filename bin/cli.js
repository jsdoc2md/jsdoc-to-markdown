#!/usr/bin/env node
"use strict";

var cliArgs = require("command-line-args"),
    dope = require("console-dope"),
    jsdoc2md = require("../lib/jsdoc-to-markdown");
    
var cli = cliArgs([
    { name: "template", alias: "t", type: String,
      description: "A custom handlebars template to insert the rendered documentation into" 
    },
    { name: "preset", alias: "p", type: String,
      description: "Use a preset template" 
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
    header: "Renders jsdoc documentation as markdown",
    forms: [ "$ jsdoc2md <options> <source_files>" ]
});

try{
    var argv = cli.parse();
} catch(err){
    halt(err);
}

if(!argv.src){
    halt(new Error("Please supply at least one source file"));
}

if (argv.help){
    dope.log(usage);
    process.exit(0);
}

jsdoc2md.render(argv, function(err, result){
    if (err) halt(err);
    process.stdout.write(result);
});

function halt(err){
    if (argv){
        dope.red.error((argv.verbose ? err.stack : "") || "Error: " + err.message);
    } else {
        dope.red.error("Error: " + err.message);
    }
    dope.error(usage);
    process.exit(1);
}
