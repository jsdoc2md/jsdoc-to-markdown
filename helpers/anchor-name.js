var w = require("wodge");

module.exports = function(handlebars){
    handlebars.registerHelper("anchorName", function(input){
        return input && input.replace(/:/g, "_").replace(/~/g, ".");
    });
};
