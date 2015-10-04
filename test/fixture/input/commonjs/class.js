/**
this module exports a class constructor
@module file-set
@example
```js
var FileSet = require("file-set")
```
*/
module.exports = FileSet

/**
Takes a list of path patterns
@class
@classdesc this class returns a set of files
@param {string[]} - a list of file patterns
@alias module:file-set
@example
```js
var cowFiles = new FileSet("cow/*")
```
*/
var FileSet = function (num) {
  var the = 'constructor'
}

/**
the prototype instance property
*/
FileSet.prototype.files = true

/**
A prototype instance methy meth
@param {array} - the paths to delete
*/
FileSet.prototype.delete = function (paths) {}
