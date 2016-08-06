'use strict'
const jsdocApi = require('jsdoc-api')
const path = require('path')

/* cache location */
jsdocApi.cache.dir = path.join(require('os').tmpdir(), 'jsdoc2md')

/**
 * @module jsdoc-to-markdown
 * @typicalname jsdoc2md
 * @example
 * const jsdoc2md = require('jsdoc-to-markdown')
 */
module.exports = {
  /**
   * Returns markdown documentation from jsdoc-annoted source code.
   *
   * @param src {string|string[]} - input files
   * @param [options] {object} - the options
   * @return {Promise}
   * @fulfil {string} - the rendered docs
   * @category async
   * @example
   * Pass in filepaths (`**` glob matching supported) of javascript source files:
   * ```js
   * > jsdoc2md.render('lib/*.js').then(console.log)
   * ```
   */
  render (src, options) {
    const jsdocParse = require('jsdoc-parse')
    const dmd = require('dmd')
    options = options || {}
    return getJsdoc(src, options)
      .then(jsdocData => jsdocParse(jsdocData, options))
      .then(templateData => dmd(templateData, options))
  },

  /**
   * Returns markdown documentation from jsdoc-annoted source code.
   *
   * @param src {string|string[]} - input files
   * @param [options] {object} - the options
   * @return {string}
   * @engine nodejs >= 0.12
   * @category sync
   * @example
   * const docs = jsdoc2md.renderSync('lib/*.js')
   */
  renderSync (src, options) {
    const jsdocParse = require('jsdoc-parse')
    const dmd = require('dmd')
    options = options || {}
    const jsdocData = getJsdoc(src, options, true)
    const templateData = jsdocParse(jsdocData, options)
    return dmd(templateData, options)
  },

  /**
   * Get the template data (jsdoc-parse output)
   * @param src {string|string[]} - input files
   * @param [options] {object}
   * @param [options.sort-by] {string|string[]} - Sort by one of more properties, e.g. `[ 'kind', 'category' ]`.
   * @category async
   * @returns {Promise}
   * @fulfil {object[]}
   */
  getTemplateData (src, options) {
    const jsdocParse = require('jsdoc-parse')
    return getJsdoc(src, options)
      .then(jsdocData => jsdocParse(jsdocData, options))
  },

  /**
   * Get the template data (jsdoc-parse output)
   * @param src {string|string[]} - input files
   * @param [options] {object}
   * @param [options.sort-by] {string|string[]} - Sort by one of more properties, e.g. `[ 'kind', 'category' ]`.
   * @engine nodejs >= 0.12
   * @category sync
   * @returns {object[]}
   */
  getTemplateDataSync (src, options) {
    const jsdocParse = require('jsdoc-parse')
    return jsdocParse(getJsdoc(src, options, true), options)
  },

  /**
   * Get the jsdoc data (jsdoc-api explain output)
   * @param src {string|string[]} - input files
   * @param [options] {object}
   * @returns {Promise}
   * @category async
   * @fulfil {object[]}
   */
  getJsdocData (src, options) {
    return getJsdoc(src, options)
  },

  /**
   * Get the jsdoc data (jsdoc-api explain output)
   * @param src {string|string[]} - input files
   * @param [options] {object}
   * @engine nodejs >= 0.12
   * @category sync
   * @returns {object[]}
   */
  getJsdocDataSync (src, options) {
    return getJsdoc(src, options, true)
  },

  /**
   * Clear the cache.
   * @returns {Promise}
   */
  clear () {
    return jsdocApi.cache.clear()
  }
}

function getJsdoc (src, options, sync) {
  options = options || {}
  const jsdocOptions = { files: src, pedantic: true, cache: true }
  if (options.html) jsdocOptions.html = true
  return sync ? jsdocApi.explainSync(jsdocOptions) : jsdocApi.explain(jsdocOptions)
}
