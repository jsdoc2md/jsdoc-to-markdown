## jsdoc-to-markdown
  
**Example**
```js
const jsdoc2md = require('jsdoc-to-markdown')
```

* jsdoc-to-markdown
    * Jsdoc2md() ⇐ EventEmitter ⏏
        * jsdoc2md.render(src, [options]) ⇒ Promise
        * jsdoc2md.renderSync(src, [options]) ⇒ string
        * jsdoc2md.createRenderStream(src, [options]) ⇒ Duplex
        * jsdoc2md.getTemplateData(src) ⇒ Promise
        * jsdoc2md.getTemplateDataSync(src) ⇒ Array.&lt;object&gt;
        * jsdoc2md.getDocs(src, [options]) ⇒ Promise
        * jsdoc2md.getDocsSync(src, [options]) ⇒ DocletTemplate
        * jsdoc2md.buildTemplate(array, [options]) ⇒ Template
        * jsdoc2md.buildOutput() ⇒ string
        * Jsdoc2md~JsdocOptions()
            * jsdocOptions.decorations()


### Jsdoc2md() ⇐ EventEmitter ⏏
**Kind**: Exported class


#### jsdoc2md.render(src, [options]) ⇒ Promise
Returns markdown documentation from jsdoc-annoted source code.

**Kind**: instance method of module:jsdoc-to-markdown--Jsdoc2md  

| Param   | Type                               | Description |
| ------- | ---------------------------------- | ----------- |
| src     | string &#124; Array.&lt;string&gt; | input files |
| options | object                             | the options |


**Example**
Pass in filepaths (`**` glob matching supported) of javascript source files:
```js
> jsdoc2md({ src: 'lib/*.js' }).pipe(process.stdout)
```


#### jsdoc2md.renderSync(src, [options]) ⇒ string
Returns markdown documentation from jsdoc-annoted source code.

**Kind**: instance method of module:jsdoc-to-markdown--Jsdoc2md  

| Param   | Type                               | Description |
| ------- | ---------------------------------- | ----------- |
| src     | string &#124; Array.&lt;string&gt; | input files |
| options | object                             | the options |


**Example**
```js
const docs = jsdoc2md.renderSync('lib/*.js')
```


#### jsdoc2md.createRenderStream(src, [options]) ⇒ Duplex
**Kind**: instance method of module:jsdoc-to-markdown--Jsdoc2md  

| Param   | Type                               | Description |
| ------- | ---------------------------------- | ----------- |
| src     | string &#124; Array.&lt;string&gt; | input files |
| options | object                             | the options |


#### jsdoc2md.getTemplateData(src) ⇒ Promise
Get the template data (jsdoc-parse output)

**Kind**: instance method of module:jsdoc-to-markdown--Jsdoc2md  

| Param | Type                               | Description |
| ----- | ---------------------------------- | ----------- |
| src   | string &#124; Array.&lt;string&gt; | input files |


#### jsdoc2md.getTemplateDataSync(src) ⇒ Array.&lt;object&gt;
Get the template data (jsdoc-parse output)

**Kind**: instance method of module:jsdoc-to-markdown--Jsdoc2md  

| Param | Type                               | Description |
| ----- | ---------------------------------- | ----------- |
| src   | string &#124; Array.&lt;string&gt; | input files |


#### jsdoc2md.getDocs(src, [options]) ⇒ Promise
get the rendered template

**Kind**: instance method of module:jsdoc-to-markdown--Jsdoc2md  

| Param   | Type                               | Description |
| ------- | ---------------------------------- | ----------- |
| src     | string &#124; Array.&lt;string&gt; | input files |
| options | object                             | the options |


#### jsdoc2md.getDocsSync(src, [options]) ⇒ DocletTemplate
get the rendered template

**Kind**: instance method of module:jsdoc-to-markdown--Jsdoc2md  

| Param   | Type                               | Description |
| ------- | ---------------------------------- | ----------- |
| src     | string &#124; Array.&lt;string&gt; | input files |
| options | object                             | the options |


#### jsdoc2md.buildTemplate(array, [options]) ⇒ Template
Director.

**Kind**: instance method of module:jsdoc-to-markdown--Jsdoc2md  

| Param   | Type                 | Description                                                                |
| ------- | -------------------- | -------------------------------------------------------------------------- |
| array   | Array.&lt;object&gt; | an array of records to be built into a composite tree (jsdoc-parse output) |
| options | object               | standard options                                                           |


#### jsdoc2md.buildOutput() ⇒ string
**Kind**: instance method of module:jsdoc-to-markdown--Jsdoc2md


#### Jsdoc2md~JsdocOptions()
Common jsdoc2md options

**Kind**: inner class of module:jsdoc-to-markdown--Jsdoc2md


##### jsdocOptions.decorations()
createDecorator functions

**Kind**: instance property of module:jsdoc-to-markdown--Jsdoc2md~JsdocOptions


