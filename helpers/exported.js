var a = require("array-tools");

module.exports = function(handlebars){
    handlebars.registerHelper("exported", function(options){
        var self = this;
        return options.data.root.filter(function(item){
            return item.kind !== "module" && item.name === self.longname;
        })[0];
    });
};
