var a = require("array-tools"),
    util = require("util");

module.exports = function(handlebars){
    handlebars.registerHelper("mergeModuleAlias", function(options){
        var alias = a.findWhere(options.data.root, { alias: "module:" + this.name });
        if (alias){
            this.params = alias.params;
            this.returns = alias.returns;
            this.examples = alias.examples;
        }
    });
};
