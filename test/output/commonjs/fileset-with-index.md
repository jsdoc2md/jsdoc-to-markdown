<a name="module_file-set"></a>
##file-set()
this module returns a set of files

**Params**
-  `Array.<string>` - a list of file patterns

  
**Example**  
```js
var fileSet = require("file-set");

var cowFiles = fileSet("cow/*");
```
**Contents**
* [files](#module_file-set#files)
* [delete(paths)](#module_file-set#delete)

<a name="module_file-set#files"></a>
###fileSet.files
the static property

  
<a name="module_file-set#delete"></a>
###fileSet.delete(paths)
A static methy meth

**Params**
- paths `array` - the paths to delete

