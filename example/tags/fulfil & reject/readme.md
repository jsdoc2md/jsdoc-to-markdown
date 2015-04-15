# Input source code
```js
/**
@fulfil {Tree}
@reject {Error}
@returns {Promise}
*/
function promiseSomething(){}

/**
@class
*/
function Tree(){};

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
    "order": 1
  },
  {
    "id": "promiseSomething",
    "longname": "promiseSomething",
    "name": "promiseSomething",
    "scope": "global",
    "kind": "function",
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
        "value": "{Tree}"
      },
      {
        "tag": "reject",
        "value": "{Error}"
      }
    ],
    "order": 0
  }
]
```

* * * 

# dmd output
```markdown
<a name="Tree"></a>
## Tree
**Kind**: global class  
<a name="promiseSomething"></a>
## promiseSomething() ⇒ <code>Promise</code>
**Kind**: global function  
**Fulfil**: <code>[Tree](#Tree)</code>  
**Reject**: <code>Error</code>  
```

* * * 

# Rendered
<a name="Tree"></a>
## Tree
**Kind**: global class  
<a name="promiseSomething"></a>
## promiseSomething() ⇒ <code>Promise</code>
**Kind**: global function  
**Fulfil**: <code>[Tree](#Tree)</code>  
**Reject**: <code>Error</code>  
