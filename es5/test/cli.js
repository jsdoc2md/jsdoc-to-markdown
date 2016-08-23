'use strict';

var TestRunner = require('test-runner');
var fs = require('fs');
var spawn = require('child_process').spawn;
var a = require('assert');

var runner = new TestRunner();
var inputPath = 'src/test/fixture/ignore.js';

try {
  fs.mkdirSync('tmp');
} catch (err) {}

runner.test('cli: json option', function () {
  var outputFile = fs.openSync('tmp/ignore.json', 'w');
  return new Promise(function (resolve, reject) {
    var handle = spawn('node', ['bin.js', '--no-usage-stats', '--no-cache', '--json', inputPath], { stdio: ['ignore', outputFile, 'ignore'] });
    handle.on('close', function () {
      var json = fs.readFileSync('tmp/ignore.json', 'utf8');
      if (json) {
        a.ok(/"id": "visible"/.test(json.toString()));
        resolve();
      } else {
        reject('no json returned');
      }
    });
    handle.on('error', reject);
  });
});