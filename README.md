[![view on npm](http://img.shields.io/npm/v/jsdoc-to-markdown.svg)](https://www.npmjs.org/package/jsdoc-to-markdown)
[![npm module downloads per month](http://img.shields.io/npm/dm/jsdoc-to-markdown.svg)](https://www.npmjs.org/package/jsdoc-to-markdown)
[![Build Status](https://travis-ci.org/75lb/jsdoc-to-markdown.svg?branch=next)](https://travis-ci.org/75lb/jsdoc-to-markdown)
[![Dependency Status](https://david-dm.org/jsdoc2md/jsdoc-to-markdown.svg)](https://david-dm.org/75lb/jsdoc-to-markdown)
![Analytics](https://ga-beacon.appspot.com/UA-27725889-32/jsdoc-to-markdown/README.md?pixel)

# jsdoc-to-markdown@next
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
##protection(cloak, dagger) ⇒ <code>survival</code>
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

* Insert API documention into a README, or any arbitrary document.
* Customisable to a granular level. If the output doesn't suit you, change it.
* Consume and publish plug-ins.
* Works with html input files (experimental)

Jsdoc-to-markdown extends the jsdoc with some new tags (see [jsdoc-parse](https://github.com/jsdoc2md/jsdoc-parse/tree/next))

* @category
* @todo and @done

## Example output
Some examples of projects with `jsdoc2md` documentation.

### Generated README files

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
      <td><a href="https://github.com/75lb/array-tools">array-tools</a></td>
      <td>Very simple module exporting a collection of methods. Demonstrates use of the <code>@category</code> tag to group identifiers in the member-list.</td>
    </tr>
    <tr>
      <td><a href="https://github.com/75lb/file-set">file-set</a></td>
      <td>Simple module exporting a class.</td>
    </tr>
  </tbody>
</table>

### Examples demonstrating various options

To get an idea of the affects the various options have: 

- formating options 
- html input
- parse options

### Scripting examples

- generate one markdown file per class in your documentation

### Templating examples

#### Selectors
Cherry-pick what appears in the output using selector helpers. 

#### Anatomy of the default dmd template
- {{>main}}
  - {{>main-index}}
    - {{>module-index~}}
    - {{>global-index~}}
  - {{>all-docs}}
    - {{>docs}} 
      - {{>header~}}
      - {{>body}}
      - {{>member-index~}}
      - {{>separator~}}
      - {{>members~}}

## Install and use
First, document your source code using [correct jsdoc syntax](http://usejsdoc.org) then run it through jsdoc-to-markdown using one of the following methods.

### Compatible Platforms
All these methods are tested on Mac OSX, Linux, Windows 8.1 and Windows XP.

### Command-line tool
To install the `jsdoc2md` command-line tool globally, run:
```
$ npm install -g jsdoc-to-markdown@next
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
General rule: if your file expression contains `**` yet recursion is failing wrap the expression in quotes, e.g. `"lib/**/*.js"`.

If wrapped in quotes, bash (or your shell) will not attempt file-name expansion on the expression. If you do not use quotes you will require bash version 4+ with globstar enabled for recursion to work. 

### Bundled with your project
#### As an `npm run` task
```sh
$ npm install jsdoc-to-markdown@next --save-dev
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

#### As a grunt plug-in
See [grunt-jsdoc-to-markdown](https://github.com/jsdoc2md/grunt-jsdoc-to-markdown).

#### As a gulp task
Currently, the most reliable and natural way of using jsdoc2md with gulp. If your source code contains `@module` tags, use this method *only* ([reason](https://github.com/jsdoc2md/gulp-jsdoc-to-markdown#warning)). You should only need to edit `src`, `dest` and `options`: 

```js
var jsdoc2md = require("jsdoc-to-markdown");
var gutil = require("gulp-util");
var fs = require("fs");

gulp.task("docs", function(done){
    var src = "lib/**/*.js";
    var dest = "api.md";
    var options = {};
    
    gutil.log("writing documentation to " + dest);
    return jsdoc2md.render(src, options)
        .on("error", function(err){
            gutil.log(gutil.colors.red("jsdoc2md failed"), err.message);
        })
        .pipe(fs.createWriteStream(dest));
});
```

#### As a gulp plug-in
See [gulp-jsdoc-to-markdown](https://github.com/jsdoc2md/gulp-jsdoc-to-markdown).

## Contributing
Issue reports and patches are encouraged. I would welcome an additional maintainer.

### Composition
Essentially, it connects the output of [jsdoc-parse](https://github.com/jsdoc2md/jsdoc-parse) to the input of [dmd](https://github.com/jsdoc2md/dmd). dmd uses the [ddata](https://github.com/jsdoc2md/ddata) helper library (also shared by [dhtml](https://github.com/jsdoc2md/dhtml)) and [stream-handlebars](https://github.com/75lb/stream-handlebars) to generate the output. 

## API Reference
**Todo**

- [ ] Internationalisation

**Example**  
```js
var jsdoc2md = require("jsdoc-to-markdown");
```
<a name="module_jsdoc-to-markdown.render"></a>
### jsdoc2md.render(src, [options]) ⇒ <code>stream</code>
Transforms jsdoc into markdown documentation.

**Kind**: static method of <code>[jsdoc-to-markdown](#module_jsdoc-to-markdown)</code>  
**Params**

- src <code>string</code> | <code>Array.&lt;string&gt;</code> - The javascript source file(s).  
- [options] <code>object</code> - The render options, also passed to dmd and jsdoc-parse.  
  - [.template] <code>string</code> - A custom handlebars template to insert the rendered documentation into.  
  - [.json] <code>boolean</code> - Output the parsed jsdoc data only  
  - [.private] <code>boolean</code> - Include symbols marked @private in the output  
  - [.stats] <code>boolean</code> - Print a few stats about the doclets parsed  
  - [.heading-depth] <code>number</code> - root heading depth, defaults to 1 (`#`)  
  - [.plugin] <code>string</code> | <code>Array.&lt;string&gt;</code> - Use an installed package containing helper and/or partial overrides  
  - [.helper] <code>string</code> | <code>Array.&lt;string&gt;</code> - handlebars helper files to override or extend the default set  
  - [.partial] <code>string</code> | <code>Array.&lt;string&gt;</code> - handlebars partial files to override or extend the default set  
  - [.module-index-format] <code>string</code> - -  
  - [.global-index-format] <code>string</code> - -  
  - [.param-list-format] <code>string</code> - -  
  - [.property-list-format] <code>string</code> - -  
  - [.member-index-format] <code>string</code> - -  
  - [.group-by] <code>Array.&lt;string&gt;</code> - -  

**Example**  
Two ways to use `render`. Either pass in filepaths (`**` glob matching supported) of javascript source files:
```js
> jsdoc2md.render("lib/*.js").pipe(process.stdout);
```
or pipe in source code from another source:
```js
> fs.createReadStream("lib/main.js").pipe(jsdoc2md.render()).pipe(process.stdout);
```
* * *

&copy; 2015 Lloyd Brookes \<75pound@gmail.com\>. Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).
