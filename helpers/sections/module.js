var a = require("array-tools");

module.exports = function(handlebars){
    handlebars.registerHelper("module", function(name, options){
        var data = a.findWhere(options.data.root, { name: name, kind: "module" });
        console.log(data)
        data.argv = options.data.argv;
        var template = handlebars.partials.module;
        var compiled = handlebars.compile(template);
        return compiled(data);
    });
};
