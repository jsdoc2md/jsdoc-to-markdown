"use strict";
var jsdocParse = require("jsdoc-parse");
var dmd = require("dmd");
var fs = require("fs");
var t = require("typical");
var Transform = require("stream").Transform;

/**
@module jsdoc-to-markdown
@typicalname jsdoc2md
@example 
```js
var jsdoc2md = require("jsdoc-to-markdown");
```
*/
exports.render = render;

/**
Transforms jsdoc into markdown documentation.
@param {string | string[]} - The javascript source file(s).
@param {module:jsdoc-to-markdown~renderOptions} options - the options
@return {external:Transform}
@alias module:jsdoc-to-markdown.render
@example
Two ways to use `render`. Either pass in filepaths (`**` glob matching supported) of javascript source files:
```js
> jsdoc2md.render("lib/*.js").pipe(process.stdout);
```
or pipe in source code from another source:
```js
> fs.createReadStream("lib/main.js").pipe(jsdoc2md.render()).pipe(process.stdout);
```
*/
function render(src, options){
    if (t.isPlainObject(src) && !options){
        options = src;
        src = null;
    }
    options = options || {};
    if (options.template){
        options.template = fs.readFileSync(options.template, "utf8");
    }
    var dmdStream = dmd(options);
    if (src){
        var jsdocStream = jsdocParse(src, options);
        
        if (options.json || options.stats){
            return jsdocStream;
        } else {
            jsdocStream.pipe(dmdStream);
            jsdocStream.on("error", dmdStream.emit.bind(dmdStream, "error"));
            return dmdStream;
        }
    } else {
        var transform = new Transform();
        var jsdocStream = jsdocParse(options);
        jsdocStream.pipe(dmdStream);
        
        transform._transform = function(chunk, enc, done){
            jsdocStream.write(chunk);
            done();
        };
        transform._flush = function(){
            jsdocStream.end();
        };
        dmdStream.on("readable", function(){
            var chunk = this.read();
            transform.push(chunk);
        });
        dmdStream.on("end", function(){
            transform.push(null);
        });
        dmdStream.on("error", function(err){
            transform.emit("error", err);
        });

        return transform;
    }
}
/**
@typedef {object} module:jsdoc-to-markdown~renderOptions
@property [template] {string} - A custom handlebars template to insert the rendered documentation into. 
@property [json] {boolean} - Output the parsed jsdoc data only
@property [private] {boolean} - Include symbols marked @private in the output
@property [stats] {boolean} - Print a few stats about the doclets parsed
@property [heading-depth] {number} - root heading depth, defaults to 1 (`#`)
@property [plugin] {string | string[]} - Use an installed package containing helper and/or partial overrides
@property [helper] {string | string[]} - handlebars helper files to override or extend the default set
@property [partial] {string | string[]} - handlebars partial files to override or extend the default set
@property [module-index-format] {string} - 
@property [global-index-format] {string} - 
@property [param-list-format] {string} - 
@property [property-list-format] {string} - 
@property [member-index-format] {string} - 
@property [group-by] {string[]} - 
*/

/**
@external Transform
@see https://nodejs.org/api/stream.html#stream_class_stream_transform
*/
