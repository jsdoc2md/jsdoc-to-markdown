'use strict'
const test = require('test-runner')
const fs = require('fs')
const spawn = require('child_process').spawn
const a = require('assert')

const inputPath = 'src/test/fixture/ignore.js'

try {
  fs.mkdirSync('tmp')
} catch (err) {
  // dir exists
}

test('cli: json option', function () {
  const outputFile = fs.openSync('tmp/ignore.json', 'w')
  return new Promise((resolve, reject) => {
    const handle = spawn(
      'node',
      [ 'bin.js', '--json', inputPath ],
      { stdio: [ 'ignore', outputFile, 'ignore' ] }
    )
    handle.on('close', function () {
      const json = fs.readFileSync('tmp/ignore.json', 'utf8')
      if (json) {
        a.ok(/"id": "visible"/.test(json.toString()))
        resolve()
      } else {
        reject('no json returned')
      }
    })
    handle.on('error', reject)
  })
})
