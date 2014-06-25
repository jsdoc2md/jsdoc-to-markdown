define("FileSet", function(){

    /**
    this module returns a set of files
    @exports FileSet
    @example
    ```js
    var cowFiles = fileSet("cow/*");
    ```
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
    
    return FileSet;
});
