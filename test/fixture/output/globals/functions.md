#Index

**Functions**

* [globalFunc()](#globalFunc)
* [exampled()](#exampled)
* [multiExampled()](#multiExampled)
* [_protected()](#_protected)
* [withAuthor()](#withAuthor)
* [~~oldFunction()~~](#oldFunction)
* [newFunction()](#newFunction)
* [withParam(one)](#withParam)
* [withParams(one, two)](#withParams)
* [withOptional(one, [two])](#withOptional)
* [withBullets(one, two)](#withBullets)
* [returnsSomething()](#returnsSomething)
* [returnsSomethingDesc()](#returnsSomethingDesc)
* [returnsSeveral()](#returnsSeveral)
* [~~allTogether(one, two)~~](#allTogether)
 
<a name="globalFunc"></a>
#globalFunc()
a global function

<a name="exampled"></a>
#exampled()
a function with an example

**Example**  
```js
var result = exampled();
```

<a name="multiExampled"></a>
#multiExampled()
a function with multiple examples

**Example**  
```js
var another = 100;
```

**Example**  
```js
var next = "p";
```

<a name="_protected"></a>
#_protected()
**Access**: protected  
<a name="withAuthor"></a>
#withAuthor()
**Author**: Clive Jones <clive@jones.com>  
<a name="oldFunction"></a>
#~~oldFunction()~~
***Deprecated***  
<a name="newFunction"></a>
#newFunction()
**Since**: v0.10.28  
<a name="withParam"></a>
#withParam(one)
**Params**

- one `string` - The input string  

<a name="withParams"></a>
#withParams(one, two)
**Params**

- one `string` - The input string  
- two `object`  

<a name="withOptional"></a>
#withOptional(one, [two])
**Params**

- one `string` - The input string  
- \[two\] `object` - this one is optional  

<a name="withBullets"></a>
#withBullets(one, two)
this description has 

- bullet
- points

and needs this line to separate the above list from the below

**Params**

- one `string` - The input string  
- two `object` - a second input  

<a name="returnsSomething"></a>
#returnsSomething()
**Returns**: `string`  
<a name="returnsSomethingDesc"></a>
#returnsSomethingDesc()
**Returns**: `object` - this return has a description  
<a name="returnsSeveral"></a>
#returnsSeveral()
**Returns**: `object` | `string` - this return has several types  
<a name="allTogether"></a>
#~~allTogether(one, two)~~
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
allTogether(true);
```

