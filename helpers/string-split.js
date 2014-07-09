module.exports = function(handlebars){
    handlebars.registerHelper("string-split", function(input, separator){
        return input.split(separator);
    });
};
