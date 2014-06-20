var a = require("array-tools");

module.exports = function(handlebars){
    handlebars.registerHelper("memberofName", function(options){
        if (this.memberof){
            var parentClass = a.findWhere(options.data.root, { longname: this.memberof });
            if (parentClass) return parentClass.name;
        }        
    });
};
