<a name="module_jsdoc-to-markdown"></a>

## jsdoc-to-markdown
**Example**  
```js
const jsdoc2md = require('jsdoc-to-markdown')
```

* [jsdoc-to-markdown](#module_jsdoc-to-markdown)
    * _static_
        * [.clear()](#module_jsdoc-to-markdown.clear) ⇒ <code>Promise</code>
        * _async_
            * [.render([options])](#module_jsdoc-to-markdown.render) ⇒ <code>Promise</code>
            * [.getTemplateData([options])](#module_jsdoc-to-markdown.getTemplateData) ⇒ <code>Promise</code>
            * [.getJsdocData([options])](#module_jsdoc-to-markdown.getJsdocData) ⇒ <code>Promise</code>
        * _sync_
            * [.renderSync([options])](#module_jsdoc-to-markdown.renderSync) ⇒ <code>string</code>
            * [.getTemplateDataSync([options])](#module_jsdoc-to-markdown.getTemplateDataSync) ⇒ <code>Array.&lt;object&gt;</code>
            * [.getJsdocDataSync([options])](#module_jsdoc-to-markdown.getJsdocDataSync) ⇒ <code>Array.&lt;object&gt;</code>
    * _inner_
        * [~JsdocOptions](#module_jsdoc-to-markdown..JsdocOptions)
            * [.files](#module_jsdoc-to-markdown..JsdocOptions.JsdocOptions+files) : <code>string</code> &#124; <code>Array.&lt;string&gt;</code>
            * [.source](#module_jsdoc-to-markdown..JsdocOptions.JsdocOptions+source) : <code>string</code>
            * [.configure](#module_jsdoc-to-markdown..JsdocOptions.JsdocOptions+configure) : <code>string</code>
            * [.html](#module_jsdoc-to-markdown..JsdocOptions.JsdocOptions+html) : <code>boolean</code>

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
| [options] | <code>[JsdocOptions](#module_jsdoc-to-markdown..JsdocOptions)</code> | the options |

<a name="module_jsdoc-to-markdown.getJsdocData"></a>

### jsdoc2md.getJsdocData([options]) ⇒ <code>Promise</code>
Returns raw jsdoc data.

**Kind**: static method of <code>[jsdoc-to-markdown](#module_jsdoc-to-markdown)</code>  
**Category**: async  
**Fulfil**: <code>object[]</code>  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>[JsdocOptions](#module_jsdoc-to-markdown..JsdocOptions)</code> | the options |

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

### jsdoc2md.getTemplateDataSync([options]) ⇒ <code>Array.&lt;object&gt;</code>
Returns template data (jsdoc-parse output).

**Kind**: static method of <code>[jsdoc-to-markdown](#module_jsdoc-to-markdown)</code>  
**Category**: sync  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>[JsdocOptions](#module_jsdoc-to-markdown..JsdocOptions)</code> | the options |

<a name="module_jsdoc-to-markdown.getJsdocDataSync"></a>

### jsdoc2md.getJsdocDataSync([options]) ⇒ <code>Array.&lt;object&gt;</code>
Returns raw jsdoc data.

**Kind**: static method of <code>[jsdoc-to-markdown](#module_jsdoc-to-markdown)</code>  
**Category**: sync  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>[JsdocOptions](#module_jsdoc-to-markdown..JsdocOptions)</code> | the options |

<a name="module_jsdoc-to-markdown..JsdocOptions"></a>

### jsdoc2md~JsdocOptions
jsdoc options

**Kind**: inner class of <code>[jsdoc-to-markdown](#module_jsdoc-to-markdown)</code>  

* [~JsdocOptions](#module_jsdoc-to-markdown..JsdocOptions)
    * [.files](#module_jsdoc-to-markdown..JsdocOptions.JsdocOptions+files) : <code>string</code> &#124; <code>Array.&lt;string&gt;</code>
    * [.source](#module_jsdoc-to-markdown..JsdocOptions.JsdocOptions+source) : <code>string</code>
    * [.configure](#module_jsdoc-to-markdown..JsdocOptions.JsdocOptions+configure) : <code>string</code>
    * [.html](#module_jsdoc-to-markdown..JsdocOptions.JsdocOptions+html) : <code>boolean</code>

<a name="module_jsdoc-to-markdown..JsdocOptions.JsdocOptions+files"></a>

#### jsdocOptions.files : <code>string</code> &#124; <code>Array.&lt;string&gt;</code>
One or more filenames to process. Either this or `source` must be supplied.

**Kind**: instance property of <code>[JsdocOptions](#module_jsdoc-to-markdown..JsdocOptions)</code>  
<a name="module_jsdoc-to-markdown..JsdocOptions.JsdocOptions+source"></a>

#### jsdocOptions.source : <code>string</code>
A string containing source code to process. Either this or `source` must be supplied.

**Kind**: instance property of <code>[JsdocOptions](#module_jsdoc-to-markdown..JsdocOptions)</code>  
<a name="module_jsdoc-to-markdown..JsdocOptions.JsdocOptions+configure"></a>

#### jsdocOptions.configure : <code>string</code>
The path to the configuration file. Default: path/to/jsdoc/conf.json.

**Kind**: instance property of <code>[JsdocOptions](#module_jsdoc-to-markdown..JsdocOptions)</code>  
<a name="module_jsdoc-to-markdown..JsdocOptions.JsdocOptions+html"></a>

#### jsdocOptions.html : <code>boolean</code>
Enable experimental parsing of `.html` files.

**Kind**: instance property of <code>[JsdocOptions](#module_jsdoc-to-markdown..JsdocOptions)</code>  
