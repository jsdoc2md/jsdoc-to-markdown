'use strict'
const TestRunner = require('test-runner')
const jsdoc2md = require('../')
const a = require('assert')

const runner = new TestRunner()
const inputFile = 'test/fixture/ignore.js'

runner.test('.renderSync({ files })', function () {
  const result = jsdoc2md.renderSync({ files: inputFile, cache: false })
  a.ok(/a visible global/.test(result))
})

runner.test('.renderSync({ data })', function () {
  const data = [
    {
      id: 'visible',
      longname: 'visible',
      name: 'visible',
      kind: 'member',
      scope: 'global',
      description: 'a visible global',
      meta: {
        lineno: 4,
        filename: 'ignore.js'
      },
      order: 0
    },
    {
      id: 'invisible',
      longname: 'invisible',
      name: 'invisible',
      kind: 'member',
      scope: 'global',
      description: 'an ignored global',
      ignore: true,
      meta: {
        lineno: 10,
        filename: 'ignore.js'
      },
      order: 1
    }
  ]
  const result = jsdoc2md.renderSync({ data: data, cache: false })
  a.ok(/a visible global/.test(result))
})

runner.test('.renderSync({ files, heading-depth: 4 })', function () {
  const result = jsdoc2md.renderSync({ files: inputFile, cache: false, 'heading-depth': 4 })
  a.ok(/#### visible/.test(result))
})

runner.test('.renderSync({ files }, { param-list-format: list })', function () {
  const inputFile = 'test/fixture/params.js'
  const result = jsdoc2md.renderSync({ files: inputFile, cache: false, 'param-list-format': 'list' })
  a.ok(/- one/.test(result))
})

runner.test('.getTemplateDataSync({ files })', function () {
  const result = jsdoc2md.getTemplateDataSync({ files: inputFile, cache: false })
  a.ok(result[0].id)
})

runner.test('.getJsdocDataSync({ files })', function () {
  const result = jsdoc2md.getJsdocDataSync({ files: inputFile, cache: false })
  a.ok(result[0].longname)
})
