'use strict'
const jsdocApi = require('jsdoc-api')
const dmd = require('dmd')
const os = require('os')
const UsageStats = require('app-usage-stats')
const DmdOptions = require('./dmd-options')
const JsdocOptions = require('./jsdoc-options')

/**
 * @module jsdoc-to-markdown
 * @example
 * const jsdoc2md = require('jsdoc-to-markdown')
 */

class JsdocToMarkdownCore {
  render (options) {
    options = options || {}
    const dmdOptions = new DmdOptions(options)
    return this.getTemplateData(options)
      .then(templateData => dmd.async(templateData, dmdOptions))
  }

  renderSync (options) {
    options = options || {}
    const dmdOptions = new DmdOptions(options)
    return dmd(this.getTemplateDataSync(options), dmdOptions)
  }

  getTemplateData (options) {
    options = options || {}
    const jsdocParse = require('jsdoc-parse')
    return this.getJsdocData(options)
      .then(jsdocParse)
  }

  getTemplateDataSync (options) {
    options = options || {}
    const jsdocParse = require('jsdoc-parse')
    const jsdocData = this.getJsdocDataSync(options)
    return jsdocParse(jsdocData, options)
  }

  getJsdocData (options) {
    const jsdocOptions = new JsdocOptions(options)
    return jsdocApi.explain(jsdocOptions)
  }

  getJsdocDataSync (options) {
    const jsdocOptions = new JsdocOptions(options)
    return jsdocApi.explainSync(jsdocOptions)
  }

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

/**
 * @alias module:jsdoc-to-markdown
 * @extends JsdocToMarkdownCore
 * @typicalname jsdoc2md
*/
class JsdocToMarkdown extends JsdocToMarkdownCore {
  constructor () {
    super()
    this._usage = new UsageStats('UA-70853320-3', {
      name: 'jsdoc2md',
      version: require('../../package').version,
      sendInterval: 1000 * 60 * 60 * 24, // 24 hours
      metricMap: {
        invocation: 1,
        source: 2,
        configure: 3,
        html: 4,
        template: 5,
        'heading-depth': 6,
        'example-lang': 7,
        plugin: 8,
        helper: 9,
        partial: 10,
        'name-format': 11,
        'no-gfm': 12,
        separators: 13,
        'module-index-format': 14,
        'global-index-format': 15,
        'param-list-format': 16,
        'property-list-format': 17,
        'member-index-format': 18,
        private: 19,
        cache: 20
      },
      dimensionMap: {
        interface: 4,
        exception: 5
      }
    })
    this._usage.loadSync()
    this._interface = 'api'
    this._sendOptions = { timeout: 2000 }

    process.on('exit', () => this._usage.saveSync())
  }

  _hit (method, options, exception) {
    const metrics = Object.assign({ invocation: 1 }, options)
    for (const key in metrics) {
      metrics[key] = 1
    }
    const dimensions = { name: method.name, interface: this._interface }
    if (exception) dimensions.exception = exception
    return this._usage.hit(dimensions, metrics, this._sendOptions)
  }

  _stats (method, options) {
    options = options || {}
    if (options['no-usage-stats']) this._usage.disable()
    return method.call(JsdocToMarkdownCore.prototype, options)
      .then(output => {
        return this._hit(method, options)
          .then(() => output)
          .catch(() => output)
      })
      .catch(err => {
        return this._hit(method, options, err.toString())
          .then(() => { throw err })
          .catch(() => { throw err })
      })
  }

  _statsSync (method, options) {
    options = options || {}
    if (options['no-usage-stats']) this._usage.disable()
    try {
      const output = method.call(JsdocToMarkdownCore.prototype, options)
      this._hit(method, options)
      return output
    } catch (err) {
      this._hit(method, options, err.toString())
      throw err
    }
  }

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
    return this._stats(super.render, options)
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
    return this._statsSync(super.renderSync, options)
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
    return this._stats(super.getTemplateData, options)
  }

  /**
   * Returns template data (jsdoc-parse output).
   *
   * @param [options] {JsdocOptions} - the options
   * @return {object[]}
   * @category sync
   */
  getTemplateDataSync (options) {
    return this._statsSync(super.getTemplateDataSync, options)
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
    return this._stats(super.getJsdocData, options)
  }

  /**
   * Returns raw jsdoc data.
   *
   * @param [options] {JsdocOptions} - the options
   * @return {object[]}
   * @category sync
   */
  getJsdocDataSync (options) {
    return this._statsSync(super.getJsdocDataSync, options)
  }

  /**
   * Clear the cache.
   * @returns {Promise}
   * @category async
   */
  clear () {
    return this._stats(super.clear)
  }

  getNamepaths (options) {
    return this._stats(super.getNamepaths, options)
  }
}

module.exports = new JsdocToMarkdown()
