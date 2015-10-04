/**
exports an object.. has an inner class.
@module cyberdyne
@alias cyber
@example
```js
var cyber = require("cyberdyne")
```
*/

/**
@returns {module:cyberdyne~Machine}
*/
exports.createMachine = function () {}

/**
the Machine constructor
@class 
@classdesc The main class of machine
@param {object} - constructor options
*/
function Machine (options) {
  /**
  @type {number}
  */
  this.eyes = 4

  /**
  @type {string}
  */
  this.vibe = 'sinister'
}

/**
random 
*/
var something = 1
