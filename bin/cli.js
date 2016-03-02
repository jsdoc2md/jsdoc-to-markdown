#!/usr/bin/env node
'use strict'
const progressView = require('../lib/progress-view')
const path = require('path')
const tool = require('command-line-tool')

const cli = parseCommandLine()

if (cli.args._all.help) {
  tool.stop(cli.usage)
} else if (cli.args._all.version) {
  tool.stop(require('../package').version)
} else if (cli.args._all.clean) {
  const jsdoc2md = require('../')
  jsdoc2md.clean().catch(tool.halt)
} else {
  loadDependencies()
  const jsdoc2md = require('../')
  const config = loadStoredConfig(cli.args)

  if (config.data) {
    jsdoc2md
      .on('progress', progressView.write.bind(progressView))
      .getTemplateData(config.src)
      .then(function (json) {
        console.log(JSON.stringify(json, null, '  '))
      })
      .catch(tool.error)
    return
  }

  if (config.stats) {
    jsdoc2md
      .on('progress', progressView.write.bind(progressView))
      .getStats(config.src)
      .then(function (json) {
        console.log(JSON.stringify(json, null, '  '))
      })
      .catch(tool.error)
    return
  }

  if (config.tree) {
    jsdoc2md
      .on('progress', progressView.write.bind(progressView))
      .getDocs(config.src, config)
      .then(function (docs) {
        console.log(docs.tree())
      })
      .catch(tool.error)
    return
  }

  if (config.template) config.template = loadOutputTemplate(config.template)
  if (config.config) {
    var o = require('object-tools')
    tool.stop(JSON.stringify(o.without(config, 'config'), null, '  '))
  }

  if (config.decorations) loadDecorations(config)

  jsdoc2md
    .on('progress', progressView.write.bind(progressView))
    .createRenderStream(config.src, config)
    .pipe(process.stdout)
}

function loadStoredConfig (argv) {
  progressView.write('Loading stored config')
  var loadConfig = require('config-master')
  var o = require('object-tools')

  var jsdoc2mdConfig = loadConfig('jsdoc2md')

  /* deep merge config objects */
  return o.extend(jsdoc2mdConfig, argv._all)
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
    tool.error(err)
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

function loadedModules () {
  const DocletTemplate = require('jsdoc-parse-template/doclet-template')
  const modules = Object.keys(require.cache)
    .map(key => ({ id: key, parentId: require.cache[key].parent && require.cache[key].parent.id }))
  // console.error(modules)
  modules.push({ id: '.' })
  const template = DocletTemplate.build(modules)
  console.error(template.tree())
}

process.on('unhandledRejection', function (err, p) {
  console.error('UNHANDLED', err.stack)
})
