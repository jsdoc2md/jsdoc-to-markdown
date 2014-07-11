var a = require("array-tools");

module.exports = function(handlebars){
    handlebars.registerHelper("modules", function(options){
        return a.where(options.data.root, { kind: "module" });
    });
};
