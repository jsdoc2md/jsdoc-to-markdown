#!/usr/bin/env node
'use strict'
const Tool = require('command-line-tool')
const tool = new Tool()

const cli = parseCommandLine()

if (cli.options._all.help) {
  tool.stop(cli.usage)
} else if (cli.options._all.version) {
  tool.stop(require('../package').version)
} else if (cli.options._all.clean) {
  const jsdoc2md = require('../')
  jsdoc2md.clean().catch(tool.halt)
} else {
  loadDependencies()
  const jsdoc2md = require('../')
  const config = loadStoredConfig(cli.options)

  if (config.json) {
    jsdoc2md
      .getTemplateData(config.src)
      .then(function (json) {
        console.log(JSON.stringify(json, null, '  '))
      })
      .catch(tool.halt)
  } else if (config.stats) {
    jsdoc2md
      .getStats(config.src)
      .then(function (json) {
        console.log(JSON.stringify(json, null, '  '))
      })
      .catch(tool.halt)
  } else {
    if (config.template) config.template = loadOutputTemplate(config.template)
    if (config.config) {
      var o = require('object-tools')
      tool.stop(JSON.stringify(o.without(config, 'config'), null, '  '))
    }

    jsdoc2md
      .createRenderStream(config.src, config)
      .pipe(process.stdout)
  }
}

function loadStoredConfig (argv) {
  var loadConfig = require('config-master')
  var o = require('object-tools')
  var jsdoc2mdConfig = loadConfig('jsdoc2md')

  /* deep merge config objects */
  return o.extend(jsdoc2mdConfig, argv._all)
}

function parseCommandLine () {
  var cliData = require('../lib/cli-data')

  try {
    return tool.getCli(cliData.definitions, cliData.usageSections)
  } catch (err) {
    tool.halt(err, { stack: true })
  }
}

function loadOutputTemplate (filename) {
  var fs = require('fs')
  return fs.readFileSync(filename, 'utf8')
}

function loadDependencies () {
  const pkg = require('../package')
  Object.keys(pkg.dependencies).forEach(dep => {
    if ([ 'dterm', 'dmd2', 'command-line-args' ].indexOf(dep) === -1) {
      require(dep)
    }
  })
}
