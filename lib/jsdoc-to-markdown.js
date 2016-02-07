'use strict'
const jsdocApi = require('jsdoc-api')
const jsdocParse = require('jsdoc-parse')
const dmd = require('dmd')
const dterm = require('dterm')
const bowie = require('bowie')
const progressView = require('./progress-view')

/**
 * @module jsdoc-to-markdown
 * @typicalname jsdoc2md
 * @example
 * ```js
 * const jsdoc2md = require('jsdoc-to-markdown')
 * ```
 */
exports.createRenderStream = createRenderStream
exports.render = render
exports.getStats = getStats
exports.getJson = getJson

function render (src, options) {
  return getJsdoc(src)
    .then(getJsdocParse)
    .then(getBowie.bind(null, options))
    .then(buildOutput.bind(null, options))
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
function createRenderStream (src, options) {
  const PassThrough = require('stream').PassThrough
  const stream = new PassThrough()
  options = options || {}
  render(src, options)
    .then(function (output) {
      stream.end(output)
    })
  return stream
}

function getStats (src) {
  const jsdocStream = jsdocApi.createExplainStream({ files: src, pedantic: true })
  return jsdocStream.pipe(jsdocParse({ stats: true }))
}

function getJson (src) {
  return getJsdoc(src)
    .then(getJsdocParse)
}

function getJsdoc (src) {
  progressView.write('Loading jsdoc explain output')
  return jsdocApi.explain({ files: src, pedantic: true })
}

function getJsdocParse (explainOutput) {
  progressView.write('Loading jsdoc-parse output')
  return jsdocParse.parse(explainOutput)
}

function getBowie (options, jsdocParseOutput) {
  progressView.write('Loading bowie output')
  const documentationTemplate = !process.stdout.isTTY || options.md || options.template ? dmd : dterm
  return bowie.buildTemplateTree(jsdocParseOutput, documentationTemplate, { decorations: options.decorations })
}

function buildOutput (options, template) {
  progressView.write('Building output')
  if (options.template) {
    const vm = require('vm')
    const sandbox = { docs: template, output: '' }
    vm.createContext(sandbox)
    options.template = options.template.replace(/`/g, '\\`')
    vm.runInContext(`output = \`${options.template}\``, sandbox, { displayErrors: true })
    return sandbox.output
  } else {
    return template.render()
  }
}

// class Jsdoc2md extends EventEmitter {
//
// }
