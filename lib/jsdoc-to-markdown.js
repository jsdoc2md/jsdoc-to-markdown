'use strict'
var jsdocApi = require('jsdoc-api')
var jsdocParse = require('jsdoc-parse')
var dmd = require('dmd')
var dterm = require('dterm')
var bowie = require('bowie')
var via = require('stream-via')
var collectAll = require('collect-all')
const progressView = require('./progress-view')

/**
 * @module jsdoc-to-markdown
 * @typicalname jsdoc2md
 * @example
 * ```js
 * var jsdoc2md = require('jsdoc-to-markdown')
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
function createRenderStream (options) {
  options = options || {}

  function buildOutput (template) {
    if (options.template) {
      var vm = require('vm')
      var sandbox = { docs: template, output: '' }
      vm.createContext(sandbox)
      var template = options.template.replace(/`/g, '\\`')
      vm.runInContext(`output = \`${template}\``, sandbox, { displayErrors: true })
      return sandbox.output
    } else {
      return template.render()
    }
  }

  var documentationTemplate = !process.stdout.isTTY || options.md ? dmd : dterm

  return jsdocStream
    .pipe(jsdocParse())
    .pipe(bowie.createStream(documentationTemplate, { decorations: options.decorations }))
    .pipe(via(buildOutput, { objectMode: true }))
}

function getStats (src) {
  var jsdocStream = jsdocApi.createExplainStream({ files: src, pedantic: true })
  return jsdocStream.pipe(jsdocParse({ stats: true }))
}

function getJson (src) {
  var jsdocStream = jsdocApi.createExplainStream({ files: src, pedantic: true })
  return jsdocStream.pipe(jsdocParse())
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
  const documentationTemplate = !process.stdout.isTTY || options.md ? dmd : dterm
  return bowie.buildTemplateTree(jsdocParseOutput, documentationTemplate, { decorations: options.decorations })
}

function buildOutput (options, template) {
  progressView.write('Building output')
  if (options.template) {
    var vm = require('vm')
    var sandbox = { docs: template, output: '' }
    vm.createContext(sandbox)
    var template = options.template.replace(/`/g, '\\`')
    vm.runInContext(`output = \`${template}\``, sandbox, { displayErrors: true })
    return sandbox.output
  } else {
    return template.render()
  }
}
