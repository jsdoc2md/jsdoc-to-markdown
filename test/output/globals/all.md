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
