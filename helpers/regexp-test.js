module.exports = function(handlebars){
    handlebars.registerHelper("regexp-test", function(value, regex){
        var re = new RegExp(regex);
        return re.test(value);
    });
};
