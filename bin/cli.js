#!/usr/bin/env node
'use strict'
const progressView = require('../lib/progress-view')
var tool = require('command-line-tool')

var cli = parseCommandLine()

if (cli.args._all.help) {
  tool.stop(0, { usage: cli.usage })
} else {
  loadDependencies()
  var jsdoc2md = require('../')
  var o = require('object-tools')

  progressView.write('Loading stored config')
  var config = loadStoredConfig(cli.args)

  if (config.template) config.template = loadOutputTemplate(config.template)
  if (config.config) tool.stop(0, { message: JSON.stringify(o.without(config, 'config'), null, '  ') })

  const theme = function () {
    return class {
      static applyTo () {
        return 'function'
      }
      theme () {
        return {
          signature: 'bold green'
        }
      }
    }
  }

  // config.decorations.push(theme)

  mapOption('param-list-format', 'dmd/lib/param-list-format-list', 'list')
  mapOption('heading-depth', 'dmd/lib/heading-depth')

  jsdoc2md.render(config.src, config)
    .then(output => {
      progressView.write('done')
      console.log(output)
    })
    .catch(err => {
      console.error(err.stack)
    })
}

function mapOption (optionName, decorationModule, optionValue) {
  if (optionValue && config[optionName] === optionValue) {
    config.decorations.push(require(decorationModule))
  } else {
    config.decorations.push(require(decorationModule).bind(null, config[optionName]))
  }
}

function loadStoredConfig (argv) {
  var loadConfig = require('config-master')
  var o = require('object-tools')

  var dmdConfig = loadConfig('dmd')
  var parseConfig = loadConfig('jsdoc-parse')
  var jsdoc2mdConfig = loadConfig('jsdoc2md')

  /* deep merge config objects */
  return o.extend(parseConfig, dmdConfig, jsdoc2mdConfig, argv._all)
}

function parseCommandLine () {
  progressView.write('Parsing command line')
  var commandLineArgs = require('command-line-args')
  var cliData = require('../lib/cli-data')

  var cli = commandLineArgs(cliData.definitions)

  try {
    return {
      args: cli.parse(),
      usage: cli.getUsage(cliData.usage)
    }
  } catch (err) {
    tool.stop(1, { message: err })
  }
}

function loadOutputTemplate (filename) {
  progressView.write('Loading output template')
  var fs = require('fs')
  return fs.readFileSync(filename, 'utf8')
}

function loadDependencies () {
  progressView.write('Loading dependencies')
  const pkg = require('../package')
  Object.keys(pkg.dependencies).forEach(require)
}
