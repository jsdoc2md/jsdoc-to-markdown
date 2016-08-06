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



<a name="module_jsdoc-api..JsdocOptions"></a>

## jsdoc~JsdocOptions
The jsdoc options, common for all operations.

**Kind**: inner class of <code>[jsdoc-api](#module_jsdoc-api)</code>  

* [~JsdocOptions](#module_jsdoc-api..JsdocOptions)
    * [.files](#module_jsdoc-api..JsdocOptions.JsdocOptions+files) : <code>string</code> &#124; <code>Array.&lt;string&gt;</code>
    * [.source](#module_jsdoc-api..JsdocOptions.JsdocOptions+source) : <code>string</code>
    * [.cache](#module_jsdoc-api..JsdocOptions.JsdocOptions+cache) : <code>boolean</code>
    * [.access](#module_jsdoc-api..JsdocOptions.JsdocOptions+access) : <code>string</code>
    * [.configure](#module_jsdoc-api..JsdocOptions.JsdocOptions+configure) : <code>string</code>
    * [.destination](#module_jsdoc-api..JsdocOptions.JsdocOptions+destination) : <code>string</code>
    * [.encoding](#module_jsdoc-api..JsdocOptions.JsdocOptions+encoding) : <code>string</code>
    * [.private](#module_jsdoc-api..JsdocOptions.JsdocOptions+private) : <code>boolean</code>
    * [.package](#module_jsdoc-api..JsdocOptions.JsdocOptions+package) : <code>string</code>
    * [.pedantic](#module_jsdoc-api..JsdocOptions.JsdocOptions+pedantic) : <code>boolean</code>
    * [.query](#module_jsdoc-api..JsdocOptions.JsdocOptions+query) : <code>string</code>
    * [.recurse](#module_jsdoc-api..JsdocOptions.JsdocOptions+recurse) : <code>boolean</code>
    * [.readme](#module_jsdoc-api..JsdocOptions.JsdocOptions+readme) : <code>string</code>
    * [.template](#module_jsdoc-api..JsdocOptions.JsdocOptions+template) : <code>string</code>
    * [.tutorials](#module_jsdoc-api..JsdocOptions.JsdocOptions+tutorials) : <code>string</code>
    * [.html](#module_jsdoc-api..JsdocOptions.JsdocOptions+html) : <code>boolean</code>

<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+files"></a>

### options.files : <code>string</code> &#124; <code>Array.&lt;string&gt;</code>
One or more filenames to process. Either this or `source` must be supplied.

**Kind**: instance property of <code>[JsdocOptions](#module_jsdoc-api..JsdocOptions)</code>  
<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+source"></a>

### options.source : <code>string</code>
A string containing source code to process. Either this or `source` must be supplied.

**Kind**: instance property of <code>[JsdocOptions](#module_jsdoc-api..JsdocOptions)</code>  
<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+cache"></a>

### options.cache : <code>boolean</code>
Set to `true` to cache the output - future invocations with the same input will return immediately.

**Kind**: instance property of <code>[JsdocOptions](#module_jsdoc-api..JsdocOptions)</code>  
<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+access"></a>

### options.access : <code>string</code>
Only display symbols with the given access: "public", "protected", "private" or "undefined", or "all" for all access levels. Default: all except "private".

**Kind**: instance property of <code>[JsdocOptions](#module_jsdoc-api..JsdocOptions)</code>  
<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+configure"></a>

### options.configure : <code>string</code>
The path to the configuration file. Default: path/to/jsdoc/conf.json.

**Kind**: instance property of <code>[JsdocOptions](#module_jsdoc-api..JsdocOptions)</code>  
<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+destination"></a>

### options.destination : <code>string</code>
The path to the output folder. Use "console" to dump data to the console. Default: ./out/.

**Kind**: instance property of <code>[JsdocOptions](#module_jsdoc-api..JsdocOptions)</code>  
<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+encoding"></a>

### options.encoding : <code>string</code>
Assume this encoding when reading all source files. Default: utf8.

**Kind**: instance property of <code>[JsdocOptions](#module_jsdoc-api..JsdocOptions)</code>  
<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+private"></a>

### options.private : <code>boolean</code>
Display symbols marked with the @private tag. Equivalent to "--access all". Default: false.

**Kind**: instance property of <code>[JsdocOptions](#module_jsdoc-api..JsdocOptions)</code>  
<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+package"></a>

### options.package : <code>string</code>
The path to the project's package file. Default: path/to/sourcefiles/package.json

**Kind**: instance property of <code>[JsdocOptions](#module_jsdoc-api..JsdocOptions)</code>  
<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+pedantic"></a>

### options.pedantic : <code>boolean</code>
Treat errors as fatal errors, and treat warnings as errors. Default: false.

**Kind**: instance property of <code>[JsdocOptions](#module_jsdoc-api..JsdocOptions)</code>  
<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+query"></a>

### options.query : <code>string</code>
A query string to parse and store in jsdoc.env.opts.query. Example: foo=bar&baz=true.

**Kind**: instance property of <code>[JsdocOptions](#module_jsdoc-api..JsdocOptions)</code>  
<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+recurse"></a>

### options.recurse : <code>boolean</code>
Recurse into subdirectories when scanning for source files and tutorials.

**Kind**: instance property of <code>[JsdocOptions](#module_jsdoc-api..JsdocOptions)</code>  
<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+readme"></a>

### options.readme : <code>string</code>
The path to the project's README file. Default: path/to/sourcefiles/README.md.

**Kind**: instance property of <code>[JsdocOptions](#module_jsdoc-api..JsdocOptions)</code>  
<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+template"></a>

### options.template : <code>string</code>
The path to the template to use. Default: path/to/jsdoc/templates/default.

**Kind**: instance property of <code>[JsdocOptions](#module_jsdoc-api..JsdocOptions)</code>  
<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+tutorials"></a>

### options.tutorials : <code>string</code>
Directory in which JSDoc should search for tutorials.

**Kind**: instance property of <code>[JsdocOptions](#module_jsdoc-api..JsdocOptions)</code>  
<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+html"></a>

### options.html : <code>boolean</code>
Enable experimental parsing of `.html` files.

**Kind**: instance property of <code>[JsdocOptions](#module_jsdoc-api..JsdocOptions)</code>  


<a name="module_jsdoc-api..JsdocOptions"></a>

## jsdoc~JsdocOptions
The jsdoc options, common for all operations.

**Kind**: inner class of <code>[jsdoc-api](#module_jsdoc-api)</code>  

* [~JsdocOptions](#module_jsdoc-api..JsdocOptions)
    * [.files](#module_jsdoc-api..JsdocOptions.JsdocOptions+files) : <code>string</code> &#124; <code>Array.&lt;string&gt;</code>
    * [.source](#module_jsdoc-api..JsdocOptions.JsdocOptions+source) : <code>string</code>
    * [.cache](#module_jsdoc-api..JsdocOptions.JsdocOptions+cache) : <code>boolean</code>
    * [.access](#module_jsdoc-api..JsdocOptions.JsdocOptions+access) : <code>string</code>
    * [.configure](#module_jsdoc-api..JsdocOptions.JsdocOptions+configure) : <code>string</code>
    * [.destination](#module_jsdoc-api..JsdocOptions.JsdocOptions+destination) : <code>string</code>
    * [.encoding](#module_jsdoc-api..JsdocOptions.JsdocOptions+encoding) : <code>string</code>
    * [.private](#module_jsdoc-api..JsdocOptions.JsdocOptions+private) : <code>boolean</code>
    * [.package](#module_jsdoc-api..JsdocOptions.JsdocOptions+package) : <code>string</code>
    * [.pedantic](#module_jsdoc-api..JsdocOptions.JsdocOptions+pedantic) : <code>boolean</code>
    * [.query](#module_jsdoc-api..JsdocOptions.JsdocOptions+query) : <code>string</code>
    * [.recurse](#module_jsdoc-api..JsdocOptions.JsdocOptions+recurse) : <code>boolean</code>
    * [.readme](#module_jsdoc-api..JsdocOptions.JsdocOptions+readme) : <code>string</code>
    * [.template](#module_jsdoc-api..JsdocOptions.JsdocOptions+template) : <code>string</code>
    * [.tutorials](#module_jsdoc-api..JsdocOptions.JsdocOptions+tutorials) : <code>string</code>
    * [.html](#module_jsdoc-api..JsdocOptions.JsdocOptions+html) : <code>boolean</code>

<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+files"></a>

### options.files : <code>string</code> &#124; <code>Array.&lt;string&gt;</code>
One or more filenames to process. Either this or `source` must be supplied.

**Kind**: instance property of <code>[JsdocOptions](#module_jsdoc-api..JsdocOptions)</code>  
<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+source"></a>

### options.source : <code>string</code>
A string containing source code to process. Either this or `source` must be supplied.

**Kind**: instance property of <code>[JsdocOptions](#module_jsdoc-api..JsdocOptions)</code>  
<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+cache"></a>

### options.cache : <code>boolean</code>
Set to `true` to cache the output - future invocations with the same input will return immediately.

**Kind**: instance property of <code>[JsdocOptions](#module_jsdoc-api..JsdocOptions)</code>  
<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+access"></a>

### options.access : <code>string</code>
Only display symbols with the given access: "public", "protected", "private" or "undefined", or "all" for all access levels. Default: all except "private".

**Kind**: instance property of <code>[JsdocOptions](#module_jsdoc-api..JsdocOptions)</code>  
<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+configure"></a>

### options.configure : <code>string</code>
The path to the configuration file. Default: path/to/jsdoc/conf.json.

**Kind**: instance property of <code>[JsdocOptions](#module_jsdoc-api..JsdocOptions)</code>  
<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+destination"></a>

### options.destination : <code>string</code>
The path to the output folder. Use "console" to dump data to the console. Default: ./out/.

**Kind**: instance property of <code>[JsdocOptions](#module_jsdoc-api..JsdocOptions)</code>  
<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+encoding"></a>

### options.encoding : <code>string</code>
Assume this encoding when reading all source files. Default: utf8.

**Kind**: instance property of <code>[JsdocOptions](#module_jsdoc-api..JsdocOptions)</code>  
<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+private"></a>

### options.private : <code>boolean</code>
Display symbols marked with the @private tag. Equivalent to "--access all". Default: false.

**Kind**: instance property of <code>[JsdocOptions](#module_jsdoc-api..JsdocOptions)</code>  
<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+package"></a>

### options.package : <code>string</code>
The path to the project's package file. Default: path/to/sourcefiles/package.json

**Kind**: instance property of <code>[JsdocOptions](#module_jsdoc-api..JsdocOptions)</code>  
<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+pedantic"></a>

### options.pedantic : <code>boolean</code>
Treat errors as fatal errors, and treat warnings as errors. Default: false.

**Kind**: instance property of <code>[JsdocOptions](#module_jsdoc-api..JsdocOptions)</code>  
<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+query"></a>

### options.query : <code>string</code>
A query string to parse and store in jsdoc.env.opts.query. Example: foo=bar&baz=true.

**Kind**: instance property of <code>[JsdocOptions](#module_jsdoc-api..JsdocOptions)</code>  
<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+recurse"></a>

### options.recurse : <code>boolean</code>
Recurse into subdirectories when scanning for source files and tutorials.

**Kind**: instance property of <code>[JsdocOptions](#module_jsdoc-api..JsdocOptions)</code>  
<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+readme"></a>

### options.readme : <code>string</code>
The path to the project's README file. Default: path/to/sourcefiles/README.md.

**Kind**: instance property of <code>[JsdocOptions](#module_jsdoc-api..JsdocOptions)</code>  
<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+template"></a>

### options.template : <code>string</code>
The path to the template to use. Default: path/to/jsdoc/templates/default.

**Kind**: instance property of <code>[JsdocOptions](#module_jsdoc-api..JsdocOptions)</code>  
<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+tutorials"></a>

### options.tutorials : <code>string</code>
Directory in which JSDoc should search for tutorials.

**Kind**: instance property of <code>[JsdocOptions](#module_jsdoc-api..JsdocOptions)</code>  
<a name="module_jsdoc-api..JsdocOptions.JsdocOptions+html"></a>

### options.html : <code>boolean</code>
Enable experimental parsing of `.html` files.

**Kind**: instance property of <code>[JsdocOptions](#module_jsdoc-api..JsdocOptions)</code>  


<a name="exp_module_dmd-options--DmdOptions"></a>

## DmdOptions ⏏
All dmd options and their defaults

**Kind**: Exported class  
* [DmdOptions](#exp_module_dmd-options--DmdOptions) ⏏
    * [.template](#module_dmd-options--DmdOptions+template) : <code>string</code>
    * [.heading-depth](#module_dmd-options--DmdOptions+heading-depth) : <code>number</code>
    * [.example-lang](#module_dmd-options--DmdOptions+example-lang) : <code>string</code>
    * [.plugin](#module_dmd-options--DmdOptions+plugin) : <code>array</code>
    * [.helper](#module_dmd-options--DmdOptions+helper) : <code>array</code>
    * [.partial](#module_dmd-options--DmdOptions+partial) : <code>array</code>
    * [.name-format](#module_dmd-options--DmdOptions+name-format) : <code>string</code>
    * [.no-gfm](#module_dmd-options--DmdOptions+no-gfm) : <code>boolean</code>
    * [.separators](#module_dmd-options--DmdOptions+separators) : <code>boolean</code>
    * [.module-index-format](#module_dmd-options--DmdOptions+module-index-format) : <code>string</code>
    * [.global-index-format](#module_dmd-options--DmdOptions+global-index-format) : <code>string</code>
    * [.param-list-format](#module_dmd-options--DmdOptions+param-list-format) : <code>string</code>
    * [.property-list-format](#module_dmd-options--DmdOptions+property-list-format) : <code>string</code>
    * [.member-index-format](#module_dmd-options--DmdOptions+member-index-format) : <code>string</code>
    * [.group-by](#module_dmd-options--DmdOptions+group-by) : <code>array</code>

<a name="module_dmd-options--DmdOptions+template"></a>

### dmdOptions.template : <code>string</code>
The template the supplied documentation will be rendered into. Use the default or supply your own template for full control over the output.

**Kind**: instance property of <code>[DmdOptions](#exp_module_dmd-options--DmdOptions)</code>  
**Default**: <code>&quot;{{&gt;main}}&quot;</code>  
**Example**  
```js
var fs = require("fs")
var dmd = require("../")

var template = "The description from my class: {{#class name='MyClass'}}{{description}}{{/class}}"

fs.createReadStream(__dirname + "/my-class.json")
    .pipe(dmd({ template: template }))
    .pipe(process.stdout)
```
outputs:
```
The description from my class: MyClass is full of wonder
```
the equivation operation using the command-line tool:
```
$ dmd --template template.hbs --src my-class.json
```
<a name="module_dmd-options--DmdOptions+heading-depth"></a>

### dmdOptions.heading-depth : <code>number</code>
The initial heading depth. For example, with a value of `2` the top-level markdown headings look like `"## The heading"`.

**Kind**: instance property of <code>[DmdOptions](#exp_module_dmd-options--DmdOptions)</code>  
**Default**: <code>2</code>  
<a name="module_dmd-options--DmdOptions+example-lang"></a>

### dmdOptions.example-lang : <code>string</code>
Specifies the default language used in @example blocks (for [syntax-highlighting](https://help.github.com/articles/github-flavored-markdown/#syntax-highlighting) purposes). In gfm mode, each @example is wrapped in a fenced-code block. Example usage: `--example-lang js`. Use the special value `none` for no specific language. While using this option, you can override the supplied language for any @example by specifying the `@lang` subtag, e.g `@example @lang hbs`. Specifying `@example @lang off` will disable code blocks for that example.

**Kind**: instance property of <code>[DmdOptions](#exp_module_dmd-options--DmdOptions)</code>  
**Default**: <code>&quot;js&quot;</code>  
<a name="module_dmd-options--DmdOptions+plugin"></a>

### dmdOptions.plugin : <code>array</code>
Use an installed package containing helper and/or partial overrides

**Kind**: instance property of <code>[DmdOptions](#exp_module_dmd-options--DmdOptions)</code>  
<a name="module_dmd-options--DmdOptions+helper"></a>

### dmdOptions.helper : <code>array</code>
handlebars helper files to override or extend the default set

**Kind**: instance property of <code>[DmdOptions](#exp_module_dmd-options--DmdOptions)</code>  
<a name="module_dmd-options--DmdOptions+partial"></a>

### dmdOptions.partial : <code>array</code>
handlebars partial files to override or extend the default set

**Kind**: instance property of <code>[DmdOptions](#exp_module_dmd-options--DmdOptions)</code>  
<a name="module_dmd-options--DmdOptions+name-format"></a>

### dmdOptions.name-format : <code>string</code>
Format identifier names in the [code](http://daringfireball.net/projects/markdown/syntax#code) style, (i.e. format using backticks or `<code></code>`)

**Kind**: instance property of <code>[DmdOptions](#exp_module_dmd-options--DmdOptions)</code>  
<a name="module_dmd-options--DmdOptions+no-gfm"></a>

### dmdOptions.no-gfm : <code>boolean</code>
By default, dmd generates github-flavoured markdown. Not all markdown parsers render gfm correctly. If your generated docs look incorrect on sites other than Github (e.g. npmjs.org) try enabling this option to disable Github-specific syntax.

**Kind**: instance property of <code>[DmdOptions](#exp_module_dmd-options--DmdOptions)</code>  
<a name="module_dmd-options--DmdOptions+separators"></a>

### dmdOptions.separators : <code>boolean</code>
Put `<hr>` breaks between identifiers. Improves readability on bulky docs.

**Kind**: instance property of <code>[DmdOptions](#exp_module_dmd-options--DmdOptions)</code>  
**Default**: <code>false</code>  
<a name="module_dmd-options--DmdOptions+module-index-format"></a>

### dmdOptions.module-index-format : <code>string</code>
none, grouped, table, dl

**Kind**: instance property of <code>[DmdOptions](#exp_module_dmd-options--DmdOptions)</code>  
**Default**: <code>&quot;dl&quot;</code>  
<a name="module_dmd-options--DmdOptions+global-index-format"></a>

### dmdOptions.global-index-format : <code>string</code>
none, grouped, table, dl

**Kind**: instance property of <code>[DmdOptions](#exp_module_dmd-options--DmdOptions)</code>  
**Default**: <code>&quot;dl&quot;</code>  
<a name="module_dmd-options--DmdOptions+param-list-format"></a>

### dmdOptions.param-list-format : <code>string</code>
Two options to render parameter lists: 'list' or 'table' (default). Table format works well in most cases but switch to list if things begin to look crowded / squashed.

**Kind**: instance property of <code>[DmdOptions](#exp_module_dmd-options--DmdOptions)</code>  
**Default**: <code>&quot;table&quot;</code>  
<a name="module_dmd-options--DmdOptions+property-list-format"></a>

### dmdOptions.property-list-format : <code>string</code>
list, table

**Kind**: instance property of <code>[DmdOptions](#exp_module_dmd-options--DmdOptions)</code>  
**Default**: <code>&quot;table&quot;</code>  
<a name="module_dmd-options--DmdOptions+member-index-format"></a>

### dmdOptions.member-index-format : <code>string</code>
grouped, list

**Kind**: instance property of <code>[DmdOptions](#exp_module_dmd-options--DmdOptions)</code>  
**Default**: <code>&quot;grouped&quot;</code>  
<a name="module_dmd-options--DmdOptions+group-by"></a>

### dmdOptions.group-by : <code>array</code>
a list of fields to group member indexes by

**Kind**: instance property of <code>[DmdOptions](#exp_module_dmd-options--DmdOptions)</code>  
**Default**: <code>[&quot;scope&quot;,&quot;category&quot;]</code>  
