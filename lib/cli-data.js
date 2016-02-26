'use strict'
var dmdCliData = require('dmd2/lib/cli-data')
var dtermCliData = require('dterm/lib/cli-data')

/* generation options */
var definitions = [
  {
    name: 'src',
    alias: 'f',
    type: String,
    multiple: true,
    defaultOption: true,
    description: 'A list of jsdoc explain files (or glob expressions) to parse for documentation. If this option is not set jsdoc-parse will wait for source code on stdin (i.e. `cat *.json | jsdoc-parse <options>`).',
    typeLabel: '[underline]{file} ...'
  },
  {
    name: 'help', description: 'Print usage information',
    alias: 'h', type: Boolean
  },
  {
    name: 'config', description: 'Print the stored config and exit',
    type: Boolean
  },
  { name: 'data', type: Boolean },
  { name: 'term', type: Boolean },
  { name: 'tree', type: Boolean },
  { name: 'decorations', type: String, multiple: true },
  { name: 'template', alias: 't', type: String, typeLabel: '<file>',
    description: 'A custom javascript template file to insert documentation into.'
  },
  { name: 'version', type: Boolean },
  { name: 'group-by', type: String, multiple: true },
  {
    name: 'sort-by',
    type: String,
    multiple: true,
    alias: 's',
    description: 'Sort by one of more properties, e.g. `--sort-by kind category`. Defaults to `[ "scope", "category", "kind", "order" ]`. Pass the special value `none` to remove the default sort order. ',
    typeLabel: '[underline]{property} ...'
  },
  {
    name: 'html',
    alias: 'H',
    type: Boolean,
    description: 'Enable experimental parsing of .html files'
  },
  {
    name: 'private',
    alias: 'P',
    type: Boolean,
    description: 'Include identifiers marked @private in the output'
  }
]

/* mix in the jsdoc-parse and dmd options */
definitions = definitions
  .map(def => {
    def.group = 'jsdoc2md'
    return def
  })
  .concat(dmdCliData.definitions.map(function (def) {
    def.group = 'dmd'
    return def
  }))
  .concat(dtermCliData.definitions.map(function (def) {
    def.group = 'dterm'
    return def
  }))

module.exports = {
  definitions: definitions,
  usage: {
    title: 'jsdoc-to-markdown',
    description: 'Markdown API Documentation generator.',
    footer: [
      {
        col1: 'Project repositories:',
        col2: '[underline]{https://github.com/jsdoc2md/jsdoc-to-markdown}'
      }, {
        col1: '',
        col2: '[underline]{https://github.com/jsdoc2md/jsdoc-parse}'
      }, {
        col1: '',
        col2: '[underline]{https://github.com/jsdoc2md/dmd}'
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
      dmd: {
        title: 'dmd',
        description: 'These options affect how the markdown output looks.'
      }
    }
  }
}
