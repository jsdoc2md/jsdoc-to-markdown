"use strict";
var fileSet = require("file-set"),
    jsdocParse = require("jsdoc-parse"),
    documenterMd = require("documenter-md"),
    mfs = require("more-fs");

/**
@module
@alias jsdoc2md
@example 
```js
var jsdoc2md = require("jsdoc-to-markdown");
```
*/
exports.render = render;

/**
Transforms jsdoc into markdown documentation
@param {string | string[]} - The javascript source file(s) - required. 
@param {object} - The render options
@param {string} [options.template] - A handlebars template to insert your documentation into. 
@param {boolean} [options.json] - Return the JSON template data only
@param {boolean} [options.stats] - Return stats about the doclets parsed
@param {boolean} [options.private] - Include symbols marked @private in the output
@param {number} [options.heading-depth] - Root heading depth, defaults to 2.
@return {stream} A readable stream containing the rendered markdown
@alias module:jsdoc-to-markdown.render
@example
this code:
```js
> jsdoc2md.render("lib/*.js").pipe(process.stdout);
```
generates:
```markdown
#jsdoc-to-markdown

* **Members**

* [jsdoc2md.render(sourceFiles, options)](#module_jsdoc-to-markdown.render)
* [jsdoc2md.createRenderStream(options)](#module_jsdoc-to-markdown.createRenderStream)

<a name="module_jsdoc-to-markdown.render"></a>
##jsdoc2md.render(sourceFiles, options)
Renders the jsdoc documentation from the specified source files as markdown.

* **Params**

- sourceFiles `string` | `Array.<string>` - The javascript source file(s) - required.
- options `object` - The render options
  - [template] `string` - A handlebars template to insert your documentation into.
  - [json] `boolean` - Return the JSON template data only
  - [stats] `boolean` - Return a few stats about the doclets parsed
  - [private] `boolean` - Include symbols marked @private in the output
  - [heading-depth] `number` - Root heading depth, defaults to 1.

* **Returns**: `stream` - A readable stream containing the rendered markdown

etc.
etc.
```
*/
function render(src, options){
    options = options || {};
    if (options.template){
        options.template = mfs.read(options.template);
    }
    var jsdocStream = jsdocParse(src, options);
    
    if (options.json || options.stats){
        return jsdocStream;
    } else {
        var mdStream = documenterMd(options);
        jsdocStream.pipe(mdStream);
        jsdocStream.on("error", function(err){
            mdStream.emit(err);
        });

        return mdStream;
    }
}
