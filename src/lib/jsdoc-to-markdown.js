'use strict'
const version = require('../../package').version
const UsageStats = require('usage-stats')
const homePath = require('home-path')
const path = require('path')

const cacheDir = path.resolve(homePath(), '.jsdoc2md')
const jsdocApi = require('jsdoc-api')
const dmd = require('dmd')
jsdocApi.cache.dir = path.resolve(cacheDir, 'jsdoc-api')
dmd.cache.dir = path.resolve(cacheDir, 'dmd')

const usageStats = new UsageStats('UA-70853320-3', {
  name: 'jsdoc2md',
  version: version,
  dir: cacheDir
})

/**
 * @module jsdoc-to-markdown
 * @typicalname jsdoc2md
 * @example
 * const jsdoc2md = require('jsdoc-to-markdown')
 */
exports.render = function (options) {
  return stats('render', options, render)
}
exports.renderSync = function (options) {
  return stats('renderSync', options, renderSync, true)
}
exports.getTemplateData = function (options) {
  return stats('getTemplateData', options, getTemplateData)
}
exports.getTemplateDataSync = function (options) {
  return stats('getTemplateDataSync', options, getTemplateDataSync, true)
}
exports.getJsdocData = function (options) {
  return stats('getJsdocData', options, getJsdocData)
}
exports.getJsdocDataSync = function (options) {
  return stats('getJsdocDataSync', options, getJsdocDataSync, true)
}
exports.clear = function () {
  return stats('clear', null, clear)
}

/* exposed so the test suite can disable it */
exports._usageStats = usageStats

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
  const dmdOptions = new DmdOptions(options)
  return getTemplateData(options)
    .then(templateData => dmd.async(templateData, dmdOptions))
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
  const dmdOptions = new DmdOptions(options)
  return dmd(getTemplateDataSync(options), dmdOptions)
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
  const jsdocOptions = new JsdocOptions(options)
  return jsdocApi.explainSync(jsdocOptions)
}

/**
 * Clear the cache.
 * @returns {Promise}
 * @static
 */
function clear () {
  return jsdocApi.cache.clear().then(() => dmd.cache.clear())
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
  }
}

function stats (screenName, options, command, sync) {
  options = options || {}
  if (options['no-usage-stats']) {
    /* when disabled, all usageStats methods are no-ops */
    usageStats.disable()
    return command(options)
  } else {
    const debug = options.debug
    usageStats.start()
    usageStats.screenView(screenName)
    if (options) {
      Object.keys(options).forEach(option => {
        const dontSend = [ 'files', 'source', 'template' ]
        usageStats.event('option', option, dontSend.includes(option) ? undefined : options[option])
      })
    }
    const req = usageStats.end().send({ debug })
    if (debug) {
      req.then(response => {
        // responses = responses.map(response => {
        response.data = response.data ? response.data.toString() : response.data
        //   return response
        // })
        console.error(require('util').inspect(response, { depth: 3, colors: true }))
      })
    }
    req.catch(err => console.error('.send() failed', err.stack))

    if (sync) {
      try {
        return command(options)
        usageStats.abort()
      } catch (err) {
        commandFailed(err, debug)
      }
    } else {
      return command(options)
        .then(output => {
          usageStats.abort()
          return output
        })
        .catch(err => {
          commandFailed(err, debug)
        })
    }
  }
}

function commandFailed (err, debug) {
  usageStats.exception(err.message, 1)
  const req = usageStats.end().send({ debug })
  if (debug) req.then(response => {
    console.error(require('util').inspect(response, { depth: 3, colors: true }))
  })
  throw err
}
