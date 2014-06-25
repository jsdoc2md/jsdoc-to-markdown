var a = require("array-tools");

module.exports = function(handlebars){
    handlebars.registerHelper("methodSig", function(params){
        return a.arrayify(params).filter(function(param){
            return param.name && param.name.indexOf(".") === -1;
        }).map(function(param){
            if (param.variable){
                return param.optional ? "[..." + param.name + "]" : "..." + param.name;
            } else {
                return param.optional ? "[" + param.name + "]" : param.name;
            }
        }).join(", ");
    });
};
