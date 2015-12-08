# Input source code
```js
/**
Interface for a Currah Speech Synth

![currah](http://ecx.images-amazon.com/images/I/41NReuJn%2BGL._SX300_.jpg)
@interface
*/
function Speech () {}

/**
what to say
@param {string} - the text to speak
*/
Speech.prototype.say = function (text) {}
/**
@implements {Speech}
@class
@classdesc a synth, that also implements speech
*/
function Synth () {
  /**
  play a demo piece, Beethoven or something.. 
  */
  this.demo = function () {}
  this.say = function (text) {}
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
    "params": [],
    "meta": {
      "range": [
        130,
        151
      ],
      "filename": "src.js",
      "lineno": 7,
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/tags/interface",
      "code": {
        "id": "astnode100000001",
        "name": "Speech",
        "type": "FunctionDeclaration",
        "paramnames": []
      }
    },
    "order": 0
  },
  {
    "id": "Synth",
    "longname": "Synth",
    "name": "Synth",
    "scope": "global",
    "kind": "class",
    "implements": [
      "Speech"
    ],
    "description": "a synth, that also implements speech",
    "meta": {
      "range": [
        83,
        223
      ],
      "filename": "src.js",
      "lineno": 6,
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/tags/implements",
      "code": {
        "id": "astnode100000015",
        "name": "Synth",
        "type": "FunctionDeclaration",
        "paramnames": []
      },
      "vars": {
        "this.demo": "Synth#demo",
        "": null,
        "this.say": "Synth#say"
      }
    },
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
    "meta": {
      "range": [
        208,
        249
      ],
      "filename": "src.js",
      "lineno": 13,
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/tags/interface",
      "code": {
        "id": "astnode100000005",
        "name": "Speech.prototype.say",
        "type": "FunctionExpression",
        "paramnames": [
          "text"
        ]
      }
    },
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
    "meta": {
      "range": [
        163,
        189
      ],
      "filename": "src.js",
      "lineno": 10,
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/tags/implements",
      "code": {
        "id": "astnode100000019",
        "name": "this.demo",
        "type": "FunctionExpression",
        "paramnames": []
      }
    },
    "order": 3
  },
  {
    "id": "Synth#say",
    "longname": "Synth#say",
    "name": "say",
    "scope": "instance",
    "kind": "function",
    "implements": [
      "Speech#say"
    ],
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
    "meta": {
      "range": [
        208,
        249
      ],
      "filename": "src.js",
      "lineno": 13,
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/tags/interface",
      "code": {
        "id": "astnode100000005",
        "name": "Speech.prototype.say",
        "type": "FunctionExpression",
        "paramnames": [
          "text"
        ]
      }
    },
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

**Kind**: global interface  
<a name="Speech+say"></a>
#### speech.say(text)
what to say

**Kind**: instance method of <code>[Speech](#Speech)</code>  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | the text to speak |

<a name="Synth"></a>
### Synth
a synth, that also implements speech

**Kind**: global class  
**Implements:** <code>[Speech](#Speech)</code>  

* [Synth](#Synth)
  * [.demo()](#Synth+demo)
  * [.say(text)](#Synth+say)

<a name="Synth+demo"></a>
#### synth.demo()
play a demo piece, Beethoven or something..

**Kind**: instance method of <code>[Synth](#Synth)</code>  
<a name="Synth+say"></a>
#### synth.say(text)
what to say

**Kind**: instance method of <code>[Synth](#Synth)</code>  
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

**Kind**: global interface  
<a name="Speech+say"></a>
#### speech.say(text)
what to say

**Kind**: instance method of <code>[Speech](#Speech)</code>  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | the text to speak |

<a name="Synth"></a>
### Synth
a synth, that also implements speech

**Kind**: global class  
**Implements:** <code>[Speech](#Speech)</code>  

* [Synth](#Synth)
  * [.demo()](#Synth+demo)
  * [.say(text)](#Synth+say)

<a name="Synth+demo"></a>
#### synth.demo()
play a demo piece, Beethoven or something..

**Kind**: instance method of <code>[Synth](#Synth)</code>  
<a name="Synth+say"></a>
#### synth.say(text)
what to say

**Kind**: instance method of <code>[Synth](#Synth)</code>  
**Implements:** <code>[say](#Speech+say)</code>  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | the text to speak |

