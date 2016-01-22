'use strict'
var jsdocApi = require('jsdoc-api')
var jsdocParse = require('jsdoc-parse')
var TemplateBuilder = require('bowie/lib/template-builder')
var dmd = require('dmd')
var streamConnect = require('stream-connect')
var bowie = require('bowie')
var collectJson = require('collect-json')
var DataClass = require('jsdoc-parse-bowie/data')

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
    var jsdocParseStream = jsdocParse({ stats: true })
    return streamConnect(jsdocStream, jsdocParseStream)
  } else {
    var jsdocParseStream = jsdocParse()
    var fixStream = collectJson(function (data) {
      data = data.map(d => {
        d.parentId = d.memberof
        return d
      })
      return JSON.stringify(data)
    })
    var bowieStream = bowie.createStream(dmd)

    return streamConnect(jsdocStream, jsdocParseStream, fixStream, bowieStream)
  }
}
