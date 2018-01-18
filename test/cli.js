'use strict'
const TestRunner = require('test-runner')
const fs = require('fs')
const spawn = require('child_process').spawn
const a = require('assert')

const runner = new TestRunner()
const inputPath = 'test/fixture/ignore.js'

try {
  fs.mkdirSync('tmp-test')
} catch (err) {
  // dir exists
}

runner.test('cli: json option', function () {
  const outputFile = fs.openSync('tmp-test/ignore.json', 'w')
  return new Promise((resolve, reject) => {
    const handle = spawn(
      'node',
      [ 'bin/cli.js', '--no-usage-stats', '--no-cache', '--json', inputPath ],
      { stdio: [ 'ignore', outputFile, 'ignore' ] }
    )
    handle.on('close', function () {
      const json = fs.readFileSync('tmp-test/ignore.json', 'utf8')
      if (json) {
        a.ok(/"id": "visible"/.test(json.toString()))
        resolve()
      } else {
        reject(new Error('no json returned'))
      }
    })
    handle.on('error', reject)
  })
})
