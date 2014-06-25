[![view on npm](http://img.shields.io/npm/v/jsdoc-to-markdown.svg)](https://www.npmjs.org/package/jsdoc-to-markdown)
[![npm module downloads per month](http://img.shields.io/npm/dm/jsdoc-to-markdown.svg)](https://www.npmjs.org/package/jsdoc-to-markdown)
[![Dependency Status](https://david-dm.org/75lb/jsdoc-to-markdown.svg)](https://david-dm.org/75lb/jsdoc-to-markdown)
![Analytics](https://ga-beacon.appspot.com/UA-27725889-32/jsdoc-to-markdown/README.md?pixel)

***work in progress, unstable, draft documentation***

#jsdoc-to-markdown
Pass your source code in, get markdown API documentation out.. In development, any feedback welcome.

##Install
Ensure [node.js](http://nodejs.org) is installed first. Linux/Mac users may need to run the following commands with `sudo`.

###Globally
```sh
$ npm install -g local-web-server
```

###Bundled with your project
```sh
$ npm install local-web-server --save-dev
```

Then add an `docs` build task to your `package.json` scripts, e.g.:
```json
{
  "name": "my-web-app",
  "version": "1.0.0",
  "scripts": {
    "docs": "jsdoc2md --index lib/*.js"
  }
}
```
This approach abstracts generator implentation details away, saving your collaborators the hassle of installing/learning `jsdoc-to-markdown`. You can document that docs are generated like so:

```sh
$ npm run docs
```

##Usage
```
jsdoc-to-markdown
Renders jsdoc documentation as markdown

Usage
$ jsdoc2md <options> <source_files>

-t, --template <string>  A custom handlebars template to insert the rendered documentation into,
                         overriding the default
-p, --preset <string>    Use a preset template ('default', 'global' or 'modules')
-j, --json               Output the template data only
-h, --help               Print usage information
--src <array>            The javascript source files. The default option.
--index                  Include an index for each module and class, linking to members
--skip-heading           Skip the module heading
```

##examples
All these projects have readme files rendered by `jsdoc2md`:
* https://github.com/75lb/handbrake-js
* https://github.com/75lb/array-tools
* https://github.com/75lb/file-set
* https://github.com/75lb/command-line-args
