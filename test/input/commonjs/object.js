/**
simple object export
@module
*/

/**
first property
*/
exports.one = 1;

/**
This property has all tags set
@deprecated
@type {boolean}
@private
@default
@readonly
@author 75lb <75pound@gmail.com>
@since v0.10.28
@example
```js
var allTogether = true;
```
*/
exports.two = 2;

/**
a function
@param {string} - The input string
@param {object} - a second input
@author Lloyd <75pound@gmail.com>
@since v0.10.28
@returns {object | string} this return has several types
@example
```js
allTogether(true);
```
*/
exports.three = function(four, five){};
