'use strict'
const jsdocApi = require('jsdoc-api')
const jsdocParse = require('jsdoc-parse2')
const dmd = require('dmd2')
const dterm = require('dterm')
const EventEmitter = require('events').EventEmitter

/**
 * @module jsdoc-to-markdown
 * @example
 * const jsdoc2md = require('jsdoc-to-markdown')
 */

/**
 * @extends {EventEmitter}
 * @alias module:jsdoc-to-markdown
 */
class Jsdoc2md extends EventEmitter {
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
    return getJsdoc.call(this, src)
      .then(getJsdocParse.bind(this))
      .then(templateData => this.buildTemplate(templateData, options))
      .then(this.buildOutput.bind(this, options))
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
    options.decorations = options.decorations || []
    return this.buildOutput(options, this.getDocsSync(src, options))
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
    this.render(src, options)
      .then(stream.end.bind(stream))
    return stream
  }

  /**
   * return some stats about the template data
   */
  getStats (src) {
    return getJsdoc.call(this, src)
      .then(explainOutput => {
        this.emit('progress', 'Loading jsdoc-parse stats')
        return jsdocParse.getStats(explainOutput)
      })
      .then(data => {
        this.emit('progress', 'Done')
        return data
      })
      .catch(err => {
        console.error(err.stack)
      })
  }

  /**
   * Get the template data (jsdoc-parse output)
   * @param {string|string[]} - input files
   * @returns {Promise}
   * @fulfil {object[]}
   */
  getTemplateData (src) {
    return getJsdoc.call(this, src)
      .then(getJsdocParse.bind(this))
      .then(data => {
        this.emit('progress', 'Done')
        return data
      })
  }


  /**
   * Get the template data (jsdoc-parse output)
   * @param {string|string[]} - input files
   * @returns {object[]}
   */
  getTemplateDataSync (src) {
    const output = getJsdocParse.call(this, getJsdocSync.call(this, src))
    this.emit('progress', 'Done')
    return output
  }

  /**
   * get the rendered template
   * @param {string|string[]} - input files
   * @param [options] {object} - the options
   * @returns {Promise}
   * @fulfil {DocletTemplate}
   */
  getDocs (src, options) {
    options = options || {}
    return getJsdoc.call(this, src)
      .then(getJsdocParse.bind(this))
      .then(templateData => this.buildTemplate(templateData, options))
      .catch(err => console.error(err.stack))
  }

  /**
   * get the rendered template
   * @param {string|string[]} - input files
   * @param [options] {object} - the options
   * @returns {DocletTemplate}
   */
  getDocsSync (src, options) {
    options = options || {}
    return this.buildTemplate(
      getJsdocParse.call(this, getJsdocSync.call(this, src)),
      options
    )
  }

  /**
   * Director.
   * @param {object[]} - an array of records to be built into a composite tree (jsdoc-parse output)
   * @param [options] {object} - standard options
   * @returns {Template}
   */
  buildTemplate (array, options) {
    options = new JsdocOptions(options)

    this.emit('progress', 'Building template from jsdoc-parse output')

    if (options['heading-depth']) {
      options.decorations.push(require('dmd2/lib/decoration/heading-depth').bind(null, options['heading-depth']))
    }
    if (options['param-list-format'] === 'list') {
      options.decorations.push(require('dmd2/lib/decoration/param-list-format-list'))
    }
    if (options['separators']) {
      options.decorations.push(require('dmd2/lib/decoration/separators'))
    }
    if (options['skip-heading']) {
      options.decorations.push(require('dmd2/lib/decoration/skip-heading'))
    }
    if (options['theme']) {
      options.decorations.push(require('dterm/lib/decoration/theme'))
    }

    const Template = options.term ? dterm : dmd
    const template = Template.build(array, options)
    template.groupBy(options['group-by'])
    return template
  }

  /**
   * @returns {string}
   */
  buildOutput (options, template) {
    options = options || {}
    this.emit('progress', 'Building output')
    let output = ''
    if (options.template) {
      const vm = require('vm')
      const sandbox = { docs: template, output: '' }
      vm.createContext(sandbox)
      options.template = options.template.replace(/`/g, '\\`')
      vm.runInContext(`output = \`${options.template}\``, sandbox, { displayErrors: true })
      output = sandbox.output
    } else {
      output = template.renderAll()
    }
    this.emit('progress', 'Done')
    return output
  }
}

function getJsdoc (src) {
  this.emit('progress', 'Loading jsdoc explain output')
  return jsdocApi.explain({ files: src, pedantic: true })
}
function getJsdocSync (src) {
  this.emit('progress', 'Loading jsdoc explain output')
  return jsdocApi.explainSync({ files: src, pedantic: true })
}

function getJsdocParse (explainOutput) {
  this.emit('progress', 'Loading jsdoc-parse output')
  return jsdocParse.parse(explainOutput)
}

/**
 * Common jsdoc2md options
 */
class JsdocOptions {
  constructor (options) {
    options = options || {}

    this['heading-depth'] = 2

    /**
     * createDecorator functions
     * @type {function[]}
     */
    this.decorations = []

    Object.assign(this, options)
  }
}

module.exports = new Jsdoc2md()
