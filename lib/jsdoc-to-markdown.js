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

class Jsdoc2md extends EventEmitter {
  /**
   * Transforms jsdoc into markdown documentation.
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
      .then(templateData => this.getBowie(templateData, options))
      .then(buildOutput.bind(this, options))
      .catch(err => {
        console.error(err.stack)
      })
  }

  renderSync (src, options) {
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
    const jsdocStream = jsdocApi.createExplainStream({ files: src, pedantic: true })
    return jsdocStream.pipe(jsdocParse({ stats: true }))
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
      .then(templateData => this.getBowie(templateData, options))
      .catch(err => {
        console.error(err.stack)
      })
  }

  getDocsSync (src, options) {
    options = options || {}
    return this.getBowie(
      getJsdocParse.call(this, getJsdocSync.call(this, src)),
      options
    )
  }

  getBowie (templateData, options) {
    this.emit('progress', 'Loading bowie output')
    const Template = !process.stdout.isTTY || options.md || options.template ? dmd : dterm
    return buildTemplateTree(
      templateData,
      Template.getDataClass(),
      Template,
      { decorations: options.decorations }
    )
  }

}

/**
 * Director.
 * @param {object[]} - an array of records to be built into a composite tree
 * @param {Template} - a Template class to create
 * @param [options] {object}
 * @returns {Template}
 */
function buildTemplateTree (array, Data, Template, options) {
  const dataTreeBuilder = new TreeBuilder()
  const dataTree = dataTreeBuilder.build(array, Data, new Data({ id: 'root', kind: 'root' }))

  const templateTreeBuilder = new TemplateBuilder()
  return templateTreeBuilder.build(dataTree, Template, options)
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
