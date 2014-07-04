var a = require("array-tools");

module.exports = function(handlebars){
    handlebars.registerHelper("isExported", function(options){
        var isExported = 
            this.kind !== "module" && 
            a.exists(options.data.root, { kind: "module", longname: this.longname });
        return isExported;
    });
};
