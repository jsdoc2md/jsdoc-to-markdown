"use strict";
var jsdocParse = require("jsdoc-parse");
var dmd = require("dmd");
var Transform = require("stream").Transform;

/**
@module jsdoc-to-markdown
@typicalname jsdoc2md
@example 
```js
var jsdoc2md = require("jsdoc-to-markdown");
```
*/
module.exports = jsdoc2md;

/**
Transforms jsdoc into markdown documentation.
@param [options] {module:dmd~DmdOptions | module:jsdoc-parse~ParseOptions} - the options
@return {external:TransformStream}
@alias module:jsdoc-to-markdown
@example
Two ways to use `jsdoc2md`. Either pass in filepaths (`**` glob matching supported) of javascript source files:
```js
> jsdoc2md({ src: "lib/*.js" }).pipe(process.stdout);
```
or pipe in source code from another source:
```js
> fs.createReadStream("lib/main.js").pipe(jsdoc2md()).pipe(process.stdout);
```
*/
function jsdoc2md(options){
    options = options || {};
    var src = options.src;
    var dmdStream = dmd(options);
    if (src){
        var jsdocStream = jsdocParse(options);
        
        if (options.json || options.stats){
            return jsdocStream;
        } else {
            jsdocStream.pipe(dmdStream);
            jsdocStream.on("error", dmdStream.emit.bind(dmdStream, "error"));
            return dmdStream;
        }
    } else {
        var jsdocStream = jsdocParse(options);

        if (options.json || options.stats){
            return jsdocStream;
        } else {
            var transform = new Transform();
            jsdocStream.pipe(dmdStream);
            jsdocStream.on("error", dmdStream.emit.bind(dmdStream, "error"));
        
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
}

/**
@external TransformStream
@see https://nodejs.org/api/stream.html#stream_class_stream_transform
*/
