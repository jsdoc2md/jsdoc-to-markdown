<a name="module_jsdoc-to-markdown"></a>

# jsdoc-to-markdown
**Example**  
```js
const jsdoc2md = require('jsdoc-to-markdown')
```

* [jsdoc-to-markdown](#module_jsdoc-to-markdown)
    * [JsdocToMarkdown](#exp_module_jsdoc-to-markdown--JsdocToMarkdown) ⏏
        * _async_
            * [.render([options])](#module_jsdoc-to-markdown--JsdocToMarkdown+render) ⇒ <code>Promise</code>
            * [.getTemplateData([options])](#module_jsdoc-to-markdown--JsdocToMarkdown+getTemplateData) ⇒ <code>Promise</code>
            * [.getJsdocData([options])](#module_jsdoc-to-markdown--JsdocToMarkdown+getJsdocData) ⇒ <code>Promise</code>
            * [.clear()](#module_jsdoc-to-markdown--JsdocToMarkdown+clear) ⇒ <code>Promise</code>
            * [.getNamepaths(options)](#module_jsdoc-to-markdown--JsdocToMarkdown+getNamepaths) ⇒ <code>object</code>
        * _sync_
            * [.renderSync([options])](#module_jsdoc-to-markdown--JsdocToMarkdown+renderSync) ⇒ <code>string</code>
            * [.getTemplateDataSync([options])](#module_jsdoc-to-markdown--JsdocToMarkdown+getTemplateDataSync) ⇒ <code>Array.&lt;object&gt;</code>
            * [.getJsdocDataSync([options])](#module_jsdoc-to-markdown--JsdocToMarkdown+getJsdocDataSync) ⇒ <code>Array.&lt;object&gt;</code>

<a name="exp_module_jsdoc-to-markdown--JsdocToMarkdown"></a>

## JsdocToMarkdown ⏏
**Kind**: Exported class  
<a name="module_jsdoc-to-markdown--JsdocToMarkdown+render"></a>

### jsdoc2md.render([options]) ⇒ <code>Promise</code>
Returns markdown documentation from jsdoc-annoted source code.

**Kind**: instance method of [<code>JsdocToMarkdown</code>](#exp_module_jsdoc-to-markdown--JsdocToMarkdown)  
**Category**: async  
**Fulfil**: <code>string</code> - the rendered docs  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>object</code> | Accepts all [getJsdocData](#module_jsdoc-to-markdown--JsdocToMarkdown+getJsdocData) options plus the following: |
| [options.data] | <code>Array.&lt;object&gt;</code> | Raw template data to use. Useful when you already have template data, obtained from `.getTemplateData`. Either `files`, `source` or `data` must be supplied. |
| [options.template] | <code>string</code> | The template the supplied documentation will be rendered into. Use the default or supply your own template for full control over the output. |
| [options.heading-depth] | <code>number</code> | The initial heading depth. For example, with a value of `2` the top-level markdown headings look like `"## The heading"`. |
| [options.example-lang] | <code>string</code> | Specifies the default language used in @example blocks (for [syntax-highlighting](https://help.github.com/articles/github-flavored-markdown/#syntax-highlighting) purposes). In gfm mode, each @example is wrapped in a fenced-code block. Example usage: `--example-lang js`. Use the special value `none` for no specific language. While using this option, you can override the supplied language for any @example by specifying the `@lang` subtag, e.g `@example @lang hbs`. Specifying `@example @lang off` will disable code blocks for that example. |
| [options.plugin] | <code>string</code> \| <code>Array.&lt;string&gt;</code> | Use an installed package containing helper and/or partial overrides. |
| [options.helper] | <code>string</code> \| <code>Array.&lt;string&gt;</code> | handlebars helper files to override or extend the default set. |
| [options.partial] | <code>string</code> \| <code>Array.&lt;string&gt;</code> | handlebars partial files to override or extend the default set. |
| [options.name-format] | <code>string</code> | Format identifier names in the [code](http://daringfireball.net/projects/markdown/syntax#code) style, (i.e. format using backticks or `<code></code>`). |
| [options.no-gfm] | <code>boolean</code> | By default, dmd generates github-flavoured markdown. Not all markdown parsers render gfm correctly. If your generated docs look incorrect on sites other than Github (e.g. npmjs.org) try enabling this option to disable Github-specific syntax. |
| [options.separators] | <code>boolean</code> | Put `<hr>` breaks between identifiers. Improves readability on bulky docs. |
| [options.module-index-format] | <code>string</code> | none, grouped, table, dl. |
| [options.global-index-format] |  | none, grouped, table, dl. |
| [options.param-list-format] |  | Two options to render parameter lists: 'list' or 'table' (default). Table format works well in most cases but switch to list if things begin to look crowded / squashed. |
| [options.property-list-format] |  | list, table. |
| [options.member-index-format] |  | grouped, list |

**Example**  
Pass in filepaths (`**` glob matching supported) of javascript source files:
```js
> jsdoc2md.render({ files: 'lib/*.js' }).then(console.log)
```
<a name="module_jsdoc-to-markdown--JsdocToMarkdown+getTemplateData"></a>

### jsdoc2md.getTemplateData([options]) ⇒ <code>Promise</code>
Returns the template data (jsdoc-parse output) which is fed into the output template (dmd).

**Kind**: instance method of [<code>JsdocToMarkdown</code>](#exp_module_jsdoc-to-markdown--JsdocToMarkdown)  
**Category**: async  
**Fulfil**: <code>object[]</code> - the json data  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>object</code> | Identical options to [getJsdocData](#module_jsdoc-to-markdown--JsdocToMarkdown+getJsdocData). |

<a name="module_jsdoc-to-markdown--JsdocToMarkdown+getJsdocData"></a>

### jsdoc2md.getJsdocData([options]) ⇒ <code>Promise</code>
Returns raw data direct from the underlying [jsdoc3](https://github.com/jsdoc3/jsdoc).

**Kind**: instance method of [<code>JsdocToMarkdown</code>](#exp_module_jsdoc-to-markdown--JsdocToMarkdown)  
**Category**: async  
**Fulfil**: <code>object[]</code>  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>object</code> | the options |
| [options.no-cache] | <code>boolean</code> | By default results are cached to speed up repeat invocations. Set to true to disable this. |
| [options.files] | <code>string</code> \| <code>Array.&lt;string&gt;</code> | One or more filenames to process. Accepts globs (e.g. `*.js`). Either `files`, `source` or `data` must be supplied. |
| [options.source] | <code>string</code> | A string containing source code to process. Either `files`, `source` or `data` must be supplied. |
| [options.configure] | <code>string</code> | The path to the [jsdoc configuration file](http://usejsdoc.org/about-configuring-jsdoc.html). Default: path/to/jsdoc/conf.json. |

<a name="module_jsdoc-to-markdown--JsdocToMarkdown+clear"></a>

### jsdoc2md.clear() ⇒ <code>Promise</code>
By default, the output of each invocation of the main generation methods (`render`, `getTemplateData` etc) is stored in the cache (your system's [temporary directory](https://nodejs.org/dist/latest-v6.x/docs/api/os.html#os_os_tmpdir)). Future jsdoc2md invocations with the same input options and source code will return the output immediately from cache, making the tool much faster/cheaper. If the input options or source code changes, fresh output will be generated. This method clears the cache, which you should never need to do unless the cache is failing for some reason. On Mac OSX, the system tmpdir clears itself every few days meaning your jsdoc2md cache will also be routinely cleared.

**Kind**: instance method of [<code>JsdocToMarkdown</code>](#exp_module_jsdoc-to-markdown--JsdocToMarkdown)  
**Category**: async  
<a name="module_jsdoc-to-markdown--JsdocToMarkdown+getNamepaths"></a>

### jsdoc2md.getNamepaths(options) ⇒ <code>object</code>
Returns all [jsdoc namepaths](http://usejsdoc.org/about-namepaths.html) found in the supplied source code.

**Kind**: instance method of [<code>JsdocToMarkdown</code>](#exp_module_jsdoc-to-markdown--JsdocToMarkdown)  
**Category**: async  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | options to pass to [getTemplateData](#module_jsdoc-to-markdown--JsdocToMarkdown+getTemplateData) |

<a name="module_jsdoc-to-markdown--JsdocToMarkdown+renderSync"></a>

### jsdoc2md.renderSync([options]) ⇒ <code>string</code>
Sync version of [render](#module_jsdoc-to-markdown--JsdocToMarkdown+render).

**Kind**: instance method of [<code>JsdocToMarkdown</code>](#exp_module_jsdoc-to-markdown--JsdocToMarkdown)  
**Category**: sync  
**Engine**: nodejs >= 0.12  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>object</code> | Identical options to [render](#module_jsdoc-to-markdown--JsdocToMarkdown+render). |

**Example**  
```js
const docs = jsdoc2md.renderSync({ files: 'lib/*.js' })
```
<a name="module_jsdoc-to-markdown--JsdocToMarkdown+getTemplateDataSync"></a>

### jsdoc2md.getTemplateDataSync([options]) ⇒ <code>Array.&lt;object&gt;</code>
Sync version of [getTemplateData](#module_jsdoc-to-markdown--JsdocToMarkdown+getTemplateData).

**Kind**: instance method of [<code>JsdocToMarkdown</code>](#exp_module_jsdoc-to-markdown--JsdocToMarkdown)  
**Category**: sync  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>object</code> | Identical options to [getJsdocData](#module_jsdoc-to-markdown--JsdocToMarkdown+getJsdocData). |

<a name="module_jsdoc-to-markdown--JsdocToMarkdown+getJsdocDataSync"></a>

### jsdoc2md.getJsdocDataSync([options]) ⇒ <code>Array.&lt;object&gt;</code>
Sync version of [getJsdocData](#module_jsdoc-to-markdown--JsdocToMarkdown+getJsdocData).

**Kind**: instance method of [<code>JsdocToMarkdown</code>](#exp_module_jsdoc-to-markdown--JsdocToMarkdown)  
**Category**: sync  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>object</code> | Identical options to [getJsdocData](#module_jsdoc-to-markdown--JsdocToMarkdown+getJsdocData). |


