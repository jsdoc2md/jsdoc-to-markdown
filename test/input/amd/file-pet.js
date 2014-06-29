/**
this module returns a pet of files
@module file-pet
@example
```js
var cowFiles = FilePet("cow/*");
```
*/

define("FilePet", function(){

    /**
    this is the contructor
    @class this class returns a pet of files
    @example
    ```js
    var cowFiles = FilePet("cow/*");
    ```
    @alias module:file-pet
    */
    var FilePet = function(num){
        /**
        an instance ting
        */
        this.instie = 0;
    };

    /**
    the static property
    */
    FilePet.prototype.files = true;

    /**
    A static methy meth
    @param {array} - the paths to delete
    */
    FilePet.prototype.delete = function(paths){};
    
    return FilePet;
});
