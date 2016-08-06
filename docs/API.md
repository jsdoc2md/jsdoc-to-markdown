<a name="module_jsdoc-to-markdown"></a>

## jsdoc-to-markdown
**Example**  
```js
const jsdoc2md = require('jsdoc-to-markdown')
```

* [jsdoc-to-markdown](#module_jsdoc-to-markdown)
    * [.clear()](#module_jsdoc-to-markdown.clear) ⇒ <code>Promise</code>
    * _async_
        * [.render([options])](#module_jsdoc-to-markdown.render) ⇒ <code>Promise</code>
        * [.getTemplateData([options])](#module_jsdoc-to-markdown.getTemplateData) ⇒ <code>Promise</code>
    * _sync_
        * [.renderSync([options])](#module_jsdoc-to-markdown.renderSync) ⇒ <code>string</code>
        * [.getTemplateDataSync([options])](#module_jsdoc-to-markdown.getTemplateDataSync) ⇒

<a name="module_jsdoc-to-markdown.clear"></a>

### jsdoc2md.clear() ⇒ <code>Promise</code>
Clear the cache.

**Kind**: static method of <code>[jsdoc-to-markdown](#module_jsdoc-to-markdown)</code>  
<a name="module_jsdoc-to-markdown.render"></a>

### jsdoc2md.render([options]) ⇒ <code>Promise</code>
Returns markdown documentation from jsdoc-annoted source code.

**Kind**: static method of <code>[jsdoc-to-markdown](#module_jsdoc-to-markdown)</code>  
**Category**: async  
**Fulfil**: <code>string</code> - the rendered docs  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>object</code> | the options |

**Example**  
Pass in filepaths (`**` glob matching supported) of javascript source files:
```js
> jsdoc2md.render('lib/*.js').then(console.log)
```
<a name="module_jsdoc-to-markdown.getTemplateData"></a>

### jsdoc2md.getTemplateData([options]) ⇒ <code>Promise</code>
Returns template data (jsdoc-parse output).

**Kind**: static method of <code>[jsdoc-to-markdown](#module_jsdoc-to-markdown)</code>  
**Category**: async  
**Fulfil**: <code>object[]</code> - the json data  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>object</code> | the options |

<a name="module_jsdoc-to-markdown.renderSync"></a>

### jsdoc2md.renderSync([options]) ⇒ <code>string</code>
Returns markdown documentation from jsdoc-annoted source code.

**Kind**: static method of <code>[jsdoc-to-markdown](#module_jsdoc-to-markdown)</code>  
**Category**: sync  
**Engine**: nodejs >= 0.12  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>object</code> | the options |

**Example**  
```js
const docs = jsdoc2md.renderSync('lib/*.js')
```
<a name="module_jsdoc-to-markdown.getTemplateDataSync"></a>

### jsdoc2md.getTemplateDataSync([options]) ⇒
Returns template data (jsdoc-parse output).

**Kind**: static method of <code>[jsdoc-to-markdown](#module_jsdoc-to-markdown)</code>  
**Returns**: {object[]  
**Category**: sync  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>object</code> | the options |

