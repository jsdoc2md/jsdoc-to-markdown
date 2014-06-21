<a name="module_file-set"></a>
#file-set
this module returns a set of files

**Contents**
* [files](#module_file-set#files)
* [delete(paths)](#module_file-set#delete)


 -  `array` - a list of file patterns

  
####Example
```js
var fileSet = require("file-set");

var cowFiles = fileSet("cow/*");
```
