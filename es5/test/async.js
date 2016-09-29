'use strict';

var TestRunner = require('test-runner');
var jsdoc2md = require('../../');
var a = require('assert');
var fs = require('fs');
try {
  fs.mkdirSync('tmp-test');
} catch (err) {}
jsdoc2md._usageStats.defaults.set('tid', 'UA-70853320-4');
jsdoc2md._usageStats.queuePath = 'tmp-test/unsent.json';
jsdoc2md._usageStats._lastSentPath = 'tmp-test/lastSent.json';

var runner = new TestRunner();
var inputFile = 'src/test/fixture/ignore.js';

runner.test('.render({ files })', function () {
  return jsdoc2md.render({ files: inputFile, cache: false }).then(function (result) {
    return a.ok(/a visible global/.test(result));
  });
});

runner.test('.render({ files, heading-depth: 4 })', function () {
  return jsdoc2md.render({ files: inputFile, cache: false, 'heading-depth': 4 }).then(function (result) {
    return a.ok(/#### visible/.test(result));
  });
});

runner.test('.render({ files, param-list-format: list })', function () {
  var inputFile = 'src/test/fixture/params.js';
  return jsdoc2md.render({ files: inputFile, cache: false, 'param-list-format': 'list' }).then(function (result) {
    return a.ok(/- one/.test(result));
  });
});

runner.test('.getTemplateData({ files })', function () {
  return jsdoc2md.getTemplateData({ files: inputFile, cache: false }).then(function (result) {
    return a.ok(result[0].id);
  });
});

runner.test('.getJsdocData({ files })', function () {
  return jsdoc2md.getJsdocData({ files: inputFile, cache: false }).then(function (result) {
    return a.ok(result[0].longname);
  });
});