'use strict'

/**
 * @module jsdoc-to-markdown
 * @typicalname jsdoc2md
 * @example
 * const jsdoc2md = require('jsdoc-to-markdown')
 */
exports.render = render
exports.renderSync = renderSync
exports.getTemplateData = getTemplateData
exports.getTemplateDataSync = getTemplateDataSync
exports.getJsdocData = getJsdocData
exports.getJsdocDataSync = getJsdocDataSync
exports.clear = clear

/**
 * Returns markdown documentation from jsdoc-annoted source code.
 *
 * @param [options] {object} - the options
 * @return {Promise}
 * @fulfil {string} - the rendered docs
 * @category async
 * @static
 * @example
 * Pass in filepaths (`**` glob matching supported) of javascript source files:
 * ```js
 * > jsdoc2md.render('lib/*.js').then(console.log)
 * ```
 */
function render (options) {
  options = options || {}
  const dmd = require('dmd')
  return this.getTemplateData(options)
    .then(templateData => dmd(templateData, options))
}

/**
 * Returns markdown documentation from jsdoc-annoted source code.
 *
 * @param [options] {object} - the options
 * @return {string}
 * @engine nodejs >= 0.12
 * @category sync
 * @static
 * @example
 * const docs = jsdoc2md.renderSync('lib/*.js')
 */
function renderSync (options) {
  options = options || {}
  const dmd = require('dmd')
  return dmd(this.getTemplateDataSync(options), options)
}

/**
 * Returns template data (jsdoc-parse output).
 *
 * @param [options] {module:jsdoc-to-markdown~JsdocOptions} - the options
 * @return {Promise}
 * @fulfil {object[]} - the json data
 * @category async
 * @static
 */
function getTemplateData (options) {
  options = options || {}
  const jsdocParse = require('jsdoc-parse')
  return getJsdocData(options)
    .then(jsdocParse)
}

/**
 * Returns template data (jsdoc-parse output).
 *
 * @param [options] {module:jsdoc-to-markdown~JsdocOptions} - the options
 * @return {object[]}
 * @category sync
 * @static
 */
function getTemplateDataSync (options) {
  options = options || {}
  const jsdocParse = require('jsdoc-parse')
  const jsdocData = getJsdocDataSync(options)
  return jsdocParse(jsdocData, options)
}

/**
 * Returns raw jsdoc data.
 *
 * @param [options] {module:jsdoc-to-markdown~JsdocOptions} - the options
 * @return {Promise}
 * @fulfil {object[]}
 * @category async
 * @static
 */
function getJsdocData (options) {
  options = options || {}
  const jsdocApi = require('jsdoc-api')
  const jsdocOptions = new JsdocOptions(options)
  return jsdocApi.explain(jsdocOptions)
}

/**
 * Returns raw jsdoc data.
 *
 * @param [options] {module:jsdoc-to-markdown~JsdocOptions} - the options
 * @return {object[]}
 * @category sync
 * @static
 */
function getJsdocDataSync (options) {
  options = options || {}
  const jsdocApi = require('jsdoc-api')
  const jsdocOptions = new JsdocOptions(options)
  return jsdocApi.explainSync(jsdocOptions)
}

/**
 * Clear the cache.
 * @returns {Promise}
 * @static
 */
function clear () {
  const jsdocApi = require('jsdoc-api')
  return jsdocApi.cache.clear()
}

/**
 * jsdoc options
 */
class JsdocOptions {
  constructor (options) {
    options = options || {}
    this.cache = true
    this.pedantic = true

    /**
     * One or more filenames to process. Either this or `source` must be supplied.
     * @type {string|string[]}
     */
    this.files = options.files

    /**
     * A string containing source code to process. Either this or `source` must be supplied.
     * @type {string}
     */
    this.source = options.source

    /**
     * The path to the configuration file. Default: path/to/jsdoc/conf.json.
     * @type {string}
     */
    this.configure = options.configure

    /**
     * Enable experimental parsing of `.html` files.
     * @type {boolean}
     */
    this.html = options.html
  }
}
