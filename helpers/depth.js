module.exports = function(handlebars){
    handlebars.registerHelper("depth", function(options){
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
