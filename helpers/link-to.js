var a = require("array-tools"),
    util = require("util");

module.exports = function(handlebars){
    handlebars.registerHelper("linkTo", function linkTo(longname, options){
        if (Array.isArray(longname)){
            return longname.map(function(name){
                return linkTo(name, options);
            });
        } else {
            if (["string", "object", "number", "boolean", "array"].indexOf(longname) > -1){
                return "`" + longname + "`";
            } else {
                var linked = a.findWhere(options.data.root, { longname: longname });
                return util.format("[%s](#%s)", linked.name || "!error!",handlebars.helpers.anchorName(longname));
            }
        }
    });
};
