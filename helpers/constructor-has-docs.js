module.exports = function(handlebars){
    handlebars.registerHelper("constructorHasDocs", function(){
        return this.kind === "class" && (this.description || this.params || this.returns);
    });
};
