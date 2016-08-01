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
      .catch(err => {
        console.error(err.stack)
      })
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
   * @param {string|string[]} - input files
   * @param [options] {object} - the options
   * @returns {Duplex}
   */
  createRenderStream (src, options) {
    const PassThrough = require('stream').PassThrough
    const stream = new PassThrough()
    options = options || {}
    this.render(src, options).then(stream.end.bind(stream))
    return stream
  }

  /**
   * Get the template data (jsdoc-parse output)
   * @param {string|string[]} - input files
   * @returns {Promise}
   * @fulfil {object[]}
   */
  getTemplateData (src, options) {
    return getJsdoc.call(this, src, options)
      .then(getJsdocParse.bind(this, options))
      .then(data => {
        return data
      })
  }

  /**
   * Get the template data (jsdoc-parse output)
   * @param {string|string[]} - input files
   * @returns {object[]}
   */
  getTemplateDataSync (src, options) {
    const output = getJsdocParse.call(this, options, getJsdoc.call(this, src, options, true))
    return output
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
