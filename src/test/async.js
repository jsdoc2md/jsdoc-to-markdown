'use strict'
const test = require('test-runner')
const jsdoc2md = require('../../')
const a = require('assert')

const inputFile = 'src/test/fixture/ignore.js'

test('.render({ files })', function () {
  return jsdoc2md.render({ files: inputFile })
    .then(result => a.ok(/a visible global/.test(result)))
})

test('.render({ files, heading-depth: 4 })', function () {
  return jsdoc2md.render({ files: inputFile, 'heading-depth': 4 })
    .then(result => a.ok(/#### visible/.test(result)))
})

test('.render({ files, param-list-format: list })', function () {
  const inputFile = 'src/test/fixture/params.js'
  return jsdoc2md.render({ files: inputFile, 'param-list-format': 'list' })
    .then(result => a.ok(/- one/.test(result)))
})

test('.getTemplateData({ files })', function () {
  return jsdoc2md.getTemplateData({ files: inputFile })
    .then(result => a.ok(result[0].id))
})
