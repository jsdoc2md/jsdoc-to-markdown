/**
this module returns a set of files
@module file-set
@alias fileSet
@example
```js
var fileSet = require("file-set");

var cowFiles = fileSet("cow/*");
```
*/

module.exports = FileSet;

/**
@class
@param {array} - a list of file patterns
@alias module:file-set
*/
function FileSet(num){};

/**
the static property
*/
FileSet.prototype.files = true;

/**
A static methy meth
@param {array} - the paths to delete
*/
FileSet.prototype.delete = function(paths){};
