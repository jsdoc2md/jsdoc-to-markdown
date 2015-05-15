# Input source code
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

* * * 

# jsdoc-parse output
```json
[
  {
    "id": "Speech",
    "longname": "Speech",
    "name": "Speech",
    "scope": "global",
    "kind": "interface",
    "description": "Interface for a Currah Speech Synth\n\n![currah](http://ecx.images-amazon.com/images/I/41NReuJn%2BGL._SX300_.jpg)",
    "order": 0
  },
  {
    "id": "Synth",
    "longname": "Synth",
    "name": "Synth",
    "scope": "global",
    "kind": "class",
    "description": "a synth, that also implements speech",
    "implements": [
      "Speech"
    ],
    "order": 2
  },
  {
    "id": "Speech#say",
    "longname": "Speech#say",
    "name": "say",
    "scope": "instance",
    "kind": "function",
    "description": "what to say",
    "memberof": "Speech",
    "params": [
      {
        "type": {
          "names": [
            "string"
          ]
        },
        "description": "the text to speak",
        "name": "text"
      }
    ],
    "order": 1
  },
  {
    "id": "Synth#demo",
    "longname": "Synth#demo",
    "name": "demo",
    "scope": "instance",
    "kind": "function",
    "description": "play a demo piece, Beethoven or something..",
    "memberof": "Synth",
    "order": 3
  },
  {
    "id": "Synth#say",
    "implements": [
      "Speech#say"
    ],
    "longname": "Synth#say",
    "name": "say",
    "scope": "instance",
    "kind": "function",
    "description": "what to say",
    "memberof": "Synth",
    "params": [
      {
        "type": {
          "names": [
            "string"
          ]
        },
        "description": "the text to speak",
        "name": "text"
      }
    ],
    "order": 4
  }
]
```

* * * 

# dmd output
```markdown
<a name="Speech"></a>
### Speech
Interface for a Currah Speech Synth

![currah](http://ecx.images-amazon.com/images/I/41NReuJn%2BGL._SX300_.jpg)

**Kind:** global interface  
<a name="Speech+say"></a>
#### speech.say(text)
what to say

**Kind:** instance method of <code>[Speech](#Speech)</code>  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | the text to speak |

<a name="Synth"></a>
### Synth
a synth, that also implements speech

**Kind:** global class  
**Implements:** <code>[Speech](#Speech)</code>  

* [Synth](#Synth)
  * [.demo()](#Synth+demo)
  * [.say(text)](#Synth+say)

<a name="Synth+demo"></a>
#### synth.demo()
play a demo piece, Beethoven or something..

**Kind:** instance method of <code>[Synth](#Synth)</code>  
<a name="Synth+say"></a>
#### synth.say(text)
what to say

**Kind:** instance method of <code>[Synth](#Synth)</code>  
**Implements:** <code>[say](#Speech+say)</code>  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | the text to speak |

```

* * * 

# Rendered
<a name="Speech"></a>
### Speech
Interface for a Currah Speech Synth

![currah](http://ecx.images-amazon.com/images/I/41NReuJn%2BGL._SX300_.jpg)

**Kind:** global interface  
<a name="Speech+say"></a>
#### speech.say(text)
what to say

**Kind:** instance method of <code>[Speech](#Speech)</code>  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | the text to speak |

<a name="Synth"></a>
### Synth
a synth, that also implements speech

**Kind:** global class  
**Implements:** <code>[Speech](#Speech)</code>  

* [Synth](#Synth)
  * [.demo()](#Synth+demo)
  * [.say(text)](#Synth+say)

<a name="Synth+demo"></a>
#### synth.demo()
play a demo piece, Beethoven or something..

**Kind:** instance method of <code>[Synth](#Synth)</code>  
<a name="Synth+say"></a>
#### synth.say(text)
what to say

**Kind:** instance method of <code>[Synth](#Synth)</code>  
**Implements:** <code>[say](#Speech+say)</code>  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | the text to speak |

