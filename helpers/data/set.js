var a = require("array-tools");

module.exports = function(handlebars){
    handlebars.registerHelper("set", function(key, value){
        this[key] = value;
    });
};
