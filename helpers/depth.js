module.exports = function(handlebars){
    function getDepth(data){
        var depth = 0;
        function recurse(node){
            if (node._parent){
                depth++;
                recurse(node._parent)
            }
        }
        recurse(data);
        return depth;
    }
    
    handlebars.registerHelper("depth", function(options){
        return getDepth(options.data) + (options.data.root.argv["heading-depth"] - 1);
    });

    handlebars.registerHelper("depth2", function(offset, options){
        return getDepth(options.data) + (offset || 0);
    });

    handlebars.registerHelper("currentDepth", function(options){
        return getDepth(options.data);
    });
};
