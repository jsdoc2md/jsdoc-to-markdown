***note:*** I can't show the source code and dmd output in this example, because nested fenced-code blocks [do not render correctly](https://github.com/vmg/redcarpet/issues/208).. 

# jsdoc-parse output
```json
[
  {
    "id": "one",
    "longname": "one",
    "name": "one",
    "scope": "global",
    "kind": "function",
    "description": "A simple example with some code.. it will format using the language specified by `--example-lang`",
    "params": [],
    "examples": [
      "var result = one()"
    ],
    "meta": {
      "range": [
        133,
        151
      ],
      "filename": "src.js",
      "lineno": 6,
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/options/dmd options/example-lang",
      "code": {
        "id": "astnode100000001",
        "name": "one",
        "type": "FunctionDeclaration",
        "paramnames": []
      }
    },
    "order": 0
  },
  {
    "id": "two",
    "longname": "two",
    "name": "two",
    "scope": "global",
    "kind": "function",
    "description": "An example that already contains a fenced-code block (language `json`)",
    "params": [],
    "examples": [
      "here is the example:\n```json\n{\n    \"clive\": \"yeah?\"\n}\n```"
    ],
    "meta": {
      "range": [
        298,
        316
      ],
      "filename": "src.js",
      "lineno": 18,
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/options/dmd options/example-lang",
      "code": {
        "id": "astnode100000004",
        "name": "two",
        "type": "FunctionDeclaration",
        "paramnames": []
      }
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
      "This example is just some plain text, no code format or syntax highlighting required here."
    ],
    "meta": {
      "range": [
        460,
        480
      ],
      "filename": "src.js",
      "lineno": 25,
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/options/dmd options/example-lang",
      "code": {
        "id": "astnode100000007",
        "name": "three",
        "type": "FunctionDeclaration",
        "paramnames": []
      }
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
      "@lang off\nThis example is just some plain text, no code format or syntax highlighting required here."
    ],
    "meta": {
      "range": [
        653,
        672
      ],
      "filename": "src.js",
      "lineno": 32,
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/options/dmd options/example-lang",
      "code": {
        "id": "astnode100000010",
        "name": "four",
        "type": "FunctionDeclaration",
        "paramnames": []
      }
    },
    "order": 3
  },
  {
    "id": "five",
    "longname": "five",
    "name": "five",
    "scope": "global",
    "kind": "function",
    "description": "A simple example using `@example @lang hbs` to specify handlebars as the language",
    "params": [],
    "examples": [
      "@lang hbs\nhello {{name}}, welcome to {{country}}."
    ],
    "meta": {
      "range": [
        822,
        841
      ],
      "filename": "src.js",
      "lineno": 39,
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/options/dmd options/example-lang",
      "code": {
        "id": "astnode100000013",
        "name": "five",
        "type": "FunctionDeclaration",
        "paramnames": []
      }
    },
    "order": 4
  }
]
```

# with `--example-lang js` set
## rendered
<a name="one"></a>
### one()
A simple example with some code.. it will format using the language specified by `--example-lang`

**Kind**: global function  
**Example**  
```js
var result = one()
```
<a name="two"></a>
### two()
An example that already contains a fenced-code block (language `json`)

**Kind**: global function  
**Example**  
here is the example:
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
```js
This example is just some plain text, no code format or syntax highlighting required here.
```
<a name="four"></a>
### four()
Another text example, using the `@lang off` sub-tag..

**Kind**: global function  
**Example**  
This example is just some plain text, no code format or syntax highlighting required here.
<a name="five"></a>
### five()
A simple example using `@example @lang hbs` to specify handlebars as the language

**Kind**: global function  
**Example**  
```hbs
hello {{name}}, welcome to {{country}}.
```

# with `--example-lang none` set
## rendered
<a name="one"></a>
### one()
A simple example with some code.. it will format using the language specified by `--example-lang`

**Kind**: global function  
**Example**  
```none
var result = one()
```
<a name="two"></a>
### two()
An example that already contains a fenced-code block (language `json`)

**Kind**: global function  
**Example**  
here is the example:
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
```none
This example is just some plain text, no code format or syntax highlighting required here.
```
<a name="four"></a>
### four()
Another text example, using the `@lang off` sub-tag..

**Kind**: global function  
**Example**  
This example is just some plain text, no code format or syntax highlighting required here.
<a name="five"></a>
### five()
A simple example using `@example @lang hbs` to specify handlebars as the language

**Kind**: global function  
**Example**  
```hbs
hello {{name}}, welcome to {{country}}.
```
