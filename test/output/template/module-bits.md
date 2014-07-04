#my module
**Symbols**




##Install
blah blah 

##Usage 
Blah blah 

#API
**Symbols**



<a name="module_commonjs/single-value"></a>
##module:commonjs/single-value
**Type**: `boolean`  
**Default**: `true`  
<a name="module_commonjs/function"></a>
##commonjs/function(one, two)
the main function description

**Params**

- one `string` - The input string
- two `object` - a second input

**Returns**: `object` | `string` - this return has several types  
<a name="module_file-pet"></a>
##class: .module:file-pet
this class returns a pet of files

**Symbols**

  * [new filePet(num)](#module_file-pet)
* [filePet.instie](#module_file-pet#instie)
* [filePet.files](#module_file-pet#files)
* [filePet.delete(paths)](#module_file-pet#delete)

<a name="module_file-pet"></a>
##new filePet(num)
this is the contructor

**Params**

- num `number` - the input number

**Example**  
```js
var cowFiles = FilePet("cow/*");
```


<a name="module_file-pet#instie"></a>
###filePet.instie
an instance ting

<a name="module_file-pet#files"></a>
###filePet.files
the prototype instance property

**Type**: `boolean`  
**Default**: `true`  
<a name="module_file-pet#delete"></a>
###filePet.delete(paths)
A prototype instance methy meth

**Params**

- paths `array` - the paths to delete

<a name="module_jacket"></a>
##class: .module:jacket
**Symbols**

* [jacket.zip()](#module_jacket#zip)

<a name="module_jacket#zip"></a>
###jacket.zip()
Open and close your Jacket.

<a name="module_coat"></a>
##class: .module:coat
**Symbols**

* [coat.zip()](#module_coat#zip)

<a name="module_coat#zip"></a>
###coat.zip()
Open and close your Coat.

<a name="module_blouse"></a>
##class: .module:blouse
**Symbols**

* [blouse.zip()](#module_blouse#zip)

<a name="module_blouse#zip"></a>
###blouse.zip()
Open and close your Blouse.

<a name="module_blazer"></a>
##class: .module:blazer
**Symbols**

  * [new blazer(input)](#module_blazer)
* [blazer.zip()](#module_blazer#zip)

<a name="module_blazer"></a>
##new blazer(input)
**Params**

- input `string` - the input

<a name="module_blazer#zip"></a>
###blazer.zip()
Open and close your Blazer.

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


