##Globals
<dl>
<dt><a href="#UZILover">class: UZILover</a> ⇐ <code><a href="#Rapper">Rapper</a></code></dt>
<dd><p>C*ck, b!tch, c*ck, b!tch, m*therf!cker. You gotta kill people, to respect people.</p>
</dd>
<dt><a href="#Rapper">class: Rapper</a></dt>
<dd></dd>
<dt><a href="#plant">plant()</a></dt>
<dd><p>to plant ones fist in a buster&#39;s mush</p>
</dd>
</dl>
<a name="UZILover"></a>
##class: UZILover ⇐ <code>[Rapper](#Rapper)</code>
C\*ck, b!tch, c\*ck, b!tch, m\*therf!cker. You gotta kill people, to respect people.

**Extends:** <code>[Rapper](#Rapper)</code>  
**Emits**: <code>[pop](#UZILover#event_pop)</code>, <code>[slap](#UZILover#event_slap)</code>  
**Access:** public  
**See**: https://www.youtube.com/watch?v=1sxZ4tsp8gc  
**Author:** Chris Morris  

* [class: UZILover](#UZILover) ⇐ <code>[Rapper](#Rapper)</code>
  * [new UZILover()](#new_UZILover_new)
  * _instance_
    * [.wannaTryIt](#UZILover#wannaTryIt) → <code>string</code>
    * [.kill()](#UZILover#kill)
    * [.respect(done)](#UZILover#respect)
    * [.punch()](#UZILover#punch)
    * [const: .LOVE](#UZILover#LOVE) → <code>string</code>
  * _static_
    * [enum: .enemy](#UZILover.enemy) → <code>number</code>
    * ~~[.peace()](#UZILover.peace)~~
  * _inherits_
    * [.spit()](#Rapper#spit)
    * [.battle()](#Rapper#battle)
  * _inner_
    * [callback: ~onRespect](#UZILover..onRespect) → <code>function</code>
  * _events_
    * ["pop" (zoop)](#UZILover#event_pop)
    * ["slap"](#UZILover#event_slap)

<a name="new_UZILover_new"></a>
###new UZILover()
She's an Uzi lover. 

![uzi](https://sampleface.co.uk/wp-content/uploads/2013/07/fur-q-uzi-lover.png)

**Example**  
```js
var uziLover = require("UZILover");
```
<a name="UZILover#wannaTryIt"></a>
###uziLover.wannaTryIt → <code>string</code>
**Default**: `bitch`  
**See**

- "Uzi like a metal dick in my hand."
- "Magazine like a big testicle gland."

<a name="UZILover#kill"></a>
###uziLover.kill()
kill

**Example**  
```js
var kill = uziLover.kill();
    
```
**Example**  
```js
uziLover.kill();
```
<a name="UZILover#respect"></a>
###uziLover.respect(done)
respect

| Param | Type | Description |
| --- | --- | --- |
| done | <code>[onRespect](#UZILover..onRespect)</code> | called on reciprocation of respect |

**Example**  
```js
uziLover.respect(function(err, gain){
    console.log(gain);
});
```
<a name="UZILover#punch"></a>
###uziLover.punch()
to plant ones fist in a buster's mush

<a name="UZILover#LOVE"></a>
###const: uziLover.LOVE → <code>string</code>
**Default**: `UZI`  
<a name="UZILover#event_pop"></a>
###event: "pop" (zoop)
fire weapon

| Param | Type | Description |
| --- | --- | --- |
| zoop | <code>boolean</code> | make 'zooping' sound as you fire |

<a name="UZILover#event_slap"></a>
###event: "slap"
slap man

<a name="UZILover.enemy"></a>
###enum: UZILover.enemy → <code>number</code>
FUR-Q enemy types

**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| COCK | <code>number</code> | `0` | an awful individual |
| BITCH | <code>number</code> | `1` |  |
| MUTHAFUCKA | <code>number</code> | `2` |  |

**Read only**: true  
<a name="UZILover.peace"></a>
###~~UZILover.peace()~~
***Deprecated***

check if at peace

**Example**  
```js
var peace = UZILover.peace();
```
<a name="UZILover..onRespect"></a>
###callback: UZILover~onRespect → <code>function</code>
Passed to [respect](#UZILover#respect)

| Param | Type | Description |
| --- | --- | --- |
| err | <code>Error</code> | an issue with the punch |
| gain | <code>number</code> | the respect percentage gained |

<a name="Rapper"></a>
##class: Rapper

* [class: Rapper](#Rapper)
  * _instance_
    * [.spit()](#Rapper#spit)
    * [.battle()](#Rapper#battle)

<a name="Rapper#spit"></a>
###rapper.spit()
spit

<a name="Rapper#battle"></a>
###rapper.battle()
battle

<a name="plant"></a>
##plant()
to plant ones fist in a buster's mush

