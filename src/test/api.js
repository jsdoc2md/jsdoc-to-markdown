'use strict'
const test = require('test-runner')
const jsdoc2md = require('../../')
const a = require('assert')

const inputFile = 'src/test/fixture/ignore.js'

test('.renderSync(src)', function () {
  const result = jsdoc2md.renderSync(inputFile)
  a.ok(/a visible global/.test(result))
})

test('.renderSync(src, { heading-depth: 4 })', function () {
  const result = jsdoc2md.renderSync(inputFile, { 'heading-depth': 4 })
  a.ok(/#### visible/.test(result))
})

test('.getTemplateDataSync(src)', function () {
  const result = jsdoc2md.getTemplateDataSync(inputFile)
  a.ok(result[0].id)
})

test('.renderSync(src, { param-list-format: list })', function () {
  const inputFile = 'src/test/fixture/params.js'
  const result = jsdoc2md.renderSync(inputFile, { 'param-list-format': 'list' })
  a.ok(/- one/.test(result))
})
