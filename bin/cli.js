#!/usr/bin/env node
'use strict'
const progressView = require('../lib/progress-view')
const path = require('path')

var tool = require('command-line-tool')

var cli = parseCommandLine()

if (cli.args._all.help) {
  tool.stop(cli.usage)
} else if (cli.args._all.version) {
  tool.stop(require('../package').version)
} else {
  loadDependencies()
  var jsdoc2md = require('../')
  var config = loadStoredConfig(cli.args)

  if (config.data) {
    jsdoc2md
      .on('progress', progressView.write.bind(progressView))
      .getTemplateData(config.src)
      .then(function (json) {
        console.log(JSON.stringify(json, null, '  '))
      })
      .catch(err => console.error(err.stack))
    return
  }

  if (config.stats) {
    jsdoc2md
      .on('progress', progressView.write.bind(progressView))
      .getStats(config.src)
      .then(function (json) {
        console.log(JSON.stringify(json, null, '  '))
      })
      .catch(err => console.error(err.stack))
    return
  }

  if (config.tree) {
    jsdoc2md
      .on('progress', progressView.write.bind(progressView))
      .getDocs(config.src, config)
      .then(function (docs) {
        console.log(docs.tree())
      })
      .catch(err => console.error(err.stack))
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

function loadDecorations (config) {
  progressView.write('Loading decorations')
  const walkBack = require('walk-back')
  const fs = require('fs')

  config.decorations = config.decorations.map(function (decorationPath) {
    if (fs.existsSync(path.resolve(decorationPath))) {
      return require(path.resolve(decorationPath))
    } else {
      const decorationModulePath = walkBack('./node_modules', decorationPath)
      if (decorationModulePath) {
        return require(decorationModulePath)
      } else {
        tool.error(`Invalid decoration module: ${decorationPath}`)
      }
    }
  })
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
