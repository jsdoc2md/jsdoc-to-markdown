'use strict'
const jsdocParse = require('jsdoc-parse')
const dmd = require('dmd')

/**
 * @module jsdoc-to-markdown
 * @example
 * const jsdoc2md = require('jsdoc-to-markdown')
 */

/**
 * @extends {EventEmitter}
 * @alias module:jsdoc-to-markdown
 */
class Jsdoc2md {
  /**
   * Returns markdown documentation from jsdoc-annoted source code.
   *
   * @param {string|string[]} - input files
   * @param [options] {object} - the options
   * @return {Promise}
   * @fulfil {string} - the rendered docs
   * @example
   * Pass in filepaths (`**` glob matching supported) of javascript source files:
   * ```js
   * > jsdoc2md({ src: 'lib/*.js' }).pipe(process.stdout)
   * ```
   */
  render (src, options) {
    options = options || {}
    return getJsdoc(src, options)
      .then(jsdocData => jsdocParse(jsdocData, options))
      .then(templateData => dmd(templateData, options))
  }

  /**
   * Returns markdown documentation from jsdoc-annoted source code.
   *
   * @param {string|string[]} - input files
   * @param [options] {object} - the options
   * @return {string}
   * @example
   * const docs = jsdoc2md.renderSync('lib/*.js')
   */
  renderSync (src, options) {
    options = options || {}
    const jsdocData = getJsdoc(src, options, true)
    const templateData = jsdocParse(jsdocData, options)
    return dmd(templateData, options)
  }

  /**
   * Get the template data (jsdoc-parse output)
   * @param {string|string[]} - input files
   * @param [options] {object}
   * @param [options.private] {boolean} - Include identifier documentation marked as `@private` in the output
   * @param [options.sort-by] {string|string[]} - Sort by one of more properties, e.g. `[ 'kind', 'category' ]`.
   * @returns {Promise}
   * @resolve {object[]}
   */
  getJsdocData (src, options) {
    return getJsdoc(src, options)
      .then(getJsdocParse.bind(null, options))
  }

  /**
   * Get the template data (jsdoc-parse output)
   * @param {string|string[]} - input files
   * @param [options] {object}
   * @param [options.private] {boolean} - Include identifier documentation marked as `@private` in the output
   * @param [options.sort-by] {string|string[]} - Sort by one of more properties, e.g. `[ 'kind', 'category' ]`.
   * @returns {object[]}
   */
  getJsdocDataSync (src, options) {
    const output = getJsdocParse(options, getJsdoc(src, options, true))
    return output
  }

  /**
   * Clear the cache.
   * @returns {Promise}
   */
  clear () {
    const jsdocApi = require('jsdoc-api')
    return jsdocApi.cache.clear()
  }
}

function getJsdoc (src, options, sync) {
  const jsdocApi = require('jsdoc-api')
  options = options || {}
  const jsdocOptions = { files: src, pedantic: true, cache: true }
  if (options.html) jsdocOptions.html = true
  return sync ? jsdocApi.explainSync(jsdocOptions) : jsdocApi.explain(jsdocOptions)
}

function getJsdocParse (options, explainOutput) {
  options = options || {}
  return jsdocParse(explainOutput, options)
}

const jsdoc2md = new Jsdoc2md()
module.exports = jsdoc2md
