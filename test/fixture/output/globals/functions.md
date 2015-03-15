## Functions
<dl>
<dt><a href="#globalFunc">globalFunc()</a></dt>
<dd><p>a global function</p>
</dd>
<dt><a href="#exampled">exampled()</a></dt>
<dd><p>a function with an example</p>
</dd>
<dt><a href="#multiExampled">multiExampled()</a></dt>
<dd><p>a function with multiple examples</p>
</dd>
<dt><a href="#_protected">_protected()</a></dt>
<dd></dd>
<dt><a href="#withAuthor">withAuthor()</a></dt>
<dd></dd>
<dt><del><a href="#oldFunction">oldFunction()</a></del></dt>
<dd></dd>
<dt><a href="#newFunction">newFunction()</a></dt>
<dd></dd>
<dt><a href="#withParam">withParam(one)</a></dt>
<dd></dd>
<dt><a href="#withParams">withParams(one, two)</a></dt>
<dd></dd>
<dt><a href="#withOptional">withOptional(one, [two])</a></dt>
<dd></dd>
<dt><a href="#withBullets">withBullets(one, two)</a></dt>
<dd><p>this description has </p>
<ul>
<li>bullet</li>
<li>points</li>
</ul>
<p>and needs this line to separate the above list from the below</p>
</dd>
<dt><a href="#returnsSomething">returnsSomething()</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#returnsSomethingDesc">returnsSomethingDesc()</a> ⇒ <code>object</code></dt>
<dd></dd>
<dt><a href="#returnsSeveral">returnsSeveral()</a> ⇒ <code>object</code> | <code>string</code></dt>
<dd></dd>
<dt><del><a href="#allTogether">allTogether(one, two)</a> ⇒ <code>object</code> | <code>string</code></del></dt>
<dd><p>This function has all tags set</p>
</dd>
</dl>
<a name="globalFunc"></a>
## globalFunc()
a global function

**Kind**: global function  
<a name="exampled"></a>
## exampled()
a function with an example

**Kind**: global function  
**Example**  
```js
var result = exampled();
```
<a name="multiExampled"></a>
## multiExampled()
a function with multiple examples

**Kind**: global function  
**Example**  
```js
var another = 100;
```
**Example**  
```js
var next = "p";
```
<a name="_protected"></a>
## _protected()
**Kind**: global function  
**Access:** protected  
<a name="withAuthor"></a>
## withAuthor()
**Kind**: global function  
**Author:** Clive Jones <clive@jones.com>  
<a name="oldFunction"></a>
## ~~oldFunction()~~
***Deprecated***

**Kind**: global function  
<a name="newFunction"></a>
## newFunction()
**Kind**: global function  
**Since**: v0.10.28  
<a name="withParam"></a>
## withParam(one)
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| one | <code>string</code> | The input string |

<a name="withParams"></a>
## withParams(one, two)
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| one | <code>string</code> | The input string |
| two | <code>object</code> |  |

<a name="withOptional"></a>
## withOptional(one, [two])
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| one | <code>string</code> | The input string |
| [two] | <code>object</code> | this one is optional |

<a name="withBullets"></a>
## withBullets(one, two)
this description has 

- bullet
- points

and needs this line to separate the above list from the below

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| one | <code>string</code> | The input string |
| two | <code>object</code> | a second input |

<a name="returnsSomething"></a>
## returnsSomething() ⇒ <code>string</code>
**Kind**: global function  
<a name="returnsSomethingDesc"></a>
## returnsSomethingDesc() ⇒ <code>object</code>
**Kind**: global function  
**Returns**: <code>object</code> - this return has a description  
<a name="returnsSeveral"></a>
## returnsSeveral() ⇒ <code>object</code> \| <code>string</code>
**Kind**: global function  
**Returns**: <code>object</code> \| <code>string</code> - this return has several types  
<a name="allTogether"></a>
## ~~allTogether(one, two) ⇒ <code>object</code> \| <code>string</code>~~
***Deprecated***

This function has all tags set

**Kind**: global function  
**Returns**: <code>object</code> \| <code>string</code> - this return has several types  
**Since**: v0.10.28  
**Author:** Lloyd <75pound@gmail.com>  

| Param | Type | Description |
| --- | --- | --- |
| one | <code>string</code> | The input string |
| two | <code>object</code> | a second input |

**Example**  
```js
allTogether(true);
```
