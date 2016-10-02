'use strict'
const stats = require('jsdoc2md-stats')
const jsdocApi = require('jsdoc-api')
const dmd = require('dmd')
const os = require('os')
const DmdOptions = require('./dmd-options')
const JsdocOptions = require('./jsdoc-options')

/**
 * @module jsdoc-to-markdown
 * @example
 * const jsdoc2md = require('jsdoc-to-markdown')
 */

/**
 * @alias module:jsdoc-to-markdown
 * @typicalname jsdoc2md
*/
class JsdocToMarkdown {
  /**
   * Returns markdown documentation from jsdoc-annoted source code.
   *
   * @param [options] {JsdocOptions | DmdOptions} - the options
   * @return {Promise}
   * @fulfil {string} - the rendered docs
   * @category async
   * @example
   * Pass in filepaths (`**` glob matching supported) of javascript source files:
   * ```js
   * > jsdoc2md.render('lib/*.js').then(console.log)
   * ```
   */
  render (options) {
    options = options || {}
    const dmdOptions = new DmdOptions(options)
    if (options.data) {
      return dmd.async(options.data, dmdOptions)
    } else {
      return this.getTemplateData(options)
        .then(templateData => dmd.async(templateData, dmdOptions))
    }
  }

  /**
   * Returns markdown documentation from jsdoc-annoted source code.
   *
   * @param [options] {JsdocOptions | DmdOptions} - the options
   * @return {string}
   * @engine nodejs >= 0.12
   * @category sync
   * @example
   * const docs = jsdoc2md.renderSync('lib/*.js')
   */
  renderSync (options) {
    options = options || {}
    const dmdOptions = new DmdOptions(options)
    if (options.data) {
      return dmd(options.data, dmdOptions)
    } else {
      return dmd(this.getTemplateDataSync(options), dmdOptions)
    }
  }

  /**
   * Returns template data (jsdoc-parse output).
   *
   * @param [options] {JsdocOptions} - the options
   * @return {Promise}
   * @fulfil {object[]} - the json data
   * @category async
   */
  getTemplateData (options) {
    options = options || {}
    const jsdocParse = require('jsdoc-parse')
    return this.getJsdocData(options)
      .then(jsdocParse)
  }

  /**
   * Returns template data (jsdoc-parse output).
   *
   * @param [options] {JsdocOptions} - the options
   * @return {object[]}
   * @category sync
   */
  getTemplateDataSync (options) {
    options = options || {}
    const jsdocParse = require('jsdoc-parse')
    const jsdocData = this.getJsdocDataSync(options)
    return jsdocParse(jsdocData, options)
  }

  /**
   * Returns raw jsdoc data.
   *
   * @param [options] {JsdocOptions} - the options
   * @return {Promise}
   * @fulfil {object[]}
   * @category async
   */
  getJsdocData (options) {
    const jsdocOptions = new JsdocOptions(options)
    return jsdocApi.explain(jsdocOptions)
  }

  /**
   * Returns raw jsdoc data.
   *
   * @param [options] {JsdocOptions} - the options
   * @return {object[]}
   * @category sync
   */
  getJsdocDataSync (options) {
    const jsdocOptions = new JsdocOptions(options)
    return jsdocApi.explainSync(jsdocOptions)
  }

  /**
   * Clear the cache.
   * @returns {Promise}
   * @category async
   */
  clear () {
    return jsdocApi.cache.clear().then(() => dmd.cache.clear())
  }

  getNamepaths (options) {
    return this.getTemplateData(options)
      .then(data => {
        const namepaths = {}
        const kinds = [
          'module', 'class', 'constructor', 'mixin', 'member',
          'namespace', 'constant', 'function', 'event', 'typedef', 'external'
        ]
        kinds.forEach(kind => {
          namepaths[kind] = data
            .filter(identifier => {
              return identifier.kind === kind
            })
            .map(identifier => identifier.longname)
        })
        return namepaths
      })
  }
}

module.exports = JsdocToMarkdown

module.exports = new (stats(JsdocToMarkdown, require('../../package').version))()
