'use strict'
var jsdocParse = require('jsdoc-parse')
var dmd = require('dmd')

/* generation options */
var definitions = [
  {
    name: 'verbose', description: 'More verbose error reporting',
    alias: 'v', type: Boolean, group: 'jsdoc2md'
  },
  {
    name: 'help', description: 'Print usage information',
    alias: 'h', type: Boolean, group: 'jsdoc2md'
  },
  {
    name: 'json', description: 'Output the jsdoc-parse json only',
    alias: 'j', type: Boolean, group: 'jsdoc2md'
  },
  {
    name: 'config', description: 'Print the stored config and exit',
    type: Boolean, group: 'jsdoc2md'
  }
]

/* mix in the jsdoc-parse and dmd options */
definitions = definitions
  .concat(jsdocParse.cliOptions.map(function (def) {
    def.group = 'jsdocParse'
    return def
  }))
  .concat(dmd.cliOptions.map(function (def) {
    def.group = 'dmd'
    return def
  }))

var usageSections = [
  {
    header: 'jsdoc-to-markdown',
    content: 'Markdown API Documentation generator.'
  },
  {
    header: 'Synopsis',
    content: [
      '$ jsdoc2md [options] [bold]{--src} [underline]{file} ...',
      '$ jsdoc2md [bold]{--help}',
      '$ jsdoc2md [bold]{--config}',
      '$ jsdoc2md [bold]{--stats} [underline]{file} ...',
      '$ jsdoc2md [bold]{--json} [underline]{file} ...'
    ]
  },
  {
    header: 'General options',
    optionList: definitions,
    group: 'jsdoc2md'
  },
  {
    header: 'jsdoc-parse options',
    content: 'These options affect how the javascript source is parsed.'
  },
  {
    optionList: definitions,
    group: 'jsdocParse',
  },
  {
    header: 'dmd options',
    content: 'These options affect how the markdown output looks.'
  },
  {
    optionList: definitions,
    group: 'dmd'
  },
  {
    content: [
      {
        one: 'Project repositories:',
        two: '[underline]{https://github.com/jsdoc2md/jsdoc-to-markdown}'
      }, {
        one: '',
        two: '[underline]{https://github.com/jsdoc2md/jsdoc-parse}'
      }, {
        one: '',
        two: '[underline]{https://github.com/jsdoc2md/dmd}'
      }
    ]
  }
]

exports.definitions = definitions
exports.usage = usageSections
