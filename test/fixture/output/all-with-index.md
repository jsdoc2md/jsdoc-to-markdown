##Modules
* [commonjs/object-alias](#module_commonjs/object-alias)
  * [.one](#module_commonjs/object-alias.one)
  * [.two](#module_commonjs/object-alias.two)
  * [.three()](#module_commonjs/object-alias.three)
* [amd/export-object](#module_amd/export-object)
  * [.sayHello()](#module_amd/export-object.sayHello)
* [jacket](#module_jacket)
  * [class: Jacket](#exp_module_jacket--Jacket) ⏏
    * _instance_
      * [.zip()](#module_jacket--Jacket#zip)
* [file-set](#module_file-set)
  * [class: FileSet](#exp_module_file-set--FileSet) ⏏
    * [new FileSet()](#new_module_file-set--FileSet_new)
    * _instance_
      * [.files](#module_file-set--FileSet#files)
      * [.delete(paths)](#module_file-set--FileSet#delete)
* [function-tools](#module_function-tools)
  * [.one()](#module_function-tools.one)
* [sum-alias](#module_sum-alias)
  * [sum(a, b)](#exp_module_sum-alias--sum) ⇒ <code>number</code> ⏏
* [commonjs/function](#module_commonjs/function)
  * [module.exports(one, two)](#exp_module_commonjs/function--module.exports) ⇒ <code>object</code> \| <code>string</code> ⏏
* [commonjs/ignore](#module_commonjs/ignore)
  * [.visible](#module_commonjs/ignore.visible)
* [file-pet](#module_file-pet)
  * [class: FilePet](#exp_module_file-pet--FilePet) ⏏
    * [new FilePet(num)](#new_module_file-pet--FilePet_new)
    * _instance_
      * [.instie](#module_file-pet--FilePet#instie)
      * [.files](#module_file-pet--FilePet#files) → <code>boolean</code>
      * [.delete(paths)](#module_file-pet--FilePet#delete)
* [cyberdyne](#module_cyberdyne)
  * [.createMachine()](#module_cyberdyne.createMachine) ⇒ <code>[Machine](#module_cyberdyne..Machine)</code>
  * [~something](#module_cyberdyne..something)
  * [class: ~Machine](#module_cyberdyne..Machine)
    * [new Machine(options)](#new_module_cyberdyne..Machine_new)
    * _instance_
      * [.eyes](#module_cyberdyne..Machine#eyes) → <code>number</code>
      * [.vibe](#module_cyberdyne..Machine#vibe) → <code>string</code>
* [cattle](#module_cattle)
  * [.createCow()](#module_cattle.createCow) ⇒ <code>boolean</code>
  * [~innerMember](#module_cattle..innerMember)
  * [~innerFuction()](#module_cattle..innerFuction)
  * ~~[~anotherInnerFuction()](#module_cattle..anotherInnerFuction)~~
* [one-member](#module_one-member)
  * [.three(four, five)](#module_one-member.three) ⇒ <code>object</code> \| <code>string</code>
* [heaven](#module_heaven)
  * [.Cloud](#module_heaven.Cloud) → <code>[Cloud](#module_heaven..Cloud)</code>
  * [.createCloud()](#module_heaven.createCloud) ⇒ <code>[Cloud](#module_heaven..Cloud)</code>
  * [const: ~FACT](#module_heaven..FACT) → <code>boolean</code>
  * [class: ~Cloud](#module_heaven..Cloud)
    * [new Cloud(options)](#new_module_heaven..Cloud_new)
    * _instance_
      * [.size](#module_heaven..Cloud#size) → <code>number</code>
      * [.rain](#module_heaven..Cloud#rain) → <code>boolean</code>
    * _static_
      * [.classMethod()](#module_heaven..Cloud.classMethod)
      * [const: .SPACES](#module_heaven..Cloud.SPACES) → <code>number</code>
* [private](#module_private)
  * [.notprivate](#module_private.notprivate)
* [commonjs/single-value](#module_commonjs/single-value)
  * [module.exports](#exp_module_commonjs/single-value--module.exports) → <code>boolean</code> ⏏
* [foo/bar](#module_foo/bar)
  * ["event:MyEvent"](#module_foo/bar.event_MyEvent)
  * [external: ~String](#external_String)
  * [~linkFunction()](#module_foo/bar..linkFunction)
  * [class: ~LinkClass](#module_foo/bar..LinkClass)
    * [new LinkClass()](#new_module_foo/bar..LinkClass_new)
    * _instance_
      * [.foo](#module_foo/bar..LinkClass#foo)

##Global
* [returnsSomethingDesc()](#returnsSomethingDesc) ⇒ <code>object</code>
* [callback: onComplete](#onComplete) → <code>function</code>
* ~~[class: All](#All)~~
  * [new All(input, [options])](#new_All_new)
  * _instance_
    * [.topping](#All#topping) → <code>string</code>
    * [.size](#All#size)
    * ~~[.allThings(one, two)](#All#allThings) ⇒ <code>object</code> \| <code>string</code>~~
      * [~some](#All#allThings..some)
* [class: Person](#Person)
  * [new Person()](#new_Person_new)
* [class: Car](#Car)
  * [new Car([options])](#new_Car_new)
* [class: Pipe](#Pipe)
* ~~[class: Everything](#Everything)~~
  * [new Everything(input, [options])](#new_Everything_new)
* [class: Rice](#Rice)
  * _events_
    * ["cooked"](#Rice#event_cooked)
    * ["cooking"](#Rice#event_cooking)
* [class: Something](#Something)
  * _instance_
    * [.methodOne()](#Something#methodOne)
    * ~~[.allTogether(one, two)](#Something#allTogether) ⇒ <code>object</code> \| <code>string</code>~~
* [class: Pizza](#Pizza)
  * _instance_
    * [.topping](#Pizza#topping) → <code>string</code>
    * [.size](#Pizza#size)
* [const: CONST_ONE](#CONST_ONE) → <code>number</code>
* ~~[const: CONST_TWO](#CONST_TWO) → <code>boolean</code>~~
* [customTaggedFunction()](#customTaggedFunction)
* [enum: eFileType](#eFileType) → <code>number</code>
  * [.NOEXIST](#eFileType.NOEXIST) → <code>number</code>
  * [.FILE](#eFileType.FILE) → <code>number</code>
  * [.DIR](#eFileType.DIR) → <code>number</code>
* [class: Hurl](#Hurl)
  * _instance_
    * [.snowball()](#Hurl#snowball)
  * _events_
    * ["snowball"](#Hurl#event_snowball)
* [globalFunc()](#globalFunc)
* [exampled()](#exampled)
* [multiExampled()](#multiExampled)
* [_protected()](#_protected)
* [withAuthor()](#withAuthor)
* ~~[oldFunction()](#oldFunction)~~
* [newFunction()](#newFunction)
* [withParam(one)](#withParam)
* [withParams(one, two)](#withParams)
* [withOptional(one, [two])](#withOptional)
* [withBullets(one, two)](#withBullets)
* [returnsSomething()](#returnsSomething) ⇒ <code>string</code>
* [read(filename, done)](#read)
* [returnsSeveral()](#returnsSeveral) ⇒ <code>object</code> \| <code>string</code>
* ~~[allTogether(one, two)](#allTogether) ⇒ <code>object</code> \| <code>string</code>~~
* [visible](#visible)
* [variable](#variable)
* [typed](#typed) → <code>string</code>
* [types](#types) → <code>string</code> \| <code>number</code>
* [exampled](#exampled)
* [examples](#examples)
* [_protected](#_protected)
* [withAuthor](#withAuthor)
* [hasDefault](#hasDefault)
* [hasDefaultObject](#hasDefaultObject)
* ~~[deprecated](#deprecated)~~
* [readOnly](#readOnly)
* [hasSince](#hasSince)
* [car](#car)
  * [.env](#car#env)
    * [.weather](#car#env.weather) → <code>string</code>
    * [.roads](#car#env.roads) → <code>string</code>
  * [.wheels](#car.wheels)
  * [.sensors](#car.sensors)
  * [.start()](#car.start)
* [doSomething(options)](#doSomething)
* [doAnother(options)](#doAnother)
* [pluck(...prop)](#pluck)
* [class: Plucker](#Plucker)
  * _instance_
    * [.doPluck(one, ...args, ...three)](#Plucker#doPluck)
* [config](#config)
* [requirer()](#requirer)
* [type: NumberLike](#NumberLike) → <code>number</code> \| <code>string</code>
* [setMagicNumber(x)](#setMagicNumber)
* [doSomething(options)](#doSomething)
* [something](#something) → <code>string</code>
* [another](#another) → <code>string</code>


<a name="module_amd/export-object"></a>
##amd/export-object
A module that says hello!

<a name="module_amd/export-object.sayHello"></a>
###amd/export-object.sayHello()
Say hello.

<a name="module_file-pet"></a>
##file-pet
this module returns a pet of files

**Example**  
```js
var cowFiles = FilePet("cow/*");
```

* [file-pet](#module_file-pet)
  * [class: FilePet](#exp_module_file-pet--FilePet) ⏏
    * [new FilePet(num)](#new_module_file-pet--FilePet_new)
    * _instance_
      * [.instie](#module_file-pet--FilePet#instie)
      * [.files](#module_file-pet--FilePet#files) → <code>boolean</code>
      * [.delete(paths)](#module_file-pet--FilePet#delete)

<a name="exp_module_file-pet--FilePet"></a>
###class: FilePet ⏏
this class returns a pet of files

<a name="new_module_file-pet--FilePet_new"></a>
####new FilePet(num)
this is the contructor

| Param | Type | Description |
| ----- | ---- | ----------- |
| num | <code>number</code> | the input number |

**Example**  
```js
var cowFiles = FilePet("cow/*");
```

<a name="module_file-pet--FilePet#instie"></a>
####filePet.instie
an instance ting

<a name="module_file-pet--FilePet#files"></a>
####filePet.files → <code>boolean</code>
the prototype instance property

**Default**: `true`  
<a name="module_file-pet--FilePet#delete"></a>
####filePet.delete(paths)
A prototype instance methy meth

| Param | Type | Description |
| ----- | ---- | ----------- |
| paths | <code>array</code> | the paths to delete |

<a name="module_jacket"></a>
##jacket
A module representing a jacket.


* [jacket](#module_jacket)
  * [class: Jacket](#exp_module_jacket--Jacket) ⏏
    * _instance_
      * [.zip()](#module_jacket--Jacket#zip)

<a name="exp_module_jacket--Jacket"></a>
###class: Jacket ⏏
<a name="module_jacket--Jacket#zip"></a>
####jacket.zip()
Open and close your Jacket.

<a name="module_file-set"></a>
##file-set
this module exports a class constructor

**Example**  
```js
var FileSet = require("file-set");
```

* [file-set](#module_file-set)
  * [class: FileSet](#exp_module_file-set--FileSet) ⏏
    * [new FileSet()](#new_module_file-set--FileSet_new)
    * _instance_
      * [.files](#module_file-set--FileSet#files)
      * [.delete(paths)](#module_file-set--FileSet#delete)

<a name="exp_module_file-set--FileSet"></a>
###class: FileSet ⏏
this class returns a set of files

<a name="new_module_file-set--FileSet_new"></a>
####new FileSet()
Takes a list of path patterns

| Param | Type | Description |
| ----- | ---- | ----------- |
|  | <code>Array.&lt;string&gt;</code> | a list of file patterns |

**Example**  
```js
var cowFiles = new FileSet("cow/*");
```
<a name="module_file-set--FileSet#files"></a>
####fileSet.files
the prototype instance property

<a name="module_file-set--FileSet#delete"></a>
####fileSet.delete(paths)
A prototype instance methy meth

| Param | Type | Description |
| ----- | ---- | ----------- |
| paths | <code>array</code> | the paths to delete |

<a name="module_function-tools"></a>
##function-tools
This is the module description

**variablename**: f  
**context**: {customContext}  
<a name="module_function-tools.one"></a>
###function-tools.one()
the main function description

<a name="module_sum-alias"></a>
##sum-alias
This module exports a simple maths function

**Example**  
```js
var sum = require("sum-alias");
```
<a name="exp_module_sum-alias--sum"></a>
###sum(a, b) ⇒ <code>number</code> ⏏
Sums two numbers together

| Param | Type | Description |
| ----- | ---- | ----------- |
| a | <code>number</code> | first number |
| b | <code>number</code> | second number |

**Returns**: <code>number</code> - the result  
**Example**  
```js
var result = sum(1, 1);
```
<a name="module_commonjs/function"></a>
##commonjs/function
This is the module description

**Since**: v0.10.28  
**Author:** Lloyd <75pound@gmail.com>  
<a name="exp_module_commonjs/function--module.exports"></a>
###module.exports(one, two) ⇒ <code>object</code> \| <code>string</code> ⏏
the main function description

| Param | Type | Description |
| ----- | ---- | ----------- |
| one | <code>string</code> | The input string |
| two | <code>object</code> | a second input |

**Returns**: <code>object</code> \| <code>string</code> - this return has several types  
<a name="module_commonjs/ignore"></a>
##commonjs/ignore
module with ignored shiz

<a name="module_commonjs/ignore.visible"></a>
###commonjs/ignore.visible
visible property

<a name="module_commonjs/object-alias"></a>
##commonjs/object-alias
simple object export


* [commonjs/object-alias](#module_commonjs/object-alias)
  * [.one](#module_commonjs/object-alias.one)
  * [.two](#module_commonjs/object-alias.two)
  * [.three()](#module_commonjs/object-alias.three)

<a name="module_commonjs/object-alias.one"></a>
###commonjs/object-alias.one
first property

<a name="module_commonjs/object-alias.two"></a>
###commonjs/object-alias.two
second property

<a name="module_commonjs/object-alias.three"></a>
###commonjs/object-alias.three()
a function

<a name="module_cyberdyne"></a>
##cyberdyne
exports an object.. has an inner class.

**Example**  
```js
var cyber = require("cyberdyne");
```

* [cyberdyne](#module_cyberdyne)
  * [.createMachine()](#module_cyberdyne.createMachine) ⇒ <code>[Machine](#module_cyberdyne..Machine)</code>
  * [~something](#module_cyberdyne..something)
  * [class: ~Machine](#module_cyberdyne..Machine)
    * [new Machine(options)](#new_module_cyberdyne..Machine_new)
    * _instance_
      * [.eyes](#module_cyberdyne..Machine#eyes) → <code>number</code>
      * [.vibe](#module_cyberdyne..Machine#vibe) → <code>string</code>

<a name="module_cyberdyne.createMachine"></a>
###cyberdyne.createMachine() ⇒ <code>[Machine](#module_cyberdyne..Machine)</code>
<a name="module_cyberdyne..something"></a>
###cyberdyne~something
random

**Scope**: inner member of <code>[cyberdyne](#module_cyberdyne)</code>  
<a name="module_cyberdyne..Machine"></a>
###class: cyberdyne~Machine
The main class of machine

**Scope**: inner class of <code>[cyberdyne](#module_cyberdyne)</code>  

* [class: ~Machine](#module_cyberdyne..Machine)
  * [new Machine(options)](#new_module_cyberdyne..Machine_new)
  * _instance_
    * [.eyes](#module_cyberdyne..Machine#eyes) → <code>number</code>
    * [.vibe](#module_cyberdyne..Machine#vibe) → <code>string</code>

<a name="new_module_cyberdyne..Machine_new"></a>
####new Machine(options)
the Machine constructor

| Param | Type | Description |
| ----- | ---- | ----------- |
| options | <code>object</code> | constructor options |

<a name="module_cyberdyne..Machine#eyes"></a>
####machine.eyes → <code>number</code>
<a name="module_cyberdyne..Machine#vibe"></a>
####machine.vibe → <code>string</code>
<a name="module_cattle"></a>
##cattle
exported object, with-inner-members


* [cattle](#module_cattle)
  * [.createCow()](#module_cattle.createCow) ⇒ <code>boolean</code>
  * [~innerMember](#module_cattle..innerMember)
  * [~innerFuction()](#module_cattle..innerFuction)
  * ~~[~anotherInnerFuction()](#module_cattle..anotherInnerFuction)~~

<a name="module_cattle.createCow"></a>
###cattle.createCow() ⇒ <code>boolean</code>
<a name="module_cattle..innerMember"></a>
###cattle~innerMember
the inner member

**Scope**: inner member of <code>[cattle](#module_cattle)</code>  
<a name="module_cattle..innerFuction"></a>
###cattle~innerFuction()
the inner function

**Scope**: inner function of <code>[cattle](#module_cattle)</code>  
<a name="module_cattle..anotherInnerFuction"></a>
###~~cattle~anotherInnerFuction()~~
***Deprecated:*** true  

another inner function

**Scope**: inner function of <code>[cattle](#module_cattle)</code>  
<a name="module_one-member"></a>
##one-member
simple object, one member. It shouldn't have an index.

<a name="module_one-member.three"></a>
###one-member.three(four, five) ⇒ <code>object</code> \| <code>string</code>
a function

| Param | Type | Description |
| ----- | ---- | ----------- |
| four | <code>string</code> | The input string |
| five | <code>object</code> | a second input |

**Returns**: <code>object</code> \| <code>string</code> - this return has several types  
**Since**: v0.10.28  
**Author:** Lloyd <75pound@gmail.com>  
**Example**  
```js
allTogether(true);
```
<a name="module_heaven"></a>
##heaven
factory module creating dodgy cloud. object-with-static-class.


* [heaven](#module_heaven)
  * [.Cloud](#module_heaven.Cloud) → <code>[Cloud](#module_heaven..Cloud)</code>
  * [.createCloud()](#module_heaven.createCloud) ⇒ <code>[Cloud](#module_heaven..Cloud)</code>
  * [const: ~FACT](#module_heaven..FACT) → <code>boolean</code>
  * [class: ~Cloud](#module_heaven..Cloud)
    * [new Cloud(options)](#new_module_heaven..Cloud_new)
    * _instance_
      * [.size](#module_heaven..Cloud#size) → <code>number</code>
      * [.rain](#module_heaven..Cloud#rain) → <code>boolean</code>
    * _static_
      * [.classMethod()](#module_heaven..Cloud.classMethod)
      * [const: .SPACES](#module_heaven..Cloud.SPACES) → <code>number</code>

<a name="module_heaven.Cloud"></a>
###heaven.Cloud → <code>[Cloud](#module_heaven..Cloud)</code>
access to the Cloud class

<a name="module_heaven.createCloud"></a>
###heaven.createCloud() ⇒ <code>[Cloud](#module_heaven..Cloud)</code>
<a name="module_heaven..FACT"></a>
###const: heaven~FACT → <code>boolean</code>
an inner constant

**Scope**: inner constant of <code>[heaven](#module_heaven)</code>  
<a name="module_heaven..Cloud"></a>
###class: heaven~Cloud
The main class for a cloud

**Scope**: inner class of <code>[heaven](#module_heaven)</code>  

* [class: ~Cloud](#module_heaven..Cloud)
  * [new Cloud(options)](#new_module_heaven..Cloud_new)
  * _instance_
    * [.size](#module_heaven..Cloud#size) → <code>number</code>
    * [.rain](#module_heaven..Cloud#rain) → <code>boolean</code>
  * _static_
    * [.classMethod()](#module_heaven..Cloud.classMethod)
    * [const: .SPACES](#module_heaven..Cloud.SPACES) → <code>number</code>

<a name="new_module_heaven..Cloud_new"></a>
####new Cloud(options)
cloud constructor

| Param | Type | Description |
| ----- | ---- | ----------- |
| options | <code>object</code> | the options |

<a name="module_heaven..Cloud#size"></a>
####cloud.size → <code>number</code>
**Default**: `4`  
<a name="module_heaven..Cloud#rain"></a>
####cloud.rain → <code>boolean</code>
**Default**: `false`  
<a name="module_heaven..Cloud.classMethod"></a>
####Cloud.classMethod()
a class method

<a name="module_heaven..Cloud.SPACES"></a>
####const: Cloud.SPACES → <code>number</code>
a class constant

<a name="module_private"></a>
##private
module with private shiz

<a name="module_private.notprivate"></a>
###private.notprivate
visible property

<a name="module_commonjs/single-value"></a>
##commonjs/single-value
this module exports one value, that's it

<a name="exp_module_commonjs/single-value--module.exports"></a>
###module.exports → <code>boolean</code> ⏏
**Default**: `true`  
<a name="onComplete"></a>
##callback: onComplete → <code>function</code>
Called when an async operation completes

| Param | Type | Description |
| ----- | ---- | ----------- |
| err | <code>object</code> | an error, or `null` |
| result | <code>string</code> | the result info |

<a name="read"></a>
##read(filename, done)
| Param | Type | Description |
| ----- | ---- | ----------- |
| filename | <code>string</code> | the filename |
| done | <code>[onComplete](#onComplete)</code> | the callback |

<a name="All"></a>
##~~class: All~~
***Deprecated:*** true  

a class with all of the things

**Extends:** `Number`  
**Since**: v0.10.28  
**Author:** 75lb <75pound@gmail.com>  

* ~~[class: All](#All)~~
  * [new All(input, [options])](#new_All_new)
  * _instance_
    * [.topping](#All#topping) → <code>string</code>
    * [.size](#All#size)
    * ~~[.allThings(one, two)](#All#allThings) ⇒ <code>object</code> \| <code>string</code>~~
      * [~some](#All#allThings..some)

<a name="new_All_new"></a>
###new All(input, [options])
the constructor description

| Param | Type | Description |
| ----- | ---- | ----------- |
| input | <code>object</code> | an input |
| \[options\] | <code>object</code> | optional shit |

**Example**  
```js
var yeah = new Everything(true);
```
<a name="All#topping"></a>
###all.topping → <code>string</code>
the ingredients on top

**Default**: `mud, lettuce`  
**Since**: v1.0.0  
<a name="All#size"></a>
###all.size
the general size

<a name="All#allThings"></a>
###~~all.allThings(one, two) ⇒ <code>object</code> \| <code>string</code>~~
***Deprecated:*** true  

This function has all tags set

| Param | Type | Description |
| ----- | ---- | ----------- |
| one | <code>string</code> | The input string |
| two | <code>object</code> | a second input |

**Returns**: <code>object</code> \| <code>string</code> - this return has several types  
**Since**: v0.10.28  
**Author:** Lloyd <75pound@gmail.com>  
**Example**  
```js
all.allTogether(true);
```
<a name="All#allThings..some"></a>
####allThings~some
a rarseclart inner

**Scope**: inner member of <code>[allThings](#All#allThings)</code>  
<a name="Person"></a>
##class: Person
simple class description

**Extends:** `Object`  
<a name="new_Person_new"></a>
###new Person()
a constructor description

<a name="Car"></a>
##class: Car
<a name="new_Car_new"></a>
###new Car([options])
a constructor with args

| Param | Type | Description |
| ----- | ---- | ----------- |
| \[options\] | <code>object</code> | optional shit |

<a name="Pipe"></a>
##class: Pipe
a class which extends

**Extends:** `Pipe`  
<a name="Everything"></a>
##~~class: Everything~~
***Deprecated:*** true  

a class with all trimmings

**Extends:** `Pipe`  
**Since**: v0.10.28  
**Author:** 75lb <75pound@gmail.com>  
<a name="new_Everything_new"></a>
###new Everything(input, [options])
the constructor description

| Param | Type | Description |
| ----- | ---- | ----------- |
| input | <code>object</code> | an input |
| \[options\] | <code>object</code> | optional shit |

**Example**  
```js
var yeah = new Everything(true);
```
<a name="Rice"></a>
##class: Rice

* [class: Rice](#Rice)
  * _events_
    * ["cooked"](#Rice#event_cooked)
    * ["cooking"](#Rice#event_cooking)

<a name="Rice#event_cooked"></a>
###event: "cooked"
Fired when rice is ready

<a name="Rice#event_cooking"></a>
###event: "cooking"
Fired when rice is cooking

<a name="Something"></a>
##class: Something

* [class: Something](#Something)
  * _instance_
    * [.methodOne()](#Something#methodOne)
    * ~~[.allTogether(one, two)](#Something#allTogether) ⇒ <code>object</code> \| <code>string</code>~~

<a name="Something#methodOne"></a>
###something.methodOne()
method description

<a name="Something#allTogether"></a>
###~~something.allTogether(one, two) ⇒ <code>object</code> \| <code>string</code>~~
***Deprecated:*** true  

This function has all tags set

| Param | Type | Description |
| ----- | ---- | ----------- |
| one | <code>string</code> | The input string |
| two | <code>object</code> | a second input |

**Returns**: <code>object</code> \| <code>string</code> - this return has several types  
**Since**: v0.10.28  
**Author:** Lloyd <75pound@gmail.com>  
**Example**  
```js
something.allTogether(true);
```
<a name="Pizza"></a>
##class: Pizza

* [class: Pizza](#Pizza)
  * _instance_
    * [.topping](#Pizza#topping) → <code>string</code>
    * [.size](#Pizza#size)

<a name="Pizza#topping"></a>
###pizza.topping → <code>string</code>
the ingredients on top

**Default**: `mud, lettuce`  
**Since**: v1.0.0  
<a name="Pizza#size"></a>
###pizza.size
the general size

<a name="CONST_ONE"></a>
##const: CONST_ONE → <code>number</code>
the first important constant

<a name="CONST_TWO"></a>
##~~const: CONST_TWO → <code>boolean</code>~~
***Deprecated:*** true  

This variable has all tags set

**Read only**: true  
**Since**: v0.10.28  
**Author:** Lloyd Brookes <lloyd@brookes.com>  
**Example**  
```js
var CONST_TWO = true;
```
<a name="customTaggedFunction"></a>
##customTaggedFunction()
this function has a wonderful custom tag

**createdin**: Nigeria  
<a name="eFileType"></a>
##enum: eFileType → <code>number</code>
Enum for the `type` value

**Properties**: `NOEXIST`, `FILE`, `DIR`  
**Read only**: true  

* [enum: eFileType](#eFileType) → <code>number</code>
  * [.NOEXIST](#eFileType.NOEXIST) → <code>number</code>
  * [.FILE](#eFileType.FILE) → <code>number</code>
  * [.DIR](#eFileType.DIR) → <code>number</code>

<a name="eFileType.NOEXIST"></a>
###eFileType.NOEXIST → <code>number</code>
**Default**: `0`  
<a name="eFileType.FILE"></a>
###eFileType.FILE → <code>number</code>
**Default**: `1`  
<a name="eFileType.DIR"></a>
###eFileType.DIR → <code>number</code>
**Default**: `2`  
<a name="Hurl"></a>
##class: Hurl

* [class: Hurl](#Hurl)
  * _instance_
    * [.snowball()](#Hurl#snowball)
  * _events_
    * ["snowball"](#Hurl#event_snowball)

<a name="Hurl#snowball"></a>
###hurl.snowball()
Throw a snowball.

**Emits**: Hurl#event:snowball
<a name="Hurl#event_snowball"></a>
###event: "snowball"
Snowball event.

**Properties**

- isPacked `boolean` - Indicates whether the snowball is tightly packed.  

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
**Access:** protected  
<a name="withAuthor"></a>
##withAuthor()
**Author:** Clive Jones <clive@jones.com>  
<a name="oldFunction"></a>
##~~oldFunction()~~
***Deprecated:*** true  

<a name="newFunction"></a>
##newFunction()
**Since**: v0.10.28  
<a name="withParam"></a>
##withParam(one)
| Param | Type | Description |
| ----- | ---- | ----------- |
| one | <code>string</code> | The input string |

<a name="withParams"></a>
##withParams(one, two)
| Param | Type | Description |
| ----- | ---- | ----------- |
| one | <code>string</code> | The input string |
| two | <code>object</code> |  |

<a name="withOptional"></a>
##withOptional(one, [two])
| Param | Type | Description |
| ----- | ---- | ----------- |
| one | <code>string</code> | The input string |
| \[two\] | <code>object</code> | this one is optional |

<a name="withBullets"></a>
##withBullets(one, two)
this description has 

- bullet
- points

and needs this line to separate the above list from the below

| Param | Type | Description |
| ----- | ---- | ----------- |
| one | <code>string</code> | The input string |
| two | <code>object</code> | a second input |

<a name="returnsSomething"></a>
##returnsSomething() ⇒ <code>string</code>
<a name="returnsSomethingDesc"></a>
##returnsSomethingDesc() ⇒ <code>object</code>
**Returns**: <code>object</code> - this return has a description  
<a name="returnsSeveral"></a>
##returnsSeveral() ⇒ <code>object</code> \| <code>string</code>
**Returns**: <code>object</code> \| <code>string</code> - this return has several types  
<a name="allTogether"></a>
##~~allTogether(one, two) ⇒ <code>object</code> \| <code>string</code>~~
***Deprecated:*** true  

This function has all tags set

| Param | Type | Description |
| ----- | ---- | ----------- |
| one | <code>string</code> | The input string |
| two | <code>object</code> | a second input |

**Returns**: <code>object</code> \| <code>string</code> - this return has several types  
**Since**: v0.10.28  
**Author:** Lloyd <75pound@gmail.com>  
**Example**  
```js
allTogether(true);
```
<a name="visible"></a>
##visible
a visible global

<a name="module_foo/bar"></a>
##foo/bar
A module. Refer to it using [foo/bar](#module_foo/bar).


* [foo/bar](#module_foo/bar)
  * ["event:MyEvent"](#module_foo/bar.event_MyEvent)
  * [external: ~String](#external_String)
  * [~linkFunction()](#module_foo/bar..linkFunction)
  * [class: ~LinkClass](#module_foo/bar..LinkClass)
    * [new LinkClass()](#new_module_foo/bar..LinkClass_new)
    * _instance_
      * [.foo](#module_foo/bar..LinkClass#foo)

<a name="module_foo/bar.event_MyEvent"></a>
###event: "event:MyEvent"
An event. Refer to with [event:MyEvent](#module_foo/bar.event_MyEvent).

<a name="external_String"></a>
###external: foo/bar~String
The built in string object. Refer to it with [String](#external_String).

**Scope**: inner external of <code>[foo/bar](#module_foo/bar)</code>  
<a name="module_foo/bar..linkFunction"></a>
###foo/bar~linkFunction()
See `LinkClass` and `LinkClass#foo`.
Also check out [Google](http://www.google.com) and [GitHub](http://github.com).

**Scope**: inner function of <code>[foo/bar](#module_foo/bar)</code>  
<a name="module_foo/bar..LinkClass"></a>
###class: foo/bar~LinkClass
**Scope**: inner class of <code>[foo/bar](#module_foo/bar)</code>  

* [class: ~LinkClass](#module_foo/bar..LinkClass)
  * [new LinkClass()](#new_module_foo/bar..LinkClass_new)
  * _instance_
    * [.foo](#module_foo/bar..LinkClass#foo)

<a name="new_module_foo/bar..LinkClass_new"></a>
####new LinkClass()
A class.

<a name="module_foo/bar..LinkClass#foo"></a>
####linkClass.foo
foo property

<a name="variable"></a>
##variable
a global variable

<a name="typed"></a>
##typed → <code>string</code>
<a name="types"></a>
##types → <code>string</code> \| <code>number</code>
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
**Access:** protected  
<a name="withAuthor"></a>
##withAuthor
**Author:** Clive Jones <clive@jones.com>  
<a name="hasDefault"></a>
##hasDefault
**Default**: `23`  
<a name="hasDefaultObject"></a>
##hasDefaultObject
**Default**: `{"one":1,"two":2}`  
<a name="deprecated"></a>
##~~deprecated~~
***Deprecated:*** true  

<a name="readOnly"></a>
##readOnly
**Read only**: true  
<a name="hasSince"></a>
##hasSince
**Since**: v0.10.28  
<a name="car"></a>
##car

* [car](#car)
  * [.env](#car#env)
    * [.weather](#car#env.weather) → <code>string</code>
    * [.roads](#car#env.roads) → <code>string</code>
  * [.wheels](#car.wheels)
  * [.sensors](#car.sensors)
  * [.start()](#car.start)

<a name="car#env"></a>
###car.env
decribes the current conditions


* [.env](#car#env)
  * [.weather](#car#env.weather) → <code>string</code>
  * [.roads](#car#env.roads) → <code>string</code>

<a name="car#env.weather"></a>
####env.weather → <code>string</code>
what kind of day is it

**Default**: `choppy`  
<a name="car#env.roads"></a>
####env.roads → <code>string</code>
road condition

**Default**: `wet`  
<a name="car.wheels"></a>
###car.wheels
the round things

<a name="car.sensors"></a>
###car.sensors
the electronics that always go wrong

<a name="car.start"></a>
###car.start()
start the car

| Param | Type | Description |
| ----- | ---- | ----------- |
|  | <code>string</code> |  |
|  | <code>function</code> |  |

<a name="doSomething"></a>
##doSomething(options)
| Param | Type | Description |
| ----- | ---- | ----------- |
| options | <code>object</code> | the function options |
| options.one | <code>string</code> | first option |
| options.two | <code>string</code> | second option |

<a name="doAnother"></a>
##doAnother(options)
| Param | Type | Description |
| ----- | ---- | ----------- |
| options | <code>Object</code> | the function options |

<a name="pluck"></a>
##pluck(...prop)
This function takes variable input

| Param | Type | Description |
| ----- | ---- | ----------- |
| ...prop | <code>string</code> | the property(s) as input |

<a name="Plucker"></a>
##class: Plucker
<a name="Plucker#doPluck"></a>
###plucker.doPluck(one, ...args, ...three)
This function takes variable input

| Param | Type | Description |
| ----- | ---- | ----------- |
| one | <code>string</code> | an input |
| ...args | <code>string</code> | the property(s) as input |
| ...three | <code>string</code> | more input |

<a name="config"></a>
##config
**Properties**

- defaults `object` - The default values for parties.  
  - defaults.players `number` - The default number of players.  
  - defaults.level `string` - The default level for the party.  
  - defaults.treasure `object` - The default treasure.  
  - defaults.treasure.gold `number` - How much gold the party starts with.  

<a name="requirer"></a>
##requirer()
ensure you have some-module installed

<a name="NumberLike"></a>
##type: NumberLike → <code>number</code> \| <code>string</code>
A number, or a string containing a number.

<a name="setMagicNumber"></a>
##setMagicNumber(x)
Set the magic number.

| Param | Type | Description |
| ----- | ---- | ----------- |
| x | <code>[NumberLike](#NumberLike)</code> | The magic number. |

<a name="doSomething"></a>
##doSomething(options)
| Param | Type | Description |
| ----- | ---- | ----------- |
| options | <code>object</code> | the function options |
| options.one | <code>string</code> | first option |
| options.two | <code>string</code> | second option |

<a name="something"></a>
##something → <code>string</code>
this is for something

<a name="another"></a>
##another → <code>string</code>
this is for something else

