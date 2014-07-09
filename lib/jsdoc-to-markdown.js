var fileSet = require("file-set"),
    boil = require("boil-js"),
    mfs = require("more-fs"),
    path = require("path"),
    util = require("util"),
    mfs = require("more-fs"),
    a = require("array-tools"),
    parse = require("./parse");

/**
@module
@alias jsdoc2md
@example
```js
var jsdoc2md = require("jsdoc-to-markdown");
```
*/
exports.render = render;

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
    default: boil.compile(mfs.read(path.resolve(__dirname, "../presets/default.hbs"))),
    index: boil.compile(mfs.read(path.resolve(__dirname, "../presets/index.hbs"))),
    globals: boil.compile(mfs.read(path.resolve(__dirname, "../presets/globals.hbs"))),
    modules: boil.compile(mfs.read(path.resolve(__dirname, "../presets/modules.hbs")))
};

/**
@param {object} - The render options
@param {string} [options.template] - A handlebars template to insert your documentation into. 
@param {string} [options.preset] - Choose from one of the built-in templates
@param {boolean} [options.json] - Return the JSON template data only
@param {string[]} [options.src] - The javascript source files
@param {boolean} [options.private] - Include symbols marked @private in the output
@param {number} [options.heading-depth] - Root heading depth, defaults to 2.
@param {module:jsdoc-to-markdown~onRender} - a callback invoked on completion
@alias module:jsdoc-to-markdown.render
*/
function render(options, done){
    options = options || {};
    options.src = fileSet(options.src).files;
    options.preset = options.preset || "default";
    options.index = typeof options.index === "boolean" ? options.index : true;
    options["heading-depth"] = options["heading-depth"] || 2;
    
    if (!options.src.length){
        done(new Error("specify at least one source file"));
        return;
    }

    function renderTemplate(data){
        if (options.template){
            var template = mfs.read(options.template);
            if (template){
                return boil.render(template, data);
            } else {
                done(new Error(template === null ? "Template file doesn't exist" : "Template file is empty"));
            }
        } else {
            return compiled[options.preset](data);
        }
    }
    
    parse(options, function(err, data){
        if (options.json){
            done(null, JSON.stringify(data, null, "  "));
        } else {
            done(null, renderTemplate(data));
        }
    });
}


/**
Called by `jsdoc2md.render()` on completion.
@callback module:jsdoc-to-markdown~onRender
@param {object} err - An error instance if applicable, else `null`
@param {string} result - the rendered markdown 
*/