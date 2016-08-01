'use strict'

/* generation options */
let definitions = [
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
  { name: 'clear', type: Boolean }
]

const dmdDefinitions = [
  { name: 'template', alias: 't', type: String, typeLabel: '<file>',
    description: 'A custom handlebars template file to insert documentation into. The default template is `{{>main}}`.'
  },
  { name: 'heading-depth', type: Number, alias: 'd',
    description: 'root heading depth, defaults to 2 (`##`).'
  },
  { name: 'plugin', type: String, typeLabel: '<modules>', multiple: true,
    description: 'Use an installed package containing helper and/or partial overrides'
  },
  { name: 'helper', type: String, typeLabel: '<files>', multiple: true,
    description: 'handlebars helper files to override or extend the default set'
  },
  { name: 'partial', type: String, typeLabel: '<files>', multiple: true,
    description: 'handlebars partial files to override or extend the default set'
  },
  { name: 'example-lang', type: String, alias: 'l',
    description: 'Specifies the default language used in @example blocks (for syntax-highlighting purposes). In gfm mode, each @example is wrapped in a fenced-code block. Example usage: `--example-lang js`. Use the special value `none` for no specific language. While using this option, you can override the supplied language for any @example by specifying the `@lang` subtag, e.g `@example @lang hbs`. Specifying `@example @lang off` will disable code blocks for that example.'
  },
  { name: 'name-format', type: Boolean,
    description: 'Format identifier names as code'
  },
  { name: 'no-gfm', type: Boolean,
    description: 'By default, dmd generates github-flavoured markdown. Not all markdown parsers render gfm correctly. If your generated docs look incorrect on sites other than Github (e.g. npmjs.org) try enabling this option to disable Github-specific syntax. '
  },
  { name: 'separators', type: Boolean,
    description: 'Put <hr> breaks between identifiers. Improves readability on bulky docs. '
  },
  { name: 'module-index-format', type: String, alias: 'm',
    description: 'none, grouped, table, dl'
  },
  { name: 'global-index-format', type: String, alias: 'g',
    description: 'none, grouped, table, dl'
  },
  { name: 'param-list-format', type: String, alias: 'p',
    description: "Two options to render parameter lists: 'list' or 'table' (default). Table format works well in most cases but switch to list if things begin to look crowded / squashed. "
  },
  { name: 'property-list-format', type: String, alias: 'r',
    description: 'list, table'
  },
  { name: 'member-index-format', type: String, alias: 'c',
    description: 'grouped, list'
  },
  { name: 'group-by', type: String, typeLabel: '<fields>', multiple: true,
    description: 'a list of fields to group member indexes by'
  }
]

/* mix in the jsdoc-parse and dmd options */
definitions = definitions
  .map(def => {
    def.group = 'jsdoc2md'
    return def
  })
  .concat(dmdDefinitions.map(function (def) {
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
        '$ jsdoc2md [<options>] [bold]{--src} [underline]{file} ...',
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
