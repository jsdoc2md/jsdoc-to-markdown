'use strict'
var test = require('tape')
var fs = require('fs')
var spawn = require('child_process').spawn

var inputPath = 'test/fixture/ignore.js'

try {
  fs.mkdirSync('tmp')
} catch(err) {
  // dir exists
}

test('cli: json option', function (t) {
  t.plan(1)

  var outputFile = fs.openSync('tmp/ignore.json', 'w')

  var handle = spawn(
    'node',
    [ 'bin/cli.js', '--json', inputPath ],
    { stdio: [ 'ignore', outputFile, 'ignore']}
  )
  handle.on('close', function () {
    var json = fs.readFileSync('tmp/ignore.json', 'utf8')
    if (json) t.ok(/"id": "visible"/.test(json.toString()))
  })
})
