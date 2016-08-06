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
 * @param [options] {object} - the options
 * @return {Promise}
 * @fulfil {object[]} - the json data
 * @category async
 * @static
 */
function getTemplateData (options) {
  options = options || {}
  const pick = require('lodash.pick')
  const jsdocApi = require('jsdoc-api')
  const jsdocParse = require('jsdoc-parse')
  const jsdocDefaults = {
    pedantic: true,
    cache: true
  }
  return jsdocApi.explain(Object.assign(jsdocDefaults, options))
    .then(jsdocData => jsdocParse(jsdocData, { sortBy: options['sort-by']}))
}

/**
 * Returns template data (jsdoc-parse output).
 *
 * @param [options] {object} - the options
 * @return {object[]
 * @category sync
 * @static
 */
function getTemplateDataSync (options) {
  options = options || {}
  const jsdocParse = require('jsdoc-parse')
  const jsdocApi = require('jsdoc-api')
  const jsdocDefaults = {
    pedantic: true,
    cache: true
  }
  const jsdocData = jsdocApi.explainSync(Object.assign(jsdocDefaults, options))
  return jsdocParse(jsdocData, options)
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
