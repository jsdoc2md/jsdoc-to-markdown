'use strict'
const test = require('test-runner')
const jsdoc2md = require('../../')
const a = require('assert')
jsdoc2md._usageStats.disable()

const inputFile = 'src/test/fixture/ignore.js'

if (require('child_process').spawnSync) {
  test('.renderSync({ files })', function () {
    const result = jsdoc2md.renderSync({ files: inputFile, cache: false })
    a.ok(/a visible global/.test(result))
  })

  test('.renderSync({ files, heading-depth: 4 })', function () {
    const result = jsdoc2md.renderSync({ files: inputFile, cache: false, 'heading-depth': 4 })
    a.ok(/#### visible/.test(result))
  })

  test('.renderSync({ files }, { param-list-format: list })', function () {
    const inputFile = 'src/test/fixture/params.js'
    const result = jsdoc2md.renderSync({ files: inputFile, cache: false, 'param-list-format': 'list' })
    a.ok(/- one/.test(result))
  })

  test('.getTemplateDataSync({ files })', function () {
    const result = jsdoc2md.getTemplateDataSync({ files: inputFile, cache: false })
    a.ok(result[0].id)
  })

  test('.getJsdocDataSync({ files })', function () {
    const result =  jsdoc2md.getJsdocDataSync({ files: inputFile, cache: false })
    a.ok(result[0].longname)
  })
}
