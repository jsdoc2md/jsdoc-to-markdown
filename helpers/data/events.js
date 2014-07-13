var a = require("array-tools");

module.exports = function(handlebars){
    handlebars.registerHelper("events", function(options){
        return a.where(options.hash.in || options.data.root, { kind: "event" });
    });
};
