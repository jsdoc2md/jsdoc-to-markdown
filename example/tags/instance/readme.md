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
      "lineno": 2,
      "filename": "src.js",
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/tags/instance"
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
      "lineno": 11,
      "filename": "src.js",
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/tags/instance"
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
      "lineno": 7,
      "filename": "src.js",
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/tags/instance"
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
