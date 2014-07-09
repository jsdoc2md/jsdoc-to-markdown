var cp = require("child_process"),
    path = require("path"),
    util = require("util");

module.exports = parse;

function dataFix(options, data){
    /* filter out the @ignore and @private doclets, unless the user asked for them */
    data = data.filter(function(item){
        if (options.private){
            return item.ignore === undefined;
        } else {
            return item.ignore === undefined && item.access !== "private";
        }
    });
    
    /* make the command-line args available to the templates */
    data.argv = options;
    
    return data;
}

function parse(options, done){
    var cmd = util.format(
		"%s -t %s %s",
		path.resolve(__dirname, "..", "node_modules", ".bin", "jsdoc"),
		path.resolve(__dirname, "..", "lib"),
		options.src.join(" ")
	);

    cp.exec(cmd, { maxBuffer: 1000 * 1024 }, function(err, stdout){
        if (err){
            done(err); 
            return;
        }

        try {
            var data = dataFix(options, JSON.parse(stdout));
            done(null, data);
        } catch(err){
            done(err);
        }
        
    });
}
