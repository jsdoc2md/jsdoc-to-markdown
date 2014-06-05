/**
A module exporting stuff
@module
@author 75lb <75pound@gmail.com>
@author Clive <clive@gmail.com>
*/

/**
property one desc
*/
exports.propertyOne = "propertyOne";

/**
property two desc
*/
exports.propertyTwo = "propertyTwo";

/**
property three desc
@protected
*/
exports._propertyThree = "propertyThree";

/**
Method one desc
@param {...Object} object - a sequence of Object instances
@return {Thing} the return description
@example
var blah = 1;
*/
exports.methodOne = function(){};

/**
Method two desc
@param {Object|Array} input - the input to clone
@returns {Object|Array} the return description
@example
var blah = 2;
*/
exports.methodTwo = function(){};

/**
@class
@classdesc a thing class
*/
function Thing(){}