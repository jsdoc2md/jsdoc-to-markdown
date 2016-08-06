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
        * [~DmdOptions](#module_jsdoc-to-markdown..DmdOptions)
            * [.template](#module_jsdoc-to-markdown..DmdOptions.DmdOptions+template) : <code>string</code>
            * [.heading-depth](#module_jsdoc-to-markdown..DmdOptions.DmdOptions+heading-depth) : <code>number</code>
            * [.example-lang](#module_jsdoc-to-markdown..DmdOptions.DmdOptions+example-lang) : <code>string</code>
            * [.plugin](#module_jsdoc-to-markdown..DmdOptions.DmdOptions+plugin) : <code>array</code>
            * [.helper](#module_jsdoc-to-markdown..DmdOptions.DmdOptions+helper) : <code>array</code>
            * [.partial](#module_jsdoc-to-markdown..DmdOptions.DmdOptions+partial) : <code>array</code>
            * [.name-format](#module_jsdoc-to-markdown..DmdOptions.DmdOptions+name-format) : <code>string</code>
            * [.no-gfm](#module_jsdoc-to-markdown..DmdOptions.DmdOptions+no-gfm) : <code>boolean</code>
            * [.separators](#module_jsdoc-to-markdown..DmdOptions.DmdOptions+separators) : <code>boolean</code>
            * [.module-index-format](#module_jsdoc-to-markdown..DmdOptions.DmdOptions+module-index-format) : <code>string</code>
            * [.global-index-format](#module_jsdoc-to-markdown..DmdOptions.DmdOptions+global-index-format) : <code>string</code>
            * [.param-list-format](#module_jsdoc-to-markdown..DmdOptions.DmdOptions+param-list-format) : <code>string</code>
            * [.property-list-format](#module_jsdoc-to-markdown..DmdOptions.DmdOptions+property-list-format) : <code>string</code>
            * [.member-index-format](#module_jsdoc-to-markdown..DmdOptions.DmdOptions+member-index-format) : <code>string</code>


-

<a name="module_jsdoc-to-markdown.clear"></a>

### jsdoc2md.clear() ⇒ <code>Promise</code>
Clear the cache.

**Kind**: static method of <code>[jsdoc-to-markdown](#module_jsdoc-to-markdown)</code>  

-

<a name="module_jsdoc-to-markdown.render"></a>

### jsdoc2md.render([options]) ⇒ <code>Promise</code>
Returns markdown documentation from jsdoc-annoted source code.

**Kind**: static method of <code>[jsdoc-to-markdown](#module_jsdoc-to-markdown)</code>  
**Category**: async  
**Fulfil**: <code>string</code> - the rendered docs  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>[JsdocOptions](#module_jsdoc-to-markdown..JsdocOptions)</code> &#124; <code>[DmdOptions](#module_jsdoc-to-markdown..DmdOptions)</code> | the options |

**Example**  
Pass in filepaths (`**` glob matching supported) of javascript source files:
```js
> jsdoc2md.render('lib/*.js').then(console.log)
```

-

<a name="module_jsdoc-to-markdown.getTemplateData"></a>

### jsdoc2md.getTemplateData([options]) ⇒ <code>Promise</code>
Returns template data (jsdoc-parse output).

**Kind**: static method of <code>[jsdoc-to-markdown](#module_jsdoc-to-markdown)</code>  
**Category**: async  
**Fulfil**: <code>object[]</code> - the json data  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>[JsdocOptions](#module_jsdoc-to-markdown..JsdocOptions)</code> | the options |


-

<a name="module_jsdoc-to-markdown.getJsdocData"></a>

### jsdoc2md.getJsdocData([options]) ⇒ <code>Promise</code>
Returns raw jsdoc data.

**Kind**: static method of <code>[jsdoc-to-markdown](#module_jsdoc-to-markdown)</code>  
**Category**: async  
**Fulfil**: <code>object[]</code>  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>[JsdocOptions](#module_jsdoc-to-markdown..JsdocOptions)</code> | the options |


-

<a name="module_jsdoc-to-markdown.renderSync"></a>

### jsdoc2md.renderSync([options]) ⇒ <code>string</code>
Returns markdown documentation from jsdoc-annoted source code.

**Kind**: static method of <code>[jsdoc-to-markdown](#module_jsdoc-to-markdown)</code>  
**Category**: sync  
**Engine**: nodejs >= 0.12  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>[JsdocOptions](#module_jsdoc-to-markdown..JsdocOptions)</code> &#124; <code>[DmdOptions](#module_jsdoc-to-markdown..DmdOptions)</code> | the options |

**Example**  
```js
const docs = jsdoc2md.renderSync('lib/*.js')
```

-

<a name="module_jsdoc-to-markdown.getTemplateDataSync"></a>

### jsdoc2md.getTemplateDataSync([options]) ⇒ <code>Array.&lt;object&gt;</code>
Returns template data (jsdoc-parse output).

**Kind**: static method of <code>[jsdoc-to-markdown](#module_jsdoc-to-markdown)</code>  
**Category**: sync  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>[JsdocOptions](#module_jsdoc-to-markdown..JsdocOptions)</code> | the options |


-

<a name="module_jsdoc-to-markdown.getJsdocDataSync"></a>

### jsdoc2md.getJsdocDataSync([options]) ⇒ <code>Array.&lt;object&gt;</code>
Returns raw jsdoc data.

**Kind**: static method of <code>[jsdoc-to-markdown](#module_jsdoc-to-markdown)</code>  
**Category**: sync  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>[JsdocOptions](#module_jsdoc-to-markdown..JsdocOptions)</code> | the options |


-

<a name="module_jsdoc-to-markdown..JsdocOptions"></a>

### jsdoc2md~JsdocOptions
jsdoc options

**Kind**: inner class of <code>[jsdoc-to-markdown](#module_jsdoc-to-markdown)</code>  

* [~JsdocOptions](#module_jsdoc-to-markdown..JsdocOptions)
    * [.files](#module_jsdoc-to-markdown..JsdocOptions.JsdocOptions+files) : <code>string</code> &#124; <code>Array.&lt;string&gt;</code>
    * [.source](#module_jsdoc-to-markdown..JsdocOptions.JsdocOptions+source) : <code>string</code>
    * [.configure](#module_jsdoc-to-markdown..JsdocOptions.JsdocOptions+configure) : <code>string</code>
    * [.html](#module_jsdoc-to-markdown..JsdocOptions.JsdocOptions+html) : <code>boolean</code>


-

<a name="module_jsdoc-to-markdown..JsdocOptions.JsdocOptions+files"></a>

#### jsdocOptions.files : <code>string</code> &#124; <code>Array.&lt;string&gt;</code>
One or more filenames to process. Either this or `source` must be supplied.

**Kind**: instance property of <code>[JsdocOptions](#module_jsdoc-to-markdown..JsdocOptions)</code>  

-

<a name="module_jsdoc-to-markdown..JsdocOptions.JsdocOptions+source"></a>

#### jsdocOptions.source : <code>string</code>
A string containing source code to process. Either this or `source` must be supplied.

**Kind**: instance property of <code>[JsdocOptions](#module_jsdoc-to-markdown..JsdocOptions)</code>  

-

<a name="module_jsdoc-to-markdown..JsdocOptions.JsdocOptions+configure"></a>

#### jsdocOptions.configure : <code>string</code>
The path to the configuration file. Default: path/to/jsdoc/conf.json.

**Kind**: instance property of <code>[JsdocOptions](#module_jsdoc-to-markdown..JsdocOptions)</code>  

-

<a name="module_jsdoc-to-markdown..JsdocOptions.JsdocOptions+html"></a>

#### jsdocOptions.html : <code>boolean</code>
Enable experimental parsing of `.html` files.

**Kind**: instance property of <code>[JsdocOptions](#module_jsdoc-to-markdown..JsdocOptions)</code>  

-

<a name="module_jsdoc-to-markdown..DmdOptions"></a>

### jsdoc2md~DmdOptions
dmd options

**Kind**: inner class of <code>[jsdoc-to-markdown](#module_jsdoc-to-markdown)</code>  

* [~DmdOptions](#module_jsdoc-to-markdown..DmdOptions)
    * [.template](#module_jsdoc-to-markdown..DmdOptions.DmdOptions+template) : <code>string</code>
    * [.heading-depth](#module_jsdoc-to-markdown..DmdOptions.DmdOptions+heading-depth) : <code>number</code>
    * [.example-lang](#module_jsdoc-to-markdown..DmdOptions.DmdOptions+example-lang) : <code>string</code>
    * [.plugin](#module_jsdoc-to-markdown..DmdOptions.DmdOptions+plugin) : <code>array</code>
    * [.helper](#module_jsdoc-to-markdown..DmdOptions.DmdOptions+helper) : <code>array</code>
    * [.partial](#module_jsdoc-to-markdown..DmdOptions.DmdOptions+partial) : <code>array</code>
    * [.name-format](#module_jsdoc-to-markdown..DmdOptions.DmdOptions+name-format) : <code>string</code>
    * [.no-gfm](#module_jsdoc-to-markdown..DmdOptions.DmdOptions+no-gfm) : <code>boolean</code>
    * [.separators](#module_jsdoc-to-markdown..DmdOptions.DmdOptions+separators) : <code>boolean</code>
    * [.module-index-format](#module_jsdoc-to-markdown..DmdOptions.DmdOptions+module-index-format) : <code>string</code>
    * [.global-index-format](#module_jsdoc-to-markdown..DmdOptions.DmdOptions+global-index-format) : <code>string</code>
    * [.param-list-format](#module_jsdoc-to-markdown..DmdOptions.DmdOptions+param-list-format) : <code>string</code>
    * [.property-list-format](#module_jsdoc-to-markdown..DmdOptions.DmdOptions+property-list-format) : <code>string</code>
    * [.member-index-format](#module_jsdoc-to-markdown..DmdOptions.DmdOptions+member-index-format) : <code>string</code>


-

<a name="module_jsdoc-to-markdown..DmdOptions.DmdOptions+template"></a>

#### dmdOptions.template : <code>string</code>
The template the supplied documentation will be rendered into. Use the default or supply your own template for full control over the output.

**Kind**: instance property of <code>[DmdOptions](#module_jsdoc-to-markdown..DmdOptions)</code>  

-

<a name="module_jsdoc-to-markdown..DmdOptions.DmdOptions+heading-depth"></a>

#### dmdOptions.heading-depth : <code>number</code>
The initial heading depth. For example, with a value of `2` the top-level markdown headings look like `"## The heading"`.

**Kind**: instance property of <code>[DmdOptions](#module_jsdoc-to-markdown..DmdOptions)</code>  

-

<a name="module_jsdoc-to-markdown..DmdOptions.DmdOptions+example-lang"></a>

#### dmdOptions.example-lang : <code>string</code>
Specifies the default language used in @example blocks (for [syntax-highlighting](https://help.github.com/articles/github-flavored-markdown/#syntax-highlighting) purposes). In gfm mode, each @example is wrapped in a fenced-code block. Example usage: `--example-lang js`. Use the special value `none` for no specific language. While using this option, you can override the supplied language for any @example by specifying the `@lang` subtag, e.g `@example @lang hbs`. Specifying `@example @lang off` will disable code blocks for that example.

**Kind**: instance property of <code>[DmdOptions](#module_jsdoc-to-markdown..DmdOptions)</code>  

-

<a name="module_jsdoc-to-markdown..DmdOptions.DmdOptions+plugin"></a>

#### dmdOptions.plugin : <code>array</code>
Use an installed package containing helper and/or partial overrides

**Kind**: instance property of <code>[DmdOptions](#module_jsdoc-to-markdown..DmdOptions)</code>  

-

<a name="module_jsdoc-to-markdown..DmdOptions.DmdOptions+helper"></a>

#### dmdOptions.helper : <code>array</code>
handlebars helper files to override or extend the default set

**Kind**: instance property of <code>[DmdOptions](#module_jsdoc-to-markdown..DmdOptions)</code>  

-

<a name="module_jsdoc-to-markdown..DmdOptions.DmdOptions+partial"></a>

#### dmdOptions.partial : <code>array</code>
handlebars partial files to override or extend the default set

**Kind**: instance property of <code>[DmdOptions](#module_jsdoc-to-markdown..DmdOptions)</code>  

-

<a name="module_jsdoc-to-markdown..DmdOptions.DmdOptions+name-format"></a>

#### dmdOptions.name-format : <code>string</code>
Format identifier names in the [code](http://daringfireball.net/projects/markdown/syntax#code) style, (i.e. format using backticks or `<code></code>`)

**Kind**: instance property of <code>[DmdOptions](#module_jsdoc-to-markdown..DmdOptions)</code>  

-

<a name="module_jsdoc-to-markdown..DmdOptions.DmdOptions+no-gfm"></a>

#### dmdOptions.no-gfm : <code>boolean</code>
By default, dmd generates github-flavoured markdown. Not all markdown parsers render gfm correctly. If your generated docs look incorrect on sites other than Github (e.g. npmjs.org) try enabling this option to disable Github-specific syntax.

**Kind**: instance property of <code>[DmdOptions](#module_jsdoc-to-markdown..DmdOptions)</code>  

-

<a name="module_jsdoc-to-markdown..DmdOptions.DmdOptions+separators"></a>

#### dmdOptions.separators : <code>boolean</code>
Put `<hr>` breaks between identifiers. Improves readability on bulky docs.

**Kind**: instance property of <code>[DmdOptions](#module_jsdoc-to-markdown..DmdOptions)</code>  
**Default**: <code>false</code>  

-

<a name="module_jsdoc-to-markdown..DmdOptions.DmdOptions+module-index-format"></a>

#### dmdOptions.module-index-format : <code>string</code>
none, grouped, table, dl

**Kind**: instance property of <code>[DmdOptions](#module_jsdoc-to-markdown..DmdOptions)</code>  

-

<a name="module_jsdoc-to-markdown..DmdOptions.DmdOptions+global-index-format"></a>

#### dmdOptions.global-index-format : <code>string</code>
none, grouped, table, dl

**Kind**: instance property of <code>[DmdOptions](#module_jsdoc-to-markdown..DmdOptions)</code>  

-

<a name="module_jsdoc-to-markdown..DmdOptions.DmdOptions+param-list-format"></a>

#### dmdOptions.param-list-format : <code>string</code>
Two options to render parameter lists: 'list' or 'table' (default). Table format works well in most cases but switch to list if things begin to look crowded / squashed.

**Kind**: instance property of <code>[DmdOptions](#module_jsdoc-to-markdown..DmdOptions)</code>  

-

<a name="module_jsdoc-to-markdown..DmdOptions.DmdOptions+property-list-format"></a>

#### dmdOptions.property-list-format : <code>string</code>
list, table

**Kind**: instance property of <code>[DmdOptions](#module_jsdoc-to-markdown..DmdOptions)</code>  

-

<a name="module_jsdoc-to-markdown..DmdOptions.DmdOptions+member-index-format"></a>

#### dmdOptions.member-index-format : <code>string</code>
grouped, list

**Kind**: instance property of <code>[DmdOptions](#module_jsdoc-to-markdown..DmdOptions)</code>  

-

