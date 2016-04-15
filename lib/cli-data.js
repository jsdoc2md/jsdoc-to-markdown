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

module.exports = {
  definitions: definitions,
  usage: {
    title: 'jsdoc-to-markdown',
    description: 'Markdown API Documentation generator.',
    footer: [
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
    ],
    synopsis: [
      '$ jsdoc2md [options] [bold]{--src} [underline]{file} ...',
      '$ jsdoc2md [bold]{--help}',
      '$ jsdoc2md [bold]{--config}',
      '$ jsdoc2md [bold]{--stats} [underline]{file} ...',
      '$ jsdoc2md [bold]{--json} [underline]{file} ...'
    ],
    groups: {
      jsdoc2md: {
        title: 'jsdoc2md',
        description: 'General options.'
      },
      jsdocParse: {
        title: 'jsdoc-parse',
        description: 'These options affect how the javascript source is parsed.'
      },
      dmd: {
        title: 'dmd',
        description: 'These options affect how the markdown output looks.'
      }
    }
  }
}
