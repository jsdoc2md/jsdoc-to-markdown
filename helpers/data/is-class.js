var a = require("array-tools");

module.exports = function(handlebars){
    handlebars.registerHelper("isClass", function(options){
        return this.kind === "class" && !this.isConstructor;
    });
};
