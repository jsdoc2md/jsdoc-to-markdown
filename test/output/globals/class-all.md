{ description: 'the ingredients on top',
  type: { names: [ 'string' ] },
  since: 'v1.0.0',
  name: 'topping',
  longname: 'All#topping',
  kind: 'member',
  memberof: 'All',
  scope: 'instance' }
{ description: 'the general size',
  name: 'size',
  longname: 'All#size',
  kind: 'member',
  memberof: 'All',
  scope: 'instance' }
{ description: 'This function has all tags set',
  deprecated: true,
  params: 
   [ { type: [Object], description: 'The input string' },
     { type: [Object], description: 'a second input' } ],
  author: [ 'Lloyd <75pound@gmail.com>' ],
  since: 'v0.10.28',
  returns: [ { type: [Object], description: 'this return has several types' } ],
  examples: [ '```js\nall.allTogether(true);\n```' ],
  name: 'allThings',
  longname: 'All#allThings',
  kind: 'function',
  memberof: 'All',
  scope: 'instance' }

##class: All
a class with all of the things

###~~new All(input, [options])~~
the constructor description


 - input `object` - an input
 - [options] `object` - optional shit

***Deprecated***  
Since: v0.10.28  
Author: 75lb <75pound@gmail.com>  
####Example
```js
var yeah = new Everything(true);
```
###all.topping
the ingredients on top

Type: `string`  
Since: v1.0.0  
###all.size
the general size

  

###~~all.allThings(, )~~
This function has all tags set


 -  `string` - The input string
 -  `object` - a second input

***Deprecated***  
Since: v0.10.28  
Author: Lloyd <75pound@gmail.com>  
Returns: `object | string` - this return has several types  
####Example
```js
all.allTogether(true);
```
