#!/usr/bin/env node
'use strict'
var fs = require('fs')
var commandLineArgs = require('command-line-args')
var commandLineUsage = require('command-line-usage')
var jsdoc2md = require('../')
var domain = require('domain')
var loadConfig = require('config-master')
var o = require('object-tools')
var cliData = require('../lib/cli-data')
var ansi = require('ansi-escape-sequences')

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
  process.exitCode = 1
}

var usage = commandLineUsage(cliData.usage)

try {
  var argv = commandLineArgs(cliData.definitions)
} catch (err) {
  halt(err)
  return
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
} else if (config.config) {
  console.log(JSON.stringify(o.without(config, 'config'), null, '  '))
} else {
  var d = domain.create()
  d.on('error', halt)
  d.run(function () {
    var stream = jsdoc2md(config, 'cli')
    if (config.src) {
      stream.pipe(process.stdout)
    } else {
      process.stdin.pipe(stream).pipe(process.stdout)
    }
  })
}
