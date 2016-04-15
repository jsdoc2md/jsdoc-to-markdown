#!/usr/bin/env node
'use strict'
var fs = require('fs')
var commandLineArgs = require('command-line-args')
var jsdoc2md = require('../')
var domain = require('domain')
var loadConfig = require('config-master')
var o = require('object-tools')
var cliData = require('../lib/cli-data')
var ansi = require('ansi-escape-sequences')

var cli = commandLineArgs(cliData.definitions)
var usage = cli.getUsage(cliData.usage)

try {
  var argv = cli.parse()
} catch (err) {
  halt(err)
}

var dmdConfig = loadConfig('dmd')
var parseConfig = loadConfig('jsdoc-parse')
var jsdoc2mdConfig = loadConfig('jsdoc2md')

var config = o.extend(parseConfig, dmdConfig, jsdoc2mdConfig, argv._all)

if (config.template) {
  config.template = fs.readFileSync(config.template, 'utf8')
}

if (config.help) {
  console.log(usage)
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
      console.error(ansi.format(err.stack || err, 'red'))
    } else {
      console.error(ansi.format('Error: ' + err.message, 'red'))
      console.error(ansi.format('(run jsdoc2md with --verbose for a stack trace)', 'red'))
    }
  } else {
    console.error(ansi.format(err.message, 'red'))
  }
  console.error(usage)
  process.exit(1)
}
