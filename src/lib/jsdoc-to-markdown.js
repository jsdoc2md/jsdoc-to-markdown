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
        session: 1,
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
        interface: 4
      }
    })
    this._usage.loadSync()
    this._interface = 'api'
    this._sendOptions = { timeout: 2000 }

    process.on('exit', () => this._usage.saveSync())
  }

  _hit (method, options) {
    const metrics = Object.assign({ session: 1 }, options)
    for (const key in metrics) {
      metrics[key] = 1
    }
    return this._usage.hit({ name: method.name, interface: this._interface }, metrics, this._sendOptions)
  }

  _stats (method, options) {
    return Promise.all([
      this._hit(method, options),
      method.call(this, options)
        .catch(err => {
          this._usage.exception(err.stack, 1, {
            hitParams: new Map([[ 'cd', method.name ]])
          })
          return this._usage.send(this._sendOptions)
            .then(() => { throw err })
        })
    ]).then(results => results[1])
  }

  _statsSync (method, options) {
    this._hit(method, options)
    try {
      return method.call(this, options)
    } catch (err) {
      this._usage.exception(err.stack, 1, {
        hitParams: new Map([[ 'cd', method.name ]])
      })
      this._usage.send(this._sendOptions)
        .catch(err => {
          // catch warning
        })
    }
  }

  /**
   * Returns markdown documentation from jsdoc-annoted source code.
   *
   * @param [options] {module:jsdoc-to-markdown~JsdocOptions | module:jsdoc-to-markdown~DmdOptions} - the options
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
   * @param [options] {module:jsdoc-to-markdown~JsdocOptions | module:jsdoc-to-markdown~DmdOptions} - the options
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
   * @param [options] {module:jsdoc-to-markdown~JsdocOptions} - the options
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
   * @param [options] {module:jsdoc-to-markdown~JsdocOptions} - the options
   * @return {object[]}
   * @category sync
   */
  getTemplateDataSync (options) {
    return this._statsSync(super.getTemplateDataSync, options)
  }

  /**
   * Returns raw jsdoc data.
   *
   * @param [options] {module:jsdoc-to-markdown~JsdocOptions} - the options
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
   * @param [options] {module:jsdoc-to-markdown~JsdocOptions} - the options
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
