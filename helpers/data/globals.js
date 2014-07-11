var a = require("array-tools");

module.exports = function(handlebars){
    handlebars.registerHelper("globals", function(options){
        return a.where(options.data.root, { "!kind": "module", scope: "global" });
    });
};
