* file-pet (1) <sub>exports: class</sub>
  * [filePet.instie (2)](#module_file-pet#instie)
  * [filePet.files (2)](#module_file-pet#files)
  * [filePet.delete(paths) (2)](#module_file-pet#delete)
* jacket (1) <sub>exports: class</sub>
  * [jacket.zip() (2)](#module_jacket#zip)
* shirt (1)
  * [shirt.color (2)](#module_shirt.color)
  * [class: shirt.Turtleneck (2)](#module_shirt.Turtleneck)
* blazer (1) <sub>exports: class</sub>
  * [blazer.zip() (2)](#module_blazer#zip)
* cattle (1)
  * [cattle.createCow() (2)](#module_cattle.createCow)
  * [\~innerMember (2)](#module_cattle.innerMember)
  * [\~innerFuction() (2)](#module_cattle.innerFuction)
  * [~~\~anotherInnerFuction() (2)~~](#module_cattle.anotherInnerFuction)
* commonjs/cyberdyne (1)
  * [cyber.createMachine() (2)](#module_commonjs/cyberdyne.createMachine)
  * [\~something (2)](#module_commonjs/cyberdyne.something)
  * [\~class: Machine (2)](#module_commonjs/cyberdyne.Machine)
* file-set (1) <sub>exports: class</sub>
  * [fileSet.files (2)](#module_file-set#files)
  * [fileSet.delete(paths) (2)](#module_file-set#delete)
* commonjs/function (1) <sub>exports: function</sub>
* heaven (1)
  * [heaven.Cloud (2)](#module_heaven.Cloud)
  * [heaven.createCloud() (2)](#module_heaven.createCloud)
  * [\~class: Cloud (2)](#module_heaven.Cloud)
* commonjs/ignore (1)
  * [ignore.visible (2)](#module_commonjs/ignore.visible)
* commonjs/object-with-alias (1)
  * [_.one (2)](#module_commonjs/object-with-alias.one)
  * [_.two (2)](#module_commonjs/object-with-alias.two)
  * [_.three() (2)](#module_commonjs/object-with-alias.three)
* commonjs/object (1)
  * [object.one (2)](#module_commonjs/object.one)
  * [object.three(four, five) (2)](#module_commonjs/object.three)
* private (1)
  * [private.notprivate (2)](#module_private.notprivate)
* commonjs/single-value (1) <sub>exports: member</sub>
* commonjs/sum-alias (1)
* commonjs/sum(a, b) (1)

* Globals
  * [eFileType (1)](#eFileType)
  * [visible (1)](#visible)
  * [variable (1)](#variable)
  * [typed (1)](#typed)
  * [types (1)](#types)
  * [exampled (1)](#exampled)
  * [examples (1)](#examples)
  * [_protected (1)](#_protected)
  * [withAuthor (1)](#withAuthor)
  * [hasDefault (1)](#hasDefault)
  * [hasDefaultObject (1)](#hasDefaultObject)
  * [~~deprecated (1)~~](#deprecated)
  * [readOnly (1)](#readOnly)
  * [hasSince (1)](#hasSince)
  * [module:sum-alias(a, b) (1)](#module_sum-alias)
  * [read(filename, done) (1)](#read)
  * [globalFunc() (1)](#globalFunc)
  * [exampled() (1)](#exampled)
  * [multiExampled() (1)](#multiExampled)
  * [_protected() (1)](#_protected)
  * [withAuthor() (1)](#withAuthor)
  * [~~oldFunction() (1)~~](#oldFunction)
  * [newFunction() (1)](#newFunction)
  * [withParam(one) (1)](#withParam)
  * [withParams(one, two) (1)](#withParams)
  * [withOptional(one, [two]) (1)](#withOptional)
  * [withBullets(one, two) (1)](#withBullets)
  * [returnsSomething() (1)](#returnsSomething)
  * [returnsSomethingDesc() (1)](#returnsSomethingDesc)
  * [returnsSeveral() (1)](#returnsSeveral)
  * [doSomething(options) (1)](#doSomething)
  * [doAnother(options) (1)](#doAnother)
  * [pluck(...prop) (1)](#pluck)
  * [requirer() (1)](#requirer)
  * [setMagicNumber(x) (1)](#setMagicNumber)
  * [doSomething(options) (1)](#doSomething)
  * [~~class: All (1)~~](#All)
  * [class: Person (1)](#Person)
  * [class: Car (1)](#Car)
  * [class: Pipe (1)](#Pipe)
  * [~~class: Everything (1)~~](#Everything)
  * [class: Rice (1)](#Rice)
  * [class: Something (1)](#Something)
  * [class: Pizza (1)](#Pizza)
  * [class: Plucker (1)](#Plucker)
  * [CONST_ONE (1)](#CONST_ONE)
  * [~~CONST_TWO (1)~~](#CONST_TWO)
  * [callback: onComplete (1)](#onComplete)
  * [type: NumberLike (1)](#NumberLike)

<a name="module_file-pet"></a>
#file-pet (1)

this module returns a pet of files

  
**Example**  
```js
var cowFiles = FilePet("cow/*");
```
<a name="module_file-pet#instie"></a>
##filePet.instie (2)
an instance ting

  
<a name="module_file-pet#files"></a>
##filePet.files (2)
the static property

  
<a name="module_file-pet#delete"></a>
##filePet.delete(paths) (2)
A static methy meth

**Params**

- paths `array` - the paths to delete

<a name="module_jacket"></a>
#jacket (1)

A module representing a jacket.

  
<a name="module_jacket#zip"></a>
##jacket.zip() (2)
Open and close your Jacket.

<a name="module_shirt"></a>
#shirt (1)
**Version**: 1.0  

A module representing a shirt.

  
<a name="module_shirt.color"></a>
##shirt.color (2)
A property of the module.

  
<a name="module_shirt.Turtleneck"></a>

##class: shirt.Turtleneck (2)
<a name="module_shirt.Turtleneck"></a>
##new shirt.Turtleneck() (2)
**Params**

-  `number` - the size innit

<a name="module_shirt.Turtleneck#size"></a>
###turtleneck.size (3)
A property of the class.

  
<a name="module_blazer"></a>
#blazer (1)

A module representing a blazer.

  
<a name="module_blazer#zip"></a>
##blazer.zip() (2)
Open and close your Blazer.

<a name="module_cattle"></a>
#cattle (1)

exported object, with-inner-members

  
<a name="module_cattle.createCow"></a>
##cattle.createCow() (2)
**Returns**: `boolean`  
<a name="module_cattle.innerMember"></a>
##\~innerMember (2)
the inner member

**Scope**: inner member of [cattle](#module_cattle)  
  
<a name="module_cattle.innerFuction"></a>
##\~innerFuction() (2)
the inner function

**Scope**: inner function of [cattle](#module_cattle)  
<a name="module_cattle.anotherInnerFuction"></a>
##~~\~anotherInnerFuction() (2)~~
another inner function

***Deprecated***  
**Scope**: inner function of [cattle](#module_cattle)  
<a name="module_commonjs/cyberdyne"></a>
#commonjs/cyberdyne (1)

exports an object.. has an inner class.

  
<a name="module_commonjs/cyberdyne.createMachine"></a>
##cyber.createMachine() (2)
**Returns**: `module:cyberdyne~Machine`  
<a name="module_commonjs/cyberdyne.something"></a>
##\~something (2)
random

**Scope**: inner member of [commonjs/cyberdyne](#module_commonjs/cyberdyne)  
  
<a name="module_commonjs/cyberdyne.Machine"></a>

##\~class: Machine (2)
The main class of machine

**Scope**: inner class of [commonjs/cyberdyne](#module_commonjs/cyberdyne)  
<a name="module_commonjs/cyberdyne.Machine#eyes"></a>
###machine.eyes (3)
**Type**: `number`  
<a name="module_commonjs/cyberdyne.Machine#vibe"></a>
###machine.vibe (3)
**Type**: `string`  
<a name="module_file-set"></a>
#file-set (1)

  
**Example**  
```js
var fileSet = require("file-set");
```
<a name="module_file-set#files"></a>
##fileSet.files (2)
the static property

  
<a name="module_file-set#delete"></a>
##fileSet.delete(paths) (2)
A static methy meth

**Params**

- paths `array` - the paths to delete

<a name="module_commonjs/function"></a>
#commonjs/function (1)
**Author**: Lloyd <75pound@gmail.com>  

This is the module description

**Since**: v0.10.28  
  
<a name="module_heaven"></a>
#heaven (1)

factory module creating dodgy cloud. object-with-static-class.

  
<a name="module_heaven.Cloud"></a>
##heaven.Cloud (2)
access to the Cloud class

**Type**: `module:heaven~Cloud`  
<a name="module_heaven.createCloud"></a>
##heaven.createCloud() (2)
**Returns**: [Cloud](#module_heaven.Cloud)  
<a name="module_heaven.Cloud"></a>

##\~class: Cloud (2)
The main class of machine

**Scope**: inner class of [heaven](#module_heaven)  
<a name="module_heaven.Cloud#eyes"></a>
###cloud.eyes (3)
**Type**: `number`  
<a name="module_heaven.Cloud#vibe"></a>
###cloud.vibe (3)
**Type**: `string`  
<a name="module_commonjs/ignore"></a>
#commonjs/ignore (1)

module with ignored shiz

  
<a name="module_commonjs/ignore.visible"></a>
##ignore.visible (2)
visible property

  
<a name="module_commonjs/object-with-alias"></a>
#commonjs/object-with-alias (1)

simple object export

  
<a name="module_commonjs/object-with-alias.one"></a>
##_.one (2)
first property

  
<a name="module_commonjs/object-with-alias.two"></a>
##_.two (2)
second property

  
<a name="module_commonjs/object-with-alias.three"></a>
##_.three() (2)
a function

<a name="module_commonjs/object"></a>
#commonjs/object (1)

simple object export

  
<a name="module_commonjs/object.one"></a>
##object.one (2)
first property

  
<a name="module_commonjs/object.three"></a>
##object.three(four, five) (2)
a function

**Params**

- four `string` - The input string
- five `object` - a second input

**Since**: v0.10.28  
**Author**: Lloyd <75pound@gmail.com>  
**Returns**: `object` | `string` - this return has several types  
**Example**  
```js
allTogether(true);
```
<a name="module_private"></a>
#private (1)

module with private shiz

  
<a name="module_private.notprivate"></a>
##private.notprivate (2)
visible property

  
<a name="module_commonjs/single-value"></a>
#commonjs/single-value (1)

this module exports one value, that's it

  
<a name="module_commonjs/sum-alias"></a>
#commonjs/sum-alias (1)

A simple maths function

  
**Example**  
```js
var sum = require("sum");
```
<a name="module_commonjs/sum"></a>
#commonjs/sum(a, b) (1)

A simple maths function

**Params**

- a `number` - first number
- b `number` - second number

  
**Returns**: `number` - the result  
**Example**  
```js
var sum = require("sum");
var result = sum(1, 1);
```
##Global scope
<a name="CONST_ONE"></a>
#CONST_ONE (1)
the first important constant

**Type**: `number`  
<a name="CONST_TWO"></a>
#~~CONST_TWO (1)~~
This variable has all tags set

***Deprecated***  
**Read only**: true  
**Type**: `boolean`  
**Since**: v0.10.28  
**Author**: Lloyd Brookes <lloyd@brookes.com>  
**Example**  
```js
var CONST_TWO = true;
```
<a name="eFileType"></a>
#eFileType (1)
Enum for the `type` value

**Enum** with properties: `NOEXIST`, `FILE`, `DIR`  
**Read only**: true  
**Type**: `number`  
<a name="visible"></a>
#visible (1)
a visible global

  
<a name="variable"></a>
#variable (1)
a global variable

  
<a name="typed"></a>
#typed (1)
**Type**: `string`  
<a name="types"></a>
#types (1)
**Type**: `string | number`  
<a name="exampled"></a>
#exampled (1)
a var with an example

  
**Example**  
```js
var another = 100;
```
<a name="examples"></a>
#examples (1)
a var with multiple examples

  
**Example**  
```js
var another = 100;
```
**Example**  
```js
var next = "p";
```
<a name="_protected"></a>
#_protected (1)
**Access**: protected  
  
<a name="withAuthor"></a>
#withAuthor (1)
  
**Author**: Clive Jones <clive@jones.com>  
<a name="hasDefault"></a>
#hasDefault (1)
**Default**: `23`  
  
<a name="hasDefaultObject"></a>
#hasDefaultObject (1)
**Default**: `{"one":1,"two":2}`  
  
<a name="deprecated"></a>
#~~deprecated (1)~~
***Deprecated***  
  
<a name="readOnly"></a>
#readOnly (1)
**Read only**: true  
  
<a name="hasSince"></a>
#hasSince (1)
  
**Since**: v0.10.28  
<a name="module_sum-alias"></a>
#module:sum-alias(a, b) (1)
Sums two numbers together

**Params**

- a `number` - first number
- b `number` - second number

**Returns**: `number` - the result  
**Example**  
```js
var result = sum(1, 1);
```
<a name="read"></a>
#read(filename, done) (1)
**Params**

- filename `string` - the filename
- done [onComplete](#onComplete) - the callback

<a name="globalFunc"></a>
#globalFunc() (1)
a global function

<a name="exampled"></a>
#exampled() (1)
a function with an example

**Example**  
```js
var result = exampled();
```
<a name="multiExampled"></a>
#multiExampled() (1)
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
#_protected() (1)
**Access**: protected  
<a name="withAuthor"></a>
#withAuthor() (1)
**Author**: Clive Jones <clive@jones.com>  
<a name="oldFunction"></a>
#~~oldFunction() (1)~~
***Deprecated***  
<a name="newFunction"></a>
#newFunction() (1)
**Since**: v0.10.28  
<a name="withParam"></a>
#withParam(one) (1)
**Params**

- one `string` - The input string

<a name="withParams"></a>
#withParams(one, two) (1)
**Params**

- one `string` - The input string
- two `object`

<a name="withOptional"></a>
#withOptional(one, [two]) (1)
**Params**

- one `string` - The input string
- [two] `object` - this one is optional

<a name="withBullets"></a>
#withBullets(one, two) (1)
this description has 

- bullet
- points

and needs this line to separate the above list from the below

**Params**

- one `string` - The input string
- two `object` - a second input

<a name="returnsSomething"></a>
#returnsSomething() (1)
**Returns**: `string`  
<a name="returnsSomethingDesc"></a>
#returnsSomethingDesc() (1)
**Returns**: `object` - this return has a description  
<a name="returnsSeveral"></a>
#returnsSeveral() (1)
**Returns**: `object` | `string` - this return has several types  
<a name="doSomething"></a>
#doSomething(options) (1)
**Params**

- options `object` - the function options
  - one `string` - first option
  - two `string` - second option

<a name="doAnother"></a>
#doAnother(options) (1)
**Params**

- options `Object` - the function options

<a name="pluck"></a>
#pluck(...prop) (1)
This function takes variable input

**Params**

- ...prop `string` - the property(s) as input

<a name="requirer"></a>
#requirer() (1)
ensure you have some-module installed

<a name="setMagicNumber"></a>
#setMagicNumber(x) (1)
Set the magic number.

**Params**

- x [NumberLike](#NumberLike) - The magic number.

<a name="doSomething"></a>
#doSomething(options) (1)
**Params**

- options `object` - the function options
  - one `string` - first option
  - two `string` - second option

<a name="All"></a>

#~~class: All (1)~~
a class with all of the things

**Extends**: `Number`  
<a name="All"></a>
#~~new All(input, [options]) (1)~~
the constructor description

**Params**

- input `object` - an input
- [options] `object` - optional shit

***Deprecated***  
**Since**: v0.10.28  
**Author**: 75lb <75pound@gmail.com>  
**Example**  
```js
var yeah = new Everything(true);
```
<a name="All#topping"></a>
##all.topping (2)
the ingredients on top

**Default**: `mud, lettuce`  
**Type**: `string`  
**Since**: v1.0.0  
<a name="All#size"></a>
##all.size (2)
the general size

  
<a name="All#allThings"></a>
##~~all.allThings(one, two) (2)~~
This function has all tags set

**Params**

- one `string` - The input string
- two `object` - a second input

***Deprecated***  
**Since**: v0.10.28  
**Author**: Lloyd <75pound@gmail.com>  
**Returns**: `object` | `string` - this return has several types  
**Example**  
```js
all.allTogether(true);
```
<a name="Person"></a>

#class: Person (1)
simple class description

**Extends**: `Object`  
<a name="Person"></a>
#new Person() (1)
a constructor description

<a name="Car"></a>

#class: Car (1)
<a name="Car"></a>
#new Car([options]) (1)
a constructor with args

**Params**

- [options] `object` - optional shit

<a name="Pipe"></a>

#class: Pipe (1)
a class which extends

**Extends**: `Pipe`  
<a name="Everything"></a>

#~~class: Everything (1)~~
a class with all trimmings

**Extends**: `Pipe`  
<a name="Everything"></a>
#~~new Everything(input, [options]) (1)~~
the constructor description

**Params**

- input `object` - an input
- [options] `object` - optional shit

***Deprecated***  
**Since**: v0.10.28  
**Author**: 75lb <75pound@gmail.com>  
**Example**  
```js
var yeah = new Everything(true);
```
<a name="Rice"></a>

#class: Rice (1)
<a name="Rice#event_cooked"></a>
##event: "cooked" (2)
Fired when rice is ready

<a name="Rice#event_cooking"></a>
##event: "cooking" (2)
Fired when rice is cooking

<a name="Something"></a>

#class: Something (1)
<a name="Something#methodOne"></a>
##something.methodOne() (2)
method description

<a name="Something#allTogether"></a>
##~~something.allTogether(one, two) (2)~~
This function has all tags set

**Params**

- one `string` - The input string
- two `object` - a second input

***Deprecated***  
**Since**: v0.10.28  
**Author**: Lloyd <75pound@gmail.com>  
**Returns**: `object` | `string` - this return has several types  
**Example**  
```js
something.allTogether(true);
```
<a name="Pizza"></a>

#class: Pizza (1)
<a name="Pizza#topping"></a>
##pizza.topping (2)
the ingredients on top

**Default**: `mud, lettuce`  
**Type**: `string`  
**Since**: v1.0.0  
<a name="Pizza#size"></a>
##pizza.size (2)
the general size

  
<a name="Plucker"></a>

#class: Plucker (1)
<a name="Plucker#doPluck"></a>
##plucker.doPluck(one, ...args, ...three) (2)
This function takes variable input

**Params**

- one `string` - an input
- ...args `string` - the property(s) as input
- ...three `string` - more input

<a name="onComplete"></a>
#callback: onComplete (1)
Called when an async operation completes

**Params**

- err `object` - an error, or `null`
- result `string` - the result info

**Type**: `function`  
<a name="NumberLike"></a>
#type: NumberLike (1)
A number, or a string containing a number.

**Type**: `number | string`  
