'use strict'
var jsdocApi = require('jsdoc-api')
var jsdocParse = require('jsdoc-parse')
var dmd = require('dmd')
var dterm = require('dterm')
var streamConnect = require('stream-connect')
var bowie = require('bowie')
var collectJson = require('collect-json')

/**
 * @module jsdoc-to-markdown
 * @typicalname jsdoc2md
 * @example
 * ```js
 * var jsdoc2md = require("jsdoc-to-markdown")
 * ```
 */
module.exports = jsdoc2md

/**
 * Transforms jsdoc into markdown documentation.
 * @param [options] {module:dmd~DmdOptions | module:jsdoc-parse~ParseOptions} - the options
 * @return {Duplex}
 * @alias module:jsdoc-to-markdown
 * @example
 * Two ways to use `jsdoc2md`. Either pass in filepaths (`**` glob matching supported) of javascript  * source files:
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

  var jsdocStream = jsdocApi.createExplainStream({ files: options.src, pedantic: true })

  if (options.stats) {
    return streamConnect(jsdocStream, jsdocParse({ stats: true }))
  } else if (options.json) {
    return streamConnect(jsdocStream, jsdocParse())
  } else {

    return streamConnect(
      jsdocStream,
      jsdocParse(),
      bowie.createStream(options.md ? dmd : dterm, { extensions: options.extensions })
    )
  }
}
