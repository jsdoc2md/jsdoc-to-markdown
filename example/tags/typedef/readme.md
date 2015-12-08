# Input source code
```js
/**
A number, or a string containing a number.
@typedef {(number|string)} NumberLike
*/

/**
Set the magic number.
@param {NumberLike} x - The magic number.
*/
function setMagicNumber (x) {}

/**
Some options
@typedef {object} someOptions
@property {boolean} a flag
@property {string} some text
*/

/**
@param {someOptions} - the input options
*/
function doSomething (option) {}

```

* * * 

# jsdoc-parse output
```json
[
  {
    "id": "setMagicNumber",
    "longname": "setMagicNumber",
    "name": "setMagicNumber",
    "scope": "global",
    "kind": "function",
    "description": "Set the magic number.",
    "params": [
      {
        "type": {
          "names": [
            "NumberLike"
          ]
        },
        "description": "The magic number.",
        "name": "x"
      }
    ],
    "meta": {
      "range": [
        160,
        190
      ],
      "filename": "src.js",
      "lineno": 10,
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/tags/typedef",
      "code": {
        "id": "astnode100000001",
        "name": "setMagicNumber",
        "type": "FunctionDeclaration",
        "paramnames": [
          "x"
        ]
      }
    },
    "order": 1
  },
  {
    "id": "doSomething",
    "longname": "doSomething",
    "name": "doSomething",
    "scope": "global",
    "kind": "function",
    "params": [
      {
        "type": {
          "names": [
            "someOptions"
          ]
        },
        "description": "the input options",
        "name": "option"
      }
    ],
    "meta": {
      "range": [
        347,
        379
      ],
      "filename": "src.js",
      "lineno": 22,
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/tags/typedef",
      "code": {
        "id": "astnode100000005",
        "name": "doSomething",
        "type": "FunctionDeclaration",
        "paramnames": [
          "option"
        ]
      }
    },
    "order": 3
  },
  {
    "id": "NumberLike",
    "longname": "NumberLike",
    "name": "NumberLike",
    "scope": "global",
    "kind": "typedef",
    "description": "A number, or a string containing a number.",
    "type": {
      "names": [
        "number",
        "string"
      ]
    },
    "meta": {
      "range": [
        0,
        87
      ],
      "filename": "src.js",
      "lineno": 1,
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/tags/typedef",
      "code": {}
    },
    "order": 0
  },
  {
    "id": "someOptions",
    "longname": "someOptions",
    "name": "someOptions",
    "scope": "global",
    "kind": "typedef",
    "description": "Some options",
    "type": {
      "names": [
        "object"
      ]
    },
    "properties": [
      {
        "type": {
          "names": [
            "boolean"
          ]
        },
        "description": "flag",
        "name": "a"
      },
      {
        "type": {
          "names": [
            "string"
          ]
        },
        "description": "text",
        "name": "some"
      }
    ],
    "meta": {
      "range": [
        192,
        297
      ],
      "filename": "src.js",
      "lineno": 12,
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/tags/typedef",
      "code": {}
    },
    "order": 2
  }
]
```

* * * 

# dmd output
```markdown
<a name="setMagicNumber"></a>
#### setMagicNumber(x)
Set the magic number.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>[NumberLike](#NumberLike)</code> | The magic number. |

<a name="doSomething"></a>
#### doSomething(option)
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| option | <code>[someOptions](#someOptions)</code> | the input options |

<a name="NumberLike"></a>
#### NumberLike : <code>number</code> &#124; <code>string</code>
A number, or a string containing a number.

**Kind**: global typedef  
<a name="someOptions"></a>
#### someOptions : <code>object</code>
Some options

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| a | <code>boolean</code> | flag |
| some | <code>string</code> | text |

```

* * * 

# Rendered
<a name="setMagicNumber"></a>
#### setMagicNumber(x)
Set the magic number.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>[NumberLike](#NumberLike)</code> | The magic number. |

<a name="doSomething"></a>
#### doSomething(option)
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| option | <code>[someOptions](#someOptions)</code> | the input options |

<a name="NumberLike"></a>
#### NumberLike : <code>number</code> &#124; <code>string</code>
A number, or a string containing a number.

**Kind**: global typedef  
<a name="someOptions"></a>
#### someOptions : <code>object</code>
Some options

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| a | <code>boolean</code> | flag |
| some | <code>string</code> | text |

