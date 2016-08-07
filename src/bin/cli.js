'use strict'
const tool = require('command-line-tool')
const UsageStats = require('usage-stats')
const path = require('path')
const version = require('../../package').version
const usageStats = new UsageStats({
  appName: 'jsdoc2md',
  version: version,
  tid: 'UA-70853320-3'
})

const cli = parseCommandLine()
let options = cli.options._all

/* jsdoc2md --help */
if (options.help) {
  tool.printOutput(cli.usage)

/* jsdoc2md --version */
} else if (options.version) {
  tool.printOutput(version)

/* jsdoc2md --clear */
} else if (options.clear) {
  usageStats.screenView('clear').send()
  const jsdoc2md = require('../../')
  jsdoc2md.clear().catch(tool.halt)

} else {
  const jsdoc2md = require('../../')
  options = loadStoredConfig(options)

  Object.keys(options).forEach(option => {
    const dontSend = [ 'files', 'source' ]
    usageStats.event('option', option, dontSend.includes(option) ? undefined : options[option])
  })

  /* jsdoc2md --config */
  if (options.config) {
    usageStats.screenView('config').send()
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
    usageStats.screenView('json').send()
    jsdoc2md.getTemplateData(options)
      .then(function (json) {
        tool.printOutput(JSON.stringify(json, null, '  '))
      })
      .catch(tool.halt)

  /* jsdoc2md --jsdoc */
  } else if (options.jsdoc) {
    usageStats.screenView('jsdoc').send()
    jsdoc2md
      .getJsdocData(options)
      .then(function (json) {
        tool.printOutput(JSON.stringify(json, null, '  '))
      })
      .catch(tool.halt)

  /* jsdoc2md --namepaths */
  } else if (options.stats) {
    usageStats.screenView('stats').send()
    jsdoc2md
      .getStats(options.files)
      .then(function (json) {
        tool.printOutput(JSON.stringify(json, null, '  '))
      })
      .catch(tool.halt)

  /* jsdoc2md [<options>] --src <files> */
  } else {
    usageStats.screenView('gen').send()
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
