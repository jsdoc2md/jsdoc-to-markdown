'use strict'
const jsdocApi = require('jsdoc-api')
const jsdocParse = require('jsdoc-parse')
const dmd = require('dmd')
const dterm = require('dterm')
const EventEmitter = require('events').EventEmitter
const TreeBuilder = require('tree-builder')
const TemplateBuilder = require('template-builder')

/**
 * @module jsdoc-to-markdown
 * @typicalname jsdoc2md
 * @example
 * const jsdoc2md = require('jsdoc-to-markdown')
 */

/**
 * @extends {EventEmitter}
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
    return getJsdoc.call(this, src)
      .then(getJsdocParse.bind(this))
      .then(templateData => this.buildTemplate(templateData, options))
      .then(buildOutput.bind(this, options))
      .catch(err => {
        console.error(err.stack)
      })
  }

  renderSync (src, options) {
    options = options || {}
    options.decorations = options.decorations || []
    return buildOutput.call(this, options, this.getDocsSync(src, options))
  }

  createRenderStream (src, options) {
    const PassThrough = require('stream').PassThrough
    const stream = new PassThrough()
    options = options || {}
    this.render(src, options)
      .then(stream.end.bind(stream))
    return stream
  }

  getStats (src) {
    return getJsdoc.call(this, src)
      .then(getJsdocParseStats.bind(this))
      .then(data => {
        this.emit('progress', 'Done')
        return data
      })
      .catch(err => {
        console.error(err.stack)
      })
  }

  getJson (src) {
    return getJsdoc.call(this, src)
      .then(getJsdocParse.bind(this))
      .then(data => {
        this.emit('progress', 'Done')
        return data
      })
  }

  getJsonSync (src) {
    const output = getJsdocParse.call(this, getJsdocSync.call(this, src))
    this.emit('progress', 'Done')
    return output
  }

  getDocs (src, options) {
    return getJsdoc.call(this, src)
      .then(getJsdocParse.bind(this))
      .then(templateData => this.buildTemplate(templateData, options))
      .catch(err => {
        console.error(err.stack)
      })
  }

  getDocsSync (src, options) {
    options = options || {}
    return this.buildTemplate(
      getJsdocParse.call(this, getJsdocSync.call(this, src)),
      options
    )
  }

  /**
   * Director.
   * @param {object[]} - an array of records to be built into a composite tree
   * @param {Template} - a Template class to create
   * @param [options] {object}
   * @returns {Template}
   */
  buildTemplate (array, options) {
    this.emit('progress', 'Building template from jsdoc-parse output')

    if (options['heading-depth']) {
      options.decorations.push(require('dmd/lib/decoration/heading-depth').bind(null, options['heading-depth']))
    }
    if (options['param-list-format'] === 'list') {
      options.decorations.push(require('dmd/lib/decoration/param-list-format-list'))
    }
    if (options['separators']) {
      options.decorations.push(require('dmd/lib/decoration/separators'))
    }
    if (options['skip-heading']) {
      options.decorations.push(require('dmd/lib/decoration/skip-heading'))
    }
    if (options['theme']) {
      options.decorations.push(require('dterm/lib/decoration/theme'))
    }

    const Template = options.term ? dterm : dmd

    const dataTreeBuilder = new TreeBuilder()
    const TemplateData = Template.getDataClass()
    const data = dataTreeBuilder.build(array, TemplateData, new TemplateData({ id: 'root', kind: 'root' }))

    const templateTreeBuilder = new TemplateBuilder()
    return templateTreeBuilder.build(data, Template, options)
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

function getJsdocParseStats (explainOutput) {
  this.emit('progress', 'Loading jsdoc-parse stats')
  return jsdocParse.getStats(explainOutput)
}

function buildOutput (options, template) {
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

module.exports = new Jsdoc2md()
