/**
this module returns a set of files
@module
@example
```js
var fileSet = require("file-set");
```
*/
module.exports = FileSet;

/**
@class
@param {string[]} - a list of file patterns
@example
```js
var cowFiles = fileSet("cow/*");
```
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
