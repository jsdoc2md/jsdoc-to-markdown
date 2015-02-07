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
## class: FurQ ⇐ <code>[Rapper](#Rapper)</code>
C\*ck, b!tch, c\*ck, b!tch, m\*therf!cker. You gotta kill people, to respect people.

**Extends:** <code>[Rapper](#Rapper)</code>  
**Emits**: <code>[pop](#FurQ#event_pop)</code>, <code>[slap](#FurQ#event_slap)</code>  
**Access:** public  
**See**: https://www.youtube.com/watch?v=1sxZ4tsp8gc  
**Author:** Chris Morris  

* [class: FurQ](#FurQ) ⇐ <code>[Rapper](#Rapper)</code>
  * [new FurQ()](#new_FurQ_new)
  * _instance_
    * [.wannaTryIt](#FurQ#wannaTryIt) → <code>string</code>
    * [.kill()](#FurQ#kill)
    * [.respect(done)](#FurQ#respect)
    * [.punch()](#FurQ#punch)
    * [const: .LOVE](#FurQ#LOVE) → <code>string</code>
  * _static_
    * [enum: .enemy](#FurQ.enemy) → <code>number</code>
    * ~~[.peace()](#FurQ.peace)~~
  * _overrides_
    * [.spit()](#FurQ#spit)
  * _inherits_
    * [.battle()](#Rapper#battle)
  * _inner_
    * [callback: ~onRespect](#FurQ..onRespect) → <code>function</code>
  * _events_
    * ["pop" (zoop)](#FurQ#event_pop)
    * ["slap"](#FurQ#event_slap)

<a name="new_FurQ_new"></a>
### new FurQ()
She's an Uzi lover. 

![uzi](https://sampleface.co.uk/wp-content/uploads/2013/07/fur-q-uzi-lover.png)

**Example**  
```js
var uziLover = require("FurQ");
```
<a name="FurQ#wannaTryIt"></a>
### furQ.wannaTryIt → <code>string</code>
**Default**: <code>&quot;bitch&quot;</code>  
**See**

- "Uzi like a metal dick in my hand."
- "Magazine like a big testicle gland."

<a name="FurQ#kill"></a>
### furQ.kill()
kill

**Category**: standard  
**Example**  
```js
var kill = uziLover.kill();
    
```
**Example**  
```js
uziLover.kill();
```
<a name="FurQ#respect"></a>
### furQ.respect(done)
respect

**Category**: standard  

| Param | Type | Description |
| --- | --- | --- |
| done | <code>[onRespect](#FurQ..onRespect)</code> | called on reciprocation of respect |

**Example**  
```js
uziLover.respect(function(err, gain){
    console.log(gain);
});
```
<a name="FurQ#spit"></a>
### furQ.spit()
override

<a name="FurQ#punch"></a>
### furQ.punch()
to plant ones fist in a buster's mush

<a name="FurQ#LOVE"></a>
### const: furQ.LOVE → <code>string</code>
**Default**: <code>&quot;UZI&quot;</code>  
<a name="FurQ#event_pop"></a>
### event: "pop" (zoop)
fire weapon


| Param | Type | Description |
| --- | --- | --- |
| zoop | <code>boolean</code> | make 'zooping' sound as you fire |

<a name="FurQ#event_slap"></a>
### event: "slap"
slap man

<a name="FurQ.enemy"></a>
### enum: FurQ.enemy → <code>number</code>
FUR-Q enemy types

**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| COCK | <code>number</code> | <code>0</code> | an awful individual |
| BITCH | <code>number</code> | <code>1</code> |  |
| MUTHAFUCKA | <code>number</code> | <code>2</code> |  |

<a name="FurQ.peace"></a>
### ~~FurQ.peace()~~
***Deprecated***

check if at peace

**Example**  
```js
var peace = FurQ.peace();
```
<a name="FurQ..onRespect"></a>
### callback: FurQ~onRespect → <code>function</code>
Passed to [respect](#FurQ#respect)


| Param | Type | Description |
| --- | --- | --- |
| err | <code>Error</code> | an issue with the punch |
| gain | <code>\*</code> | the respect percentage gained |

<a name="Rapper"></a>
## class: Rapper

* [class: Rapper](#Rapper)
  * _instance_
    * [.spit()](#Rapper#spit)
    * [.battle()](#Rapper#battle)
  * _static_
    * [.train()](#Rapper.train)
      * [class: ~School](#Rapper.train..School)
        * [new School()](#new_Rapper.train..School_new)

<a name="Rapper#spit"></a>
### rapper.spit()
spit

<a name="Rapper#battle"></a>
### rapper.battle()
battle

<a name="Rapper.train"></a>
### Rapper.train()
train new rappers


* [.train()](#Rapper.train)
  * [class: ~School](#Rapper.train..School)
    * [new School()](#new_Rapper.train..School_new)

<a name="Rapper.train..School"></a>
#### class: train~School
<a name="new_Rapper.train..School_new"></a>
##### new School()
rap school

<a name="plant"></a>
## plant()
to plant ones fist in a buster's mush

