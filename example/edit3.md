## Globals
<dl>
<dt><a href="#FurQ">class: FurQ</a> ⇐ <code><a href="#Rapper">Rapper</a></code></dt>
<dd><p>C*ck, b!tch, c*ck, b!tch, m*therf!cker. You gotta kill people, to respect people.</p>
</dd>
<dt><a href="#Rapper">class: Rapper</a></dt>
<dd></dd>
<dt><a href="#plant">plant()</a></dt>
<dd><p>to plant ones fist in a buster&#39;s mush</p>
</dd>
</dl>
<a name="FurQ"></a>
## FurQ ⇐ <code>[Rapper](#Rapper)</code>
C\*ck, b!tch, c\*ck, b!tch, m\*therf!cker. You gotta kill people, to respect people.

**Kind:** class  
**Extends:** <code>[Rapper](#Rapper)</code>  
**Emits**: <code>[pop](#FurQ#event_pop)</code>, <code>[slap](#FurQ#event_slap)</code>  
**Access:** public  
**See**: https://www.youtube.com/watch?v=1sxZ4tsp8gc  
**Author:** Chris Morris  

* [FurQ](#FurQ) ⇐ <code>[Rapper](#Rapper)</code>
  * [new FurQ()](#new_FurQ_new)
  * _instance_
	  * [.wannaTryIt](#FurQ#wannaTryIt) → <code>string</code>
	  * [.LOVE](#FurQ#LOVE) → <code>string</code>
    * _standard_
  	  * [.kill()](#FurQ#kill)
  	  * [.respect(done)](#FurQ#respect)
    * [.punch()](#FurQ#punch)
	  * [.spit()](#FurQ#spit)
	  * [.battle()](#Rapper#battle) 
	  * ["pop" (zoop)](#FurQ#event_pop)
	  * ["slap"](#FurQ#event_slap)    
  * _static_
    * [.enemy](#FurQ.enemy) → <code>number</code>
    * ~~[.peace()](#FurQ.peace)~~
  * _inner_
    * [callback: ~onRespect](#FurQ..onRespect) → <code>function</code>
    
<a name="new_FurQ_new"></a>
### new FurQ()
She's an Uzi lover. 

![uzi](https://sampleface.co.uk/wp-content/uploads/2013/07/fur-q-uzi-lover.png)

**Example**  
```js
var FurQ = require("FurQ");
```
<a name="FurQ#wannaTryIt"></a>
### FurQ.wannaTryIt → <code>string</code>
**Default**: `bitch`  
**See**

- "Uzi like a metal dick in my hand."
- "Magazine like a big testicle gland."

<a name="FurQ#kill"></a>
### FurQ.kill()
kill

**Example**  
```js
var kill = FurQ.kill();
    
```
**Example**  
```js
FurQ.kill();
```
<a name="FurQ#respect"></a>
### FurQ.respect(done)
respect

| Param | Type | Description |
| --- | --- | --- |
| done | <code>[onRespect](#FurQ..onRespect)</code> | called on reciprocation of respect |

**Example**  
```js
FurQ.respect(function(err, gain){
    console.log(gain);
});
```
<a name="FurQ#spit"></a>
### FurQ.spit()
override

**overridden from**: `Rapper.spit`

<a name="FurQ#punch"></a>
### FurQ.punch()
to plant ones fist in a buster's mush

<a name="FurQ#LOVE"></a>
### FurQ.LOVE → <code>string</code>
**Default**: `UZI`  
**Kind**: Constant  

<a name="FurQ#event_pop"></a>
### "pop" (zoop)
fire weapon

**Kind: **event emitted by [FurQ]()

| Param | Type | Description |
| --- | --- | --- |
| zoop | <code>boolean</code> | make 'zooping' sound as you fire |

<a name="FurQ#event_slap"></a>
### "slap"
slap man

**Kind: **event emitted by [FurQ]()

<a name="FurQ.enemy"></a>
### FurQ.enemy → <code>number</code>
FUR-Q enemy types

**Read only**: true  
**Kind**: enum  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| COCK | <code>number</code> | `0` | an awful individual |
| BITCH | <code>number</code> | `1` |  |
| MUTHAFUCKA | <code>number</code> | `2` |  |

<a name="FurQ.peace"></a>
### ~~FurQ.peace()~~
***Deprecated***

check if at peace

**Example**  
```js
var peace = FurQ.peace();
```
<a name="FurQ..onRespect"></a>
### FurQ~onRespect → <code>function</code>
Passed to [respect](#FurQ#respect)

**Kind:** callback

| Param | Type | Description |
| --- | --- | --- |
| err | <code>Error</code> | an issue with the punch |
| gain | <code>\*</code> | the respect percentage gained |

<a name="Rapper"></a>
## class: Rapper

* [class: Rapper](#Rapper)
  * [.spit()](#Rapper#spit)
  * [.battle()](#Rapper#battle)

<a name="Rapper#spit"></a>
### rapper.spit()
spit

<a name="Rapper#battle"></a>
### rapper.battle()
battle

<a name="plant"></a>
## plant()
to plant ones fist in a buster's mush

