# Source
```js
/**
Pump an idiot full of volts
@deprecated
@param {object | array} - the victim(s) to fry
@param [options] {object} - electricution options
@param [options.strength=11] {number} - strength
@param [options.crazyHair=true] {number} - optional spikey hair effect
@param [options.origin] {object} - origin details
@param [options.origin.country] {string} - the country of origin
@param [done] {function} - callback on slump, which has:
- devestating power
- an unusual aftertaste
*/
function taze (victim, options, done) {}

```

# jsdoc-parse output
```json
[
  {
    "id": "taze",
    "longname": "taze",
    "name": "taze",
    "scope": "global",
    "kind": "function",
    "description": "Pump an idiot full of volts",
    "params": [
      {
        "type": {
          "names": [
            "object",
            "array"
          ]
        },
        "description": "the victim(s) to fry",
        "name": "victim"
      },
      {
        "type": {
          "names": [
            "object"
          ]
        },
        "optional": true,
        "description": "electricution options",
        "name": "options"
      },
      {
        "type": {
          "names": [
            "number"
          ]
        },
        "optional": true,
        "defaultvalue": 11,
        "description": "strength",
        "name": "options.strength"
      },
      {
        "type": {
          "names": [
            "number"
          ]
        },
        "optional": true,
        "defaultvalue": true,
        "description": "optional spikey hair effect",
        "name": "options.crazyHair"
      },
      {
        "type": {
          "names": [
            "object"
          ]
        },
        "optional": true,
        "description": "origin details",
        "name": "options.origin"
      },
      {
        "type": {
          "names": [
            "string"
          ]
        },
        "optional": true,
        "description": "the country of origin",
        "name": "options.origin.country"
      },
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "optional": true,
        "description": "callback on slump, which has:\n- devestating power\n- an unusual aftertaste",
        "name": "done"
      }
    ],
    "deprecated": true,
    "meta": {
      "lineno": 14,
      "filename": "function-taze.js",
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/src"
    },
    "order": 0
  }
]
```

# without `--no-gfm` set

## dmd output
```hbs
<a name="taze"></a>
### ~~taze(victim, [options], [done])~~
***Deprecated***

Pump an idiot full of volts

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| victim | <code>object</code> &#124; <code>array</code> |  | the victim(s) to fry |
| [options] | <code>object</code> |  | electricution options |
| [options.strength] | <code>number</code> | <code>11</code> | strength |
| [options.crazyHair] | <code>number</code> | <code>true</code> | optional spikey hair effect |
| [options.origin] | <code>object</code> |  | origin details |
| [options.origin.country] | <code>string</code> |  | the country of origin |
| [done] | <code>function</code> |  | callback on slump, which has: - devestating power - an unusual aftertaste |


```

## rendered
<a name="taze"></a>
### ~~taze(victim, [options], [done])~~
***Deprecated***

Pump an idiot full of volts

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| victim | <code>object</code> &#124; <code>array</code> |  | the victim(s) to fry |
| [options] | <code>object</code> |  | electricution options |
| [options.strength] | <code>number</code> | <code>11</code> | strength |
| [options.crazyHair] | <code>number</code> | <code>true</code> | optional spikey hair effect |
| [options.origin] | <code>object</code> |  | origin details |
| [options.origin.country] | <code>string</code> |  | the country of origin |
| [done] | <code>function</code> |  | callback on slump, which has: - devestating power - an unusual aftertaste |




# with `--no-gfm` set
## dmd output
```hbs
<a name="taze"></a>
### <del>taze(victim, [options], [done])</del>
***Deprecated***

Pump an idiot full of volts

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>victim</td><td><code>object</code> | <code>array</code></td><td></td><td><p>the victim(s) to fry</p>
</td>
    </tr><tr>
    <td>[options]</td><td><code>object</code></td><td></td><td><p>electricution options</p>
</td>
    </tr><tr>
    <td>[options.strength]</td><td><code>number</code></td><td><code>11</code></td><td><p>strength</p>
</td>
    </tr><tr>
    <td>[options.crazyHair]</td><td><code>number</code></td><td><code>true</code></td><td><p>optional spikey hair effect</p>
</td>
    </tr><tr>
    <td>[options.origin]</td><td><code>object</code></td><td></td><td><p>origin details</p>
</td>
    </tr><tr>
    <td>[options.origin.country]</td><td><code>string</code></td><td></td><td><p>the country of origin</p>
</td>
    </tr><tr>
    <td>[done]</td><td><code>function</code></td><td></td><td><p>callback on slump, which has:</p>
<ul>
<li>devestating power</li>
<li>an unusual aftertaste</li>
</ul>
</td>
    </tr>  </tbody>
</table>


```

## rendered
<a name="taze"></a>
### <del>taze(victim, [options], [done])</del>
***Deprecated***

Pump an idiot full of volts

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>victim</td><td><code>object</code> | <code>array</code></td><td></td><td><p>the victim(s) to fry</p>
</td>
    </tr><tr>
    <td>[options]</td><td><code>object</code></td><td></td><td><p>electricution options</p>
</td>
    </tr><tr>
    <td>[options.strength]</td><td><code>number</code></td><td><code>11</code></td><td><p>strength</p>
</td>
    </tr><tr>
    <td>[options.crazyHair]</td><td><code>number</code></td><td><code>true</code></td><td><p>optional spikey hair effect</p>
</td>
    </tr><tr>
    <td>[options.origin]</td><td><code>object</code></td><td></td><td><p>origin details</p>
</td>
    </tr><tr>
    <td>[options.origin.country]</td><td><code>string</code></td><td></td><td><p>the country of origin</p>
</td>
    </tr><tr>
    <td>[done]</td><td><code>function</code></td><td></td><td><p>callback on slump, which has:</p>
<ul>
<li>devestating power</li>
<li>an unusual aftertaste</li>
</ul>
</td>
    </tr>  </tbody>
</table>


