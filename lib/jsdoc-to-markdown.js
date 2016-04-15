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
module.exports = jsdoc2md

/**
 * Transforms jsdoc into markdown documentation.
 * @param [options] {module:dmd~DmdOptions | module:jsdoc-parse~ParseOptions} - the options
 * @return {external:TransformStream}
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
function jsdoc2md (options) {
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

/**
 * @external TransformStream
 * @see https://nodejs.org/api/stream.html#stream_class_stream_transform
 */
