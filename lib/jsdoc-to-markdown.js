'use strict'
var jsdocParse = require('jsdoc-parse')
var dmd = require('dmd')
var streamConnect = require('stream-connect')

/**
 * @module jsdoc-to-markdown
 * @typicalname jsdoc2md
 * @example
 * var jsdoc2md = require("jsdoc-to-markdown")
 */

/**
 * Transforms jsdoc into markdown documentation.
 * @param [options] {module:dmd~DmdOptions | module:jsdoc-parse~ParseOptions} - the options
 * @return {TransformStream}
 * @alias module:jsdoc-to-markdown
 * @example
 * Two ways to use `jsdoc2md`. Either pass in filepaths (`**` glob matching supported) of javascript source files:
 * ```js
 * > jsdoc2md({ src: "lib/*.js" }).pipe(process.stdout)
 * ```
 * or pipe in source code from another source:
 * ```js
 * > fs.createReadStream("lib/main.js").pipe(jsdoc2md()).pipe(process.stdout)
 * ```
 */
function renderStream (options) {
  options = options || {}
  var src = options.src
  var dmdStream = dmd(options)
  var jsdocStream

  if (src) {
    jsdocStream = jsdocParse(options)

    if (options.json || options.stats) {
      return jsdocStream
    } else {
      jsdocStream.pipe(dmdStream)
      jsdocStream.on('error', dmdStream.emit.bind(dmdStream, 'error'))
      return dmdStream
    }
  } else {
    jsdocStream = jsdocParse(options)

    if (options.json || options.stats) {
      return jsdocStream
    } else {
      return streamConnect(jsdocStream, dmdStream)
    }
  }
}


var stats = require('jsdoc2md-stats')
function Jsdoc2md1 () {}
Jsdoc2md1.prototype.renderStream = renderStream

var jsdoc2md1 = new (stats(Jsdoc2md1, require('../package').version))()

module.exports = jsdoc2md1.renderStream.bind(jsdoc2md1)
