module.exports = function(handlebars){
    handlebars.registerHelper("instantiate", function(input){
        /* memberof a module */
        if (this.memberof.search("module:") > -1){
            return this.memberof.replace("module:", "");

        /* memberof a class */
        } else {
            return input.charAt(0).toLowerCase() + input.slice(1);
        }
    });
};
