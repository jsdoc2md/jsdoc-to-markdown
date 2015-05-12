# Input source code
```js
/**
Something
@todo first
@todo second
@done third
@done fourth 
*/
function Something() {}

```

* * * 

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
    "order": 0
  }
]
```

* * * 

# dmd output
```markdown
<a name="Something"></a>
### Something()
Something

**Kind:** global function  
**Todo**

- [ ] first
- [ ] second
- [x] third
- [x] fourth

```

* * * 

# Rendered
<a name="Something"></a>
### Something()
Something

**Kind:** global function  
**Todo**

- [ ] first
- [ ] second
- [x] third
- [x] fourth

