var s = require("string-tools");

module.exports = function(handlebars){
    handlebars.registerHelper("string-repeat", function(string, times){
        return s.repeat(string, times);
    });
};
