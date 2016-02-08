'use strict'
var test = require('tape')
var jsdoc2md = require('../')

var inputFile = 'test/fixture/ignore.js'

test('.renderSync(src)', function (t) {
  t.plan(1)

  var result = jsdoc2md.renderSync(inputFile)
  console.log(result)
  t.ok(/a visible global/.test(result))
})

test.only('.renderSync(src, { extensions })', function (t) {
  t.plan(1)

  var result = jsdoc2md.renderSync(inputFile, { 'heading-depth': 3, md: true })
  console.log(result)
  t.ok(/### visible/.test(result))
})

test('.getJsonSync(src)', function (t) {
  t.plan(1)

  var result = jsdoc2md.getJsonSync(inputFile)
  t.ok(result[0].id)
})
