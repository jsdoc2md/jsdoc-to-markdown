var a = require("array-tools");

module.exports = function(handlebars){
    handlebars.registerHelper("string-split", function(input, separator){
        return input.split(separator);
    });
};
