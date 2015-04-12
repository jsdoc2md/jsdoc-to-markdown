<a name="module_file-pet"></a>
## file-pet
this module returns a pet of files

**Example**  
```js
var cowFiles = FilePet("cow/*");
```

* [file-pet](#module_file-pet)
  * [FilePet](#exp_module_file-pet--FilePet) ⏏
    * [new FilePet(num)](#new_module_file-pet--FilePet_new)
    * [.instie](#module_file-pet--FilePet#instie)
    * [.files](#module_file-pet--FilePet#files) : <code>boolean</code>
    * [.delete(paths)](#module_file-pet--FilePet#delete)

<a name="exp_module_file-pet--FilePet"></a>
### FilePet ⏏
this class returns a pet of files

**Kind**: Exported class  
<a name="new_module_file-pet--FilePet_new"></a>
#### new FilePet(num)
this is the contructor


| Param | Type | Description |
| --- | --- | --- |
| num | <code>number</code> | the input number |

**Example**  
```js
    var cowFiles = FilePet("cow/*");
    ```
    
<a name="module_file-pet--FilePet#instie"></a>
#### filePet.instie
an instance ting

**Kind**: instance property of <code>[FilePet](#exp_module_file-pet--FilePet)</code>  
<a name="module_file-pet--FilePet#files"></a>
#### filePet.files : <code>boolean</code>
the prototype instance property

**Default**: <code>true</code>  
**Kind**: instance property of <code>[FilePet](#exp_module_file-pet--FilePet)</code>  
<a name="module_file-pet--FilePet#delete"></a>
#### filePet.delete(paths)
A prototype instance methy meth

**Kind**: instance method of <code>[FilePet](#exp_module_file-pet--FilePet)</code>  

| Param | Type | Description |
| --- | --- | --- |
| paths | <code>array</code> | the paths to delete |

