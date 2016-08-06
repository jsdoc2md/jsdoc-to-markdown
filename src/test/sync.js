'use strict'
const test = require('test-runner')
const jsdoc2md = require('../../')
const a = require('assert')

const inputFile = 'src/test/fixture/ignore.js'

if (require('child_process').spawnSync) {
  test('.renderSync({ files })', function () {
    const result = jsdoc2md.renderSync({ files: inputFile })
    a.ok(/a visible global/.test(result))
  })

  test('.renderSync({ files, heading-depth: 4 })', function () {
    const result = jsdoc2md.renderSync({ files: inputFile, 'heading-depth': 4 })
    a.ok(/#### visible/.test(result))
  })

  test('.renderSync({ files }, { param-list-format: list })', function () {
    const inputFile = 'src/test/fixture/params.js'
    const result = jsdoc2md.renderSync({ files: inputFile, 'param-list-format': 'list' })
    a.ok(/- one/.test(result))
  })

  test('.getTemplateDataSync({ files })', function () {
    const result = jsdoc2md.getTemplateDataSync({ files: inputFile })
    a.ok(result[0].id)
  })
}
