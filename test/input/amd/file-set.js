/**
this module returns a set of files
@module
@example
```js
var cowFiles = FileSet("cow/*");
```
*/

define("FileSet", function(){

    /**
    this module returns a set of files
    @class
    @example
    ```js
    var cowFiles = FileSet("cow/*");
    ```
    @alias module:file-set
    */
    var FileSet = function(num){};

    /**
    the static property
    */
    FileSet.prototype.files = true;

    /**
    A static methy meth
    @param {array} - the paths to delete
    */
    FileSet.prototype.delete = function(paths){};
    
    return FileSet;
});
