var a = require("array-tools");

module.exports = function(handlebars){
    handlebars.registerHelper("instantiate", function(input){
        return input.charAt(0).toLowerCase() + input.slice(1);
    });
};
