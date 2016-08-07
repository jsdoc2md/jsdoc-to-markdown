'use strict';

var tool = require('command-line-tool');
var fs = require('fs');

var cli = parseCommandLine();
var options = cli.options._all;

if (options.help) {
  tool.printOutput(cli.usage);
} else if (options.version) {
  tool.stop(require('../../package').version);
} else if (options.clear) {
  var jsdoc2md = require('../../');
  jsdoc2md.clear().catch(tool.halt);
} else {
  var _jsdoc2md = require('../../');
  options = loadStoredConfig(options);

  if (options.config) {
    var omit = require('lodash.omit');
    tool.stop(JSON.stringify(omit(options, 'config'), null, '  '));
  }

  try {
    var assert = require('assert');
    options.files = options.files || [];
    assert.ok(options.files.length || options.source, 'Must supply either --files or --source');
  } catch (err) {
    tool.printOutput(cli.usage);
    tool.halt(err);
  }

  if (options.json) {
    _jsdoc2md.getTemplateData(options).then(function (json) {
      tool.printOutput(JSON.stringify(json, null, '  '));
    }).catch(tool.halt);
  } else if (options.jsdoc) {
    _jsdoc2md.getJsdocData(options).then(function (json) {
      tool.printOutput(JSON.stringify(json, null, '  '));
    }).catch(tool.halt);
  } else if (options.stats) {
    _jsdoc2md.getStats(options.files).then(function (json) {
      tool.printOutput(JSON.stringify(json, null, '  '));
    }).catch(tool.halt);
  } else {

    if (options.template) options.template = fs.readFileSync(options.template, 'utf8');

    _jsdoc2md.render(options).then(function (output) {
      return process.stdout.write(output);
    }).catch(function (err) {
      return tool.halt(err, { stack: true });
    });
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
    tool.halt(err, { stack: false });
  }
}