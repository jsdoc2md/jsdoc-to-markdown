#!/usr/bin/env node
'use strict'
var fs = require('fs')
var commandLineArgs = require('command-line-args')
var dope = require('console-dope')
var jsdoc2md = require('../')
var domain = require('domain')
var loadConfig = require('config-master')
var homePath = require('home-path')
var path = require('path')
var o = require('object-tools')
var cliData = require('../lib/cli-data')

var cli = commandLineArgs(cliData.definitions)
var usage = cli.getUsage(cliData.usage)

try {
  var argv = cli.parse()
} catch (err) {
  halt(err)
}

var dmdConfig = loadConfig(
  path.join(homePath(), '.dmd.json'),
  path.join(process.cwd(), '.dmd.json'),
  { jsonPath: path.join(process.cwd(), 'package.json'), configProperty: 'dmd' }
)
var parseConfig = loadConfig(
  path.join(homePath(), '.jsdoc-parse.json'),
  path.join(process.cwd(), '.jsdoc-parse.json'),
  { jsonPath: path.join(process.cwd(), 'package.json'), configProperty: 'jsdoc-parse' }
)
var jsdoc2mdConfig = loadConfig(
  path.join(homePath(), '.jsdoc2md.json'),
  path.join(process.cwd(), '.jsdoc2md.json'),
  { jsonPath: path.join(process.cwd(), 'package.json'), configProperty: 'jsdoc2md' }
)

var config = o.extend(parseConfig, dmdConfig, jsdoc2mdConfig, argv._all)

if (config.template) {
  config.template = fs.readFileSync(config.template, 'utf8')
}

if (config.help) {
  dope.log(usage)
  process.exit(0)
}

if (config.config) {
  console.log(JSON.stringify(o.without(config, 'config'), null, '  '))
  process.exit(0)
}

var d = domain.create()
d.on('error', halt)
d.run(function () {
  if (config.src) {
    jsdoc2md(config).pipe(process.stdout)
  } else {
    process.stdin.pipe(jsdoc2md(config)).pipe(process.stdout)
  }
})

function halt (err) {
  if (err.code === 'EPIPE') process.exit(0) /* no big deal */

  if (config) {
    if (config.verbose) {
      dope.red.error(err.stack || err)
    } else {
      dope.red.error('Error: ' + err.message)
      dope.red.error('(run jsdoc2md with --verbose for a stack trace)')
    }
  } else {
    dope.red.error(err.message)
  }
  dope.error(usage)
  process.exit(1)
}
