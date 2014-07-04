var util = require("util"),
	o = require("object-tools");

/**
 * Generate documentation output.
 *
 * @param {TAFFY} data - A TaffyDB collection representing
 *                       all the symbols documented in your code.
 * @param {object} opts - An object with options information.
 */
exports.publish = function(data, opts) {
    var json = data({ undocumented: { "!is": true }}).map(function(record){
        if (record.properties) {
            record.properties = record.properties.map(function(record){
                return wantedProperties(record);
            });
        }
        
        if (record.kind === "typedef" && !record.scope) record.scope = "global";
        return wantedProperties(record);
    });
    console.log(JSON.stringify(json, null, "  "));
};

function wantedProperties(input){
    if (input.meta && input.meta.code) input.codeName = input.meta.code.name;
    return o.without(input, [ "comment", "meta", "undocumented", "___id", "___s" ]);
}
