var w = require("wodge");

module.exports = function(handlebars){
    handlebars.registerHelper("concat", function(a, b){
        return a+b;
    });
};
