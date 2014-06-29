var a = require("array-tools");

module.exports = function(handlebars){
    handlebars.registerHelper("parent", function(options){
        return a.findWhere(options.data.root, { longname: this.memberof });
    });
};
