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
**Symbols**  
  * [all.topping *member*](#All#topping)
  * [all.size *member*](#All#size)
  * [~~all.allThings(one, two) *function*~~](#All#allThings)

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

**Symbols**  

<a name="Car"></a>

##Car *class*
<a name="Car"></a>
##new Car([options]) *class*
a constructor with args

**Params**

- [options] `object` - optional shit

**Symbols**  

<a name="Pipe"></a>

##Pipe *class*
a class which extends

**Extends**: `Pipe`  
**Symbols**  

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
**Symbols**  

<a name="Rice"></a>

##Rice *class*
**Symbols**  
  * [event: "cooked" *event*](#Rice#event_cooked)
  * [event: "cooking" *event*](#Rice#event_cooking)

<a name="Rice#event_cooked"></a>
###event: "cooked" *event*
Fired when rice is ready

<a name="Rice#event_cooking"></a>
###event: "cooking" *event*
Fired when rice is cooking

<a name="Something"></a>

##Something *class*
**Symbols**  
  * [something.methodOne() *function*](#Something#methodOne)
  * [~~something.allTogether(one, two) *function*~~](#Something#allTogether)

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
**Symbols**  
  * [pizza.topping *member*](#Pizza#topping)
  * [pizza.size *member*](#Pizza#size)

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
**Symbols**  
  * [plucker.doPluck(one, ...args, ...three) *function*](#Plucker#doPluck)

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
