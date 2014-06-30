* file-pet *module* <sub>exports: class</sub>
  * [filePet.instie *member*](#module_file-pet#instie)
  * [filePet.files *member*](#module_file-pet#files)
  * [filePet.delete(paths) *function*](#module_file-pet#delete)
* jacket *module* <sub>exports: class</sub>
  * [jacket.zip() *function*](#module_jacket#zip)
* shirt *module*
  * [shirt.color *member*](#module_shirt.color)
  * [shirt.Turtleneck *class*](#module_shirt.Turtleneck)
* blazer *module* <sub>exports: class</sub>
  * [blazer.zip() *function*](#module_blazer#zip)
* cattle *module*
  * [cattle.createCow() *function*](#module_cattle.createCow)
  * [\~innerMember *member*](#module_cattle.innerMember)
  * [\~innerFuction() *function*](#module_cattle.innerFuction)
  * [~~\~anotherInnerFuction() *function*~~](#module_cattle.anotherInnerFuction)
* commonjs/cyberdyne *module*
  * [cyber.createMachine() *function*](#module_commonjs/cyberdyne.createMachine)
  * [\~something *member*](#module_commonjs/cyberdyne.something)
  * [\~cyber.Machine *class*](#module_commonjs/cyberdyne.Machine)
* file-set *module* <sub>exports: class</sub>
  * [fileSet.files *member*](#module_file-set#files)
  * [fileSet.delete(paths) *function*](#module_file-set#delete)
* commonjs/function *module* <sub>exports: function</sub>
* heaven *module*
  * [heaven.Cloud *member*](#module_heaven.Cloud)
  * [heaven.createCloud() *function*](#module_heaven.createCloud)
  * [\~heaven.Cloud *class*](#module_heaven.Cloud)
  * [*const* \~FACT *constant*](#module_heaven.FACT)
* commonjs/ignore *module*
  * [ignore.visible *member*](#module_commonjs/ignore.visible)
* commonjs/object-with-alias *module*
  * [_.one *member*](#module_commonjs/object-with-alias.one)
  * [_.two *member*](#module_commonjs/object-with-alias.two)
  * [_.three() *function*](#module_commonjs/object-with-alias.three)
* commonjs/object *module*
  * [object.one *member*](#module_commonjs/object.one)
  * [object.three(four, five) *function*](#module_commonjs/object.three)
* private *module*
  * [private.notprivate *member*](#module_private.notprivate)
* commonjs/single-value *module* <sub>exports: member</sub>
* commonjs/sum-alias *module*
* commonjs/sum(a, b) *module*

* Globals
  * [eFileType *member*](#eFileType)
  * [visible *member*](#visible)
  * [variable *member*](#variable)
  * [typed *member*](#typed)
  * [types *member*](#types)
  * [exampled *member*](#exampled)
  * [examples *member*](#examples)
  * [_protected *member*](#_protected)
  * [withAuthor *member*](#withAuthor)
  * [hasDefault *member*](#hasDefault)
  * [hasDefaultObject *member*](#hasDefaultObject)
  * [~~deprecated *member*~~](#deprecated)
  * [readOnly *member*](#readOnly)
  * [hasSince *member*](#hasSince)
  * [module:sum-alias(a, b) *function*](#module_sum-alias)
  * [read(filename, done) *function*](#read)
  * [globalFunc() *function*](#globalFunc)
  * [exampled() *function*](#exampled)
  * [multiExampled() *function*](#multiExampled)
  * [_protected() *function*](#_protected)
  * [withAuthor() *function*](#withAuthor)
  * [~~oldFunction() *function*~~](#oldFunction)
  * [newFunction() *function*](#newFunction)
  * [withParam(one) *function*](#withParam)
  * [withParams(one, two) *function*](#withParams)
  * [withOptional(one, [two]) *function*](#withOptional)
  * [withBullets(one, two) *function*](#withBullets)
  * [returnsSomething() *function*](#returnsSomething)
  * [returnsSomethingDesc() *function*](#returnsSomethingDesc)
  * [returnsSeveral() *function*](#returnsSeveral)
  * [doSomething(options) *function*](#doSomething)
  * [doAnother(options) *function*](#doAnother)
  * [pluck(...prop) *function*](#pluck)
  * [requirer() *function*](#requirer)
  * [setMagicNumber(x) *function*](#setMagicNumber)
  * [doSomething(options) *function*](#doSomething)
  * [~~All *class*~~](#All)
  * [Person *class*](#Person)
  * [Car *class*](#Car)
  * [Pipe *class*](#Pipe)
  * [~~Everything *class*~~](#Everything)
  * [Rice *class*](#Rice)
  * [Something *class*](#Something)
  * [Pizza *class*](#Pizza)
  * [Plucker *class*](#Plucker)
  * [*const* CONST_ONE *constant*](#CONST_ONE)
  * [~~*const* CONST_TWO *constant*~~](#CONST_TWO)
  * [callback: onComplete *typedef*](#onComplete)
  * [type: NumberLike *typedef*](#NumberLike)

<a name="module_file-pet"></a>
##file-pet *module*

this module returns a pet of files

  
**Example**  
```js
var cowFiles = FilePet("cow/*");
```
<a name="module_file-pet#instie"></a>
###filePet.instie *member*
an instance ting

  
<a name="module_file-pet#files"></a>
###filePet.files *member*
the static property

  
<a name="module_file-pet#delete"></a>
###filePet.delete(paths) *function*
A static methy meth

**Params**

- paths `array` - the paths to delete

<a name="module_jacket"></a>
##jacket *module*

A module representing a jacket.

  
<a name="module_jacket#zip"></a>
###jacket.zip() *function*
Open and close your Jacket.

<a name="module_shirt"></a>
##shirt *module*
**Version**: 1.0  

A module representing a shirt.

  
<a name="module_shirt.color"></a>
###shirt.color *member*
A property of the module.

  
<a name="module_shirt.Turtleneck"></a>

###shirt.Turtleneck *class*
<a name="module_shirt.Turtleneck"></a>
###new shirt.Turtleneck() *class*
**Params**

-  `number` - the size innit

<a name="module_shirt.Turtleneck#size"></a>
####turtleneck.size *member*
A property of the class.

  
<a name="module_blazer"></a>
##blazer *module*

A module representing a blazer.

  
<a name="module_blazer#zip"></a>
###blazer.zip() *function*
Open and close your Blazer.

<a name="module_cattle"></a>
##cattle *module*

exported object, with-inner-members

  
<a name="module_cattle.createCow"></a>
###cattle.createCow() *function*
**Returns**: `boolean`  
<a name="module_cattle.innerMember"></a>
###\~innerMember *member*
the inner member

**Scope**: inner member of [cattle](#module_cattle)  
  
<a name="module_cattle.innerFuction"></a>
###\~innerFuction() *function*
the inner function

**Scope**: inner function of [cattle](#module_cattle)  
<a name="module_cattle.anotherInnerFuction"></a>
###~~\~anotherInnerFuction() *function*~~
another inner function

***Deprecated***  
**Scope**: inner function of [cattle](#module_cattle)  
<a name="module_commonjs/cyberdyne"></a>
##commonjs/cyberdyne *module*

exports an object.. has an inner class.

  
<a name="module_commonjs/cyberdyne.createMachine"></a>
###cyber.createMachine() *function*
**Returns**: `module:cyberdyne~Machine`  
<a name="module_commonjs/cyberdyne.something"></a>
###\~something *member*
random

**Scope**: inner member of [commonjs/cyberdyne](#module_commonjs/cyberdyne)  
  
<a name="module_commonjs/cyberdyne.Machine"></a>

###\~cyber.Machine *class*
The main class of machine

**Scope**: inner class of [commonjs/cyberdyne](#module_commonjs/cyberdyne)  
<a name="module_commonjs/cyberdyne.Machine#eyes"></a>
####machine.eyes *member*
**Type**: `number`  
<a name="module_commonjs/cyberdyne.Machine#vibe"></a>
####machine.vibe *member*
**Type**: `string`  
<a name="module_file-set"></a>
##file-set *module*

  
**Example**  
```js
var fileSet = require("file-set");
```
<a name="module_file-set#files"></a>
###fileSet.files *member*
the static property

  
<a name="module_file-set#delete"></a>
###fileSet.delete(paths) *function*
A static methy meth

**Params**

- paths `array` - the paths to delete

<a name="module_commonjs/function"></a>
##commonjs/function *module*
**Author**: Lloyd <75pound@gmail.com>  

This is the module description

**Since**: v0.10.28  
  
<a name="module_heaven"></a>
##heaven *module*

factory module creating dodgy cloud. object-with-static-class.

  
<a name="module_heaven.Cloud"></a>
###heaven.Cloud *member*
access to the Cloud class

**Type**: [Cloud](#module_heaven.Cloud)  
<a name="module_heaven.createCloud"></a>
###heaven.createCloud() *function*
**Returns**: [Cloud](#module_heaven.Cloud)  
<a name="module_heaven.Cloud"></a>

###\~heaven.Cloud *class*
The main class of machine

**Scope**: inner class of [heaven](#module_heaven)  
<a name="module_heaven.Cloud#eyes"></a>
####cloud.eyes *member*
**Type**: `number`  
<a name="module_heaven.Cloud#vibe"></a>
####cloud.vibe *member*
**Type**: `string`  
<a name="module_heaven.Cloud.classMethod"></a>
####Cloud.classMethod() *function*
a class method

<a name="module_heaven.Cloud.SPACES"></a>
####*const* Cloud.SPACES *constant*
a class constant

**Type**: `number`  
<a name="module_heaven.FACT"></a>
###*const* \~FACT *constant*
an inner constant

**Type**: `boolean`  
<a name="module_commonjs/ignore"></a>
##commonjs/ignore *module*

module with ignored shiz

  
<a name="module_commonjs/ignore.visible"></a>
###ignore.visible *member*
visible property

  
<a name="module_commonjs/object-with-alias"></a>
##commonjs/object-with-alias *module*

simple object export

  
<a name="module_commonjs/object-with-alias.one"></a>
###_.one *member*
first property

  
<a name="module_commonjs/object-with-alias.two"></a>
###_.two *member*
second property

  
<a name="module_commonjs/object-with-alias.three"></a>
###_.three() *function*
a function

<a name="module_commonjs/object"></a>
##commonjs/object *module*

simple object export

  
<a name="module_commonjs/object.one"></a>
###object.one *member*
first property

  
<a name="module_commonjs/object.three"></a>
###object.three(four, five) *function*
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
##private *module*

module with private shiz

  
<a name="module_private.notprivate"></a>
###private.notprivate *member*
visible property

  
<a name="module_commonjs/single-value"></a>
##commonjs/single-value *module*

this module exports one value, that's it

  
<a name="module_commonjs/sum-alias"></a>
##commonjs/sum-alias *module*

A simple maths function

  
**Example**  
```js
var sum = require("sum");
```
<a name="module_commonjs/sum"></a>
##commonjs/sum(a, b) *module*

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
##*const* CONST_ONE *constant*
the first important constant

**Type**: `number`  
<a name="CONST_TWO"></a>
##~~*const* CONST_TWO *constant*~~
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
##eFileType *member*
Enum for the `type` value

**Enum** with properties: `NOEXIST`, `FILE`, `DIR`  
**Read only**: true  
**Type**: `number`  
<a name="visible"></a>
##visible *member*
a visible global

  
<a name="variable"></a>
##variable *member*
a global variable

  
<a name="typed"></a>
##typed *member*
**Type**: `string`  
<a name="types"></a>
##types *member*
**Type**: `string` | `number`  
<a name="exampled"></a>
##exampled *member*
a var with an example

  
**Example**  
```js
var another = 100;
```
<a name="examples"></a>
##examples *member*
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
##_protected *member*
**Access**: protected  
  
<a name="withAuthor"></a>
##withAuthor *member*
  
**Author**: Clive Jones <clive@jones.com>  
<a name="hasDefault"></a>
##hasDefault *member*
**Default**: `23`  
  
<a name="hasDefaultObject"></a>
##hasDefaultObject *member*
**Default**: `{"one":1,"two":2}`  
  
<a name="deprecated"></a>
##~~deprecated *member*~~
***Deprecated***  
  
<a name="readOnly"></a>
##readOnly *member*
**Read only**: true  
  
<a name="hasSince"></a>
##hasSince *member*
  
**Since**: v0.10.28  
<a name="module_sum-alias"></a>
##module:sum-alias(a, b) *function*
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
##read(filename, done) *function*
**Params**

- filename `string` - the filename
- done [onComplete](#onComplete) - the callback

<a name="globalFunc"></a>
##globalFunc() *function*
a global function

<a name="exampled"></a>
##exampled() *function*
a function with an example

**Example**  
```js
var result = exampled();
```
<a name="multiExampled"></a>
##multiExampled() *function*
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
##_protected() *function*
**Access**: protected  
<a name="withAuthor"></a>
##withAuthor() *function*
**Author**: Clive Jones <clive@jones.com>  
<a name="oldFunction"></a>
##~~oldFunction() *function*~~
***Deprecated***  
<a name="newFunction"></a>
##newFunction() *function*
**Since**: v0.10.28  
<a name="withParam"></a>
##withParam(one) *function*
**Params**

- one `string` - The input string

<a name="withParams"></a>
##withParams(one, two) *function*
**Params**

- one `string` - The input string
- two `object`

<a name="withOptional"></a>
##withOptional(one, [two]) *function*
**Params**

- one `string` - The input string
- [two] `object` - this one is optional

<a name="withBullets"></a>
##withBullets(one, two) *function*
this description has 

- bullet
- points

and needs this line to separate the above list from the below

**Params**

- one `string` - The input string
- two `object` - a second input

<a name="returnsSomething"></a>
##returnsSomething() *function*
**Returns**: `string`  
<a name="returnsSomethingDesc"></a>
##returnsSomethingDesc() *function*
**Returns**: `object` - this return has a description  
<a name="returnsSeveral"></a>
##returnsSeveral() *function*
**Returns**: `object` | `string` - this return has several types  
<a name="doSomething"></a>
##doSomething(options) *function*
**Params**

- options `object` - the function options
  - one `string` - first option
  - two `string` - second option

<a name="doAnother"></a>
##doAnother(options) *function*
**Params**

- options `Object` - the function options

<a name="pluck"></a>
##pluck(...prop) *function*
This function takes variable input

**Params**

- ...prop `string` - the property(s) as input

<a name="requirer"></a>
##requirer() *function*
ensure you have some-module installed

<a name="setMagicNumber"></a>
##setMagicNumber(x) *function*
Set the magic number.

**Params**

- x [NumberLike](#NumberLike) - The magic number.

<a name="doSomething"></a>
##doSomething(options) *function*
**Params**

- options `object` - the function options
  - one `string` - first option
  - two `string` - second option

<a name="All"></a>

##~~All *class*~~
a class with all of the things

**Extends**: `Number`  
<a name="All"></a>
##~~new All(input, [options]) *class*~~
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
###all.topping *member*
the ingredients on top

**Default**: `mud, lettuce`  
**Type**: `string`  
**Since**: v1.0.0  
<a name="All#size"></a>
###all.size *member*
the general size

  
<a name="All#allThings"></a>
###~~all.allThings(one, two) *function*~~
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

##Person *class*
simple class description

**Extends**: `Object`  
<a name="Person"></a>
##new Person() *class*
a constructor description

<a name="Car"></a>

##Car *class*
<a name="Car"></a>
##new Car([options]) *class*
a constructor with args

**Params**

- [options] `object` - optional shit

<a name="Pipe"></a>

##Pipe *class*
a class which extends

**Extends**: `Pipe`  
<a name="Everything"></a>

##~~Everything *class*~~
a class with all trimmings

**Extends**: `Pipe`  
<a name="Everything"></a>
##~~new Everything(input, [options]) *class*~~
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

##Rice *class*
<a name="Rice#event_cooked"></a>
###event: "cooked" *event*
Fired when rice is ready

<a name="Rice#event_cooking"></a>
###event: "cooking" *event*
Fired when rice is cooking

<a name="Something"></a>

##Something *class*
<a name="Something#methodOne"></a>
###something.methodOne() *function*
method description

<a name="Something#allTogether"></a>
###~~something.allTogether(one, two) *function*~~
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

##Pizza *class*
<a name="Pizza#topping"></a>
###pizza.topping *member*
the ingredients on top

**Default**: `mud, lettuce`  
**Type**: `string`  
**Since**: v1.0.0  
<a name="Pizza#size"></a>
###pizza.size *member*
the general size

  
<a name="Plucker"></a>

##Plucker *class*
<a name="Plucker#doPluck"></a>
###plucker.doPluck(one, ...args, ...three) *function*
This function takes variable input

**Params**

- one `string` - an input
- ...args `string` - the property(s) as input
- ...three `string` - more input

<a name="onComplete"></a>
##callback: onComplete *typedef*
Called when an async operation completes

**Params**

- err `object` - an error, or `null`
- result `string` - the result info

**Type**: `function`  
<a name="NumberLike"></a>
##type: NumberLike *typedef*
A number, or a string containing a number.

**Type**: `number` | `string`  
