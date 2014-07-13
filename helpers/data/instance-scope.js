var a = require("array-tools");

module.exports = function(handlebars){
    handlebars.registerHelper("instance-scope", function(options){
        return a.where(options.hash.in || options.data.root, { scope: "instance" });
    });
};
