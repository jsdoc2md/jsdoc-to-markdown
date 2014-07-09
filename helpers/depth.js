module.exports = function(handlebars){
    var indexDepth = 0;
    var headingDepth = 0;
    
    handlebars.registerHelper("heading-depth", function(options){
        return headingDepth + (options.data.root.argv["heading-depth"]);
    });

    handlebars.registerHelper("heading-depth-set", function(depth){
        headingDepth = depth;
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
