'use strict';

var test = require('test-runner');
var jsdoc2md = require('../../');
var a = require('assert');

var inputFile = 'src/test/fixture/ignore.js';

if (require('child_process').spawnSync) {
  test('.renderSync({ files })', function () {
    var result = jsdoc2md.renderSync({ files: inputFile });
    a.ok(/a visible global/.test(result));
  });

  test('.renderSync({ files, heading-depth: 4 })', function () {
    var result = jsdoc2md.renderSync({ files: inputFile, 'heading-depth': 4 });
    a.ok(/#### visible/.test(result));
  });

  test('.renderSync({ files }, { param-list-format: list })', function () {
    var inputFile = 'src/test/fixture/params.js';
    var result = jsdoc2md.renderSync({ files: inputFile, 'param-list-format': 'list' });
    a.ok(/- one/.test(result));
  });

  test('.getTemplateDataSync({ files })', function () {
    var result = jsdoc2md.getTemplateDataSync({ files: inputFile });
    a.ok(result[0].id);
  });
}