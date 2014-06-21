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
####Example
```js
var CONST_TWO = true;
```
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

  
####Example
```js
var another = 100;
```
<a name="examples"></a>
###examples
a var with multiple examples

  
####Example
```js
var another = 100;
```
####Example
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
####Example
```js
var allTogether = true;
```
<a name="globalFunc"></a>
###globalFunc()
a global function

<a name="exampled"></a>
###exampled()
a function with an example

####Example
```js
var result = exampled();
```
<a name="multiExampled"></a>
###multiExampled()
a function with multiple examples

####Example
```js
var another = 100;
```
####Example
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
<a name="newFunction"></a>
###newFunction()
**Since**: v0.10.28  
<a name="withParam"></a>
###withParam(one)

- one `string` - The input string

<a name="withParams"></a>
###withParams(one, two)

- one `string` - The input string
- two `object`

<a name="withOptional"></a>
###withOptional(one, [two])

- one `string` - The input string
- [two] `object` - this one is optional

<a name="withBullets"></a>
###withBullets(one, two)
this description has 

- bullet
- points

and needs this line to separate the above list from the below


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


- one `string` - The input string
- two `object` - a second input

**Access**: private  
**Since**: v0.10.28  
**Author**: Lloyd <75pound@gmail.com>  
**Returns**: `object` | `string` - this return has several types  
####Example
```js
allTogether(true);
```
<a name="All"></a>

##class: All
a class with all of the things

**Extends**: `Number`  
<a name="All#topping"></a>
###all.topping
the ingredients on top

**Scope**: instance member of [All](#All)  
**Default**: `mud, lettuce`  
**Type**: `string`  
**Since**: v1.0.0  
<a name="All#size"></a>
###all.size
the general size

**Scope**: instance member of [All](#All)  
  
<a name="All#allThings"></a>
###~~all.allThings(one, two)~~
This function has all tags set


- one `string` - The input string
- two `object` - a second input

**Scope**: instance function of [All](#All)  
**Since**: v0.10.28  
**Author**: Lloyd <75pound@gmail.com>  
**Returns**: `object` | `string` - this return has several types  
####Example
```js
all.allTogether(true);
```
<a name="Person"></a>

##class: Person
simple class description

**Extends**: `Object`  
<a name="Car"></a>

##class: Car
<a name="Pipe"></a>

##class: Pipe
a class which extends

**Extends**: `Pipe`  
<a name="Everything"></a>

##class: Everything
a class with all trimmings

**Extends**: `Pipe`  
<a name="Pizza"></a>

##class: Pizza
<a name="Pizza#topping"></a>
###pizza.topping
the ingredients on top

**Scope**: instance member of [Pizza](#Pizza)  
**Default**: `mud, lettuce`  
**Type**: `string`  
**Since**: v1.0.0  
<a name="Pizza#size"></a>
###pizza.size
the general size

**Scope**: instance member of [Pizza](#Pizza)  
  
###event: "cooked"
Fired when pizza is ready

###event: "cooking"
Fired when pizza is cooking

<a name="Something"></a>

##class: Something
<a name="Something#methodOne"></a>
###something.methodOne()
method description

**Scope**: instance function of [Something](#Something)  
<a name="Something#allTogether"></a>
###~~something.allTogether(one, two)~~
This function has all tags set


- one `string` - The input string
- two `object` - a second input

**Scope**: instance function of [Something](#Something)  
**Since**: v0.10.28  
**Author**: Lloyd <75pound@gmail.com>  
**Returns**: `object` | `string` - this return has several types  
####Example
```js
something.allTogether(true);
```
<a name="Pizza"></a>

##class: Pizza
<a name="Pizza#topping"></a>
###pizza.topping
the ingredients on top

**Scope**: instance member of [Pizza](#Pizza)  
**Default**: `mud, lettuce`  
**Type**: `string`  
**Since**: v1.0.0  
<a name="Pizza#size"></a>
###pizza.size
the general size

**Scope**: instance member of [Pizza](#Pizza)  
  
###event: "cooked"
Fired when pizza is ready

###event: "cooking"
Fired when pizza is cooking

