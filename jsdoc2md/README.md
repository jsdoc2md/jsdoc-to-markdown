[![view on npm](http://img.shields.io/npm/v/jsdoc-to-markdown.svg)](https://www.npmjs.org/package/jsdoc-to-markdown)
[![npm module downloads](http://img.shields.io/npm/dt/jsdoc-to-markdown.svg)](https://www.npmjs.org/package/jsdoc-to-markdown)
[![Build Status](https://travis-ci.org/jsdoc2md/jsdoc-to-markdown.svg?branch=master)](https://travis-ci.org/jsdoc2md/jsdoc-to-markdown)
[![Dependency Status](https://david-dm.org/jsdoc2md/jsdoc-to-markdown.svg)](https://david-dm.org/jsdoc2md/jsdoc-to-markdown)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)
[![Join the chat at https://gitter.im/jsdoc2md/jsdoc2md](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/jsdoc2md/jsdoc2md?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

***The is the next version of the tool, a work in progress.***

# jsdoc-to-markdown
This tool generates API documentation from [jsdoc](http://usejsdoc.org) annotated source code.

There are two documentation templates built in: terminal and markdown. If you direct the output of jsdoc2md to a file it will use the markdown template, otherwise the more human-readable terminal template. Tweaking or building your own templates is simple.

You can inject jsdoc2md output into a template of your own, e.g. a README file.

## Synopsis
write documented code:
```js
/**
 * a quite wonderful function
 * @param {object} - privacy gown
 * @param {object} - security
 * @returns {survival}
 */
function protection(cloak, dagger){}
```

run a command:
```
$ jsdoc2md example/protection.js
```

get markdown docs! (in [github-flavored-markdown](https://help.github.com/articles/github-flavored-markdown/) format by default)
```handlebars
<a name="protection"></a>
## protection(cloak, dagger) ⇒ survival
a quite wonderful function

**Params**

| name   | type | description  |
| ------ | ---- | ------------ |
| cloak  | TYPE | privacy gown |
| dagger | TYPE | security     |
```

## Features

- Insert API documention into a README, or any arbitrary document.
- Customisable to a granular level. If the output doesn't suit you, change it.
- Package your modifications, publish to npm and share with others (e.g. [dmd-bitbucket](https://github.com/jsdoc2md/dmd-bitbucket))
- Accepts `.js` or `.html` input files (parsing html is experimental - [more](https://github.com/jsdoc2md/jsdoc-parse/))
- Extends jsdoc with some new tags ([more](https://github.com/jsdoc2md/jsdoc-parse/))
- Use any arbitrary tag, e.g. `@fulfil`, `@reject`, `@hatredlevel` etc.

## Example output
Some example output creating using `jsdoc2md`.

### Generated README files
These projects insert jsdoc2md output into a readme template.

<table>
  <thead>
    <tr><th>Project</th><th>Notes</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://github.com/75lb/handbrake-js">handbrake-js</a></td>
      <td>
        <p>A module exposing two methods and an inner class. The API docs are inserted into <a href="https://github.com/75lb/handbrake-js/tree/master/jsdoc2md">this README template</a> by this command: <br>
        <code>$ jsdoc2md --template jsdoc2md/README.hbs lib/*.js</code></p>
      </td>
    </tr>
    <tr>
      <td><a href="https://github.com/75lb/command-line-args">command-line-args</a></td>
      <td>Demonstrates documentation of ES2015 classes plus the <strong><code>@module</code></strong>, <strong><code>@typicalname</code></strong>, <strong><code>@throws</code></strong> and <strong><code>@alias</code></strong> tags.</td>
    </tr>
    <tr>
      <td><a href="https://github.com/75lb/array-tools#api-reference">array-tools</a></td>
      <td>Very simple module exporting a collection of static methods. Demonstrates use of <strong><code>@category</code></strong> to group identifiers in the member-list.</td>
    </tr>
    <tr>
      <td><a href="https://github.com/jesucarr/tokenbucket">jesucarr/tokenbucket</a></td>
      <td>Demonstrates <strong><code>--param-list-format list</code></strong> and the documentation of Promises using the <strong><code>@fulfil</code></strong> and <strong><code>@reject</code></strong> tags.</td>
    </tr>
    <tr>
      <td><a href="https://github.com/75lb/ansi-escape-sequences">ansi-escape-sequences</a></td>
      <td>Demonstrates usage of <strong><code>@enum {type}</code></strong> (rendered in table format).</td>
    </tr>
  </tbody>
</table>

${docs.render()}

* * *

&copy; 2015 Lloyd Brookes \<75pound@gmail.com\>. Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).
