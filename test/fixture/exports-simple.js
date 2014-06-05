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
@param {...Object} sequence - a sequence of Object instances
@return {Thing} a return with one type
@example
```js
var blah = 1;
```
*/
exports.methodOne = function(){};

/**
Method two desc
@param {Object|Array} arg - an arg with multiple types
@param [optional] {Object} - an optional arg
@returns {Object|Array} a return with multiple types
@example
```js
var blah = 2;
```
*/
exports.methodTwo = function(){};

/**
@class
@classdesc a thing class
@param [optional] {Object} - an optional arg
*/
function Thing(){
	/** instance property one	*/
	this.one = 1;
	/** instance property one	*/
	this.two = 2;
}
/**
protoOne desc
@param [optional] {Object} - an optional arg
@returns a return with no type
*/
Thing.prototype.protoOne = function(){}
/**
protoTwo desc
@returns {String}
*/
Thing.prototype.protoTwo = function(){}
