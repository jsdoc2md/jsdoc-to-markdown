/**
a global function 
*/
function globalFunc () {}

/**
a function with an example
@example
```js
var result = exampled()
```
*/
function exampled () {}

/**
a function with multiple examples
@example
```js
var another = 100
```
@example
```js
var next = "p"
```
*/
function multiExampled () {}

/**
@protected
*/
var _protected = function () {}

/**
@private
*/
var _private = function () {}

/**
@author Clive Jones <clive@jones.com>
*/
function withAuthor () {}

/**
@deprecated
*/
function oldFunction () {}

/**
@since v0.10.28
*/
function newFunction () {}

/**
@param {string} - The input string
*/
function withParam (one, two) {}

/**
@param {string} - The input string
@param {object}
*/
function withParams (one, two) {}

/**
@param {string} - The input string
@param [two]{object} - this one is optional
*/
function withOptional (one, two) {}

/**
this description has 

- bullet
- points

and needs this line to separate the above list from the below

@param {string} - The input string
@param {object} - a second input
*/
function withBullets (one, two) {}

/**
@returns {string}
*/
function returnsSomething (one, two) {}

/**
@returns {object} this return has a description
*/
function returnsSomethingDesc (one, two) {}

/**
@returns {object | string} this return has several types
*/
function returnsSeveral (one, two) {}

/**
This function has all tags set
@deprecated
@param {string} - The input string
@param {object} - a second input
@author Lloyd <75pound@gmail.com>
@since v0.10.28
@returns {object | string} this return has several types
@example
```js
allTogether(true)
```
*/
function allTogether (one, two) {}
