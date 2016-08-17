'use strict';

var test = require('test-runner');
var jsdoc2md = require('../../');
var a = require('assert');
jsdoc2md._usageStats.disable();

var inputFile = 'src/test/fixture/ignore.js';

test('.render({ files })', function () {
  return jsdoc2md.render({ files: inputFile, cache: false }).then(function (result) {
    return a.ok(/a visible global/.test(result));
  });
});

test('.render({ files, heading-depth: 4 })', function () {
  return jsdoc2md.render({ files: inputFile, cache: false, 'heading-depth': 4 }).then(function (result) {
    return a.ok(/#### visible/.test(result));
  });
});

test('.render({ files, param-list-format: list })', function () {
  var inputFile = 'src/test/fixture/params.js';
  return jsdoc2md.render({ files: inputFile, cache: false, 'param-list-format': 'list' }).then(function (result) {
    return a.ok(/- one/.test(result));
  });
});

test('.getTemplateData({ files })', function () {
  return jsdoc2md.getTemplateData({ files: inputFile, cache: false }).then(function (result) {
    return a.ok(result[0].id);
  });
});

test('.getJsdocData({ files })', function () {
  return jsdoc2md.getJsdocData({ files: inputFile, cache: false }).then(function (result) {
    return a.ok(result[0].longname);
  });
});