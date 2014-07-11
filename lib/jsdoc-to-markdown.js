"use strict";
var fileSet = require("file-set"),
    boil = require("boil-js"),
    mfs = require("more-fs"),
    path = require("path"),
    mfs = require("more-fs"),
    a = require("array-tools"),
    parse = require("jsdoc-parse"),
    Transform = require("stream").Transform;

/**
@module
@alias jsdoc2md
@example
```js
var jsdoc2md = require("jsdoc-to-markdown");
```
*/
exports.render = render;
exports.createRenderStream = createRenderStream;

var partials = fileSet(path.resolve(__dirname, "../partials/**/*.hbs"));
partials.files.forEach(function(file){
    boil.registerPartial(
        path.basename(file, ".hbs"),
        mfs.read(file)
    );
});

var helpers = fileSet(path.resolve(__dirname, "../helpers/**/*.js"));
helpers.files.forEach(function(file){
    require(file)(boil);
});

var compiled = {
    default: boil.compile(mfs.read(path.resolve(__dirname, "../presets/default.hbs")))
};

function Options(options){
    options = options || {};
    this.preset = options.preset || "default";
    this["heading-depth"] = options["heading-depth"] || 1;
    this.template = options.template;
    this.json = options.json;
    this.private = options.private;
}

/**
Renders the jsdoc documentation from the specified source files as markdown.
@param {string | string[]} - The javascript source file(s) - required. 
@param {object} - The render options
@param {string} [options.template] - A handlebars template to insert your documentation into. 
@param {string} [options.preset] - Choose from one of the built-in templates
@param {boolean} [options.json] - Return the JSON template data only
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
  - [preset] `string` - Choose from one of the built-in templates
  - [json] `boolean` - Return the JSON template data only
  - [private] `boolean` - Include symbols marked @private in the output
  - [heading-depth] `number` - Root heading depth, defaults to 2.

* **Returns**: `stream` - A readable stream containing the rendered markdown

etc.
etc.
```
*/
function render(sourceFiles, options){
    options = new Options(options);
    options.src = fileSet(sourceFiles).files;
    
    if (!options.src.length){
        throw new Error("specify at least one source file");
    }

    return parse(options).pipe(createRenderStream(options));
}

/**
@param {object} - The render options, as specified in `render()`
@return {stream} a stream containing the rendered markdown
@example
```js
process.stdin
    .pipe(jsdoc2md.createRenderStream({ template: "api.hbs" }))
    .pipe(process.stdout);
```
@alias module:jsdoc-to-markdown.createRenderStream
*/
function createRenderStream(options){
    options = new Options(options);
    function renderTemplate(data){
        /* make the command-line args available to the templates */
        data.argv = options;
        data._headingDepth = 0;
        data._indexDepth = 0;

        if (options.template){
            var template = mfs.read(options.template);
            if (template){
                return boil.render(template, data);
            } else {
                throw new Error(template === null ? "Template file doesn't exist" : "Template file is empty");
            }
        } else {
            return compiled[options.preset](data);
        }
    }
    
    var renderer = new Transform();
    renderer.json = new Buffer(0);
    renderer._transform = function(chunk, enc, done){
        if (chunk) this.json = Buffer.concat([ this.json, chunk ]);
        done();
    };
    renderer._flush = function(){
        try {
            var data = JSON.parse(this.json);
        } catch(err){
            err.message = "input json failed to parse: " + err.message;
            throw err;
        }
        if (options.json){
            this.push(this.json);
        } else if(options.stats) {
            var stats = {};
            stats.memberof = a.unique(a.pluck(data, "memberof"));
            stats.class = a.pluck(a.where(data, { kind: "class" }), "longname");
            stats.module = a.pluck(a.where(data, { kind: "module" }), "longname");
            
            this.push(JSON.stringify(stats, null, "  "));
            
        } else {
            this.push(renderTemplate(data));
        }
        this.push(null);
    };
    return renderer;
}