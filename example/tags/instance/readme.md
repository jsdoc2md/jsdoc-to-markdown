# Input source code
```js
/** @namespace */
var SomeObject = {
  /**
   * yeah is now `SomeObject#yeah` rather than `SomeObject.yeah`.
   * @instance
   */
  yeah: null
}

/** Generates SomeObject instances. */
function yeahFactory (yeahValue) {
  var props = { yeah: yeahValue }
  return Object.create(SomeObject, props)
}

```

* * * 

# jsdoc-parse output
```json
[
  {
    "id": "SomeObject",
    "longname": "SomeObject",
    "name": "SomeObject",
    "scope": "global",
    "kind": "namespace",
    "meta": {
      "range": [
        22,
        144
      ],
      "filename": "src.js",
      "lineno": 2,
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/tags/instance",
      "code": {
        "id": "astnode100000002",
        "name": "SomeObject",
        "type": "ObjectExpression",
        "value": "{\"yeah\":null}"
      }
    },
    "order": 0
  },
  {
    "id": "yeahFactory",
    "longname": "yeahFactory",
    "name": "yeahFactory",
    "scope": "global",
    "kind": "function",
    "description": "Generates SomeObject instances.",
    "params": [],
    "meta": {
      "range": [
        185,
        297
      ],
      "filename": "src.js",
      "lineno": 11,
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/tags/instance",
      "code": {
        "id": "astnode100000007",
        "name": "yeahFactory",
        "type": "FunctionDeclaration",
        "paramnames": [
          "yeahValue"
        ]
      },
      "vars": {
        "props": "yeahFactory~props"
      }
    },
    "order": 2
  },
  {
    "id": "SomeObject#yeah",
    "longname": "SomeObject#yeah",
    "name": "yeah",
    "scope": "instance",
    "kind": "member",
    "description": "yeah is now `SomeObject#yeah` rather than `SomeObject.yeah`.",
    "memberof": "SomeObject",
    "meta": {
      "range": [
        132,
        142
      ],
      "filename": "src.js",
      "lineno": 7,
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/tags/instance",
      "code": {
        "id": "astnode100000005",
        "name": "yeah",
        "type": "Literal",
        "value": null
      }
    },
    "order": 1
  }
]
```

* * * 

# dmd output
```markdown
<a name="SomeObject"></a>
### SomeObject : <code>object</code>
**Kind**: global namespace  
<a name="SomeObject+yeah"></a>
#### someObject.yeah
yeah is now `SomeObject#yeah` rather than `SomeObject.yeah`.

**Kind**: instance property of <code>[SomeObject](#SomeObject)</code>  
<a name="yeahFactory"></a>
### yeahFactory()
Generates SomeObject instances.

**Kind**: global function  
```

* * * 

# Rendered
<a name="SomeObject"></a>
### SomeObject : <code>object</code>
**Kind**: global namespace  
<a name="SomeObject+yeah"></a>
#### someObject.yeah
yeah is now `SomeObject#yeah` rather than `SomeObject.yeah`.

**Kind**: instance property of <code>[SomeObject](#SomeObject)</code>  
<a name="yeahFactory"></a>
### yeahFactory()
Generates SomeObject instances.

**Kind**: global function  
