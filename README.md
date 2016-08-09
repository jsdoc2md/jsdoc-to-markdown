[![view on npm](http://img.shields.io/npm/v/jsdoc-to-markdown.svg)](https://www.npmjs.org/package/jsdoc-to-markdown)
[![npm module downloads](http://img.shields.io/npm/dt/jsdoc-to-markdown.svg)](https://www.npmjs.org/package/jsdoc-to-markdown)
[![Build Status](https://travis-ci.org/jsdoc2md/jsdoc-to-markdown.svg?branch=master)](https://travis-ci.org/jsdoc2md/jsdoc-to-markdown)
[![Dependency Status](https://david-dm.org/jsdoc2md/jsdoc-to-markdown.svg)](https://david-dm.org/jsdoc2md/jsdoc-to-markdown)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)
[![Join the chat at https://gitter.im/jsdoc2md/jsdoc2md](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/jsdoc2md/jsdoc2md?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

***[Try the jsdoc2md v2 pre-release](https://github.com/jsdoc2md/jsdoc-to-markdown/releases)***

# jsdoc-to-markdown
[jsdoc](http://usejsdoc.org) documented source code in, markdown format API documentation out.

## Synopsis
write documented code:
```js
/**
a quite wonderful function
@param {object} - privacy gown
@param {object} - security
@returns {survival}
*/
function protection(cloak, dagger){}
```

run a command:
```
$ jsdoc2md example/src/protection.js
```

get markdown docs! (in [github-flavored-markdown](https://help.github.com/articles/github-flavored-markdown/) format by default)
```handlebars
<a name="protection"></a>
## protection(cloak, dagger) ⇒ <code>survival</code>
a quite wonderful function

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| cloak  | <code>object</code> | privacy gown |
| dagger | <code>object</code> | security     |
```

this command achieves the same result:
```sh
$ jsdoc-parse example/function.js | dmd
```
## Features

- Insert API documention into a README, or any arbitrary document.
- Customisable to a granular level. If the output doesn't suit you, change it.
- Package your modifications, publish to npm and share with others (e.g. [dmd-bitbucket](https://github.com/jsdoc2md/dmd-bitbucket))
- Accepts `.js` or `.html` input files (parsing html is experimental - [more](https://github.com/jsdoc2md/jsdoc-parse/))
- Extends jsdoc with some new tags ([more](https://github.com/jsdoc2md/jsdoc-parse/))
- Use any arbitrary tag, e.g. `@fulfil`, `@reject`, `@hatredlevel` etc.

## Example output
Some example output creating using `jsdoc2md`.

### Generated README files
These projects insert jsdoc2md output into a readme template.

<table>
  <thead>
    <tr><th>Project</th><th>Notes</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://github.com/75lb/handbrake-js">handbrake-js</a></td>
      <td>
        <p>A module exposing two methods and an inner class. The API docs are inserted into <a href="https://github.com/75lb/handbrake-js/tree/master/jsdoc2md">this README template</a> by this command: <br>
        <code>$ jsdoc2md --template jsdoc2md/README.hbs lib/*.js</code></p>
      </td>
    </tr>
    <tr>
      <td><a href="https://github.com/75lb/command-line-args">command-line-args</a></td>
      <td>Demonstrates documentation of ES2015 classes plus the <strong><code>@module</code></strong>, <strong><code>@typicalname</code></strong>, <strong><code>@throws</code></strong> and <strong><code>@alias</code></strong> tags.</td>
    </tr>
    <tr>
      <td><a href="https://github.com/75lb/array-tools#api-reference">array-tools</a></td>
      <td>Very simple module exporting a collection of static methods. Demonstrates use of <strong><code>@category</code></strong> to group identifiers in the member-list.</td>
    </tr>
    <tr>
      <td><a href="https://github.com/jesucarr/tokenbucket">jesucarr/tokenbucket</a></td>
      <td>Demonstrates <strong><code>--param-list-format list</code></strong> and the documentation of Promises using the <strong><code>@fulfil</code></strong> and <strong><code>@reject</code></strong> tags.</td>
    </tr>
    <tr>
      <td><a href="https://github.com/75lb/ansi-escape-sequences">ansi-escape-sequences</a></td>
      <td>Demonstrates usage of <strong><code>@enum {type}</code></strong> (rendered in table format).</td>
    </tr>
  </tbody>
</table>

### Tags
You can see an example of how each [jsdoc tag](http://usejsdoc.org) looks when rendered [here](https://github.com/jsdoc2md/jsdoc-to-markdown/tree/master/example/tags).

### Examples demonstrating various options

To get an idea of the affects the various options have:

- [formatting options](https://github.com/jsdoc2md/jsdoc-to-markdown/tree/master/example/options/dmd%20options)
  - [example-lang](https://github.com/jsdoc2md/jsdoc-to-markdown/tree/master/example/options/dmd%20options/example-lang)
  - [module-index-format](https://github.com/jsdoc2md/jsdoc-to-markdown/blob/master/example/options/dmd%20options/module-index-format)
  - [global-index-format](https://github.com/jsdoc2md/jsdoc-to-markdown/tree/master/example/options/dmd%20options/global-index-format)
  - [member-index-format](https://github.com/jsdoc2md/jsdoc-to-markdown/blob/master/example/options/dmd%20options/member-index-format)
  - [param-list-format](https://github.com/jsdoc2md/jsdoc-to-markdown/blob/master/example/options/dmd%20options/param-list-format)
  - [property-list-format](https://github.com/jsdoc2md/jsdoc-to-markdown/blob/master/example/options/dmd%20options/property-list-format)
  - [no-gfm](https://github.com/jsdoc2md/jsdoc-to-markdown/tree/master/example/options/dmd%20options/no-gfm)
  - [separators](https://github.com/jsdoc2md/jsdoc-to-markdown/blob/master/example/options/dmd%20options/separators)
  - [name format](https://github.com/jsdoc2md/jsdoc-to-markdown/blob/master/example/options/dmd%20options/name-format)
- [parse options](https://github.com/jsdoc2md/jsdoc-to-markdown/tree/master/example/options/jsdoc-parse%20options)
  - [html](https://github.com/jsdoc2md/jsdoc-to-markdown/tree/master/example/options/jsdoc-parse%20options/html)
  - [sort-by](https://github.com/jsdoc2md/jsdoc-to-markdown/tree/master/example/options/jsdoc-parse%20options/sort-by)

### Scripting examples
If you can't achieve what you need using the command-line tool you can write a custom script.

- [generate one markdown file per class](https://github.com/jsdoc2md/jsdoc-to-markdown/tree/master/example/scripting/output-file-per-class)

### Templating examples
The default jsdoc2md output might not always suit you. You can supply your using own template using the `template` option. You can see the template used to generate this README [here](https://github.com/jsdoc2md/jsdoc-to-markdown/blob/master/jsdoc2md/README.hbs).

#### Selectors
- Cherry-pick which documentation appears in the output using [selector helpers](https://github.com/jsdoc2md/jsdoc-to-markdown/tree/master/example/templating/selector%20helpers).
  - [{{#module}}](https://github.com/jsdoc2md/jsdoc-to-markdown/tree/master/example/templating/selector%20helpers/module)
  - [{{#class}}](https://github.com/jsdoc2md/jsdoc-to-markdown/tree/master/example/templating/selector%20helpers/class)

### Exemplary APIs
See [the wiki](https://github.com/jsdoc2md/jsdoc-to-markdown/wiki/Exemplary-APIs) for more great API examples. Feel free to add your own!


## Install and use
First, document your source code using [correct jsdoc syntax](http://usejsdoc.org) then run it through jsdoc-to-markdown using one of the following methods (all tested on Mac OSX, Linux, Windows 8.1 and Windows XP):

### Command-line tool
To install the `jsdoc2md` command-line tool globally, run:
```
$ npm install -g jsdoc-to-markdown
```

Some typical use cases:

```sh
$ # dump everything you have into a single file
$ jsdoc2md "src/**/*.js" > api.md
```

```sh
$ # split into separate files
$ jsdoc2md src/main-module.js > main-module.md
$ jsdoc2md src/important-class.js > important-class.md
```

```sh
$ # embed documentation into a template you made
$ jsdoc2md "src/**/*.js" --template readme.hbs > README.md
```

#### Note on globbing
General rule: if your file expression contains `**` yet recursion is failing, wrap the expression in quotes (e.g. `"lib/**/*.js"`).

If wrapped in quotes, bash (or your shell) will not attempt file-name expansion on the expression. If you do not use quotes you will require bash version 4+ with globstar enabled for recursion to work.

### Add a "generate docs" task to your project workflow
#### As an `npm run` task
This is the most lightweight way to add the task - no additional task-running software required. First:
```sh
$ npm install jsdoc-to-markdown --save-dev
```

Then, in the `"scripts"` section of `package.json`, add a `docs` task. For example:
```json
{
  "scripts": {
    "docs": "jsdoc2md lib/*.js > api.md"
  }
}
```
Now, project documentation is generated like so:

```sh
$ npm run docs
```

#### As a grunt task
See [grunt-jsdoc-to-markdown](https://github.com/jsdoc2md/grunt-jsdoc-to-markdown).

#### As a gulp task
See [gulp-jsdoc-to-markdown](https://github.com/jsdoc2md/gulp-jsdoc-to-markdown).

## Contributing
Issue reports and patches are encouraged. And the project would benefit from an additional maintainer..

### Composition
Essentially, jsdoc2d connects the output of [jsdoc-parse](https://github.com/jsdoc2md/jsdoc-parse) to the input of [dmd](https://github.com/jsdoc2md/dmd). dmd uses the [ddata](https://github.com/jsdoc2md/ddata) helper library (also shared by [dhtml](https://github.com/jsdoc2md/dhtml)) and [stream-handlebars](https://github.com/75lb/stream-handlebars) to generate the output.

## API Reference
**Example**  
```js
var jsdoc2md = require("jsdoc-to-markdown")
```
<a name="exp_module_jsdoc-to-markdown--jsdoc2md"></a>

### jsdoc2md([options]) ⇒ <code>[TransformStream](https://nodejs.org/api/stream.html#stream_class_stream_transform)</code> ⏏
Transforms jsdoc into markdown documentation.

**Kind**: Exported function  
**Params**

- [options] <code>[DmdOptions](#module_dmd--dmd..DmdOptions)</code> | <code>[ParseOptions](#module_jsdoc-parse--jsdocParse..ParseOptions)</code> - the options

**Example**  
Two ways to use `jsdoc2md`. Either pass in filepaths (`**` glob matching supported) of javascript source files:
```js
> jsdoc2md({ src: "lib/*.js" }).pipe(process.stdout)
```
or pipe in source code from another source:
```js
> fs.createReadStream("lib/main.js").pipe(jsdoc2md()).pipe(process.stdout)
```


<a name="module_dmd--dmd..DmdOptions"></a>

### dmd~DmdOptions
All dmd options and their defaults

**Kind**: inner class of <code>[dmd](#exp_module_dmd--dmd)</code>  

* [~DmdOptions](#module_dmd--dmd..DmdOptions)
    * [.template](#module_dmd--dmd..DmdOptions+template) : <code>string</code>
    * [.heading-depth](#module_dmd--dmd..DmdOptions+heading-depth) : <code>number</code>
    * [.example-lang](#module_dmd--dmd..DmdOptions+example-lang) : <code>string</code>
    * [.plugin](#module_dmd--dmd..DmdOptions+plugin) : <code>array</code>
    * [.helper](#module_dmd--dmd..DmdOptions+helper) : <code>array</code>
    * [.partial](#module_dmd--dmd..DmdOptions+partial) : <code>array</code>
    * [.name-format](#module_dmd--dmd..DmdOptions+name-format) : <code>string</code>
    * [.no-gfm](#module_dmd--dmd..DmdOptions+no-gfm) : <code>boolean</code>
    * [.separators](#module_dmd--dmd..DmdOptions+separators) : <code>boolean</code>
    * [.module-index-format](#module_dmd--dmd..DmdOptions+module-index-format) : <code>string</code>
    * [.global-index-format](#module_dmd--dmd..DmdOptions+global-index-format) : <code>string</code>
    * [.param-list-format](#module_dmd--dmd..DmdOptions+param-list-format) : <code>string</code>
    * [.property-list-format](#module_dmd--dmd..DmdOptions+property-list-format) : <code>string</code>
    * [.member-index-format](#module_dmd--dmd..DmdOptions+member-index-format) : <code>string</code>
    * [.group-by](#module_dmd--dmd..DmdOptions+group-by) : <code>array</code>

<a name="module_dmd--dmd..DmdOptions+template"></a>

#### dmdOptions.template : <code>string</code>
The template the supplied documentation will be rendered into. Use the default or supply your own template for full control over the output.

**Kind**: instance property of <code>[DmdOptions](#module_dmd--dmd..DmdOptions)</code>  
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
<a name="module_dmd--dmd..DmdOptions+heading-depth"></a>

#### dmdOptions.heading-depth : <code>number</code>
The initial heading depth. For example, with a value of `2` the top-level markdown headings look like `"## The heading"`.

**Kind**: instance property of <code>[DmdOptions](#module_dmd--dmd..DmdOptions)</code>  
**Default**: <code>2</code>  
<a name="module_dmd--dmd..DmdOptions+example-lang"></a>

#### dmdOptions.example-lang : <code>string</code>
Specifies the default language used in @example blocks (for [syntax-highlighting](https://help.github.com/articles/github-flavored-markdown/#syntax-highlighting) purposes). In gfm mode, each @example is wrapped in a fenced-code block. Example usage: `--example-lang js`. Use the special value `none` for no specific language. While using this option, you can override the supplied language for any @example by specifying the `@lang` subtag, e.g `@example @lang hbs`. Specifying `@example @lang off` will disable code blocks for that example.

**Kind**: instance property of <code>[DmdOptions](#module_dmd--dmd..DmdOptions)</code>  
**Default**: <code>&quot;js&quot;</code>  
<a name="module_dmd--dmd..DmdOptions+plugin"></a>

#### dmdOptions.plugin : <code>array</code>
Use an installed package containing helper and/or partial overrides

**Kind**: instance property of <code>[DmdOptions](#module_dmd--dmd..DmdOptions)</code>  
<a name="module_dmd--dmd..DmdOptions+helper"></a>

#### dmdOptions.helper : <code>array</code>
handlebars helper files to override or extend the default set

**Kind**: instance property of <code>[DmdOptions](#module_dmd--dmd..DmdOptions)</code>  
<a name="module_dmd--dmd..DmdOptions+partial"></a>

#### dmdOptions.partial : <code>array</code>
handlebars partial files to override or extend the default set

**Kind**: instance property of <code>[DmdOptions](#module_dmd--dmd..DmdOptions)</code>  
<a name="module_dmd--dmd..DmdOptions+name-format"></a>

#### dmdOptions.name-format : <code>string</code>
Format identifier names in the [code](http://daringfireball.net/projects/markdown/syntax#code) style, (i.e. format using backticks or `<code></code>`)

**Kind**: instance property of <code>[DmdOptions](#module_dmd--dmd..DmdOptions)</code>  
<a name="module_dmd--dmd..DmdOptions+no-gfm"></a>

#### dmdOptions.no-gfm : <code>boolean</code>
By default, dmd generates github-flavoured markdown. Not all markdown parsers render gfm correctly. If your generated docs look incorrect on sites other than Github (e.g. npmjs.org) try enabling this option to disable Github-specific syntax.

**Kind**: instance property of <code>[DmdOptions](#module_dmd--dmd..DmdOptions)</code>  
<a name="module_dmd--dmd..DmdOptions+separators"></a>

#### dmdOptions.separators : <code>boolean</code>
Put `<hr>` breaks between identifiers. Improves readability on bulky docs.

**Kind**: instance property of <code>[DmdOptions](#module_dmd--dmd..DmdOptions)</code>  
**Default**: <code>false</code>  
<a name="module_dmd--dmd..DmdOptions+module-index-format"></a>

#### dmdOptions.module-index-format : <code>string</code>
none, grouped, table, dl

**Kind**: instance property of <code>[DmdOptions](#module_dmd--dmd..DmdOptions)</code>  
**Default**: <code>&quot;dl&quot;</code>  
<a name="module_dmd--dmd..DmdOptions+global-index-format"></a>

#### dmdOptions.global-index-format : <code>string</code>
none, grouped, table, dl

**Kind**: instance property of <code>[DmdOptions](#module_dmd--dmd..DmdOptions)</code>  
**Default**: <code>&quot;dl&quot;</code>  
<a name="module_dmd--dmd..DmdOptions+param-list-format"></a>

#### dmdOptions.param-list-format : <code>string</code>
Two options to render parameter lists: 'list' or 'table' (default). Table format works well in most cases but switch to list if things begin to look crowded / squashed.

**Kind**: instance property of <code>[DmdOptions](#module_dmd--dmd..DmdOptions)</code>  
**Default**: <code>&quot;table&quot;</code>  
<a name="module_dmd--dmd..DmdOptions+property-list-format"></a>

#### dmdOptions.property-list-format : <code>string</code>
list, table

**Kind**: instance property of <code>[DmdOptions](#module_dmd--dmd..DmdOptions)</code>  
**Default**: <code>&quot;table&quot;</code>  
<a name="module_dmd--dmd..DmdOptions+member-index-format"></a>

#### dmdOptions.member-index-format : <code>string</code>
grouped, list

**Kind**: instance property of <code>[DmdOptions](#module_dmd--dmd..DmdOptions)</code>  
**Default**: <code>&quot;grouped&quot;</code>  
<a name="module_dmd--dmd..DmdOptions+group-by"></a>

#### dmdOptions.group-by : <code>array</code>
a list of fields to group member indexes by

**Kind**: instance property of <code>[DmdOptions](#module_dmd--dmd..DmdOptions)</code>  
**Default**: <code>[&quot;scope&quot;,&quot;category&quot;]</code>  

<a name="module_jsdoc-parse--jsdocParse..ParseOptions"></a>

### jsdocParse~ParseOptions
All options for jsdoc-parse, including defaults

**Kind**: inner class of <code>[jsdocParse](#exp_module_jsdoc-parse--jsdocParse)</code>  

* [~ParseOptions](#module_jsdoc-parse--jsdocParse..ParseOptions)
    * [.src](#module_jsdoc-parse--jsdocParse..ParseOptions.ParseOptions+src) : <code>string</code> &#124; <code>Array.&lt;string&gt;</code>
    * [.private](#module_jsdoc-parse--jsdocParse..ParseOptions.ParseOptions+private) : <code>boolean</code>
    * [.stats](#module_jsdoc-parse--jsdocParse..ParseOptions.ParseOptions+stats) : <code>boolean</code>
    * [.html](#module_jsdoc-parse--jsdocParse..ParseOptions.ParseOptions+html) : <code>boolean</code>
    * [.conf](#module_jsdoc-parse--jsdocParse..ParseOptions.ParseOptions+conf) : <code>boolean</code>
    * [.sort-by](#module_jsdoc-parse--jsdocParse..ParseOptions.ParseOptions+sort-by) : <code>array</code>

<a name="module_jsdoc-parse--jsdocParse..ParseOptions.ParseOptions+src"></a>

#### parseOptions.src : <code>string</code> &#124; <code>Array.&lt;string&gt;</code>
A list of javascript source files (or glob expressions) to parse for documentation. If this option is not set jsdoc-parse will wait for source code on stdin (i.e. `cat *.js | jsdoc-parse <options>`).

**Kind**: instance property of <code>[ParseOptions](#module_jsdoc-parse--jsdocParse..ParseOptions)</code>  
**Example**  
```js
var parse = require("jsdoc-parse")
var fs = require("fs")

// either supply one or more file names
parse({ src: "example.js" }).pipe(process.stdout)

// or pipe in source code
fs.createReadStream("example.js").parse().pipe(process.stdout)
```
<a name="module_jsdoc-parse--jsdocParse..ParseOptions.ParseOptions+private"></a>

#### parseOptions.private : <code>boolean</code>
Include identifier documentation marked as `@private` in the output

**Kind**: instance property of <code>[ParseOptions](#module_jsdoc-parse--jsdocParse..ParseOptions)</code>  
**Default**: <code>false</code>  
<a name="module_jsdoc-parse--jsdocParse..ParseOptions.ParseOptions+stats"></a>

#### parseOptions.stats : <code>boolean</code>
Print a few stats about the doclets parsed

**Kind**: instance property of <code>[ParseOptions](#module_jsdoc-parse--jsdocParse..ParseOptions)</code>  
<a name="module_jsdoc-parse--jsdocParse..ParseOptions.ParseOptions+html"></a>

#### parseOptions.html : <code>boolean</code>
Enable experimental parsing of .html files.

**Kind**: instance property of <code>[ParseOptions](#module_jsdoc-parse--jsdocParse..ParseOptions)</code>  
**Default**: <code>false</code>  
<a name="module_jsdoc-parse--jsdocParse..ParseOptions.ParseOptions+conf"></a>

#### parseOptions.conf : <code>boolean</code>
Path to a jsdoc configuration file, passed directly to `jsdoc -c`.

**Kind**: instance property of <code>[ParseOptions](#module_jsdoc-parse--jsdocParse..ParseOptions)</code>  
<a name="module_jsdoc-parse--jsdocParse..ParseOptions.ParseOptions+sort-by"></a>

#### parseOptions.sort-by : <code>array</code>
Sort by one of more fields, e.g. `--sort-by kind category`. Pass the special value `none` to remove the default sort order.

**Kind**: instance property of <code>[ParseOptions](#module_jsdoc-parse--jsdocParse..ParseOptions)</code>  
**Default**: <code>[&quot;scope&quot;,&quot;category&quot;,&quot;kind&quot;,&quot;order&quot;]</code>  

* * *

&copy; 2014-16 Lloyd Brookes \<75pound@gmail.com\>. Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).
