var o = require("object-tools");

module.exports = function(handlebars){
    handlebars.registerHelper("whereno", function(array, options){
        return Array.isArray(array) && array.filter(function(item){
            return !o.exists(item, options.hash);
        });
    });
};
