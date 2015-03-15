<a name="module_file-set"></a>
## file-set
this module exports a class constructor

**Example**  
```js
var FileSet = require("file-set");
```

* [file-set](#module_file-set)
  * [FileSet](#exp_module_file-set--FileSet) ⏏
    * [new FileSet()](#new_module_file-set--FileSet_new)
    * [.files](#module_file-set--FileSet#files)
    * [.delete(paths)](#module_file-set--FileSet#delete)

<a name="exp_module_file-set--FileSet"></a>
### FileSet ⏏
this class returns a set of files

**Kind**: Exported class  
<a name="new_module_file-set--FileSet_new"></a>
#### new FileSet()
Takes a list of path patterns


| Type | Description |
| --- | --- |
| <code>Array.&lt;string&gt;</code> | a list of file patterns |

**Example**  
```js
var cowFiles = new FileSet("cow/*");
```
<a name="module_file-set--FileSet#files"></a>
#### fileSet.files
the prototype instance property

**Kind**: instance property of <code>[FileSet](#exp_module_file-set--FileSet)</code>  
<a name="module_file-set--FileSet#delete"></a>
#### fileSet.delete(paths)
A prototype instance methy meth

**Kind**: instance method of <code>[FileSet](#exp_module_file-set--FileSet)</code>  

| Param | Type | Description |
| --- | --- | --- |
| paths | <code>array</code> | the paths to delete |

