'use strict';

var TestRunner = require('test-runner');
var jsdoc2md = require('../../');
var a = require('assert');
var path = require('path');
var fs = require('fs');
try {
  fs.mkdirSync('tmp-test');
} catch (err) {}
jsdoc2md._usageStats.defaults.set('tid', 'UA-70853320-4');
jsdoc2md._usageStats.queuePath = 'tmp-test/unsent.json';
jsdoc2md._usageStats._lastSentPath = 'tmp-test/lastSent.json';

var runner = new TestRunner();
var inputFile = 'src/test/fixture/ignore.js';

if (require('child_process').spawnSync) {
  runner.test('.renderSync({ files })', function () {
    var result = jsdoc2md.renderSync({ files: inputFile, cache: false });
    a.ok(/a visible global/.test(result));
  });

  runner.test('.renderSync({ files, heading-depth: 4 })', function () {
    var result = jsdoc2md.renderSync({ files: inputFile, cache: false, 'heading-depth': 4 });
    a.ok(/#### visible/.test(result));
  });

  runner.test('.renderSync({ files }, { param-list-format: list })', function () {
    var inputFile = 'src/test/fixture/params.js';
    var result = jsdoc2md.renderSync({ files: inputFile, cache: false, 'param-list-format': 'list' });
    a.ok(/- one/.test(result));
  });

  runner.test('.getTemplateDataSync({ files })', function () {
    var result = jsdoc2md.getTemplateDataSync({ files: inputFile, cache: false });
    a.ok(result[0].id);
  });

  runner.test('.getJsdocDataSync({ files })', function () {
    var result = jsdoc2md.getJsdocDataSync({ files: inputFile, cache: false });
    a.ok(result[0].longname);
  });
}