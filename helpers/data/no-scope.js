var a = require("array-tools");

module.exports = function(handlebars){
    handlebars.registerHelper("no-scope", function(options){
        return a.where(options.hash.in || options.data.root, { scope: undefined });
    });
};
