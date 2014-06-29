define("FileSet", function(){

    /**
    this class returns a set of files
    @class
    @example
    ```js
    var cowFiles = FileSet("cow/*");
    ```
    */
    var FileSet = function(num){
        /**
        an instance ting
        */
        this.instie = 0;
    };

    /**
    the static property
    */
    FileSet.prototype.files = true;

    /**
    A static methy meth
    @param {array} - the paths to delete
    */
    FileSet.prototype.delete = function(paths){};

    /**
    This module exports the FileSet class
    @exports amd/FileSet
    */    
    return FileSet;
});
