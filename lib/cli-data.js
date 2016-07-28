'use strict'
var dmdCliData = require('dmd').cliOptions

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
  { name: 'json', type: Boolean },
  // { name: 'term', type: Boolean },
  // { name: 'tree', type: Boolean },
  // { name: 'decorations', type: String, multiple: true },
  // { name: 'template', alias: 't', type: String, typeLabel: '<file>',
  //   description: 'A custom javascript template file to insert documentation into.'
  // },
  { name: 'version', type: Boolean },
  // { name: 'group-by', type: String, multiple: true },
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
  },
  { name: 'format', type: String },
  { name: 'clean', type: Boolean }
]

/* mix in the jsdoc-parse and dmd options */
definitions = definitions
  .map(def => {
    def.group = 'jsdoc2md'
    return def
  })
  .concat(dmdCliData.map(function (def) {
    def.group = 'dmd'
    return def
  }))

module.exports = {
  definitions: definitions,
  usageSections: [
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
      header: 'jsdoc2md',
      content: 'General options.'
    },
    {
      optionList: definitions,
      group: 'jsdoc2md'
    },
    {
      header: 'dmd',
      content: 'These options affect how the markdown output looks.'
    },
    {
      optionList: definitions,
      group: 'dmd'
    },
    {
      content: [
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
      ]
    }
  ]
}
