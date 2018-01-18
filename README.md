[![view on npm](http://img.shields.io/npm/v/jsdoc-to-markdown.svg)](https://www.npmjs.org/package/jsdoc-to-markdown)
[![npm module downloads](http://img.shields.io/npm/dt/jsdoc-to-markdown.svg)](https://www.npmjs.org/package/jsdoc-to-markdown)
[![Build Status](https://travis-ci.org/jsdoc2md/jsdoc-to-markdown.svg?branch=master)](https://travis-ci.org/jsdoc2md/jsdoc-to-markdown)
[![Coverage Status](https://coveralls.io/repos/github/jsdoc2md/jsdoc-to-markdown/badge.svg?branch=master)](https://coveralls.io/github/jsdoc2md/jsdoc-to-markdown?branch=master)
[![Dependency Status](https://david-dm.org/jsdoc2md/jsdoc-to-markdown.svg)](https://david-dm.org/jsdoc2md/jsdoc-to-markdown)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)
[![Join the chat at https://gitter.im/jsdoc2md/jsdoc2md](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/jsdoc2md/jsdoc2md?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# jsdoc-to-markdown
Generates markdown API documentation from [jsdoc](http://usejsdoc.org) annotated source code. Useful for injecting API docs into project README files.

## Synopsis

1\. Document your code using valid jsdoc comments.

```js
/**
 * A quite wonderful function.
 * @param {object} - privacy gown
 * @param {object} - security
 * @returns {survival}
 */
function protection (cloak, dagger) {}
```

2\. Run a command.

```sh
$ jsdoc2md example.js
```

3\. Get markdown output.

```markdown
## protection(cloak, dagger) ⇒ <code>survival</code>
A quite wonderful function.

**Kind**: global function

| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| cloak  | <code>object</code> | privacy gown |
| dagger | <code>object</code> | security     |

```

## Install

```
$ npm install -g jsdoc-to-markdown
```

## See also

* [API documentation](https://github.com/jsdoc2md/jsdoc-to-markdown/blob/master/docs/API.md)
* The [wiki](https://github.com/jsdoc2md/jsdoc-to-markdown/wiki) for example output, FAQs, tutorials, plugins, use with gulp/grunt etc.

* * *

&copy; 2014-18 Lloyd Brookes <75pound@gmail.com>.
