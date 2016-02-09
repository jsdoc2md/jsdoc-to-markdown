'use strict'
var test = require('tape')
var jsdoc2md = require('../')

var inputFile = 'test/fixture/ignore.js'

test('.renderSync(src)', function (t) {
  t.plan(1)

  var result = jsdoc2md.renderSync(inputFile)
  t.ok(/a visible global/.test(result))
})

test('.renderSync(src, { heading-depth: 4 })', function (t) {
  t.plan(1)

  var result = jsdoc2md.renderSync(inputFile, { 'heading-depth': 4 })
  t.ok(/#### visible/.test(result))
})

test('.getJsonSync(src)', function (t) {
  t.plan(1)

  var result = jsdoc2md.getJsonSync(inputFile)
  t.ok(result[0].id)
})

test('.renderSync(src, { param-list-format: list })', function (t) {
  var inputFile = 'test/fixture/params.js'
  t.plan(1)

  var result = jsdoc2md.renderSync(inputFile, { 'param-list-format': 'list' })
  t.ok(/- one/.test(result))
})
