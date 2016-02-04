'use strict'
var jsdocApi = require('jsdoc-api')
var jsdocParse = require('jsdoc-parse')
var dmd = require('dmd')
var dterm = require('dterm')
var bowie = require('bowie')
const collectAll = require('collect-all')

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
    return jsdocStream.pipe(jsdocParse({ stats: true }))
  } else if (options.json) {
    return jsdocStream.pipe(jsdocParse())
  } else {

    function onCollected (collected) {
      const vm = require('vm')
      const sandbox = { docs: collected[0], output: '' }
      vm.createContext(sandbox)

      if (options.template) {
        const template = options.template.replace(/`/g, '\\`')
        vm.runInContext(`output = \`${template}\``, sandbox, { displayErrors: true })
        return sandbox.output
      } else {
        return docs.render()
      }
    }

    const outputStream = collectAll(onCollected, { objectMode: true })

    return jsdocStream
      .pipe(jsdocParse())
      .pipe(bowie.createStream(!process.stdout.isTTY || options.md ? dmd : dterm, { extensions: options.extensions }))
      .pipe(outputStream)
  }
}
