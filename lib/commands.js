'use strict'
const Command = require('work').Command
exports.LoadDepsCommand = LoadDepsCommand
exports.ParseCommandLine = ParseCommandLine

class LoadDepsCommand extends Command {
  execute () {
    [
      'command-line-args',
      '../lib/cli-data',
      'command-line-tool'
    ].forEach(require)
  }
}

class LoadDepsCommand extends Command {
  execute () {
    const commandLineArgs = require('command-line-args')
    const cliData = require('../lib/cli-data')
    const tool = require('command-line-tool')

    const cli = commandLineArgs(cliData.definitions)
    const usage = cli.getUsage(cliData.usage)

    try {
      return cli.parse()
    } catch (err) {
      tool.stop(1, { message: err })
    }
  }
}
