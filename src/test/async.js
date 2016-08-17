'use strict'
const test = require('test-runner')
const jsdoc2md = require('../../')
const a = require('assert')
jsdoc2md._usageStats.disable()

const inputFile = 'src/test/fixture/ignore.js'

test('.render({ files })', function () {
  return jsdoc2md.render({ files: inputFile, cache: false })
    .then(result => a.ok(/a visible global/.test(result)))
})

test('.render({ files, heading-depth: 4 })', function () {
  return jsdoc2md.render({ files: inputFile, cache: false, 'heading-depth': 4 })
    .then(result => a.ok(/#### visible/.test(result)))
})

test('.render({ files, param-list-format: list })', function () {
  const inputFile = 'src/test/fixture/params.js'
  return jsdoc2md.render({ files: inputFile, cache: false, 'param-list-format': 'list' })
    .then(result => a.ok(/- one/.test(result)))
})

test('.getTemplateData({ files })', function () {
  return jsdoc2md.getTemplateData({ files: inputFile, cache: false })
    .then(result => a.ok(result[0].id))
})

test('.getJsdocData({ files })', function () {
  return jsdoc2md.getJsdocData({ files: inputFile, cache: false })
    .then(result => a.ok(result[0].longname))
})
