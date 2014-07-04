#Heading
This is the documentation for a full module

<a name=""></a>

**Symbols**


<a name="module_FileSet"></a>
##class: .module:FileSet
this class returns a set of files

**Symbols**

  * [new FileSet(num)](#module_FileSet)
* [fileSet.files](#module_FileSet#files)
* [fileSet.delete(paths)](#module_FileSet#delete)

<a name="module_FileSet"></a>
##new FileSet(num)
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

