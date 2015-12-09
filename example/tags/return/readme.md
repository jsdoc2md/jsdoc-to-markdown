# Input source code
```js
/**
@returns {string}
*/
function returnsSomething () {}

/**
@returns {string} returns a string
*/
function returnsWithDesc () {}

```

* * * 

# jsdoc-parse output
```json
[
  {
    "id": "returnsSomething",
    "longname": "returnsSomething",
    "name": "returnsSomething",
    "scope": "global",
    "kind": "function",
    "params": [],
    "returns": [
      {
        "type": {
          "names": [
            "string"
          ]
        }
      }
    ],
    "meta": {
      "lineno": 4,
      "filename": "src.js",
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/tags/return"
    },
    "order": 0
  },
  {
    "id": "returnsWithDesc",
    "longname": "returnsWithDesc",
    "name": "returnsWithDesc",
    "scope": "global",
    "kind": "function",
    "params": [],
    "returns": [
      {
        "type": {
          "names": [
            "string"
          ]
        },
        "description": "returns a string"
      }
    ],
    "meta": {
      "lineno": 9,
      "filename": "src.js",
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/tags/return"
    },
    "order": 1
  }
]
```

* * * 

# dmd output
```markdown
<a name="returnsSomething"></a>
### returnsSomething() ⇒ <code>string</code>
**Kind**: global function  
<a name="returnsWithDesc"></a>
### returnsWithDesc() ⇒ <code>string</code>
**Kind**: global function  
**Returns**: <code>string</code> - returns a string  
```

* * * 

# Rendered
<a name="returnsSomething"></a>
### returnsSomething() ⇒ <code>string</code>
**Kind**: global function  
<a name="returnsWithDesc"></a>
### returnsWithDesc() ⇒ <code>string</code>
**Kind**: global function  
**Returns**: <code>string</code> - returns a string  
