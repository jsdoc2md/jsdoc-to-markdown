var a = require("array-tools");

module.exports = function(handlebars){
    handlebars.registerHelper("members", function(options){
        return a.where(options.hash.in || options.data.root, { kind: "member" });
    });
};
