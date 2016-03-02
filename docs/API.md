## jsdoc-to-markdown
  
**Example**
```js
const jsdoc2md = require('jsdoc-to-markdown')
```

* jsdoc-to-markdown
    * Jsdoc2md() ⇐ EventEmitter ⏏
        * .render(src, [options]) ⇒ `Promise`
        * .renderSync(src, [options]) ⇒ `string`
        * .createRenderStream(src, [options]) ⇒ `Duplex`
        * .getTemplateData(src) ⇒ `Promise`
        * .getTemplateDataSync(src) ⇒ `Array.<object>`
        * .getDocs(src, [options]) ⇒ `Promise`
        * .getDocsSync(src, [options]) ⇒ `DocletTemplate`
        * .buildTemplate(array, [options]) ⇒ `Template`
        * .buildOutput() ⇒ `string`
        * ~JsdocOptions()
            * .decorations() : `Array.<function()>`


### Jsdoc2md() ⇐ EventEmitter ⏏
**Kind**: Exported class


#### jsdoc2md.render(src, [options]) ⇒ `Promise`
Returns markdown documentation from jsdoc-annoted source code.

**Kind**: instance method of module:jsdoc-to-markdown--Jsdoc2md  

| Param   | Type                             | Description |
| ------- | -------------------------------- | ----------- |
| src     | `string` &#124; `Array.<string>` | input files |
| options | `object`                         | the options |


**Example**
Pass in filepaths (`**` glob matching supported) of javascript source files:
```js
> jsdoc2md({ src: 'lib/*.js' }).pipe(process.stdout)
```


#### jsdoc2md.renderSync(src, [options]) ⇒ `string`
Returns markdown documentation from jsdoc-annoted source code.

**Kind**: instance method of module:jsdoc-to-markdown--Jsdoc2md  

| Param   | Type                             | Description |
| ------- | -------------------------------- | ----------- |
| src     | `string` &#124; `Array.<string>` | input files |
| options | `object`                         | the options |


**Example**
```js
const docs = jsdoc2md.renderSync('lib/*.js')
```


#### jsdoc2md.createRenderStream(src, [options]) ⇒ `Duplex`
**Kind**: instance method of module:jsdoc-to-markdown--Jsdoc2md  

| Param   | Type                             | Description |
| ------- | -------------------------------- | ----------- |
| src     | `string` &#124; `Array.<string>` | input files |
| options | `object`                         | the options |


#### jsdoc2md.getTemplateData(src) ⇒ `Promise`
Get the template data (jsdoc-parse output)

**Kind**: instance method of module:jsdoc-to-markdown--Jsdoc2md  

| Param | Type                             | Description |
| ----- | -------------------------------- | ----------- |
| src   | `string` &#124; `Array.<string>` | input files |


#### jsdoc2md.getTemplateDataSync(src) ⇒ `Array.<object>`
Get the template data (jsdoc-parse output)

**Kind**: instance method of module:jsdoc-to-markdown--Jsdoc2md  

| Param | Type                             | Description |
| ----- | -------------------------------- | ----------- |
| src   | `string` &#124; `Array.<string>` | input files |


#### jsdoc2md.getDocs(src, [options]) ⇒ `Promise`
get the rendered template

**Kind**: instance method of module:jsdoc-to-markdown--Jsdoc2md  

| Param   | Type                             | Description |
| ------- | -------------------------------- | ----------- |
| src     | `string` &#124; `Array.<string>` | input files |
| options | `object`                         | the options |


#### jsdoc2md.getDocsSync(src, [options]) ⇒ `DocletTemplate`
get the rendered template

**Kind**: instance method of module:jsdoc-to-markdown--Jsdoc2md  

| Param   | Type                             | Description |
| ------- | -------------------------------- | ----------- |
| src     | `string` &#124; `Array.<string>` | input files |
| options | `object`                         | the options |


#### jsdoc2md.buildTemplate(array, [options]) ⇒ `Template`
Director.

**Kind**: instance method of module:jsdoc-to-markdown--Jsdoc2md  

| Param   | Type             | Description                                                                |
| ------- | ---------------- | -------------------------------------------------------------------------- |
| array   | `Array.<object>` | an array of records to be built into a composite tree (jsdoc-parse output) |
| options | `object`         | standard options                                                           |


#### jsdoc2md.buildOutput() ⇒ `string`
**Kind**: instance method of module:jsdoc-to-markdown--Jsdoc2md


#### Jsdoc2md~JsdocOptions()
Common jsdoc2md options

**Kind**: inner class of module:jsdoc-to-markdown--Jsdoc2md


##### jsdocOptions.decorations() : `Array.<function()>`
createDecorator functions

**Kind**: instance property of module:jsdoc-to-markdown--Jsdoc2md~JsdocOptions


