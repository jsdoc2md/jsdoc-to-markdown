'use strict'
const tool = require('command-line-tool')
const fs = require('fs')

const cli = parseCommandLine()
let options = cli.options._all

/* jsdoc2md --help */
if (options.help) {
  tool.stop(cli.usage)

/* jsdoc2md --version */
} else if (options.version) {
  tool.stop(require('../package').version)

/* jsdoc2md --clear */
} else if (options.clear) {
  const jsdoc2md = require('../../')
  jsdoc2md.clear().catch(tool.halt)

/* jsdoc2md <options> <files>  */
} else {
  const jsdoc2md = require('../../')
  options = loadStoredConfig(options)
  options.src = options.src || []

  /* input validation */
  try {
    const assert = require('assert')
    assert.ok(options.src.length, 'No input files supplied')
  } catch (err) {
    tool.halt(err)
  }

  if (options.json) {
    jsdoc2md
      .getJsdocData(options.src)
      .then(function (json) {
        console.log(JSON.stringify(json, null, '  '))
      })
      .catch(tool.halt)
  } else if (options.stats) {
    jsdoc2md
      .getStats(options.src)
      .then(function (json) {
        console.log(JSON.stringify(json, null, '  '))
      })
      .catch(tool.halt)
  } else {
    if (options.template) options.template = fs.readFileSync(options.template, 'utf8')
    if (options.config) {
      const omit = require('lodash.omit')
      tool.stop(JSON.stringify(omit(options, 'config'), null, '  '))
    }

    jsdoc2md
      .createRenderStream(options.src, options)
      .pipe(process.stdout)
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
    tool.halt(err, { stack: true })
  }
}
