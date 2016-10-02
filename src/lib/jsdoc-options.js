'use strict'

/**
 * @typicalname options
 */
class JsdocOptions {
  constructor (options) {
    options = options || {}

    /**
     * Set to false to disable memoisation cache. Defaults to true.
     */
    this.cache = options.cache === undefined ? true : options.cache

    /**
     * One or more filenames to process. Accepts globs (e.g. `*.js`). Either `files`, `source` or `data` must be supplied.
     * @type {string|string[]}
     */
    this.files = options.files

    /**
     * A string containing source code to process. Either `files`, `source` or `data` must be supplied.
     * @type {string}
     */
    this.source = options.source

    /**
     * Raw template data to use. Useful when you already have template data, obtained from `.getTemplateData`. Either `files`, `source` or `data` must be supplied.
     * @type {object[]}
     */
    this.data = options.data

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

module.exports = JsdocOptions
