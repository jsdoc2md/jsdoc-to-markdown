# Source
```js
/**
Interface for a Currah Speech Synth

![currah](http://ecx.images-amazon.com/images/I/41NReuJn%2BGL._SX300_.jpg)
@interface
*/
function Speech(){}

/**
what to say
@param {string} - the text to speak
*/
Speech.prototype.say = function(text){};

/**
@implements {Speech}
@class
@classdesc a synth, that also implements speech
*/
function Synth(){
    /**
    play a demo piece, Beethoven or something.. 
    */
    this.demo = function(){};
    this.say = function(text){};
}

```

# jsdoc2md output
```markdown
<a name="Speech"></a>
## Speech
Interface for a Currah Speech Synth

![currah](http://ecx.images-amazon.com/images/I/41NReuJn%2BGL._SX300_.jpg)

**Kind**: global interface  
<a name="Speech#say"></a>
### speech.say(text)
what to say

**Kind**: instance method of <code>[Speech](#Speech)</code>  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | the text to speak |

<a name="Synth"></a>
## Synth
a synth, that also implements speech

**Kind**: global class  

* [Synth](#Synth)
  * [.demo()](#Synth#demo)
  * [.say(text)](#Synth#say)

<a name="Synth#demo"></a>
### synth.demo()
play a demo piece, Beethoven or something..

**Kind**: instance method of <code>[Synth](#Synth)</code>  
<a name="Synth#say"></a>
### synth.say(text)
what to say

**Kind**: instance method of <code>[Synth](#Synth)</code>  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | the text to speak |

```

# Rendered
<a name="Speech"></a>
## Speech
Interface for a Currah Speech Synth

![currah](http://ecx.images-amazon.com/images/I/41NReuJn%2BGL._SX300_.jpg)

**Kind**: global interface  
<a name="Speech#say"></a>
### speech.say(text)
what to say

**Kind**: instance method of <code>[Speech](#Speech)</code>  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | the text to speak |

<a name="Synth"></a>
## Synth
a synth, that also implements speech

**Kind**: global class  

* [Synth](#Synth)
  * [.demo()](#Synth#demo)
  * [.say(text)](#Synth#say)

<a name="Synth#demo"></a>
### synth.demo()
play a demo piece, Beethoven or something..

**Kind**: instance method of <code>[Synth](#Synth)</code>  
<a name="Synth#say"></a>
### synth.say(text)
what to say

**Kind**: instance method of <code>[Synth](#Synth)</code>  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | the text to speak |

