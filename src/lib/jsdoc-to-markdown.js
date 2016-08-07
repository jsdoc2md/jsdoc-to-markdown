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
 * @param [options] {module:jsdoc-to-markdown~JsdocOptions | module:jsdoc-to-markdown~DmdOptions} - the options
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
  const dmd = require('dmd').async
  const dmdOptions = new DmdOptions(options)
  return this.getTemplateData(options)
    .then(templateData => dmd(templateData, dmdOptions))
}

/**
 * Returns markdown documentation from jsdoc-annoted source code.
 *
 * @param [options] {module:jsdoc-to-markdown~JsdocOptions | module:jsdoc-to-markdown~DmdOptions} - the options
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
  const dmdOptions = new DmdOptions(options)
  return dmd(this.getTemplateDataSync(options), dmdOptions)
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
  const dmd = require('dmd')
  return jsdocApi.cache.clear().then(() => dmd.cache.clear())
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
  }
}
