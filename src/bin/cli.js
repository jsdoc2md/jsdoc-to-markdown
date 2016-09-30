'use strict'
const tool = require('command-line-tool')
const version = require('../../package').version

const cli = parseCommandLine()
let options = cli.options._all
options = loadStoredConfig(options)

/* jsdoc2md --no-cache */
if (options['no-cache']) {
  options.cache = false
  delete options['no-cache']
}

/* jsdoc2md --help */
if (options.help) {
  tool.printOutput(cli.usage)

/* jsdoc2md --version */
} else if (options.version) {
  tool.printOutput(version)

/* jsdoc2md --clear */
} else if (options.clear) {
  const jsdoc2md = require('../../')
  // const Jsdoc2md = require('../../')
  // const jsdoc2md = new Jsdoc2md()
  jsdoc2md._interface = 'cli'
  jsdoc2md.clear().catch(tool.halt)
} else {
  const jsdoc2md = require('../../')
  // const Jsdoc2md = require('../../')
  // const jsdoc2md = new Jsdoc2md()
  jsdoc2md._interface = 'cli'

  /* jsdoc2md --config */
  if (options.config) {
    const omit = require('lodash.omit')
    tool.stop(JSON.stringify(omit(options, 'config'), null, '  '))
  }

  /* input files (jsdoc-options) required from here */
  /* input validation */
  try {
    const assert = require('assert')
    options.files = options.files || []
    assert.ok(options.files.length || options.source, 'Must supply either --files or --source')
  } catch (err) {
    tool.printOutput(cli.usage)
    tool.halt(err)
  }

  /* jsdoc2md --json */
  if (options.json) {
    jsdoc2md.getTemplateData(options)
      .then(function (json) {
        tool.printOutput(JSON.stringify(json, null, '  '))
      })
      .catch(tool.halt)

  /* jsdoc2md --jsdoc */
  } else if (options.jsdoc) {
    jsdoc2md
      .getJsdocData(options)
      .then(function (json) {
        tool.printOutput(JSON.stringify(json, null, '  '))
      })
      .catch(tool.halt)

  /* jsdoc2md --namepaths */
  } else if (options.stats) {
    jsdoc2md
      .getStats(options.files)
      .then(function (json) {
        tool.printOutput(JSON.stringify(json, null, '  '))
      })
      .catch(tool.halt)

  /* jsdoc2md [<options>] --src <files> */
  } else {
    const fs = require('fs')
    if (options.template) options.template = fs.readFileSync(options.template, 'utf8')

    jsdoc2md
      .render(options)
      .then(output => process.stdout.write(output))
      .catch(err => tool.halt(err, { stack: true }))
  }
}

function loadStoredConfig (options) {
  const loadConfig = require('config-master')
  const jsdoc2mdConfig = loadConfig('jsdoc2md')
  return Object.assign(jsdoc2mdConfig, options)
}

function parseCommandLine () {
  const cliData = require('../lib/cli-data')
  try {
    return tool.getCli(cliData.definitions, cliData.usageSections)
  } catch (err) {
    tool.halt(err, { stack: false })
  }
}
