<a name="module_FileSet"></a>
#file-set
this module exports a class constructor

**Example**  
```js
var FileSet = require("file-set");
```

<a name="module_FileSet"></a>
##FileSet ⏏
this class returns a set of files

**Scope**: exported class

**Members**

* [new FileSet(num)](#module_FileSet)
* [fileSet.files](#module_FileSet#files) {Array.\<string\>}
* [fileSet.delete(paths)](#module_FileSet#delete)

<a name="module_FileSet"></a>
###new FileSet(num)
Takes a list of path patterns

**Params**

- num `Array.<string>` - a list of file patterns

**Example**  
```js
var cowFiles = new FileSet("cow/*");
```

<a name="module_FileSet#files"></a>
###fileSet.files
the prototype instance property

<a name="module_FileSet#delete"></a>
###fileSet.delete(paths)
A prototype instance methy meth

**Params**

- paths `array` - the paths to delete

