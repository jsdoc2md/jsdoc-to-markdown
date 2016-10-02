'use strict'
const TestRunner = require('test-runner')
const jsdoc2md = require('../../')
const a = require('assert')
const fs = require('fs')
try {
  fs.mkdirSync('tmp-test')
} catch (err) {
  // exists
}
jsdoc2md._usage.defaults.set('tid', 'UA-70853320-4')
jsdoc2md._usage.queuePath = 'tmp-test/unsent.json'
jsdoc2md._usage._lastSentPath = 'tmp-test/lastSent.json'

const runner = new TestRunner()
const inputFile = 'src/test/fixture/ignore.js'

runner.test('.render({ files })', function () {
  return jsdoc2md.render({ files: inputFile, cache: false })
    .then(result => a.ok(/a visible global/.test(result)))
})

runner.test('.render({ data })', function () {
  const data = [
    {
      "id": "visible",
      "longname": "visible",
      "name": "visible",
      "kind": "member",
      "scope": "global",
      "description": "a visible global",
      "meta": {
        "lineno": 4,
        "filename": "ignore.js"
      },
      "order": 0
    },
    {
      "id": "invisible",
      "longname": "invisible",
      "name": "invisible",
      "kind": "member",
      "scope": "global",
      "description": "an ignored global",
      "ignore": true,
      "meta": {
        "lineno": 10,
        "filename": "ignore.js"
      },
      "order": 1
    }
  ]
  return jsdoc2md.render({ data: data, cache: false })
    .then(result => a.ok(/a visible global/.test(result)))
})

runner.test('.render({ files, heading-depth: 4 })', function () {
  return jsdoc2md.render({ files: inputFile, cache: false, 'heading-depth': 4 })
    .then(result => a.ok(/#### visible/.test(result)))
})

runner.test('.render({ files, param-list-format: list })', function () {
  const inputFile = 'src/test/fixture/params.js'
  return jsdoc2md.render({ files: inputFile, cache: false, 'param-list-format': 'list' })
    .then(result => a.ok(/- one/.test(result)))
})

runner.test('.getTemplateData({ files })', function () {
  return jsdoc2md.getTemplateData({ files: inputFile, cache: false })
    .then(result => a.ok(result[0].id))
})

runner.test('.getJsdocData({ files })', function () {
  return jsdoc2md.getJsdocData({ files: inputFile, cache: false })
    .then(result => a.ok(result[0].longname))
})
