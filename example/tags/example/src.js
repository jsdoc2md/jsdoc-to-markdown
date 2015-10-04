/**
A simple example written in the default `--example-lang` (javascript)
@example
var result = one()
*/
function one () {}

/**
An example written in a different lang to the default (json)
@example
```json
{
    "clive": "yeah?"
}
```
*/
function two () {}

/**
An example with no code, just text
@example
This example is just plain text. Note that it's formatted as javascript
as that's the default `--example-lang` value and dmd has no way of 
distinguishing whether the example text is, or is not source code.
*/
function three () {}

/**
Another text example, using the `@lang off` sub-tag..
@example @lang off
This example is plain text but it has not been formatted using the default 
`--example-lang` of javascript because the `@example @lang off` was used..
*/
function four () {}

/**
An example with text and code, with no fenced-code blocks
@example
Here, i introduce the example: 

var result = five()
*/
function five () {}

/**
An example with text and code, with fenced-code block and no lang set
@example
Here, i introduce the example: 

```
var result = six()
```
*/
function six () {}

/**
An example with text and code, with fenced-code block and `js` lang set
@example
Here, i introduce the example: 

```js
var result = seven()
```
*/
function seven () {}

/**
An example with text and code, with fenced-code block and `json` lang set
@example
this function returns data like:

```json
{
    "yeah": "gets?"
}
```
*/
function eight () {}
