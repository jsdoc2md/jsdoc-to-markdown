var a = require("array-tools");

module.exports = function(handlebars){
    handlebars.registerHelper("regexp-test", function(value, regex){
        var re = new RegExp(regex);
        // console.error(re)
        // console.error(re.test(value))
        return re.test(value);
    });
};
