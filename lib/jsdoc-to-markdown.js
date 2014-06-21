var fileSet = require("file-set"),
    boil = require("boil-js"),
    mfs = require("more-fs"),
    path = require("path"),
    cp = require("child_process"),
    util = require("util"),
    mfs = require("more-fs"),
    a = require("array-tools");

exports.render = render;

var partials = fileSet(path.resolve(__dirname, "../partials/*.hbs"));
partials.files.forEach(function(file){
    boil.registerPartial(
        path.basename(file, ".hbs"),
        mfs.read(file)
    );
});

var helpers = fileSet(path.resolve(__dirname, "../helpers/*.js"));
helpers.files.forEach(function(file){
    require(file)(boil);
});

var compiled = {
    default: boil.compile(mfs.read(path.resolve(__dirname, "../presets/default.hbs"))),
    globals: boil.compile(mfs.read(path.resolve(__dirname, "../presets/globals.hbs"))),
    modules: boil.compile(mfs.read(path.resolve(__dirname, "../presets/modules.hbs")))
};

function render(options, done){
    options.src = fileSet(options.src).files;
    
    if (!options.src){
        halt("specify at least one source file");
    }

    var jsdocTemplatePath = path.resolve(__dirname, "..", "lib"),
        cmd = util.format(
    		"%s -t %s %s",
    		path.resolve(__dirname, "..", "node_modules", ".bin", "jsdoc"),
    		jsdocTemplatePath,
    		options.src.join(" ")
    	);

    function renderTemplate(data){
        data.argv = options;
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
    cp.exec(cmd, { maxBuffer: 1000 * 1024 }, function(err, stdout, stderr){
        if (err) done(err);
        if (options.json){
            done(null, stdout);
        } else {
            done(null, renderTemplate(JSON.parse(stdout)));
        }
    });
}
