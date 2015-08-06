"use strict";
var jsdocParse = require("jsdoc-parse");
var dmd = require("dmd");

var cliOptions = [
    {
        name: "verbose", description: "More verbose error reporting",
        alias: "v", type: Boolean, group: "jsdoc2md"
    },
    {
        name: "help", description: "Print usage information",
        alias: "h", type: Boolean, group: "jsdoc2md"
    },
    {
        name: "json", description: "Output the jsdoc-parse json only",
        alias: "j", type: Boolean, group: "jsdoc2md"
    },
    {
        name: "config", description: "Print the stored config and exit",
        type: Boolean, group: "jsdoc2md"
    }
];

cliOptions = cliOptions
    .concat(jsdocParse.cliOptions.map(function(def){
        def.group = "jsdocParse";
        return def;
    }))
    .concat(dmd.cliOptions.map(function(def){
        def.group = "dmd";
        return def;
    }));

module.exports = cliOptions;
