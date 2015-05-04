# Source
```js
/**
A simple example written in the default `--example-lang` (javascript)
@example
var result = one();
*/
function one() {}

/**
An example written in a different lang to the default (json)
@example
```json
{
    "clive": "yeah?"
}
```
*/
function two() {}

/**
An example with no code, just text
@example
This example is just plain text. Note that it's formatted as javascript
as that's the default `--example-lang` value and dmd has no way of 
distinguishing whether example text is, or is not source code.
*/
function three() {}

/**
An example with no code, just text
@example
```none
This example is just plain text. Note that it's formatted as javascript
as that's the default `--example-lang` value and dmd has no way of 
distinguishing whether example text is, or is not source code.
```
*/
function four() {}

```

# jsdoc-parse output
```json
[
  {
    "id": "one",
    "longname": "one",
    "name": "one",
    "scope": "global",
    "kind": "function",
    "description": "A simple example written in the default `--example-lang` (javascript)",
    "examples": [
      "var result = one();"
    ],
    "order": 0
  },
  {
    "id": "two",
    "longname": "two",
    "name": "two",
    "scope": "global",
    "kind": "function",
    "description": "An example written in a different lang to the default (json)",
    "examples": [
      "```json\n{\n    \"clive\": \"yeah?\"\n}\n```"
    ],
    "order": 1
  },
  {
    "id": "three",
    "longname": "three",
    "name": "three",
    "scope": "global",
    "kind": "function",
    "description": "An example with no code, just text",
    "examples": [
      "This example is just plain text. Note that it's formatted as javascript\nas that's the default `--example-lang` value and dmd has no way of \ndistinguishing whether example text is, or is not source code."
    ],
    "order": 2
  },
  {
    "id": "four",
    "longname": "four",
    "name": "four",
    "scope": "global",
    "kind": "function",
    "description": "An example with no code, just text",
    "examples": [
      "```none\nThis example is just plain text. Note that it's formatted as javascript\nas that's the default `--example-lang` value and dmd has no way of \ndistinguishing whether example text is, or is not source code.\n```"
    ],
    "order": 3
  }
]
```

# with `--example-lang none` set
## dmd output
```hbs
<a name="one"></a>
### one()
A simple example written in the default `--example-lang` (javascript)

**Kind**: global function  
**Example**  
```
var result = one();
```
<a name="two"></a>
### two()
An example written in a different lang to the default (json)

**Kind**: global function  
**Example**  
```json
{
    "clive": "yeah?"
}
```
<a name="three"></a>
### three()
An example with no code, just text

**Kind**: global function  
**Example**  
```
This example is just plain text. Note that it's formatted as javascript
as that's the default `--example-lang` value and dmd has no way of 
distinguishing whether example text is, or is not source code.
```
<a name="four"></a>
### four()
An example with no code, just text

**Kind**: global function  
**Example**  
```none
This example is just plain text. Note that it's formatted as javascript
as that's the default `--example-lang` value and dmd has no way of 
distinguishing whether example text is, or is not source code.
```
```

## rendered
<a name="one"></a>
### one()
A simple example written in the default `--example-lang` (javascript)

**Kind**: global function  
**Example**  
```
var result = one();
```
<a name="two"></a>
### two()
An example written in a different lang to the default (json)

**Kind**: global function  
**Example**  
```json
{
    "clive": "yeah?"
}
```
<a name="three"></a>
### three()
An example with no code, just text

**Kind**: global function  
**Example**  
```
This example is just plain text. Note that it's formatted as javascript
as that's the default `--example-lang` value and dmd has no way of 
distinguishing whether example text is, or is not source code.
```
<a name="four"></a>
### four()
An example with no code, just text

**Kind**: global function  
**Example**  
```none
This example is just plain text. Note that it's formatted as javascript
as that's the default `--example-lang` value and dmd has no way of 
distinguishing whether example text is, or is not source code.
```
