var a = require("array-tools");

function instantiate(input){
    return input.charAt(0).toLowerCase() + input.slice(1);
}

module.exports = function(handlebars){
    handlebars.registerHelper("memberofName", function(options){
        if (this.memberof){
            var parentClass = a.findWhere(options.data.root, { longname: this.memberof });
            if (parentClass) {
                return this.scope === "instance"
                    ? instantiate(parentClass.name)
                    : parentClass.name;
            }
        }        
    });
};
