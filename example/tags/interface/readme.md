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


```
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
  }
]
```

# dmd output
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

