#A module here
This is the documentation for a full module

<a name="module_FileSet"></a>
##FileSet
this module exports a class constructor

**Example**  
```js
var FileSet = require("file-set");
```

**Symbols**

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




#And a class here

<a name="All"></a>
##~~class: All~~
a class with all of the things

**Symbols**

  * [~~new All(input, [options])~~](#All)
* [all.topping](#All#topping)
* [all.size](#All#size)
* [~~all.allThings(one, two)~~](#All#allThings)

<a name="All"></a>
##~~new All(input, [options])~~
the constructor description

**Params**

- input `object` - an input
- [options] `object` - optional shit

***Deprecated***  
**Extends**: `Number`  
**Since**: v0.10.28  
**Author**: 75lb <75pound@gmail.com>  
**Example**  
```js
var yeah = new Everything(true);
```

<a name="All#topping"></a>
###all.topping
the ingredients on top

**Type**: `string`  
**Default**: `mud, lettuce`  
**Since**: v1.0.0  
<a name="All#size"></a>
###all.size
the general size

<a name="All#allThings"></a>
###~~all.allThings(one, two)~~
This function has all tags set

**Params**

- one `string` - The input string
- two `object` - a second input

***Deprecated***  
**Returns**: `object` | `string` - this return has several types  
**Since**: v0.10.28  
**Author**: Lloyd <75pound@gmail.com>  
**Example**  
```js
all.allTogether(true);
```


