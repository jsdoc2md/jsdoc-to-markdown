{ description: 'method description',
  name: 'methodOne',
  longname: 'Something#methodOne',
  kind: 'function',
  memberof: 'Something',
  scope: 'instance' }
{ description: 'This function has all tags set',
  deprecated: true,
  params: 
   [ { type: [Object], description: 'The input string' },
     { type: [Object], description: 'a second input' } ],
  author: [ 'Lloyd <75pound@gmail.com>' ],
  since: 'v0.10.28',
  returns: [ { type: [Object], description: 'this return has several types' } ],
  examples: [ '```js\nsomething.allTogether(true);\n```' ],
  name: 'allTogether',
  longname: 'Something#allTogether',
  kind: 'function',
  memberof: 'Something',
  scope: 'instance' }

##class: Something

###new Something()

###something.methodOne()
method description


###~~something.allTogether(, )~~
This function has all tags set


 -  `string` - The input string
 -  `object` - a second input

***Deprecated***  
Since: v0.10.28  
Author: Lloyd <75pound@gmail.com>  
Returns: `object | string` - this return has several types  
####Example
```js
something.allTogether(true);
```
