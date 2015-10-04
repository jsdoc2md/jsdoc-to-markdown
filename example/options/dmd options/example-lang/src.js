/**
A simple example with some code.. it will format using the language specified by `--example-lang`
@example
var result = one()
*/
function one () {}

/**
An example that already contains a fenced-code block (language `json`)
@example
here is the example:
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
This example is just some plain text, no code format or syntax highlighting required here.
*/
function three () {}

/**
Another text example, using the `@lang off` sub-tag..
@example @lang off
This example is just some plain text, no code format or syntax highlighting required here.
*/
function four () {}

/**
A simple example using `@example @lang hbs` to specify handlebars as the language
@example @lang hbs
hello {{name}}, welcome to {{country}}.
*/
function five () {}
