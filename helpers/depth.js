module.exports = function(handlebars){
    var indexDepth = 0;
    var headingDepth = 0;
    
    handlebars.registerHelper("depth", function(options){
        return getDepth(options.data) + (options.data.root.argv["heading-depth"] - 1);
    });
    handlebars.registerHelper("depth2", function(offset, options){
        return getDepth(options.data) + (offset || 0);
    });
    handlebars.registerHelper("currentDepth", function(options){
        return getDepth(options.data);
    });

    handlebars.registerHelper("heading-depth", function(options){
        // console.log(options)
        return headingDepth + (options.data.root.argv["heading-depth"]);
    });

    handlebars.registerHelper("heading-depth-reset", function(){
        headingDepth = 0;
    });

    handlebars.registerHelper("heading-depth-bump", function(){
        headingDepth++;
    });

    handlebars.registerHelper("heading-depth-drop", function(){
        headingDepth--;
    });
    
    handlebars.registerHelper("index-depth", function(){
        return indexDepth;
    });

    handlebars.registerHelper("index-depth-reset", function(){
        indexDepth = 0;
    });

    handlebars.registerHelper("index-depth-bump", function(){
        indexDepth++;
    });

    handlebars.registerHelper("index-depth-drop", function(){
        indexDepth--;
    });

};
