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
An example with no code, just text. The fenced code block lang is set to `none` in this case. 
@example
```none
This example is just plain text. Note that it's formatted as javascript
as that's the default `--example-lang` value and dmd has no way of 
distinguishing whether example text is, or is not source code.
```
*/
function four() {}
