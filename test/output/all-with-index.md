#Index
* Modules
  * [file-pet](#module_file-pet) <sub>exports: class</sub>
    * [filePet.instie](#module_file-pet#instie)
    * [filePet.files](#module_file-pet#files)
    * [filePet.delete(paths)](#module_file-pet#delete)
  * [jacket](#module_jacket) <sub>exports: class</sub>
    * [jacket.zip()](#module_jacket#zip)
  * [shirt](#module_shirt)
    * [shirt.color](#module_shirt.color)
    * [class: shirt.Turtleneck](#module_shirt.Turtleneck)
      * [turtleneck.size](#module_shirt.Turtleneck#size)
  * [blazer](#module_blazer) <sub>exports: class</sub>
    * [blazer.zip()](#module_blazer#zip)
  * [cattle](#module_cattle)
    * [cattle.createCow()](#module_cattle.createCow)
    * [\~innerMember](#module_cattle.innerMember)
    * [\~innerFuction()](#module_cattle.innerFuction)
    * [~~\~anotherInnerFuction()~~](#module_cattle.anotherInnerFuction)
  * [commonjs/cyberdyne](#module_commonjs/cyberdyne)
    * [cyber.createMachine()](#module_commonjs/cyberdyne.createMachine)
    * [\~something](#module_commonjs/cyberdyne.something)
    * [class: \~cyber.Machine](#module_commonjs/cyberdyne.Machine)
      * [machine.eyes](#module_commonjs/cyberdyne.Machine#eyes)
      * [machine.vibe](#module_commonjs/cyberdyne.Machine#vibe)
  * [file-set](#module_file-set) <sub>exports: class</sub>
    * [fileSet.files](#module_file-set#files)
    * [fileSet.delete(paths)](#module_file-set#delete)
  * [commonjs/function](#module_commonjs/function) <sub>exports: function</sub>
  * [heaven](#module_heaven)
    * [heaven.Cloud](#module_heaven.Cloud)
    * [heaven.createCloud()](#module_heaven.createCloud)
    * [class: \~heaven.Cloud](#module_heaven.Cloud)
      * [cloud.eyes](#module_heaven.Cloud#eyes)
      * [cloud.vibe](#module_heaven.Cloud#vibe)
      * [Cloud.classMethod()](#module_heaven.Cloud.classMethod)
      * [const: Cloud.SPACES](#module_heaven.Cloud.SPACES)
    * [const: \~FACT](#module_heaven.FACT)
  * [commonjs/ignore](#module_commonjs/ignore)
    * [ignore.visible](#module_commonjs/ignore.visible)
  * [commonjs/object-with-alias](#module_commonjs/object-with-alias)
    * [_.one](#module_commonjs/object-with-alias.one)
    * [_.two](#module_commonjs/object-with-alias.two)
    * [_.three()](#module_commonjs/object-with-alias.three)
  * [commonjs/object](#module_commonjs/object)
    * [object.one](#module_commonjs/object.one)
    * [object.three(four, five)](#module_commonjs/object.three)
  * [private](#module_private)
    * [private.notprivate](#module_private.notprivate)
  * [commonjs/single-value](#module_commonjs/single-value) <sub>exports: member</sub>
  * [commonjs/sum-alias](#module_commonjs/sum-alias)
  * [commonjs/sum(a, b)](#module_commonjs/sum)

* Globals
  * [enum: eFileType](#eFileType)
  * [visible](#visible)
  * [variable](#variable)
  * [typed](#typed)
  * [types](#types)
  * [exampled](#exampled)
  * [examples](#examples)
  * [_protected](#_protected)
  * [withAuthor](#withAuthor)
  * [hasDefault](#hasDefault)
  * [hasDefaultObject](#hasDefaultObject)
  * [~~deprecated~~](#deprecated)
  * [readOnly](#readOnly)
  * [hasSince](#hasSince)
  * [module:sum-alias(a, b)](#module_sum-alias)
  * [read(filename, done)](#read)
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
  * [doSomething(options)](#doSomething)
  * [doAnother(options)](#doAnother)
  * [pluck(...prop)](#pluck)
  * [requirer()](#requirer)
  * [setMagicNumber(x)](#setMagicNumber)
  * [doSomething(options)](#doSomething)
  * [class: module:hello/world](#module_hello/world)
    * [module:hello/world.sayHello()](#module_hello/world#sayHello)
  * [~~class: All~~](#All)
    * [all.topping](#All#topping)
    * [all.size](#All#size)
    * [~~all.allThings(one, two)~~](#All#allThings)
  * [class: Person](#Person)
  * [class: Car](#Car)
  * [class: Pipe](#Pipe)
  * [~~class: Everything~~](#Everything)
  * [class: Rice](#Rice)
    * [event: "cooked"](#Rice#event_cooked)
    * [event: "cooking"](#Rice#event_cooking)
  * [class: Something](#Something)
    * [something.methodOne()](#Something#methodOne)
    * [~~something.allTogether(one, two)~~](#Something#allTogether)
  * [class: Pizza](#Pizza)
    * [pizza.topping](#Pizza#topping)
    * [pizza.size](#Pizza#size)
  * [class: Plucker](#Plucker)
    * [plucker.doPluck(one, ...args, ...three)](#Plucker#doPluck)
  * [const: CONST_ONE](#CONST_ONE)
  * [~~const: CONST_TWO~~](#CONST_TWO)
  * [callback: onComplete](#onComplete)
  * [type: NumberLike](#NumberLike)

#Modules
<a name="module_file-pet"></a>
##file-pet

this module returns a pet of files

  
**Example**  
```js
var cowFiles = FilePet("cow/*");
```

**Symbols**

* [filePet.instie](#module_file-pet#instie)
* [filePet.files](#module_file-pet#files)
* [filePet.delete(paths)](#module_file-pet#delete)

<a name="module_file-pet#instie"></a>
###filePet.instie
an instance ting

  
<a name="module_file-pet#files"></a>
###filePet.files
the static property

  
<a name="module_file-pet#delete"></a>
###filePet.delete(paths)
A static methy meth

**Params**

- paths `array` - the paths to delete

<a name="module_jacket"></a>
##jacket

A module representing a jacket.

  
**Symbols**

* [jacket.zip()](#module_jacket#zip)

<a name="module_jacket#zip"></a>
###jacket.zip()
Open and close your Jacket.

<a name="module_shirt"></a>
##shirt
**Version**: 1.0  

A module representing a shirt.

  
**Symbols**

* [shirt.color](#module_shirt.color)
* [class: shirt.Turtleneck](#module_shirt.Turtleneck)
  * [turtleneck.size](#module_shirt.Turtleneck#size)

<a name="module_shirt.color"></a>
###shirt.color
A property of the module.

  
<a name="module_shirt.Turtleneck"></a>
###class: shirt.Turtleneck
<a name="module_shirt.Turtleneck"></a>
###new shirt.Turtleneck()
**Params**

-  `number` - the size innit

**Symbols**

  * [turtleneck.size](#module_shirt.Turtleneck#size)

<a name="module_shirt.Turtleneck#size"></a>
####turtleneck.size
A property of the class.

  
<a name="module_blazer"></a>
##blazer(input)

A module representing a blazer.

**Params**

- input `string` - the input

  
**Symbols**

* [blazer.zip()](#module_blazer#zip)

<a name="module_blazer#zip"></a>
###blazer.zip()
Open and close your Blazer.

<a name="module_cattle"></a>
##cattle

exported object, with-inner-members

  
**Symbols**

* [cattle.createCow()](#module_cattle.createCow)
* [\~innerMember](#module_cattle.innerMember)
* [\~innerFuction()](#module_cattle.innerFuction)
* [~~\~anotherInnerFuction()~~](#module_cattle.anotherInnerFuction)

<a name="module_cattle.createCow"></a>
###cattle.createCow()
**Returns**: `boolean`  
<a name="module_cattle.innerMember"></a>
###\~innerMember
the inner member

**Scope**: inner member of [cattle](#module_cattle)  
  
<a name="module_cattle.innerFuction"></a>
###\~innerFuction()
the inner function

**Scope**: inner function of [cattle](#module_cattle)  
<a name="module_cattle.anotherInnerFuction"></a>
###~~\~anotherInnerFuction()~~
another inner function

***Deprecated***  
**Scope**: inner function of [cattle](#module_cattle)  
<a name="module_commonjs/cyberdyne"></a>
##commonjs/cyberdyne

exports an object.. has an inner class.

  
**Symbols**

* [cyber.createMachine()](#module_commonjs/cyberdyne.createMachine)
* [\~something](#module_commonjs/cyberdyne.something)
* [class: \~cyber.Machine](#module_commonjs/cyberdyne.Machine)
  * [machine.eyes](#module_commonjs/cyberdyne.Machine#eyes)
  * [machine.vibe](#module_commonjs/cyberdyne.Machine#vibe)

<a name="module_commonjs/cyberdyne.createMachine"></a>
###cyber.createMachine()
**Returns**: `module:cyberdyne~Machine`  
<a name="module_commonjs/cyberdyne.something"></a>
###\~something
random

**Scope**: inner member of [commonjs/cyberdyne](#module_commonjs/cyberdyne)  
  
<a name="module_commonjs/cyberdyne.Machine"></a>
###class: \~cyber.Machine
The main class of machine

**Scope**: inner class of [commonjs/cyberdyne](#module_commonjs/cyberdyne)  
**Symbols**

  * [machine.eyes](#module_commonjs/cyberdyne.Machine#eyes)
  * [machine.vibe](#module_commonjs/cyberdyne.Machine#vibe)

<a name="module_commonjs/cyberdyne.Machine#eyes"></a>
####machine.eyes
**Type**: `number`  
<a name="module_commonjs/cyberdyne.Machine#vibe"></a>
####machine.vibe
**Type**: `string`  
<a name="module_file-set"></a>
##file-set(num)

this class returns a set of files

**Params**

- num `Array.<string>` - a list of file patterns

  
**Example**  
```js
var fileSet = require("file-set");
```

**Symbols**

* [fileSet.files](#module_file-set#files)
* [fileSet.delete(paths)](#module_file-set#delete)

<a name="module_file-set#files"></a>
###fileSet.files
the static property

  
<a name="module_file-set#delete"></a>
###fileSet.delete(paths)
A static methy meth

**Params**

- paths `array` - the paths to delete

<a name="module_commonjs/function"></a>
##commonjs/function
**Author**: Lloyd <75pound@gmail.com>  

This is the module description

**Since**: v0.10.28  
  
**Symbols**


<a name="module_heaven"></a>
##heaven

factory module creating dodgy cloud. object-with-static-class.

  
**Symbols**

* [heaven.Cloud](#module_heaven.Cloud)
* [heaven.createCloud()](#module_heaven.createCloud)
* [class: \~heaven.Cloud](#module_heaven.Cloud)
  * [cloud.eyes](#module_heaven.Cloud#eyes)
  * [cloud.vibe](#module_heaven.Cloud#vibe)
  * [Cloud.classMethod()](#module_heaven.Cloud.classMethod)
  * [const: Cloud.SPACES](#module_heaven.Cloud.SPACES)
* [const: \~FACT](#module_heaven.FACT)

<a name="module_heaven.Cloud"></a>
###heaven.Cloud
access to the Cloud class

**Type**: [Cloud](#module_heaven.Cloud)  
<a name="module_heaven.createCloud"></a>
###heaven.createCloud()
**Returns**: [Cloud](#module_heaven.Cloud)  
<a name="module_heaven.Cloud"></a>
###class: \~heaven.Cloud
The main class of machine

**Scope**: inner class of [heaven](#module_heaven)  
**Symbols**

  * [cloud.eyes](#module_heaven.Cloud#eyes)
  * [cloud.vibe](#module_heaven.Cloud#vibe)
  * [Cloud.classMethod()](#module_heaven.Cloud.classMethod)
  * [const: Cloud.SPACES](#module_heaven.Cloud.SPACES)

<a name="module_heaven.Cloud#eyes"></a>
####cloud.eyes
**Type**: `number`  
<a name="module_heaven.Cloud#vibe"></a>
####cloud.vibe
**Type**: `string`  
<a name="module_heaven.Cloud.classMethod"></a>
####Cloud.classMethod()
a class method

<a name="module_heaven.Cloud.SPACES"></a>
####const: Cloud.SPACES
a class constant

**Type**: `number`  
<a name="module_heaven.FACT"></a>
###const: \~FACT
an inner constant

**Type**: `boolean`  
<a name="module_commonjs/ignore"></a>
##commonjs/ignore

module with ignored shiz

  
**Symbols**

* [ignore.visible](#module_commonjs/ignore.visible)

<a name="module_commonjs/ignore.visible"></a>
###ignore.visible
visible property

  
<a name="module_commonjs/object-with-alias"></a>
##commonjs/object-with-alias

simple object export

  
**Symbols**

* [_.one](#module_commonjs/object-with-alias.one)
* [_.two](#module_commonjs/object-with-alias.two)
* [_.three()](#module_commonjs/object-with-alias.three)

<a name="module_commonjs/object-with-alias.one"></a>
###_.one
first property

  
<a name="module_commonjs/object-with-alias.two"></a>
###_.two
second property

  
<a name="module_commonjs/object-with-alias.three"></a>
###_.three()
a function

<a name="module_commonjs/object"></a>
##commonjs/object

simple object export

  
**Symbols**

* [object.one](#module_commonjs/object.one)
* [object.three(four, five)](#module_commonjs/object.three)

<a name="module_commonjs/object.one"></a>
###object.one
first property

  
<a name="module_commonjs/object.three"></a>
###object.three(four, five)
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
##private

module with private shiz

  
**Symbols**

* [private.notprivate](#module_private.notprivate)

<a name="module_private.notprivate"></a>
###private.notprivate
visible property

  
<a name="module_commonjs/single-value"></a>
##commonjs/single-value

this module exports one value, that's it

  
**Symbols**


<a name="module_commonjs/sum-alias"></a>
##commonjs/sum-alias

A simple maths function

  
**Example**  
```js
var sum = require("sum");
```

**Symbols**


<a name="module_commonjs/sum"></a>
##commonjs/sum(a, b)

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

**Symbols**


#Globals
<a name="CONST_ONE"></a>
##const: CONST_ONE
the first important constant

**Type**: `number`  
<a name="CONST_TWO"></a>
##~~const: CONST_TWO~~
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
##enum: eFileType
Enum for the `type` value

**Properties**: `NOEXIST`, `FILE`, `DIR`  
**Read only**: true  
**Type**: `number`  
<a name="visible"></a>
##visible
a visible global

  
<a name="variable"></a>
##variable
a global variable

  
<a name="typed"></a>
##typed
**Type**: `string`  
<a name="types"></a>
##types
**Type**: `string` | `number`  
<a name="exampled"></a>
##exampled
a var with an example

  
**Example**  
```js
var another = 100;
```

<a name="examples"></a>
##examples
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
##_protected
**Access**: protected  
  
<a name="withAuthor"></a>
##withAuthor
  
**Author**: Clive Jones <clive@jones.com>  
<a name="hasDefault"></a>
##hasDefault
**Default**: `23`  
  
<a name="hasDefaultObject"></a>
##hasDefaultObject
**Default**: `{"one":1,"two":2}`  
  
<a name="deprecated"></a>
##~~deprecated~~
***Deprecated***  
  
<a name="readOnly"></a>
##readOnly
**Read only**: true  
  
<a name="hasSince"></a>
##hasSince
  
**Since**: v0.10.28  
<a name="module_sum-alias"></a>
##module:sum-alias(a, b)
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
##read(filename, done)
**Params**

- filename `string` - the filename
- done [onComplete](#onComplete) - the callback

<a name="globalFunc"></a>
##globalFunc()
a global function

<a name="exampled"></a>
##exampled()
a function with an example

**Example**  
```js
var result = exampled();
```

<a name="multiExampled"></a>
##multiExampled()
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
##_protected()
**Access**: protected  
<a name="withAuthor"></a>
##withAuthor()
**Author**: Clive Jones <clive@jones.com>  
<a name="oldFunction"></a>
##~~oldFunction()~~
***Deprecated***  
<a name="newFunction"></a>
##newFunction()
**Since**: v0.10.28  
<a name="withParam"></a>
##withParam(one)
**Params**

- one `string` - The input string

<a name="withParams"></a>
##withParams(one, two)
**Params**

- one `string` - The input string
- two `object`

<a name="withOptional"></a>
##withOptional(one, [two])
**Params**

- one `string` - The input string
- [two] `object` - this one is optional

<a name="withBullets"></a>
##withBullets(one, two)
this description has 

- bullet
- points

and needs this line to separate the above list from the below

**Params**

- one `string` - The input string
- two `object` - a second input

<a name="returnsSomething"></a>
##returnsSomething()
**Returns**: `string`  
<a name="returnsSomethingDesc"></a>
##returnsSomethingDesc()
**Returns**: `object` - this return has a description  
<a name="returnsSeveral"></a>
##returnsSeveral()
**Returns**: `object` | `string` - this return has several types  
<a name="doSomething"></a>
##doSomething(options)
**Params**

- options `object` - the function options
  - one `string` - first option
  - two `string` - second option

<a name="doAnother"></a>
##doAnother(options)
**Params**

- options `Object` - the function options

<a name="pluck"></a>
##pluck(...prop)
This function takes variable input

**Params**

- ...prop `string` - the property(s) as input

<a name="requirer"></a>
##requirer()
ensure you have some-module installed

<a name="setMagicNumber"></a>
##setMagicNumber(x)
Set the magic number.

**Params**

- x [NumberLike](#NumberLike) - The magic number.

<a name="doSomething"></a>
##doSomething(options)
**Params**

- options `object` - the function options
  - one `string` - first option
  - two `string` - second option

<a name="module_hello/world"></a>
##class: module:hello/world
<a name="module_hello/world"></a>
##new module:hello/world()
A class that says hello!

**Symbols**

* [module:hello/world.sayHello()](#module_hello/world#sayHello)

<a name="module_hello/world#sayHello"></a>
###module:hello/world.sayHello()
Say hello.

<a name="All"></a>
##~~class: All~~
a class with all of the things

**Extends**: `Number`  
<a name="All"></a>
##~~new All(input, [options])~~
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

**Symbols**

* [all.topping](#All#topping)
* [all.size](#All#size)
* [~~all.allThings(one, two)~~](#All#allThings)

<a name="All#topping"></a>
###all.topping
the ingredients on top

**Default**: `mud, lettuce`  
**Type**: `string`  
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
**Since**: v0.10.28  
**Author**: Lloyd <75pound@gmail.com>  
**Returns**: `object` | `string` - this return has several types  
**Example**  
```js
all.allTogether(true);
```

<a name="Person"></a>
##class: Person
simple class description

**Extends**: `Object`  
<a name="Person"></a>
##new Person()
a constructor description

**Symbols**


<a name="Car"></a>
##class: Car
<a name="Car"></a>
##new Car([options])
a constructor with args

**Params**

- [options] `object` - optional shit

**Symbols**


<a name="Pipe"></a>
##class: Pipe
a class which extends

**Extends**: `Pipe`  
**Symbols**


<a name="Everything"></a>
##~~class: Everything~~
a class with all trimmings

**Extends**: `Pipe`  
<a name="Everything"></a>
##~~new Everything(input, [options])~~
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

**Symbols**


<a name="Rice"></a>
##class: Rice
**Symbols**

* [event: "cooked"](#Rice#event_cooked)
* [event: "cooking"](#Rice#event_cooking)

<a name="Rice#event_cooked"></a>
###event: "cooked"
Fired when rice is ready

<a name="Rice#event_cooking"></a>
###event: "cooking"
Fired when rice is cooking

<a name="Something"></a>
##class: Something
**Symbols**

* [something.methodOne()](#Something#methodOne)
* [~~something.allTogether(one, two)~~](#Something#allTogether)

<a name="Something#methodOne"></a>
###something.methodOne()
method description

<a name="Something#allTogether"></a>
###~~something.allTogether(one, two)~~
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
##class: Pizza
**Symbols**

* [pizza.topping](#Pizza#topping)
* [pizza.size](#Pizza#size)

<a name="Pizza#topping"></a>
###pizza.topping
the ingredients on top

**Default**: `mud, lettuce`  
**Type**: `string`  
**Since**: v1.0.0  
<a name="Pizza#size"></a>
###pizza.size
the general size

  
<a name="Plucker"></a>
##class: Plucker
**Symbols**

* [plucker.doPluck(one, ...args, ...three)](#Plucker#doPluck)

<a name="Plucker#doPluck"></a>
###plucker.doPluck(one, ...args, ...three)
This function takes variable input

**Params**

- one `string` - an input
- ...args `string` - the property(s) as input
- ...three `string` - more input

<a name="onComplete"></a>
##callback: onComplete
Called when an async operation completes

**Params**

- err `object` - an error, or `null`
- result `string` - the result info

**Type**: `function`  
<a name="NumberLike"></a>
##type: NumberLike
A number, or a string containing a number.

**Type**: `number` | `string`  
