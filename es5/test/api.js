'use strict';

var test = require('test-runner');
var jsdoc2md = require('../../');
var a = require('assert');

var inputFile = 'src/test/fixture/ignore.js';

test('.renderSync(src)', function () {
  var result = jsdoc2md.renderSync(inputFile);
  a.ok(/a visible global/.test(result));
});

test('.renderSync(src, { heading-depth: 4 })', function () {
  var result = jsdoc2md.renderSync(inputFile, { 'heading-depth': 4 });
  a.ok(/#### visible/.test(result));
});

test('.getTemplateDataSync(src)', function () {
  var result = jsdoc2md.getTemplateDataSync(inputFile);
  a.ok(result[0].id);
});

test('.renderSync(src, { param-list-format: list })', function () {
  var inputFile = 'src/test/fixture/params.js';
  var result = jsdoc2md.renderSync(inputFile, { 'param-list-format': 'list' });
  a.ok(/- one/.test(result));
});