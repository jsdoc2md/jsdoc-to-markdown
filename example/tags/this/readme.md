# Input source code
```js
/** @constructor */
function Greeter (name) {
  setName.apply(this, name)
}

/** @this Greeter */
function setName (name) {
  /** a great name */
  this.name = name
}

```

* * * 

# jsdoc-parse output
```json
[
  {
    "id": "Greeter",
    "longname": "Greeter",
    "name": "Greeter",
    "scope": "global",
    "kind": "class",
    "meta": {
      "range": [
        20,
        75
      ],
      "filename": "src.js",
      "lineno": 2,
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/tags/this",
      "code": {
        "id": "astnode100000001",
        "name": "Greeter",
        "type": "FunctionDeclaration",
        "paramnames": [
          "name"
        ]
      }
    },
    "order": 0
  },
  {
    "id": "setName",
    "longname": "setName",
    "name": "setName",
    "scope": "global",
    "kind": "function",
    "params": [],
    "thisvalue": "Greeter",
    "meta": {
      "range": [
        98,
        166
      ],
      "filename": "src.js",
      "lineno": 7,
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/tags/this",
      "code": {
        "id": "astnode100000012",
        "name": "setName",
        "type": "FunctionDeclaration",
        "paramnames": [
          "name"
        ]
      },
      "vars": {
        "this.name": "Greeter#name"
      }
    },
    "order": 1
  },
  {
    "id": "Greeter#name",
    "longname": "Greeter#name",
    "name": "name",
    "scope": "instance",
    "kind": "member",
    "description": "a great name",
    "memberof": "Greeter",
    "meta": {
      "range": [
        148,
        164
      ],
      "filename": "src.js",
      "lineno": 9,
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/tags/this",
      "code": {
        "id": "astnode100000017",
        "name": "this.name",
        "type": "Identifier",
        "value": "name",
        "paramnames": []
      }
    },
    "order": 2
  }
]
```

* * * 

# dmd output
```markdown
<a name="Greeter"></a>
### Greeter
**Kind**: global class  
<a name="Greeter+name"></a>
#### greeter.name
a great name

**Kind**: instance property of <code>[Greeter](#Greeter)</code>  
<a name="setName"></a>
### setName()
**Kind**: global function  
**this**: <code>[Greeter](#Greeter)</code>  
```

* * * 

# Rendered
<a name="Greeter"></a>
### Greeter
**Kind**: global class  
<a name="Greeter+name"></a>
#### greeter.name
a great name

**Kind**: instance property of <code>[Greeter](#Greeter)</code>  
<a name="setName"></a>
### setName()
**Kind**: global function  
**this**: <code>[Greeter](#Greeter)</code>  
