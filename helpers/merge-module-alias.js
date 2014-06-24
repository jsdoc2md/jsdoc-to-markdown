var a = require("array-tools"),
    util = require("util");

module.exports = function(handlebars){
    handlebars.registerHelper("mergeModuleAlias", function(options){
        var alias = a.findWhere(options.data.root, { alias: "module:" + this.name });
        if (alias){
            this.description = this.description || alias.description;
            this.params = this.params || alias.params;
            this.returns = this.returns || alias.returns;
            this.examples = this.examples || alias.examples;
            this._merged = true;
        }
    });
};
