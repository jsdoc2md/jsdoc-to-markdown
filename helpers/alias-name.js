var a = require("array-tools");

function instantiate(input){
    return input.charAt(0).toLowerCase() + input.slice(1);
}

module.exports = function(handlebars){
    handlebars.registerHelper("aliasName", function(options){
        var alias = a.findWhere(options.data.root, { longname: this.longname, kind: "module" });
        var name = "";
        if (alias){
            name = alias.alias || alias.name;
        } else {
            name = this.name;
        }
        if (/module:/.test(this.name)) name = this.codeName;
        return name;
    });
};
