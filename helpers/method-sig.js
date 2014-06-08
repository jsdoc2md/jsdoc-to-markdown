var w = require("wodge");

module.exports = function(handlebars){
    handlebars.registerHelper("methodSig", function(params){
        return w.arrayify(params).map(function(param){
            if (param.variable){
                return param.optional ? "[..." + param.name + "]" : "..." + param.name;
            } else {
                return param.optional ? "[" + param.name + "]" : param.name;
            }
        }).join(", ");
    });
};
