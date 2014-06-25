var a = require("array-tools"),
    util = require("util");

module.exports = function(handlebars){
    handlebars.registerHelper("linkTo", function linkTo(longname, options){
        if (Array.isArray(longname)){
            return longname.map(function(name){
                return linkTo(name, options);
            });
        } else {
            if (["string", "object", "number", "boolean", "array"].indexOf(longname.toLowerCase()) > -1){
                return "`" + longname + "`";
            } else {
                var re = /<(.*)>/;
                if (re.test(longname)){
                    var fullName = longname;
                    fullName = fullName.replace(/</g, "&lt;").replace(/>/g, "&gt;")
                    longname = longname.match(re)[1];
                }
                var linked = a.findWhere(options.data.root, { longname: longname });
                return linked 
                    ? util.format("[%s](#%s)", fullName ? fullName.replace(longname, linked.name) : linked.name, handlebars.helpers.anchorName(longname))
                    : "`" + longname + "`";
            }
        }
    });
};
