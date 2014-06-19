{ description: 'first property',
  name: 'one',
  longname: 'module:object.one',
  kind: 'member',
  memberof: 'module:object',
  scope: 'static' }
{ description: 'This property has all tags set',
  deprecated: true,
  type: { names: [ 'boolean' ] },
  defaultvalue: '2',
  access: 'private',
  readonly: true,
  author: [ '75lb <75pound@gmail.com>' ],
  since: 'v0.10.28',
  examples: [ '```js\nvar allTogether = true;\n```' ],
  name: 'two',
  longname: 'module:object.two',
  kind: 'member',
  memberof: 'module:object',
  scope: 'static' }
{ description: 'a function',
  name: 'three',
  longname: 'module:object.three',
  kind: 'function',
  memberof: 'module:object',
  scope: 'static' }
#module:object
simple object export

  
###module:object.one
first property

  
###~~module:object.two~~
This property has all tags set

***Deprecated***  
Access: private  
Default: `2`  
Read only: true  
Type: `boolean`  
Since: v0.10.28  
Author: 75lb <75pound@gmail.com>  
####Example
```js
var allTogether = true;
```


###module:object.three()
a function

