module.exports = function(handlebars){
    handlebars.registerHelper("heading-depth", function(options){
        return options.data.root._headingDepth + (options.data.root.argv["heading-depth"]);
    });

    handlebars.registerHelper("heading-depth-set", function(depth, options){
        options.data.root._headingDepth = depth;
    });

    handlebars.registerHelper("heading-depth-reset", function(options){
        options.data.root._headingDepth = 0;
    });

    handlebars.registerHelper("heading-depth-bump", function(options){
        options.data.root._headingDepth++;
    });

    handlebars.registerHelper("heading-depth-drop", function(options){
        options.data.root._headingDepth--;
    });
    
    handlebars.registerHelper("index-depth", function(options){
        return options.data.root._indexDepth;
    });

    handlebars.registerHelper("index-depth-reset", function(options){
        options.data.root._indexDepth = 0;
    });

    handlebars.registerHelper("index-depth-bump", function(options){
        options.data.root._indexDepth++;
    });

    handlebars.registerHelper("index-depth-drop", function(options){
        options.data.root._indexDepth--;
    });

};
