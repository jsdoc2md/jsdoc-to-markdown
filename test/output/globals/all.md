#Global scope
<a name="CONST_ONE"></a>
###CONST_ONE
the first important constant

**Type**: `number`  
<a name="CONST_TWO"></a>
###~~CONST_TWO~~
This variable has all tags set

***Deprecated***  
**Access**: private  
**Read only**: true  
**Type**: `boolean`  
**Since**: v0.10.28  
**Author**: Lloyd Brookes <lloyd@brookes.com>  
**Example**  
```js
var CONST_TWO = true;
```
<a name="eFileType"></a>
###eFileType
Enum for the `type` value

**Enum** with properties: `NOEXIST`, `FILE`, `DIR`  
**Read only**: true  
**Type**: `number`  
<a name="variable"></a>
###variable
a global variable

  
<a name="typed"></a>
###typed
**Type**: `string`  
<a name="types"></a>
###types
**Type**: `string | number`  
<a name="exampled"></a>
###exampled
a var with an example

  
**Example**  
```js
var another = 100;
```
<a name="examples"></a>
###examples
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
###_protected
**Access**: protected  
  
<a name="_private"></a>
###_private
**Access**: private  
  
<a name="withAuthor"></a>
###withAuthor
  
**Author**: Clive Jones <clive@jones.com>  
<a name="hasDefault"></a>
###hasDefault
**Default**: `23`  
  
<a name="hasDefaultObject"></a>
###hasDefaultObject
**Default**: `{"one":1,"two":2}`  
  
<a name="deprecated"></a>
###~~deprecated~~
***Deprecated***  
  
<a name="readOnly"></a>
###readOnly
**Read only**: true  
  
<a name="hasSince"></a>
###hasSince
  
**Since**: v0.10.28  
<a name="allTogether"></a>
###~~allTogether~~
This variable has all tags set

***Deprecated***  
**Access**: private  
**Default**: `false`  
**Read only**: true  
**Type**: `boolean`  
**Since**: v0.10.28  
**Author**: 75lb <75pound@gmail.com>  
**Example**  
```js
var allTogether = true;
```
<a name="read"></a>
###read(filename, done)
**Params**
- filename `string` - the filename
- done [onComplete](#onComplete) - the callback

<a name="globalFunc"></a>
###globalFunc()
a global function

<a name="exampled"></a>
###exampled()
a function with an example

**Example**  
```js
var result = exampled();
```
<a name="multiExampled"></a>
###multiExampled()
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
###_protected()
**Access**: protected  
<a name="_private"></a>
###_private()
**Access**: private  
<a name="withAuthor"></a>
###withAuthor()
**Author**: Clive Jones <clive@jones.com>  
<a name="oldFunction"></a>
###~~oldFunction()~~
***Deprecated***  
<a name="newFunction"></a>
###newFunction()
**Since**: v0.10.28  
<a name="withParam"></a>
###withParam(one)
**Params**
- one `string` - The input string

<a name="withParams"></a>
###withParams(one, two)
**Params**
- one `string` - The input string
- two `object`

<a name="withOptional"></a>
###withOptional(one, [two])
**Params**
- one `string` - The input string
- [two] `object` - this one is optional

<a name="withBullets"></a>
###withBullets(one, two)
this description has 

- bullet
- points

and needs this line to separate the above list from the below

**Params**
- one `string` - The input string
- two `object` - a second input

<a name="returnsSomething"></a>
###returnsSomething()
**Returns**: `string`  
<a name="returnsSomethingDesc"></a>
###returnsSomethingDesc()
**Returns**: `object` - this return has a description  
<a name="returnsSeveral"></a>
###returnsSeveral()
**Returns**: `object` | `string` - this return has several types  
<a name="allTogether"></a>
###~~allTogether(one, two)~~
This function has all tags set

**Params**
- one `string` - The input string
- two `object` - a second input

***Deprecated***  
**Access**: private  
**Since**: v0.10.28  
**Author**: Lloyd <75pound@gmail.com>  
**Returns**: `object` | `string` - this return has several types  
**Example**  
```js
allTogether(true);
```
<a name="doSomething"></a>
###doSomething(options)
**Params**
- options `object` - the function options
- options.one `string` - first option
- options.two `string` - second option

<a name="doAnother"></a>
###doAnother(options)
**Params**
- options `Object` - the function options

<a name="pluck"></a>
###pluck(...prop)
This function takes variable input

**Params**
- ...prop `string` - the property(s) as input

<a name="requirer"></a>
###requirer()
ensure you have some-module installed

<a name="setMagicNumber"></a>
###setMagicNumber(x)
Set the magic number.

**Params**
- x [NumberLike](#NumberLike) - The magic number.

<a name="doSomething"></a>
###doSomething(options)
**Params**
- options `object` - the function options
- options.one `string` - first option
- options.two `string` - second option

<a name="All"></a>

##class: All
a class with all of the things

**Extends**: `Number`  
<a name="All"></a>
###~~new All(input, [options])~~
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
###new Person()
a constructor description

<a name="Car"></a>

##class: Car
<a name="Car"></a>
###new Car([options])
a constructor with args

**Params**
- [options] `object` - optional shit

<a name="Pipe"></a>

##class: Pipe
a class which extends

**Extends**: `Pipe`  
<a name="Everything"></a>

##class: Everything
a class with all trimmings

**Extends**: `Pipe`  
<a name="Everything"></a>
###~~new Everything(input, [options])~~
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

##class: Rice
###event: "cooked"
Fired when rice is ready

###event: "cooking"
Fired when rice is cooking

<a name="Something"></a>

##class: Something
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
<a name="Pizza#topping"></a>
###pizza.topping
the ingredients on top

**Default**: `mud, lettuce`  
**Type**: `string`  
**Since**: v1.0.0  
<a name="Pizza#size"></a>
###pizza.size
the general size

  
<a name="onComplete"></a>
###callback: onComplete
Called when an async operation completes

**Params**
- err `object` - an error, or `null`
- result `string` - the result info

**Type**: `function`  
<a name="NumberLike"></a>
###type: NumberLike
A number, or a string containing a number.

**Type**: `number | string`  
