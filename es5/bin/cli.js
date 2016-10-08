'use strict';

var tool = require('command-line-tool');
var version = require('../../package').version;

var cli = parseCommandLine();
var options = cli.options._all;
options = loadStoredConfig(options);

if (options.help) {
  tool.printOutput(cli.usage);
} else if (options.version) {
  tool.printOutput(version);
} else if (options.clear) {
  var jsdoc2md = require('../../');
  jsdoc2md._interface = 'cli';
  jsdoc2md.clear().catch(handleError);
} else {
  var _jsdoc2md = require('../../');
  _jsdoc2md._interface = 'cli';

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
    handleError(err);
  }

  if (options.json) {
    _jsdoc2md.getTemplateData(options).then(function (json) {
      tool.printOutput(JSON.stringify(json, null, '  '));
    }).catch(handleError);
  } else if (options.jsdoc) {
    _jsdoc2md.getJsdocData(options).then(function (json) {
      tool.printOutput(JSON.stringify(json, null, '  '));
    }).catch(handleError);
  } else if (options.namepaths) {
    _jsdoc2md.getNamepaths(options).then(function (namepaths) {
      tool.printOutput(JSON.stringify(namepaths, null, '  '));
    }).catch(handleError);
  } else {
    var fs = require('fs');
    if (options.template) options.template = fs.readFileSync(options.template, 'utf8');

    _jsdoc2md.render(options).then(function (output) {
      process.stdout.write(output);
      process.exit(0);
    }).catch(handleError);
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
    handleError(err);
  }
}

function handleError(err) {
  tool.halt(err.toString());
}