var a = require("array-tools");

module.exports = function(handlebars){
    handlebars.registerHelper("constructorHasDocs", function(options){
        return this.kind === "class" && (this.description || this.params || this.returns);
    });
};
