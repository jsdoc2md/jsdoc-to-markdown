var w = require("wodge");

module.exports = function(handlebars){
    handlebars.registerHelper("paramList", function(params){
        return w.arrayify(params).map(function(param){
            return param.optional ? "[" + param.name + "]" : param.name;
        }).join(", ");
    });
};
