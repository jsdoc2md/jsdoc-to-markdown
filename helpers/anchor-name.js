module.exports = function(handlebars){
    handlebars.registerHelper("anchorName", function(longname){
        return longname && longname.replace(/:/g, "_").replace(/~/g, ".");
    });
};
