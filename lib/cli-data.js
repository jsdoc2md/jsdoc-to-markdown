'use strict'
var dmdCliData = require('dmd/lib/cli-data')
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
    alias: 'h', type: Boolean, group: 'jsdoc2md'
  },
  {
    name: 'config', description: 'Print the stored config and exit',
    type: Boolean, group: 'jsdoc2md'
  },
  { name: 'json', alias: 'j', type: Boolean, group: 'jsdoc2md' },
  { name: 'term', type: Boolean, group: 'jsdoc2md' },
  { name: 'decorations', type: String, multiple: true, defaultValue: [], group: 'jsdoc2md' },
  { name: 'template', alias: 't', type: String, typeLabel: '<file>',
    description: 'A custom javascript template file to insert documentation into.', group: 'jsdoc2md'
  }
]

const jsdocParseCliOptions = [
  {
    name: 'private',
    alias: 'P',
    type: Boolean,
    description: 'Include identifiers marked @private in the output'
  },
  {
    name: 'html',
    alias: 'H',
    type: Boolean,
    description: 'Enable experimental parsing of .html files'
  },
  {
    name: 'sort-by',
    type: String,
    multiple: true,
    alias: 's',
    description: 'Sort by one of more properties, e.g. `--sort-by kind category`. Defaults to `[ "scope", "category", "kind", "order" ]`. Pass the special value `none` to remove the default sort order. ',
    typeLabel: '[underline]{property} ...'
  },
  {
    name: 'stats',
    type: Boolean,
    description: 'Print a few stats about the doclets parsed'
  }
]

/* mix in the jsdoc-parse and dmd options */
definitions = definitions
  .concat(jsdocParseCliOptions.map(function (def) {
    def.group = 'jsdocParse'
    return def
  }))
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
