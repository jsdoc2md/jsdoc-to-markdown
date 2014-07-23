<a name="module_file-pet"></a>
#file-pet
this module returns a pet of files

**Example**  
```js
var cowFiles = FilePet("cow/*");
```

<a name="exp_module_file-pet"></a>
##class: FilePet ⏏
this class returns a pet of files

**Members**

* [class: FilePet ⏏](#exp_module_file-pet)
  * [new FilePet(num)](#exp_new_module_file-pet)
  * [filePet.instie](#module_file-pet#instie)
  * [filePet.files](#module_file-pet#files)
  * [filePet.delete(paths)](#module_file-pet#delete)

<a name="exp_new_module_file-pet"></a>
###new FilePet(num)
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

