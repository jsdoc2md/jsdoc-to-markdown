# Source
```js
/**
Something
@todo first
@todo second
@done third
@done fourth 
*/
function Something () {}

```

# jsdoc-parse output
```json
[
  {
    "id": "Something",
    "longname": "Something",
    "name": "Something",
    "scope": "global",
    "kind": "function",
    "description": "Something",
    "params": [],
    "todoList": [
      {
        "done": false,
        "task": "first"
      },
      {
        "done": false,
        "task": "second"
      },
      {
        "done": true,
        "task": "third"
      },
      {
        "done": true,
        "task": "fourth"
      }
    ],
    "meta": {
      "lineno": 8,
      "filename": "src.js",
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/tags/todo and done"
    },
    "order": 0
  }
]
```

# without `--no-gfm` set

## dmd output
```hbs
<a name="Something"></a>
### Something()
Something

**Kind**: global function  
**Todo**

- [ ] first
- [ ] second
- [x] third
- [x] fourth

```

## rendered
<a name="Something"></a>
### Something()
Something

**Kind**: global function  
**Todo**

- [ ] first
- [ ] second
- [x] third
- [x] fourth



# with `--no-gfm` set
## dmd output
```hbs
<a name="Something"></a>
### Something()
Something

**Kind**: global function  
**Todo**

- first
- second
- third ✓
- fourth ✓

```

## rendered
<a name="Something"></a>
### Something()
Something

**Kind**: global function  
**Todo**

- first
- second
- third ✓
- fourth ✓

