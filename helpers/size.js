var a = require("array-tools");

module.exports = function(handlebars){
    handlebars.registerHelper("size", function(array, min){
        return Array.isArray(array) && array.length >= min;
    });
};
