#!/usr/bin/env node
'use strict'
var commandLineArgs = require('command-line-args')
var tool = require('command-line-tool')
var cliData = require('../lib/cli-data')

var cli = commandLineArgs(cliData.definitions)
var usage = cli.getUsage(cliData.usage)

try {
  var argv = cli.parse()
} catch (err) {
  tool.stop(1, { message: err })
}

if (argv.help) {
  tool.stop(0, { usage: usage })
} else {
  var fs = require('fs')
  var jsdoc2md = require('../')
  var loadConfig = require('config-master')
  var o = require('object-tools')

  var dmdConfig = loadConfig('dmd')
  var parseConfig = loadConfig('jsdoc-parse')
  var jsdoc2mdConfig = loadConfig('jsdoc2md')

  var config = o.extend(parseConfig, dmdConfig, jsdoc2mdConfig, argv._all)

  if (config.template) config.template = fs.readFileSync(config.template, 'utf8')
  if (config.help) tool.stop(0, { usage: usage })
  if (config.config) tool.stop(0, { message: JSON.stringify(o.without(config, 'config'), null, '  ') })

  jsdoc2md(config).pipe(process.stdout)
}
