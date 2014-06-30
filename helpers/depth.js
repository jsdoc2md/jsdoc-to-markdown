module.exports = function(handlebars){
    handlebars.registerHelper("depth", function(options){
        var depth = 0 + (options.data.root.argv["heading-depth"] - 1);
        function recurse(node){
            if (node._parent){
                depth++;
                recurse(node._parent)
            }
        }
        recurse(options.data);
        return depth;
    });

    handlebars.registerHelper("depth2", function(options){
        var depth = 0;
        function recurse(node){
            if (node._parent){
                depth++;
                recurse(node._parent)
            }
        }
        recurse(options.data);
        return depth;
    });
};
