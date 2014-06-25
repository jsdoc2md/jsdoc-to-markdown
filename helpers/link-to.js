var a = require("array-tools"),
    util = require("util");

module.exports = function(handlebars){
    handlebars.registerHelper("linkTo", function linkTo(longname, options){
        var re = /<(.*)>/;
        if (Array.isArray(longname)){
            return longname.map(function(name){
                return linkTo(name, options);
            });
        } else {
            if (re.test(longname)){
                var fullName = longname;
                fullName = fullName.replace(/</g, "&lt;").replace(/>/g, "&gt;");
                longname = longname.match(re)[1];
            }
            
            var builtInType = /^(string|object|number|boolean|array)$/i.test(longname);
            
            if (builtInType){
                return "`" + (fullName || longname) + "`";
            } else {
                var linked = a.findWhere(options.data.root, { longname: longname });
                return linked 
                    ? util.format("[%s](#%s)", fullName ? fullName.replace(longname, linked.name) : linked.name, handlebars.helpers.anchorName(longname))
                    : "`" + (fullName || longname) + "`";
            }
        }
    });
};
