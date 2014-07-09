module.exports = function(handlebars){
    handlebars.registerHelper("array-slice", function(array, begin, end){
        if (typeof end === "object") end = undefined;
        if (typeof begin === "object") begin = undefined;
        return array.slice(begin, end);
    });
};
