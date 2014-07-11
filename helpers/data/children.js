var a = require("array-tools");

module.exports = function(handlebars){
    handlebars.registerHelper("children", function(options){
        return a.where(options.data.root, { memberof: this.longname });
    });
};
