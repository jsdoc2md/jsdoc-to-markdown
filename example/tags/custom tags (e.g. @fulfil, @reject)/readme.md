# Input source code
```js
/**
@fulfil {Tree} - Fulfils with a damn tree
@reject {Error} This is an error which is passed back
@returns {Promise}
*/
function promiseSomething () {}

/**
@class
*/
function Tree () {}

/**
@cast in order of appearance:
1. David Jason
2. Nicholas Lyndhurst
3. Buster Merryfield
*/
function Comedy () {}

```

* * * 

# jsdoc-parse output
```json
[
  {
    "id": "Tree",
    "longname": "Tree",
    "name": "Tree",
    "scope": "global",
    "kind": "class",
    "meta": {
      "lineno": 11,
      "filename": "src.js",
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/tags/custom tags (e.g. @fulfil, @reject)"
    },
    "order": 1
  },
  {
    "id": "promiseSomething",
    "longname": "promiseSomething",
    "name": "promiseSomething",
    "scope": "global",
    "kind": "function",
    "params": [],
    "returns": [
      {
        "type": {
          "names": [
            "Promise"
          ]
        }
      }
    ],
    "customTags": [
      {
        "tag": "fulfil",
        "value": "{Tree} - Fulfils with a damn tree"
      },
      {
        "tag": "reject",
        "value": "{Error} This is an error which is passed back"
      }
    ],
    "meta": {
      "lineno": 6,
      "filename": "src.js",
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/tags/custom tags (e.g. @fulfil, @reject)"
    },
    "order": 0
  },
  {
    "id": "Comedy",
    "longname": "Comedy",
    "name": "Comedy",
    "scope": "global",
    "kind": "function",
    "params": [],
    "customTags": [
      {
        "tag": "cast",
        "value": "in order of appearance:\n1. David Jason\n2. Nicholas Lyndhurst\n3. Buster Merryfield"
      }
    ],
    "meta": {
      "lineno": 19,
      "filename": "src.js",
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/tags/custom tags (e.g. @fulfil, @reject)"
    },
    "order": 2
  }
]
```

* * * 

# dmd output
```markdown
<a name="Tree"></a>
### Tree
**Kind**: global class  
<a name="promiseSomething"></a>
### promiseSomething() ⇒ <code>Promise</code>
**Kind**: global function  
**Fulfil**: <code>[Tree](#Tree)</code> - Fulfils with a damn tree  
**Reject**: <code>Error</code> This is an error which is passed back  
<a name="Comedy"></a>
### Comedy()
**Kind**: global function  
**Cast**: in order of appearance:
1. David Jason
2. Nicholas Lyndhurst
3. Buster Merryfield  
```

* * * 

# Rendered
<a name="Tree"></a>
### Tree
**Kind**: global class  
<a name="promiseSomething"></a>
### promiseSomething() ⇒ <code>Promise</code>
**Kind**: global function  
**Fulfil**: <code>[Tree](#Tree)</code> - Fulfils with a damn tree  
**Reject**: <code>Error</code> This is an error which is passed back  
<a name="Comedy"></a>
### Comedy()
**Kind**: global function  
**Cast**: in order of appearance:
1. David Jason
2. Nicholas Lyndhurst
3. Buster Merryfield  
