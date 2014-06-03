var util = require("util"),
	w = require("wodge");

/**
 * Generate documentation output.
 *
 * @param {TAFFY} data - A TaffyDB collection representing
 *                       all the symbols documented in your code.
 * @param {object} opts - An object with options information.
 */
exports.publish = function(data, opts) {
    var json = data({ undocumented: { "!is": true }}).map(function(record){
        return w.without(record, [ "comment", "meta", "undocumented", "___id", "___s" ]);
    });
    console.log(JSON.stringify(json, null, "  "));
};
