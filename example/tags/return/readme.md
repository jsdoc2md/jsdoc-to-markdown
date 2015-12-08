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
      "range": [
        25,
        56
      ],
      "filename": "src.js",
      "lineno": 4,
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/tags/return",
      "code": {
        "id": "astnode100000001",
        "name": "returnsSomething",
        "type": "FunctionDeclaration",
        "paramnames": []
      }
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
      "range": [
        100,
        130
      ],
      "filename": "src.js",
      "lineno": 9,
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/tags/return",
      "code": {
        "id": "astnode100000004",
        "name": "returnsWithDesc",
        "type": "FunctionDeclaration",
        "paramnames": []
      }
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
