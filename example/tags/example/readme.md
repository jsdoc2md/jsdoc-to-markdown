***note:*** I can't show the source code and dmd output in this case, because nested fenced-code blocks [do not render correctly](https://github.com/vmg/redcarpet/issues/208).. 

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
    "params": [],
    "examples": [
      "var result = one()"
    ],
    "meta": {
      "lineno": 6,
      "filename": "src.js",
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/tags/example"
    },
    "order": 0
  },
  {
    "id": "two",
    "longname": "two",
    "name": "two",
    "scope": "global",
    "kind": "function",
    "description": "An example written in a different lang to the default (json)",
    "params": [],
    "examples": [
      "```json\n{\n    \"clive\": \"yeah?\"\n}\n```"
    ],
    "meta": {
      "lineno": 17,
      "filename": "src.js",
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/tags/example"
    },
    "order": 1
  },
  {
    "id": "three",
    "longname": "three",
    "name": "three",
    "scope": "global",
    "kind": "function",
    "description": "An example with no code, just text",
    "params": [],
    "examples": [
      "This example is just plain text. Note that it's formatted as javascript\nas that's the default `--example-lang` value and dmd has no way of \ndistinguishing whether the example text is, or is not source code."
    ],
    "meta": {
      "lineno": 26,
      "filename": "src.js",
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/tags/example"
    },
    "order": 2
  },
  {
    "id": "four",
    "longname": "four",
    "name": "four",
    "scope": "global",
    "kind": "function",
    "description": "Another text example, using the `@lang off` sub-tag..",
    "params": [],
    "examples": [
      "@lang off\nThis example is plain text but it has not been formatted using the default \n`--example-lang` of javascript because the `@example @lang off` was used.."
    ],
    "meta": {
      "lineno": 34,
      "filename": "src.js",
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/tags/example"
    },
    "order": 3
  },
  {
    "id": "five",
    "longname": "five",
    "name": "five",
    "scope": "global",
    "kind": "function",
    "description": "An example with text and code, with no fenced-code blocks",
    "params": [],
    "examples": [
      "Here, i introduce the example: \n\nvar result = five()"
    ],
    "meta": {
      "lineno": 43,
      "filename": "src.js",
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/tags/example"
    },
    "order": 4
  },
  {
    "id": "six",
    "longname": "six",
    "name": "six",
    "scope": "global",
    "kind": "function",
    "description": "An example with text and code, with fenced-code block and no lang set",
    "params": [],
    "examples": [
      "Here, i introduce the example: \n\n```\nvar result = six()\n```"
    ],
    "meta": {
      "lineno": 54,
      "filename": "src.js",
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/tags/example"
    },
    "order": 5
  },
  {
    "id": "seven",
    "longname": "seven",
    "name": "seven",
    "scope": "global",
    "kind": "function",
    "description": "An example with text and code, with fenced-code block and `js` lang set",
    "params": [],
    "examples": [
      "Here, i introduce the example: \n\n```js\nvar result = seven()\n```"
    ],
    "meta": {
      "lineno": 65,
      "filename": "src.js",
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/tags/example"
    },
    "order": 6
  },
  {
    "id": "eight",
    "longname": "eight",
    "name": "eight",
    "scope": "global",
    "kind": "function",
    "description": "An example with text and code, with fenced-code block and `json` lang set",
    "params": [],
    "examples": [
      "this function returns data like:\n\n```json\n{\n    \"yeah\": \"gets?\"\n}\n```"
    ],
    "meta": {
      "lineno": 78,
      "filename": "src.js",
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/tags/example"
    },
    "order": 7
  }
]
```

* * * 

# Rendered
<a name="one"></a>
## one()
A simple example written in the default `--example-lang` (javascript)

**Kind**: global function  
**Example**  
```js
var result = one()
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
Another text example, using the `@lang off` sub-tag..

**Kind**: global function  
**Example**  
This example is plain text but it has not been formatted using the default 
`--example-lang` of javascript because the `@example @lang off` was used..
<a name="five"></a>
## five()
An example with text and code, with no fenced-code blocks

**Kind**: global function  
**Example**  
```js
Here, i introduce the example: 

var result = five()
```
<a name="six"></a>
## six()
An example with text and code, with fenced-code block and no lang set

**Kind**: global function  
**Example**  
Here, i introduce the example: 

```
var result = six()
```
<a name="seven"></a>
## seven()
An example with text and code, with fenced-code block and `js` lang set

**Kind**: global function  
**Example**  
Here, i introduce the example: 

```js
var result = seven()
```
<a name="eight"></a>
## eight()
An example with text and code, with fenced-code block and `json` lang set

**Kind**: global function  
**Example**  
this function returns data like:

```json
{
    "yeah": "gets?"
}
```
