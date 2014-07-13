[![view on npm](http://img.shields.io/npm/v/jsdoc-to-markdown.svg)](https://www.npmjs.org/package/jsdoc-to-markdown)
[![npm module downloads per month](http://img.shields.io/npm/dm/jsdoc-to-markdown.svg)](https://www.npmjs.org/package/jsdoc-to-markdown)
[![Dependency Status](https://david-dm.org/75lb/jsdoc-to-markdown.svg)](https://david-dm.org/75lb/jsdoc-to-markdown)
![Analytics](https://ga-beacon.appspot.com/UA-27725889-32/jsdoc-to-markdown/README.md?pixel)

***work in progress, unstable, draft documentation***

#jsdoc-to-markdown
[Documented](http://usejsdoc.org) source code in, markdown out.. In development, any feedback welcome.

##Install
Ensure [node.js](http://nodejs.org) is installed first. Linux/Mac users may need to run the following commands with `sudo`.

###Globally
```sh
$ npm install -g jsdoc-to-markdown
```

###Bundled with your project
In my opinion, this is the most efficient solution (no task runner required).
```sh
$ npm install jsdoc-to-markdown --save-dev
```

Then add an `docs` build task to your `package.json` scripts, e.g.:
```json
{
  "name": "my-web-app",
  "version": "1.0.0",
  "scripts": {
    "docs": "jsdoc2md lib/*.js"
  }
}
```
Docs are generated like so:

```sh
$ npm run docs
```

###As a grunt plug-in
See [grunt-jsdoc-to-markdown](https://github.com/75lb/grunt-jsdoc-to-markdown).

###As a gulp plug-in
Use a task like this until the gulp plugin is ready, you should only need to edit `src` and `outputFile`: 

```js
var jsdoc2md = require("jsdoc-to-markdown");
var gutil = require("gulp-util");
var fs = require("fs");

gulp.task("docs", function(done){
    var src = "lib/**/*.js";
    var outputFile = "api.md";
    gutil.log("writing documentation to " + outputFile);
    jsdoc2md.render(src).pipe(fs.createWriteStream(outputFile));
});
```

##Usage
Document your source code using [correct jsdoc syntax](http://usejsdoc.org), then run it through `jsdoc2md`. If no `<source_files>` are supplied it will look for doclet data on `stdin`. 
```
$ jsdoc2md [<options>] [<source_files>]
$ cat doclets.json | jsdoc2md [<options>]

-t, --template <string>   A custom handlebars template to insert the rendered documentation into,
                          overriding the default
-p, --preset <string>     Use a preset template ('default', 'global' or 'modules')
-j, --json                Output the template data only
-h, --help                Print usage information
--src <array>             The javascript source files. The default option.
--private                 Include symbols marked @private in the output
--heading-depth <number>  root heading depth to begin the documentation from, defaults to 2 (`##`).
```

##examples
These projects have readme files rendered by `jsdoc2md`:
* [handbrake-js](https://github.com/75lb/handbrake-js) (exports an object with inner class)
* [array-tools](https://github.com/75lb/array-tools) (exports a object)
* [file-set](https://github.com/75lb/file-set) (exports a class)
* [command-line-args](https://github.com/75lb/command-line-args)  (exports a class)

##Templating
Running `jsdoc2md` without a `--template` generates documentation with the default template, which looks like this:

    {{>index}}
    {{>modules}}
    {{>globals}}
    {{>others}}
    
###{{>index}}
Only output if there are at least two modules defined. 

    #Index
    
    * Modules
      * {{>module-name}}
        * {{>member-names}}
    * Global
      * {{>global-name}}

###{{>modules}}
Outputs one {{>module}} partial per module.

###{{>globals}}

    #Global
    {{>global-index}}
    {{>members}}

###{{>members}}

  {{#each (members in=data)}}{{>member}}{{/each~}}
  {{#each (functions in=data)}}{{>function}}{{/each~}}
  {{#each (namespaces in=data)}}{{>namespace}}{{/each~}}
  {{#each (constants in=data)}}{{>constant}}{{/each~}}
  {{#each (typedefs in=data)}}{{>typedef}}{{/each~}}
  {{#each (events in=data)}}{{>event}}{{/each~}}
  {{#each (classes in=data)}}{{>class}}{{/each~}}

###{{>module}}

    {{>module-head}}
    {{>module-body}}
    {{>module-exported}}  (either a class with index, function or object with index)

###{{>module-head}}

    {{>anchor}}
    {{>heading}}{{>module-name}}
    
###{{>module-body}}

    {{>fields}}
    
###{{>fields}}

    {{>description~}}
    {{>params~}}
    {{>deprecated~}}
    {{>augments~}}
    {{>memberof~}}
    {{>type~}}
    {{>default~}}
    {{>returns~}}
    {{>access~}}
    {{>enum~}}
    {{>readOnly~}}
    {{>since~}}
    {{>version~}}
    {{>authors~}}
    {{>license~}}
    {{>copyright~}}
    {{>examples~}}

###{{>module-exported}}

    {{>class}}, {{>function}} or {{>module-index}} and {{>members}}

###{{>class}}

    {{>class-head}}
    {{>class-body~}}
    {{>class-members-index~}}
    {{>class-members~}}

##API Reference
**Example**  
```js
var jsdoc2md = require("jsdoc-to-markdown");
```


**Members**

* [jsdoc2md.render(sourceFiles, options)](#module_jsdoc-to-markdown.render)
* [jsdoc2md.createRenderStream(options)](#module_jsdoc-to-markdown.createRenderStream)

<a name="module_jsdoc-to-markdown.render"></a>
##jsdoc2md.render(sourceFiles, options)
Renders the jsdoc documentation from the specified source files as markdown.

**Params**

- sourceFiles `string` | `Array.<string>` - The javascript source file(s) - required.
- options `object` - The render options
  - [template] `string` - A handlebars template to insert your documentation into.
  - [preset] `string` - Choose from one of the built-in templates
  - [json] `boolean` - Return the JSON template data only
  - [private] `boolean` - Include symbols marked @private in the output
  - [heading-depth] `number` - Root heading depth, defaults to 2.

**Returns**: `stream` - A readable stream containing the rendered markdown  
**Example**  
this code:
```js
> jsdoc2md.render("lib/*.js").pipe(process.stdout);
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
  - [preset] `string` - Choose from one of the built-in templates
  - [json] `boolean` - Return the JSON template data only
  - [private] `boolean` - Include symbols marked @private in the output
  - [heading-depth] `number` - Root heading depth, defaults to 2.
**Returns**: `stream` - A readable stream containing the rendered markdown

etc.
etc.
```

<a name="module_jsdoc-to-markdown.createRenderStream"></a>
##jsdoc2md.createRenderStream(options)
**Params**

- options `object` - The render options, as specified in `render()`

**Returns**: `stream` - a stream containing the rendered markdown  
**Example**  
```js
process.stdin
    .pipe(jsdoc2md.createRenderStream({ template: "api.hbs" }))
    .pipe(process.stdout);
```


