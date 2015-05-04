***note:*** I can't show the source code and dmd output in this case, because nested fenced-code blocks [do not render correctly](https://github.com/vmg/redcarpet/issues/208).. 

# jsdoc-parse output
```json
[
  {
    "id": "seven",
    "longname": "seven",
    "name": "seven",
    "scope": "global",
    "kind": "member",
    "description": "An example with text and code, with fenced-code block and `json` lang set",
    "examples": [
      "Here, i introduce example data for `seven`: \n\n```json\n{\n    \"yeah\": \"gets?\"\n}\n```"
    ],
    "order": 7
  },
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
      "This example is just plain text. Note that it's formatted as javascript\nas that's the default `--example-lang` value and dmd has no way of \ndistinguishing whether the example text is, or is not source code."
    ],
    "order": 2
  },
  {
    "id": "four",
    "longname": "four",
    "name": "four",
    "scope": "global",
    "kind": "function",
    "description": "An example with no code, just text. The fenced code block lang is set to `none` in this case.",
    "examples": [
      "```none\nThis example is just plain text. Note that it's formatted as javascript\nas that's the default `--example-lang` value and dmd has no way of \ndistinguishing whether the example text is, or is not source code.\n```"
    ],
    "order": 3
  },
  {
    "id": "five",
    "longname": "five",
    "name": "five",
    "scope": "global",
    "kind": "function",
    "description": "An example with text and code, with no fenced-code blocks",
    "examples": [
      "Here, i introduce the example: \n\nvar result = five();"
    ],
    "order": 4
  },
  {
    "id": "six",
    "longname": "six",
    "name": "six",
    "scope": "global",
    "kind": "function",
    "description": "An example with text and code, with fenced-code block and no lang set",
    "examples": [
      "Here, i introduce the example: \n\n```\nvar result = six();\n```"
    ],
    "order": 5
  },
  {
    "id": "seven",
    "longname": "seven",
    "name": "seven",
    "scope": "global",
    "kind": "function",
    "description": "An example with text and code, with fenced-code block and `js` lang set",
    "examples": [
      "Here, i introduce the example: \n\n```js\nvar result = seven();\n```"
    ],
    "order": 6
  }
]
```

* * * 

# Rendered
<a name="seven"></a>
## seven
An example with text and code, with fenced-code block and `json` lang set

**Kind**: global variable  
**Example**  
Here, i introduce example data for `seven`: 

```json
{
    "yeah": "gets?"
}
```
<a name="one"></a>
## one()
A simple example written in the default `--example-lang` (javascript)

**Kind**: global function  
**Example**  
```js
var result = one();
```
<a name="two"></a>
## two()
An example written in a different lang to the default (json)

**Kind**: global function  
**Example**  
```json
{
    "clive": "yeah?"
}
```
<a name="three"></a>
## three()
An example with no code, just text

**Kind**: global function  
**Example**  
```js
This example is just plain text. Note that it's formatted as javascript
as that's the default `--example-lang` value and dmd has no way of 
distinguishing whether the example text is, or is not source code.
```
<a name="four"></a>
## four()
An example with no code, just text. The fenced code block lang is set to `none` in this case.

**Kind**: global function  
**Example**  
```none
This example is just plain text. Note that it's formatted as javascript
as that's the default `--example-lang` value and dmd has no way of 
distinguishing whether the example text is, or is not source code.
```
<a name="five"></a>
## five()
An example with text and code, with no fenced-code blocks

**Kind**: global function  
**Example**  
```js
Here, i introduce the example: 

var result = five();
```
<a name="six"></a>
## six()
An example with text and code, with fenced-code block and no lang set

**Kind**: global function  
**Example**  
Here, i introduce the example: 

```
var result = six();
```
<a name="seven"></a>
## seven()
An example with text and code, with fenced-code block and `js` lang set

**Kind**: global function  
**Example**  
Here, i introduce the example: 

```js
var result = seven();
```
