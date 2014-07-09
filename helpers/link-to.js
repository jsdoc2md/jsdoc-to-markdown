var a = require("array-tools"),
    util = require("util");

module.exports = function(handlebars){
    handlebars.registerHelper("linkTo", function linkTo(longname, options){
        var re = /<(.*)>/;
        var fullName = "";
        if (Array.isArray(longname)){
            return longname.map(function(name){
                return linkTo(name, options);
            });
        } else {
            if (re.test(longname)){
                fullName = longname;
                longname = longname.match(re)[1];
            }
            
            var builtInType = /^(string|object|number|boolean|array)$/i.test(longname);
            
            if (builtInType){
                return "`" + (fullName || longname) + "`";
            } else {
                var linked = a.findWhere(options.data.root, { longname: longname });
                if (linked){
                    if (fullName) fullName = fullName.replace(/</g, "&lt;").replace(/>/g, "&gt;");
                    var linkText = fullName ? fullName.replace(longname, linked.name) : linked.name;
                    return util.format("[%s](#%s)", linkText, handlebars.helpers.anchorName(longname));
                } else {
                    return "`" + (fullName || longname) + "`";
                }
            }
        }
    });
};
