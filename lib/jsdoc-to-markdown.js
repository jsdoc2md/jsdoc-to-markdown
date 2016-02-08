'use strict'
const jsdocApi = require('jsdoc-api')
const jsdocParse = require('jsdoc-parse')
const dmd = require('dmd')
const dterm = require('dterm')
const bowie = require('bowie')
const EventEmitter = require('events').EventEmitter

/**
 * @module jsdoc-to-markdown
 * @typicalname jsdoc2md
 * @example
 * const jsdoc2md = require('jsdoc-to-markdown')
 */

class Jsdoc2md extends EventEmitter {
  render (src, options) {
    return getJsdoc.call(this, src)
      .then(getJsdocParse.bind(this))
      .then(getBowie.bind(this, options))
      .then(buildOutput.bind(this, options))
      .catch(err => {
        console.error(err.stack)
      })
  }

  /**
   * Transforms jsdoc into markdown documentation.
   * @param [options] {module:dmd~DmdOptions | module:jsdoc-parse~ParseOptions} - the options
   * @return {Duplex}
   * @alias module:jsdoc-to-markdown
   * @example
   * Pass in filepaths (`**` glob matching supported) of javascript source files:
   * ```js
   * > jsdoc2md({ src: 'lib/*.js' }).pipe(process.stdout)
   * ```
   */
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
}

function getJsdoc (src) {
  this.emit('progress', 'Loading jsdoc explain output')
  return jsdocApi.explain({ files: src, pedantic: true })
}

function getJsdocParse (explainOutput) {
  this.emit('progress', 'Loading jsdoc-parse output')
  return jsdocParse.parse(explainOutput)
}

function getBowie (options, jsdocParseOutput) {
  this.emit('progress', 'Loading bowie output')
  const documentationTemplate = !process.stdout.isTTY || options.md || options.template ? dmd : dterm
  return bowie.buildTemplateTree(jsdocParseOutput, documentationTemplate, { decorations: options.decorations })
}

function buildOutput (options, template) {
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
    output = template.render()
  }
  this.emit('progress', 'Done')
  return output
}

module.exports = new Jsdoc2md()
