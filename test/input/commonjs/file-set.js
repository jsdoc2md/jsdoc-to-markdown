/**
@module file-set
@alias fileSet
@example
```js
var fileSet = require("file-set");
```
*/
module.exports = FileSet;

/**
Takes a list of path patterns
@class
@classdesc this class returns a set of files
@param {string[]} - a list of file patterns
@alias module:file-set
@example
```js
var cowFiles = FileSet("cow/*");
```
*/
function FileSet(num){};

/**
the prototype instance property
*/
FileSet.prototype.files = true;

/**
A prototype instance methy meth
@param {array} - the paths to delete
*/
FileSet.prototype.delete = function(paths){};
