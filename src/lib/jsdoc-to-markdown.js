'use strict'
const jsdocApi = require('jsdoc-api')
const dmd = require('dmd')
const os = require('os')
const UsageStats = require('app-usage-stats')

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
}

/**
 * jsdoc options
 */
class JsdocOptions {
  constructor (options) {
    options = options || {}

    /**
     * Set to false to disable memoisation cache. Defaults to true.
     */
    this.cache = options.cache === undefined ? true : options.cache

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

/**
 * dmd options
 */
class DmdOptions {
  constructor (options) {
    const arrayify = require('array-back')

    /**
    * The template the supplied documentation will be rendered into. Use the default or supply your own template for full control over the output.
    * @type {string}
    * @default
    */
    this.template = options.template || '{{>main}}'

    /**
     * The initial heading depth. For example, with a value of `2` the top-level markdown headings look like `"## The heading"`.
     * @type number
     * @default
     */
    this['heading-depth'] = options['heading-depth'] || 2

    /**
     * Specifies the default language used in @example blocks (for [syntax-highlighting](https://help.github.com/articles/github-flavored-markdown/#syntax-highlighting) purposes). In gfm mode, each @example is wrapped in a fenced-code block. Example usage: `--example-lang js`. Use the special value `none` for no specific language. While using this option, you can override the supplied language for any @example by specifying the `@lang` subtag, e.g `@example @lang hbs`. Specifying `@example @lang off` will disable code blocks for that example.
     * @type {string}
     * @default
     */
    this['example-lang'] = options['example-lang'] || 'js'

    /**
     * Use an installed package containing helper and/or partial overrides
     * @type {array}
     */
    this.plugin = arrayify(options.plugin)

    /**
     * handlebars helper files to override or extend the default set
     * @type {array}
     */
    this.helper = arrayify(options.helper)

    /**
     * handlebars partial files to override or extend the default set
     * @type {array}
     */
    this.partial = arrayify(options.partial)

    /**
     * Format identifier names in the [code](http://daringfireball.net/projects/markdown/syntax#code) style, (i.e. format using backticks or `<code></code>`)
     * @type {string}
     */
    this['name-format'] = options['name-format']

    /**
     * By default, dmd generates github-flavoured markdown. Not all markdown parsers render gfm correctly. If your generated docs look incorrect on sites other than Github (e.g. npmjs.org) try enabling this option to disable Github-specific syntax.
     * @type {boolean}
     */
    this['no-gfm'] = options['no-gfm']

    /**
     * Put `<hr>` breaks between identifiers. Improves readability on bulky docs.
     * @type {boolean}
     * @default false
     */
    this.separators = options.separators

    /**
     * none, grouped, table, dl
     * @type {string}
     * @default
     */
    this['module-index-format'] = options['module-index-format'] || 'dl'

    /**
     * none, grouped, table, dl
     * @type {string}
     * @default
     */
    this['global-index-format'] = options['global-index-format'] || 'dl'

    /**
     * Two options to render parameter lists: 'list' or 'table' (default). Table format works well in most cases but switch to list if things begin to look crowded / squashed.
     * @type {string}
     * @default
     */
    this['param-list-format'] = options['param-list-format'] || 'table'

    /**
     * list, table
     * @type {string}
     * @default
     */
    this['property-list-format'] = options['property-list-format'] || 'table'

    /**
     * grouped, list
     * @type {string}
     * @default
     */
    this['member-index-format'] = options['member-index-format'] || 'grouped'

    /**
     * Show identifiers marked `@private` in the output.
     * @type {boolean}
     * @default false
     */
    this.private = options.private
  }
}

module.exports = new JsdocToMarkdown()
