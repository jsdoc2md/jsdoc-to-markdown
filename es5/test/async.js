'use strict';

var test = require('test-runner');
var jsdoc2md = require('../../');
var a = require('assert');

var inputFile = 'src/test/fixture/ignore.js';

test('.render(src)', function () {
  return jsdoc2md.render(inputFile).then(function (result) {
    return a.ok(/a visible global/.test(result));
  });
});

test('.render(src, { heading-depth: 4 })', function () {
  return jsdoc2md.render(inputFile, { 'heading-depth': 4 }).then(function (result) {
    return a.ok(/#### visible/.test(result));
  });
});

test('.getJsdocData(src)', function () {
  return jsdoc2md.getJsdocData(inputFile).then(function (result) {
    return a.ok(result[0].id);
  });
});

test('.render(src, { param-list-format: list })', function () {
  var inputFile = 'src/test/fixture/params.js';
  return jsdoc2md.render(inputFile, { 'param-list-format': 'list' }).then(function (result) {
    return a.ok(/- one/.test(result));
  });
});