"use strict";
module.exports = function(handlebars){
    handlebars.registerHelper("gt", function(arg1, arg2){
        return arg1 > arg2;
    });
};
