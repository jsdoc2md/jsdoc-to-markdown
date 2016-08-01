'use strict'
const test = require('test-runner')
const jsdoc2md = require('../../')
const a = require('assert')

const inputFile = 'src/test/fixture/ignore.js'

test('.render(src)', function () {
  return jsdoc2md.render(inputFile)
    .then(result => a.ok(/a visible global/.test(result)))
})

test('.render(src, { heading-depth: 4 })', function () {
  return jsdoc2md.render(inputFile, { 'heading-depth': 4 })
    .then(result => a.ok(/#### visible/.test(result)))
})

test('.getJsdocData(src)', function () {
  return jsdoc2md.getJsdocData(inputFile)
    .then(result => a.ok(result[0].id))
})

test('.render(src, { param-list-format: list })', function () {
  const inputFile = 'src/test/fixture/params.js'
  return jsdoc2md.render(inputFile, { 'param-list-format': 'list' })
    .then(result => a.ok(/- one/.test(result)))
})
