/**
this module returns a pet of files
@module file-pet
@alias filePet
@example
```js
var cowFiles = FilePet("cow/*");
```
*/

define("FilePet", function(){

    /**
    this is the contructor
    @class this class returns a pet of files
    @param {number} - the input number
    @example
    ```js
    var cowFiles = FilePet("cow/*");
    ```
    @alias module:file-pet
    */
    function FilePet(num){
        /**
        an instance ting
        */
        this.instie = 0;
    };

    /**
    the prototype instance property
    @type {boolean}
    @default
    */
    FilePet.prototype.files = true;

    /**
    A prototype instance methy meth
    @param {array} - the paths to delete
    */
    FilePet.prototype.delete = function(paths){};
    
    return FilePet;
});
