var a = require("array-tools");

function instantiate(input){
    return input.charAt(0).toLowerCase() + input.slice(1);
}

module.exports = function(handlebars){
    handlebars.registerHelper("aliasName", function(options){
        var alias = a.findWhere(options.data.root, { longname: this.longname, kind: "module" });
        if (alias){
            return alias.alias || alias.name;
        } else {
            return this.name;
        }
    });
};
