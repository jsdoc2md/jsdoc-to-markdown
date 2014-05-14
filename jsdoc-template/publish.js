var util = require("util");

/**
 * Generate documentation output.
 *
 * @param {TAFFY} data - A TaffyDB collection representing
 *                       all the symbols documented in your code.
 * @param {object} opts - An object with options information.
 */
exports.publish = function(data, opts) {
    var json = data({ undocumented: { "!is": true }}).map(function(record){
        var output = {};
        if (record.description) output.description = record.description;
        if (record.name) output.name = record.name;
        if (record.kind) output.kind = record.kind;
        if (record.classdesc) output.classdesc = record.classdesc;
        if (record.augments) output.augments = record.augments;
        if (record.memberof) output.memberof = record.memberof;
        if (record.scope) output.scope = record.scope;
        if (record.params) output.params = record.params;
        if (record.returns) output.returns = record.returns;
        if (record.examples) output.examples = record.examples;
        return output;
    });
    console.log(JSON.stringify(json, null, "  "));
};
