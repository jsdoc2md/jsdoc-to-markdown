#Index

**Modules**

* [foo/bar](#module_foo/bar)
  * [foo/bar~linkFunction()](#module_foo/bar..linkFunction)
  * [event: "event:MyEvent"](#module_foo/bar.event_MyEvent)
  * [class: foo/bar~LinkClass](#module_foo/bar..LinkClass)
    * [new foo/bar~LinkClass()](#new_module_foo/bar..LinkClass)
    * [linkClass.foo](#module_foo/bar..LinkClass#foo)
  * [foo/bar~String](#external_String)

**Classes**

* [~~class: All~~](#All)
  * [~~new All(input, [options])~~](#new_All)
  * [all.topping](#All#topping)
  * [all.size](#All#size)
  * [~~all.allThings(one, two)~~](#All#allThings)
    * [allThings~some](#All#allThings..some)
* [class: Person](#Person)
  * [new Person()](#new_Person)
* [class: Car](#Car)
  * [new Car([options])](#new_Car)
* [class: Pipe](#Pipe)
* [~~class: Everything~~](#Everything)
  * [~~new Everything(input, [options])~~](#new_Everything)
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

**Namespaces**

* [car](#car)
  * [car.wheels](#car.wheels)
  * [car.sensors](#car.sensors)
  * [car.start()](#car.start)
  * [car.env](#car#env)
    * [env.weather](#car#env.weather)
    * [env.roads](#car#env.roads)

**Constants**

* [const: CONST_ONE](#CONST_ONE)
* [~~const: CONST_TWO~~](#CONST_TWO)

**Functions**

* [read(filename, done)](#read)
* [customTaggedFunction()](#customTaggedFunction)
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
* [doSomething(options)](#doSomething)
* [doAnother(options)](#doAnother)
* [pluck(...prop)](#pluck)
* [requirer()](#requirer)
* [setMagicNumber(x)](#setMagicNumber)
* [doSomething(options)](#doSomething)

**Members**

* [enum: eFileType](#eFileType)
  * [eFileType.NOEXIST](#eFileType.NOEXIST)
  * [eFileType.FILE](#eFileType.FILE)
  * [eFileType.DIR](#eFileType.DIR)
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

**Typedefs**

* [callback: onComplete](#onComplete)
* [type: NumberLike](#NumberLike)
 
<a name="module_foo/bar"></a>
#foo/bar
A module. Refer to it using [foo/bar](#module_foo/bar).

**Members**

* [foo/bar](#module_foo/bar)
  * [foo/bar~linkFunction()](#module_foo/bar..linkFunction)
  * [event: "event:MyEvent"](#module_foo/bar.event_MyEvent)
  * [class: foo/bar~LinkClass](#module_foo/bar..LinkClass)
    * [new foo/bar~LinkClass()](#new_module_foo/bar..LinkClass)
    * [linkClass.foo](#module_foo/bar..LinkClass#foo)
  * [foo/bar~String](#external_String)

<a name="module_foo/bar..linkFunction"></a>
##foo/bar~linkFunction()
See `LinkClass` and `LinkClass#foo`.
Also check out [Google](http://www.google.com) and [GitHub](http://github.com).

**Scope**: inner function of [foo/bar](#module_foo/bar)  
<a name="module_foo/bar.event_MyEvent"></a>
##event: "event:MyEvent"
An event. Refer to with [event:MyEvent](#module_foo/bar.event_MyEvent).

<a name="module_foo/bar..LinkClass"></a>
##class: foo/bar~LinkClass
**Members**

* [class: foo/bar~LinkClass](#module_foo/bar..LinkClass)
  * [new foo/bar~LinkClass()](#new_module_foo/bar..LinkClass)
  * [linkClass.foo](#module_foo/bar..LinkClass#foo)

<a name="new_module_foo/bar..LinkClass"></a>
###new foo/bar~LinkClass()
A class.

**Scope**: inner class of [foo/bar](#module_foo/bar)  
<a name="module_foo/bar..LinkClass#foo"></a>
###linkClass.foo
foo property

<a name="All"></a>
#~~class: All~~
a class with all of the things

**Extends**: `Number`  
**Members**

* [~~class: All~~](#All)
  * [~~new All(input, [options])~~](#new_All)
  * [all.topping](#All#topping)
  * [all.size](#All#size)
  * [~~all.allThings(one, two)~~](#All#allThings)
    * [allThings~some](#All#allThings..some)

<a name="new_All"></a>
##~~new All(input, [options])~~
the constructor description

**Params**

- input `object` - an input  
- \[options\] `object` - optional shit  

***Deprecated***  
**Extends**: `Number`  
**Since**: v0.10.28  
**Author**: 75lb <75pound@gmail.com>  
**Example**  
```js
var yeah = new Everything(true);
```

<a name="All#topping"></a>
##all.topping
the ingredients on top

**Type**: `string`  
**Default**: `mud, lettuce`  
**Since**: v1.0.0  
<a name="All#size"></a>
##all.size
the general size

<a name="All#allThings"></a>
##~~all.allThings(one, two)~~
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

<a name="Person"></a>
#class: Person
simple class description

**Extends**: `Object`  
**Members**

* [class: Person](#Person)
  * [new Person()](#new_Person)

<a name="new_Person"></a>
##new Person()
a constructor description

**Extends**: `Object`  
<a name="Car"></a>
#class: Car
**Members**

* [class: Car](#Car)
  * [new Car([options])](#new_Car)

<a name="new_Car"></a>
##new Car([options])
a constructor with args

**Params**

- \[options\] `object` - optional shit  

<a name="Pipe"></a>
#class: Pipe
a class which extends

**Extends**: `Pipe`  
**Members**

* [class: Pipe](#Pipe)

<a name="Everything"></a>
#~~class: Everything~~
a class with all trimmings

**Extends**: `Pipe`  
**Members**

* [~~class: Everything~~](#Everything)
  * [~~new Everything(input, [options])~~](#new_Everything)

<a name="new_Everything"></a>
##~~new Everything(input, [options])~~
the constructor description

**Params**

- input `object` - an input  
- \[options\] `object` - optional shit  

***Deprecated***  
**Extends**: `Pipe`  
**Since**: v0.10.28  
**Author**: 75lb <75pound@gmail.com>  
**Example**  
```js
var yeah = new Everything(true);
```

<a name="Rice"></a>
#class: Rice
**Members**

* [class: Rice](#Rice)
  * [event: "cooked"](#Rice#event_cooked)
  * [event: "cooking"](#Rice#event_cooking)

<a name="Rice#event_cooked"></a>
##event: "cooked"
Fired when rice is ready

<a name="Rice#event_cooking"></a>
##event: "cooking"
Fired when rice is cooking

<a name="Something"></a>
#class: Something
**Members**

* [class: Something](#Something)
  * [something.methodOne()](#Something#methodOne)
  * [~~something.allTogether(one, two)~~](#Something#allTogether)

<a name="Something#methodOne"></a>
##something.methodOne()
method description

<a name="Something#allTogether"></a>
##~~something.allTogether(one, two)~~
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
something.allTogether(true);
```

<a name="Pizza"></a>
#class: Pizza
**Members**

* [class: Pizza](#Pizza)
  * [pizza.topping](#Pizza#topping)
  * [pizza.size](#Pizza#size)

<a name="Pizza#topping"></a>
##pizza.topping
the ingredients on top

**Type**: `string`  
**Default**: `mud, lettuce`  
**Since**: v1.0.0  
<a name="Pizza#size"></a>
##pizza.size
the general size

<a name="Plucker"></a>
#class: Plucker
**Members**

* [class: Plucker](#Plucker)
  * [plucker.doPluck(one, ...args, ...three)](#Plucker#doPluck)

<a name="Plucker#doPluck"></a>
##plucker.doPluck(one, ...args, ...three)
This function takes variable input

**Params**

- one `string` - an input  
- ...args `string` - the property(s) as input  
- ...three `string` - more input  

<a name="car"></a>
#car
**Members**

* [car](#car)
  * [car.wheels](#car.wheels)
  * [car.sensors](#car.sensors)
  * [car.start()](#car.start)
  * [car.env](#car#env)
    * [env.weather](#car#env.weather)
    * [env.roads](#car#env.roads)

<a name="car.wheels"></a>
##car.wheels
the round things

<a name="car.sensors"></a>
##car.sensors
the electronics that always go wrong

<a name="car.start"></a>
##car.start()
start the car

**Params**

-  `string`  
-  `function`  

<a name="car#env"></a>
##car.env
decribes the current conditions

**Members**

* [car.env](#car#env)
  * [env.weather](#car#env.weather)
  * [env.roads](#car#env.roads)

<a name="car#env.weather"></a>
###env.weather
what kind of day is it

**Type**: `string`  
**Default**: `choppy`  
<a name="car#env.roads"></a>
###env.roads
road condition

**Type**: `string`  
**Default**: `wet`  
<a name="read"></a>
#read(filename, done)
**Params**

- filename `string` - the filename  
- done <code>[onComplete](#onComplete)</code> - the callback  

<a name="customTaggedFunction"></a>
#customTaggedFunction()
this function has a wonderful custom tag

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

<a name="doSomething"></a>
#doSomething(options)
**Params**

- options `object` - the function options  
  - one `string` - first option  
  - two `string` - second option  

<a name="doAnother"></a>
#doAnother(options)
**Params**

- options `Object` - the function options  

<a name="pluck"></a>
#pluck(...prop)
This function takes variable input

**Params**

- ...prop `string` - the property(s) as input  

<a name="requirer"></a>
#requirer()
ensure you have some-module installed

<a name="setMagicNumber"></a>
#setMagicNumber(x)
Set the magic number.

**Params**

- x <code>[NumberLike](#NumberLike)</code> - The magic number.  

<a name="doSomething"></a>
#doSomething(options)
**Params**

- options `object` - the function options  
  - one `string` - first option  
  - two `string` - second option  

<a name="eFileType"></a>
#enum: eFileType
Enum for the `type` value

**Type**: `number`  
**Properties**: `NOEXIST`, `FILE`, `DIR`  
**Read only**: true  
<a name="visible"></a>
#visible
a visible global

<a name="variable"></a>
#variable
a global variable

<a name="typed"></a>
#typed
**Type**: `string`  
<a name="types"></a>
#types
**Type**: `string` | `number`  
<a name="exampled"></a>
#exampled
a var with an example

**Example**  
```js
var another = 100;
```

<a name="examples"></a>
#examples
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
#_protected
**Access**: protected  
<a name="withAuthor"></a>
#withAuthor
**Author**: Clive Jones <clive@jones.com>  
<a name="hasDefault"></a>
#hasDefault
**Default**: `23`  
<a name="hasDefaultObject"></a>
#hasDefaultObject
**Default**: `{"one":1,"two":2}`  
<a name="deprecated"></a>
#~~deprecated~~
***Deprecated***  
<a name="readOnly"></a>
#readOnly
**Read only**: true  
<a name="hasSince"></a>
#hasSince
**Since**: v0.10.28  
<a name="onComplete"></a>
#callback: onComplete
Called when an async operation completes

**Params**

- err `object` - an error, or `null`  
- result `string` - the result info  

**Type**: `function`  
<a name="NumberLike"></a>
#type: NumberLike
A number, or a string containing a number.

**Type**: `number` | `string`  
<a name="CONST_ONE"></a>
#const: CONST_ONE
the first important constant

**Type**: `number`  
<a name="CONST_TWO"></a>
#~~const: CONST_TWO~~
This variable has all tags set

***Deprecated***  
**Type**: `boolean`  
**Read only**: true  
**Since**: v0.10.28  
**Author**: Lloyd Brookes <lloyd@brookes.com>  
**Example**  
```js
var CONST_TWO = true;
```

