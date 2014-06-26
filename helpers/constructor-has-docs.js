var a = require("array-tools");

module.exports = function(handlebars){
    handlebars.registerHelper("constructorHasDocs", function(){
        return this.kind === "class" && (this.classdesc || this.description || this.params || this.returns);
    });
};
