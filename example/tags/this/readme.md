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
      "lineno": 2,
      "filename": "src.js",
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/tags/this"
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
      "lineno": 7,
      "filename": "src.js",
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/tags/this"
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
      "lineno": 9,
      "filename": "src.js",
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/tags/this"
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
