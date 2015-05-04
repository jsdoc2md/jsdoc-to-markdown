# Input source code
```js
/**
A simple example written in the default `--example-lang` (javascript)
@example
var result = one();
*/
function one() {}

/**
An example written in a different lang to the default
@example
```json
{
    clive: "yeah?"
}
```
*/
function two() {}

```

* * * 

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
    "description": "An example written in a different lang to the default",
    "examples": [
      "```json\n{\n    clive: \"yeah?\"\n}\n```"
    ],
    "order": 1
  }
]
```

* * * 

# dmd output
```markdown
## Functions
<dl>
<dt><a href="#one">one()</a></dt>
<dd><p>A simple example written in the default <code>--example-lang</code> (javascript)</p>
</dd>
<dt><a href="#two">two()</a></dt>
<dd><p>An example written in a different lang to the default</p>
</dd>
</dl>
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
An example written in a different lang to the default

**Kind**: global function  
**Example**  
```json
{
    clive: "yeah?"
}
```
```

* * * 

# Rendered
## Functions
<dl>
<dt><a href="#one">one()</a></dt>
<dd><p>A simple example written in the default <code>--example-lang</code> (javascript)</p>
</dd>
<dt><a href="#two">two()</a></dt>
<dd><p>An example written in a different lang to the default</p>
</dd>
</dl>
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
An example written in a different lang to the default

**Kind**: global function  
**Example**  
```json
{
    clive: "yeah?"
}
```
