/**
this module exports the class FileSet
@module file-set
@param {number} - the input number
@alias fileSet
@example
```js
var fileSet = require("file-set");

var cowFiles = fileSet("cow/*");
```
*/

module.exports = FileSet;

/**
@alias module:file-set
*/
function FileSet(num){};

/**
the static property
*/
FileSet.prototype.staticProperty = true;

/**
the static methy meth
*/
FileSet.prototype.methyMeth = function(){};
