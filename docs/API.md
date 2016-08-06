<a name="module_jsdoc-to-markdown"></a>

## jsdoc-to-markdown
**Example**  
```js
const jsdoc2md = require('jsdoc-to-markdown')
```

* [jsdoc-to-markdown](#module_jsdoc-to-markdown)
    * [.clear()](#module_jsdoc-to-markdown.clear) ⇒ <code>Promise</code>
    * _async_
        * [.render(src, [options])](#module_jsdoc-to-markdown.render) ⇒ <code>Promise</code>
        * [.getTemplateData(src, [options])](#module_jsdoc-to-markdown.getTemplateData) ⇒ <code>Promise</code>
        * [.getJsdocData(src, [options])](#module_jsdoc-to-markdown.getJsdocData) ⇒ <code>Promise</code>
    * _sync_
        * [.renderSync(src, [options])](#module_jsdoc-to-markdown.renderSync) ⇒ <code>string</code>
        * [.getTemplateDataSync(src, [options])](#module_jsdoc-to-markdown.getTemplateDataSync) ⇒ <code>Array.&lt;object&gt;</code>
        * [.getJsdocDataSync(src, [options])](#module_jsdoc-to-markdown.getJsdocDataSync) ⇒ <code>Array.&lt;object&gt;</code>

<a name="module_jsdoc-to-markdown.clear"></a>

### jsdoc2md.clear() ⇒ <code>Promise</code>
Clear the cache.

**Kind**: static method of <code>[jsdoc-to-markdown](#module_jsdoc-to-markdown)</code>  
<a name="module_jsdoc-to-markdown.render"></a>

### jsdoc2md.render(src, [options]) ⇒ <code>Promise</code>
Returns markdown documentation from jsdoc-annoted source code.

**Kind**: static method of <code>[jsdoc-to-markdown](#module_jsdoc-to-markdown)</code>  
**Category**: async  
**Fulfil**: <code>string</code> - the rendered docs  

| Param | Type | Description |
| --- | --- | --- |
| src | <code>string</code> &#124; <code>Array.&lt;string&gt;</code> | input files |
| [options] | <code>object</code> | the options |

**Example**  
Pass in filepaths (`**` glob matching supported) of javascript source files:
```js
> jsdoc2md.render('lib/*.js').then(console.log)
```
<a name="module_jsdoc-to-markdown.getTemplateData"></a>

### jsdoc2md.getTemplateData(src, [options]) ⇒ <code>Promise</code>
Get the template data (jsdoc-parse output)

**Kind**: static method of <code>[jsdoc-to-markdown](#module_jsdoc-to-markdown)</code>  
**Category**: async  
**Fulfil**: <code>object[]</code>  

| Param | Type | Description |
| --- | --- | --- |
| src | <code>string</code> &#124; <code>Array.&lt;string&gt;</code> | input files |
| [options] | <code>object</code> |  |
| [options.sort-by] | <code>string</code> &#124; <code>Array.&lt;string&gt;</code> | Sort by one of more properties, e.g. `[ 'kind', 'category' ]`. |

<a name="module_jsdoc-to-markdown.getJsdocData"></a>

### jsdoc2md.getJsdocData(src, [options]) ⇒ <code>Promise</code>
Get the jsdoc data (jsdoc-api explain output)

**Kind**: static method of <code>[jsdoc-to-markdown](#module_jsdoc-to-markdown)</code>  
**Category**: async  
**Fulfil**: <code>object[]</code>  

| Param | Type | Description |
| --- | --- | --- |
| src | <code>string</code> &#124; <code>Array.&lt;string&gt;</code> | input files |
| [options] | <code>object</code> |  |

<a name="module_jsdoc-to-markdown.renderSync"></a>

### jsdoc2md.renderSync(src, [options]) ⇒ <code>string</code>
Returns markdown documentation from jsdoc-annoted source code.

**Kind**: static method of <code>[jsdoc-to-markdown](#module_jsdoc-to-markdown)</code>  
**Category**: sync  
**Engine**: nodejs >= 0.12  

| Param | Type | Description |
| --- | --- | --- |
| src | <code>string</code> &#124; <code>Array.&lt;string&gt;</code> | input files |
| [options] | <code>object</code> | the options |

**Example**  
```js
const docs = jsdoc2md.renderSync('lib/*.js')
```
<a name="module_jsdoc-to-markdown.getTemplateDataSync"></a>

### jsdoc2md.getTemplateDataSync(src, [options]) ⇒ <code>Array.&lt;object&gt;</code>
Get the template data (jsdoc-parse output)

**Kind**: static method of <code>[jsdoc-to-markdown](#module_jsdoc-to-markdown)</code>  
**Category**: sync  
**Engine**: nodejs >= 0.12  

| Param | Type | Description |
| --- | --- | --- |
| src | <code>string</code> &#124; <code>Array.&lt;string&gt;</code> | input files |
| [options] | <code>object</code> |  |
| [options.sort-by] | <code>string</code> &#124; <code>Array.&lt;string&gt;</code> | Sort by one of more properties, e.g. `[ 'kind', 'category' ]`. |

<a name="module_jsdoc-to-markdown.getJsdocDataSync"></a>

### jsdoc2md.getJsdocDataSync(src, [options]) ⇒ <code>Array.&lt;object&gt;</code>
Get the jsdoc data (jsdoc-api explain output)

**Kind**: static method of <code>[jsdoc-to-markdown](#module_jsdoc-to-markdown)</code>  
**Category**: sync  
**Engine**: nodejs >= 0.12  

| Param | Type | Description |
| --- | --- | --- |
| src | <code>string</code> &#124; <code>Array.&lt;string&gt;</code> | input files |
| [options] | <code>object</code> |  |

