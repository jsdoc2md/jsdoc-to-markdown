var a = require("array-tools"),
    util = require("util");

module.exports = function(handlebars){
    handlebars.registerHelper("mergeModuleAlias", function(options){
        var alias = a.findWhere(options.data.root, { alias: "module:" + this.name });
        if (alias){
            this.description = this.description || alias.classdesc || alias.description;
            this.params = this.params || alias.params;
            this.returns = this.returns || alias.returns;
            this.examples = this.examples || alias.examples;
            this.augments = this.augments || alias.augments;
            this._merged = true;
        }
    });
};
