"use strict";
var jsdocParse = require("jsdoc-parse"),
    dmd = require("dmd"),
    mfs = require("more-fs"),
    t = require("typical"),
    Transform = require("stream").Transform;

/**
@module jsdoc-to-markdown
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
@param {boolean} [options.private] - Include symbols marked @private in the output
@param {boolean} [options.json] - Return the JSON template data only
@param {boolean} [options.stats] - Return stats about the doclets parsed
@param {string} [options.template] - A handlebars template to insert your documentation into. 
@param {string | string[]} [options.helper] - Helper overrides
@param {string | string[]} [options.partial] - Partial overrides
@param {string | string[]} [options.plugin] - Packages containing helper and/or partial overrides
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
    if (t.isPlainObject(src) && !options){
        options = src;
        src = null;
    }
    options = options || {};
    if (options.template){
        options.template = mfs.read(options.template);
    }
    var mdStream = dmd(options);
    if (src){
        var jsdocStream = jsdocParse(src, options);
        jsdocStream.pipe(mdStream);
        return mdStream;
    } else {
        var transform = new Transform();
        var jsdocStream = jsdocParse(options);
        jsdocStream.pipe(mdStream);
        
        transform._transform = function(chunk, enc, done){
            jsdocStream.write(chunk);
            done();
        };
        transform._flush = function(done){
            jsdocStream.end();
        };
        mdStream.on("readable", function(){
            var chunk = this.read();
            transform.push(chunk);
        });
        mdStream.on("end", function(){
            transform.push(null);
        });

        return transform;
    }
}
