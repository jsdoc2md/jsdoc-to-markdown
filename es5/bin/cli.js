'use strict';

var tool = require('command-line-tool');
var fs = require('fs');

var cli = parseCommandLine();
var options = cli.options._all;

if (options.help) {
  tool.stop(cli.usage);
} else if (options.version) {
  tool.stop(require('../package').version);
} else if (options.clean) {
  var jsdoc2md = require('../../');
  jsdoc2md.clean().catch(tool.halt);
} else {
  var _jsdoc2md = require('../../');
  options = loadStoredConfig(options);
  options.src = options.src || [];

  try {
    var assert = require('assert');
    assert.ok(options.src.length, 'No input files supplied');
  } catch (err) {
    tool.halt(err);
  }

  if (options.json) {
    _jsdoc2md.getTemplateData(options.src).then(function (json) {
      console.log(JSON.stringify(json, null, '  '));
    }).catch(tool.halt);
  } else if (options.stats) {
    _jsdoc2md.getStats(options.src).then(function (json) {
      console.log(JSON.stringify(json, null, '  '));
    }).catch(tool.halt);
  } else {
    if (options.template) options.template = fs.readFileSync(options.template, 'utf8');
    if (options.config) {
      var omit = require('lodash.omit');
      tool.stop(JSON.stringify(omit(options, 'config'), null, '  '));
    }

    _jsdoc2md.createRenderStream(options.src, options).pipe(process.stdout);
  }
}

function loadStoredConfig(options) {
  var loadConfig = require('config-master');
  var jsdoc2mdConfig = loadConfig('jsdoc2md');
  return Object.assign(jsdoc2mdConfig, options);
}

function parseCommandLine() {
  var cliData = require('../lib/cli-data');
  try {
    return tool.getCli(cliData.definitions, cliData.usageSections);
  } catch (err) {
    tool.halt(err, { stack: true });
  }
}