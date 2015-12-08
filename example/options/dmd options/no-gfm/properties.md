# Source
```js
/**
@enum
*/
var eType = {
  /**
  type one
  */
  ONE: 1,
  /**
  type two
  */
  TWO: 2
}

```

# jsdoc-parse output
```json
[
  {
    "id": "eType",
    "longname": "eType",
    "name": "eType",
    "scope": "global",
    "kind": "member",
    "isEnum": true,
    "properties": [
      {
        "description": "type one",
        "name": "ONE",
        "longname": "eType.ONE",
        "kind": "member",
        "memberof": "eType",
        "scope": "static",
        "defaultvalue": 1,
        "codeName": "ONE"
      },
      {
        "description": "type two",
        "name": "TWO",
        "longname": "eType.TWO",
        "kind": "member",
        "memberof": "eType",
        "scope": "static",
        "defaultvalue": 2,
        "codeName": "TWO"
      }
    ],
    "meta": {
      "range": [
        17,
        91
      ],
      "filename": "enum.js",
      "lineno": 4,
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/src",
      "code": {
        "id": "astnode100000002",
        "name": "eType",
        "type": "ObjectExpression",
        "value": "{\"ONE\":1,\"TWO\":2}"
      }
    },
    "order": 0
  }
]
```

# without `--no-gfm` set

## dmd output
```hbs
<a name="eType"></a>
### eType
**Kind**: global enum  
**Properties**

| Name | Default | Description |
| --- | --- | --- |
| ONE | <code>1</code> | type one |
| TWO | <code>2</code> | type two |


```

## rendered
<a name="eType"></a>
### eType
**Kind**: global enum  
**Properties**

| Name | Default | Description |
| --- | --- | --- |
| ONE | <code>1</code> | type one |
| TWO | <code>2</code> | type two |




# with `--no-gfm` set
## dmd output
```hbs
<a name="eType"></a>
### eType
**Kind**: global enum  
**Properties**

<table>
  <thead>
    <tr>
      <th>Name</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>ONE</td><td><code>1</code></td><td>type one</td>
    </tr><tr>
    <td>TWO</td><td><code>2</code></td><td>type two</td>
    </tr>  </tbody>
</table>


```

## rendered
<a name="eType"></a>
### eType
**Kind**: global enum  
**Properties**

<table>
  <thead>
    <tr>
      <th>Name</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>ONE</td><td><code>1</code></td><td>type one</td>
    </tr><tr>
    <td>TWO</td><td><code>2</code></td><td>type two</td>
    </tr>  </tbody>
</table>


