<a name="module_jsdoc-to-markdown"></a>

## jsdoc-to-markdown
**Example**  
```js
const jsdoc2md = require('jsdoc-to-markdown')
```

* [jsdoc-to-markdown](#module_jsdoc-to-markdown)
    * [Jsdoc2md](#exp_module_jsdoc-to-markdown--Jsdoc2md) ⇐ <code>EventEmitter</code> ⏏
        * [.render(src, [options])](#module_jsdoc-to-markdown--Jsdoc2md+render) ⇒ <code>Promise</code>
        * [.renderSync(src, [options])](#module_jsdoc-to-markdown--Jsdoc2md+renderSync) ⇒ <code>string</code>
        * [.createRenderStream(src, [options])](#module_jsdoc-to-markdown--Jsdoc2md+createRenderStream) ⇒ <code>Duplex</code>
        * [.getJsdocData(src)](#module_jsdoc-to-markdown--Jsdoc2md+getJsdocData) ⇒ <code>Promise</code>
        * [.getJsdocDataSync(src)](#module_jsdoc-to-markdown--Jsdoc2md+getJsdocDataSync) ⇒ <code>Array.&lt;object&gt;</code>
        * [.clear()](#module_jsdoc-to-markdown--Jsdoc2md+clear) ⇒ <code>Promise</code>

<a name="exp_module_jsdoc-to-markdown--Jsdoc2md"></a>

### Jsdoc2md ⇐ <code>EventEmitter</code> ⏏
**Kind**: Exported class  
**Extends:** <code>EventEmitter</code>  
<a name="module_jsdoc-to-markdown--Jsdoc2md+render"></a>

#### jsdoc2md.render(src, [options]) ⇒ <code>Promise</code>
Returns markdown documentation from jsdoc-annoted source code.

**Kind**: instance method of <code>[Jsdoc2md](#exp_module_jsdoc-to-markdown--Jsdoc2md)</code>  
**Fulfil**: <code>string</code> - the rendered docs  

| Param | Type | Description |
| --- | --- | --- |
| src | <code>string</code> &#124; <code>Array.&lt;string&gt;</code> | input files |
| [options] | <code>object</code> | the options |

**Example**  
Pass in filepaths (`**` glob matching supported) of javascript source files:
```js
> jsdoc2md({ src: 'lib/*.js' }).pipe(process.stdout)
```
<a name="module_jsdoc-to-markdown--Jsdoc2md+renderSync"></a>

#### jsdoc2md.renderSync(src, [options]) ⇒ <code>string</code>
Returns markdown documentation from jsdoc-annoted source code.

**Kind**: instance method of <code>[Jsdoc2md](#exp_module_jsdoc-to-markdown--Jsdoc2md)</code>  

| Param | Type | Description |
| --- | --- | --- |
| src | <code>string</code> &#124; <code>Array.&lt;string&gt;</code> | input files |
| [options] | <code>object</code> | the options |

**Example**  
```js
const docs = jsdoc2md.renderSync('lib/*.js')
```
<a name="module_jsdoc-to-markdown--Jsdoc2md+createRenderStream"></a>

#### jsdoc2md.createRenderStream(src, [options]) ⇒ <code>Duplex</code>
**Kind**: instance method of <code>[Jsdoc2md](#exp_module_jsdoc-to-markdown--Jsdoc2md)</code>  

| Param | Type | Description |
| --- | --- | --- |
| src | <code>string</code> &#124; <code>Array.&lt;string&gt;</code> | input files |
| [options] | <code>object</code> | the options |

<a name="module_jsdoc-to-markdown--Jsdoc2md+getJsdocData"></a>

#### jsdoc2md.getJsdocData(src) ⇒ <code>Promise</code>
Get the template data (jsdoc-parse output)

**Kind**: instance method of <code>[Jsdoc2md](#exp_module_jsdoc-to-markdown--Jsdoc2md)</code>  
**Fulfil**: <code>object[]</code>  

| Param | Type | Description |
| --- | --- | --- |
| src | <code>string</code> &#124; <code>Array.&lt;string&gt;</code> | input files |

<a name="module_jsdoc-to-markdown--Jsdoc2md+getJsdocDataSync"></a>

#### jsdoc2md.getJsdocDataSync(src) ⇒ <code>Array.&lt;object&gt;</code>
Get the template data (jsdoc-parse output)

**Kind**: instance method of <code>[Jsdoc2md](#exp_module_jsdoc-to-markdown--Jsdoc2md)</code>  

| Param | Type | Description |
| --- | --- | --- |
| src | <code>string</code> &#124; <code>Array.&lt;string&gt;</code> | input files |

<a name="module_jsdoc-to-markdown--Jsdoc2md+clear"></a>

#### jsdoc2md.clear() ⇒ <code>Promise</code>
Clear the cache.

**Kind**: instance method of <code>[Jsdoc2md](#exp_module_jsdoc-to-markdown--Jsdoc2md)</code>  
