/**
A module exporting stuff
@module
@author 75lb <75pound@gmail.com>
@author Clive <clive@gmail.com>
@alias simple
@example
```js
var simple = require("exports-simple");
```
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
*/
Thing.prototype.protoOne = function(){}
/**
protoTwo desc
*/
Thing.prototype.protoTwo = function(){}
