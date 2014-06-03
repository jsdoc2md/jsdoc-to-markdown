var w = require("wodge");

module.exports = function(handlebars){
    handlebars.registerHelper("concat", function(){
		var args = w.arrayify(arguments);
		args.pop();
        return args.join("");
    });
};
