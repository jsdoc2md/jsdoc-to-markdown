#!/usr/bin/env node
import commandLineArgs from 'command-line-args'
import commandLineUsage from 'command-line-usage'
import jsdoc2md from 'jsdoc-to-markdown'
import assert from 'assert'
import fs from 'fs'
import loadConfig from 'config-master'
import cliData from '../lib/cli-data.js'
import path from 'node:path'
import url from 'node:url'
const __dirname = url.fileURLToPath(path.dirname(import.meta.url))

const cli = parseCommandLine()
let options = cli.options._all
options = loadStoredConfig(options)

/* jsdoc2md --help */
if (options.help) {
  console.log(cli.usage)

/* jsdoc2md --version */
} else if (options.version) {
  const pkg = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf8'))
  console.log(pkg.version)

/* jsdoc2md --clear */
} else if (options.clear) {
  jsdoc2md._interface = 'cli'
  jsdoc2md.clear().catch(handleError)
} else {
  jsdoc2md._interface = 'cli'

  /* jsdoc2md --config */
  if (options.config) {
    delete options.config
    console.log(JSON.stringify(options, null, '  '))
    process.exit(0)
  }

  /* input files (jsdoc-options) required from here */
  /* input validation */
  options.files = options.files || []
  if (!(options.files.length || options.source || options.configure)) {
    console.error('Must supply either --files, --source or --configure')
    console.log(cli.usage)
    process.exit(1)
  }

  /* jsdoc2md --json */
  if (options.json) {
    jsdoc2md.getTemplateData(options)
      .then(function (json) {
        console.log(JSON.stringify(json, null, '  '))
      })
      .catch(handleError)

  /* jsdoc2md --jsdoc */
  } else if (options.jsdoc) {
    jsdoc2md
      .getJsdocData(options)
      .then(function (json) {
        console.log(JSON.stringify(json, null, '  '))
      })
      .catch(handleError)

  /* jsdoc2md --namepaths */
  } else if (options.namepaths) {
    jsdoc2md
      .getNamepaths(options)
      .then(function (namepaths) {
        console.log(JSON.stringify(namepaths, null, '  '))
      })
      .catch(handleError)

  /* jsdoc2md [<options>] --src <files> */
  } else {
    if (options.template) options.template = fs.readFileSync(options.template, 'utf8')

    jsdoc2md
      .render(options)
      .then(output => {
        process.stdout.write(output)
        process.exit(0)
      })
      .catch(handleError)
  }
}

function loadStoredConfig (options) {
  const jsdoc2mdConfig = loadConfig('jsdoc2md')
  return Object.assign(jsdoc2mdConfig, options)
}

function parseCommandLine () {
  const usage = cliData.usageSections ? commandLineUsage(cliData.usageSections) : ''
  const options = commandLineArgs(cliData.definitions)
  return { options, usage }
}

function handleError (err) {
  console.error(err)
  process.exit(1)
}
