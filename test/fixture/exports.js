/**
A module exporting stuff
@module wodge
*/

/** some cross platform symbols (`tick` and `cross`) */
exports.propertyOne = "propertyOne";
exports.propertyTwo = "propertyTwo";
exports.methodOne = methodOne;
exports.methodTwo = methodTwo;

/**
Method one desc
@param {...Object} object - a sequence of Object instances
@example
var blah = 1;
*/
function methodOne(){}

/**
Method two desc
@param {Object|Array} input - the input to clone
@returns {Object|Array}
@example
var blah = 1;
*/
function methodTwo(input){}
