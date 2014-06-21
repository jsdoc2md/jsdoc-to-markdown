var a = require("array-tools"),
    util = require("util");

module.exports = function(handlebars){
    handlebars.registerHelper("linkTo", function linkTo(longname){
        if (Array.isArray(longname)){
            return longname.map(function(name){
                return linkTo(name);
            });
        } else {
            return util.format("![%s](%s)", "CLIVE", "#hater");
        }
    });
};
