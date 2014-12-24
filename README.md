[![view on npm](http://img.shields.io/npm/v/jsdoc-to-markdown.svg)](https://www.npmjs.org/package/jsdoc-to-markdown)
[![npm module downloads per month](http://img.shields.io/npm/dm/jsdoc-to-markdown.svg)](https://www.npmjs.org/package/jsdoc-to-markdown)
[![Build Status](https://travis-ci.org/75lb/jsdoc-to-markdown.svg?branch=master)](https://travis-ci.org/75lb/jsdoc-to-markdown)
[![Dependency Status](https://david-dm.org/75lb/jsdoc-to-markdown.svg)](https://david-dm.org/75lb/jsdoc-to-markdown)
![Analytics](https://ga-beacon.appspot.com/UA-27725889-32/jsdoc-to-markdown/README.md?pixel)

*** version 0.6 PREVIEW - massive update over 0.5, feedback appreciated ***

#jsdoc-to-markdown
[jsdoc](http://usejsdoc.org) documented source code in, markdown out.

This tool aims to promote quality documentation of Javascript modules.

Essentially, it connects the output of [jsdoc-parse](https://github.com/75lb/jsdoc-parse) to the input of [dmd](https://github.com/75lb/dmd).  For information about the markdown output, customising templates etc. please read the [dmd](https://github.com/75lb/dmd) docs. 

##Synopsis
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

get markdown docs: 
```
$ jsdoc2md example/function.js

#protection(cloak, dagger)
a quite wonderful function

**Params**

- cloak `object` - privacy gown
- dagger `object` - security

**Returns**: `survival`
```

this command achieves the same result: 
```sh
$ jsdoc-parse example/function.js | dmd
```

##Examples
These projects have readme files rendered by `jsdoc2md`:
* [handbrake-js](https://github.com/75lb/handbrake-js) (exports an object with inner class)
* [array-tools](https://github.com/75lb/array-tools) (exports a object)
* [file-set](https://github.com/75lb/file-set) (exports a class)
* [command-line-args](https://github.com/75lb/command-line-args)  (exports a class)

##Compatible Platforms
Tested on Mac OSX, Linux, Windows 8.1 and Windows XP.

##Usage
Document your source code using [correct jsdoc syntax](http://usejsdoc.org), then run it through `jsdoc2md`.

###Command-line tool
Install `jsdoc2md` globally:
```sh
$ npm install -g jsdoc-to-markdown
```

Options:
```
$ jsdoc2md -h

  jsdoc-to-markdown
  Markdown API documentation generator, good for Github projects

  Usage
  $ jsdoc2md [<options>] <source_files>

  --src <array>             A list of javascript source files or glob expressions
  -v, --verbose             More verbose error reporting
  -h, --help                Print usage information
  -j, --json                Output the parsed jsdoc data only
  --private                 Include symbols marked @private in the output
  -s, --stats               Print a few stats about the doclets parsed.
  -t, --template <string>   A custom handlebars template to insert the rendered documentation into
  --heading-depth <number>  root heading depth to begin the documentation from, defaults to 1 (`#`).
  -p, --plugin <array>      Use an installed package containing helper and/or partial overrides
  --helper <array>          handlebars helper files to override or extend the default set
  --partial <array>         handlebars partial files to override or extend the default set
  --sort-by <string>           none | kind | scope | kind,scope | scope,kind | <field_name>
  --example-code               Display all examples as code block
  --example-code-gfm <string>  Display all examples as GFM fenced code block with highlighting
  --code-names                 Format identifier names as code
  --github                     Use github only features
  --param-format <string>   list or table
  --index-format            grouped or npm
```

Some typical use cases: 

```sh
$ # dump everything you have into a single file
$ jsdoc src/**/*.js > api.md
```

```sh
$ # split into separate files
$ jsdoc src/main-module.js > main-module.md
$ jsdoc src/important-class.js > important-class.md
```

```sh
$ # embed documentation into a template you made
$ jsdoc src/**/*.js --template readme.hbs > README.md
```

###Bundled with your project
####As an `npm run` task
```sh
$ npm install jsdoc-to-markdown --save-dev
```

Then add a `docs` build script to your `package.json`, e.g.:
```json
{
  "name": "my-web-app",
  "version": "1.0.0",
  "scripts": {
    "docs": "jsdoc2md lib/*.js > api.md"
  }
}
```
Docs are generated like so:

```sh
$ npm run docs
```

####As a grunt plug-in
See [grunt-jsdoc-to-markdown](https://github.com/75lb/grunt-jsdoc-to-markdown).

####As a gulp task
Currently, the most reliable and natural way of using jsdoc2md with gulp. If your source code contains `@module` tags, use this method *only* ([reason](https://github.com/75lb/gulp-jsdoc-to-markdown#warning)). You should only need to edit `src`, `dest` and `options`: 

```js
var jsdoc2md = require("jsdoc-to-markdown");
var gutil = require("gulp-util");
var fs = require("fs");

gulp.task("docs", function(done){
    var src = "lib/**/*.js";
    var dest = "api.md";
    var options = {};
    
    gutil.log("writing documentation to " + dest);
    jsdoc2md.render(src, options)
        .on("error", function(err){
            gutil.log(gutil.colors.red("jsdoc2md failed"), err.message);
        })
        .pipe(fs.createWriteStream(dest));
});
```

####As a gulp plug-in
See [gulp-jsdoc-to-markdown](https://github.com/75lb/gulp-jsdoc-to-markdown).

###Library
**Example**  

```js
var jsdoc2md = require("jsdoc-to-markdown");
```
<a name="module_jsdoc-to-markdown.render"></a>
###jsdoc2md.render(src, options) ⇒ <code>stream</code>
Transforms jsdoc into markdown documentation.

| Param | Type | Description |
| ----- | ---- | ----------- |
| src | <code>string</code> \| <code>Array.&lt;string&gt;</code> | The javascript source file(s). |
| options | <code>object</code> | The render options |
| \[options.template\] | <code>string</code> | A custom handlebars template to insert the rendered documentation into. |
| \[options.json\] | <code>boolean</code> | Output the parsed jsdoc data only |
| \[options.private\] | <code>boolean</code> | Include symbols marked @private in the output |
| \[options.stats\] | <code>boolean</code> | Print a few stats about the doclets parsed |
| \[options.heading-depth\] | <code>number</code> | root heading depth, defaults to 1 (`#`) |
| \[options.plugin\] | <code>string</code> \| <code>Array.&lt;string&gt;</code> | Use an installed package containing helper and/or partial overrides |
| \[options.helper\] | <code>string</code> \| <code>Array.&lt;string&gt;</code> | handlebars helper files to override or extend the default set |
| \[options.partial\] | <code>string</code> \| <code>Array.&lt;string&gt;</code> | handlebars partial files to override or extend the default set |

**Returns**: <code>stream</code> - A transform stream containing the rendered markdown  
**Example**  
Two ways to use `render`. Either pass in filepaths (`**` glob matching supported) of javascript source files:
```js
> jsdoc2md.render("lib/*.js").pipe(process.stdout);
```
or pipe in source code from another source:
```js
> fs.createReadStream("lib/main.js").pipe(jsdoc2md.render()).pipe(process.stdout);
```
output looks something like: 
```
generates:
```markdown
#jsdoc-to-markdown
**Members**
[jsdoc2md.render(sourceFiles, options)](#module_jsdoc-to-markdown.render)
[jsdoc2md.createRenderStream(options)](#module_jsdoc-to-markdown.createRenderStream)

<a name="module_jsdoc-to-markdown.render"></a>
##jsdoc2md.render(sourceFiles, options)
Renders the jsdoc documentation from the specified source files as markdown.
**Params**

- sourceFiles `string` | `Array.<string>` - The javascript source file(s) - required.
- options `object` - The render options
  - [template] `string` - A handlebars template to insert your documentation into.
  - [json] `boolean` - Return the JSON template data only
  - [stats] `boolean` - Return a few stats about the doclets parsed
  - [private] `boolean` - Include symbols marked @private in the output
  - [heading-depth] `number` - Root heading depth, defaults to 1.
**Returns**: `stream` - A readable stream containing the rendered markdown

etc.
etc.
```
