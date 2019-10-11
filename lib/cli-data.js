/* generation options */
const jsdocDefinitions = [
  {
    name: 'files',
    alias: 'f',
    type: String,
    multiple: true,
    defaultOption: true,
    description: 'A list of jsdoc explain files (or glob expressions) to parse for documentation. Either this or [bold]{--source} must be supplied.',
    typeLabel: '[underline]{file} ...'
  },
  {
    name: 'source',
    type: String,
    description: 'A string containing source code to parse for documentation. Either this or [bold]{--files} must be supplied.'
  },
  {
    name: 'configure',
    alias: 'c',
    type: String,
    typeLabel: '[underline]{file}',
    description: 'Path to a jsdoc configuration file, passed directly to `jsdoc -c`.'
  },
  {
    name: 'namepaths',
    type: Boolean,
    description: 'Print namepaths.'
  }
]

const jsdoc2mdDefinitions = [
  {
    name: 'help',
    description: 'Print usage information',
    alias: 'h',
    type: Boolean
  },
  {
    name: 'config',
    description: 'Print all options supplied (from command line, `.jsdoc2md.json` or `package.json` under the `jsdoc2md` property) and exit. Useful for checking the tool is receiving the correct config.',
    type: Boolean
  },
  {
    name: 'json',
    type: Boolean,
    description: 'Prints the data (jsdoc-parse output) supplied to the template (dmd).'
  },
  {
    name: 'jsdoc',
    type: Boolean,
    description: 'Prints the raw jsdoc data.'
  },
  { name: 'version', type: Boolean },
  { name: 'no-usage-stats', type: Boolean },
  { name: 'send', type: Boolean },
  {
    name: 'no-cache',
    type: Boolean,
    description: 'By default, repeat invocations against the same input with the same options returns from cache. This option disables that. '
  },
  {
    name: 'clear',
    type: Boolean,
    description: 'Clears the cache.'
  }
]

const dmdDefinitions = [
  {
    name: 'template',
    alias: 't',
    type: String,
    typeLabel: '<file>',
    description: 'A custom handlebars template file to insert documentation into. The default template is `{{>main}}`.'
  },
  {
    name: 'private',
    type: Boolean,
    description: 'Include identifiers marked [bold]{@private} in the output'
  },
  {
    name: 'heading-depth',
    type: Number,
    alias: 'd',
    description: 'Root markdown heading depth, defaults to 2 ([bold]{##}).'
  },
  {
    name: 'plugin',
    type: String,
    typeLabel: '[underline]{module} ...',
    multiple: true,
    description: 'Use an installed package containing helper and/or partial overrides.'
  },
  {
    name: 'helper',
    type: String,
    typeLabel: '[underline]{module} ...',
    multiple: true,
    description: 'Handlebars helper modules to override or extend the default set.'
  },
  {
    name: 'partial',
    type: String,
    typeLabel: '[underline]{file} ...',
    multiple: true,
    description: 'Handlebars partial files to override or extend the default set.'
  },
  {
    name: 'example-lang',
    type: String,
    alias: 'l',
    description: 'Specifies the default language used in [bold]{@example} blocks (for syntax-highlighting purposes). In the default gfm mode, each [bold]{@example} is wrapped in a fenced-code block. Example usage: [bold]{--example-lang js}. Use the special value [bold]{none} for no specific language. While using this option, you can override the supplied language for any [bold]{@example} by specifying the [bold]{@lang} subtag, e.g [bold]{@example @lang hbs}. Specifying [bold]{@example @lang off} will disable code blocks for that example.'
  },
  { name: 'name-format', type: Boolean, description: 'Format identifier names as code (i.e. wrap function/property/class etc names in backticks).' },
  {
    name: 'no-gfm',
    type: Boolean,
    description: 'By default, dmd generates github-flavoured markdown. Not all markdown parsers render gfm correctly. If your generated docs look incorrect on sites other than Github (e.g. npmjs.org) try enabling this option to disable Github-specific syntax. '
  },
  {
    name: 'separators',
    type: Boolean,
    description: 'Put [bold]{<hr>} breaks between identifiers. Improves readability on bulky docs. '
  },
  {
    name: 'module-index-format',
    type: String,
    alias: 'm',
    description: 'When muliple modules are found in the input source code, an index is generated. It can be styled by one of the following options: [bold]{none}, [bold]{grouped}, [bold]{table} or [bold]{dl}.'
  },
  {
    name: 'global-index-format',
    type: String,
    alias: 'g',
    description: 'When muliple global-scope identifiers are found in the input source code, an index is generated. It can be styled by one of the following options: [bold]{none}, [bold]{grouped}, [bold]{table} or [bold]{dl}.'
  },
  {
    name: 'param-list-format',
    type: String,
    alias: 'p',
    description: 'Two options to render [bold]{@param} lists: [bold]{list} or [bold]{table} (default). Table format works well in most cases but switch to [bold]{list} if things begin to look crowded. '
  },
  {
    name: 'property-list-format',
    type: String,
    alias: 'r',
    description: 'Two options to render [bold]{@property} lists: [bold]{list} or [bold]{table} (default).'
  },
  {
    name: 'member-index-format',
    type: String,
    description: 'Two options to render member lists: [bold]{list} or [bold]{grouped} (default). The [bold]{list} view is loosely-based on the nodejs docs.'
  }
]

/* mix in the jsdoc-parse and dmd options */
const definitions = jsdocDefinitions
  .map(def => {
    def.group = 'jsdoc'
    return def
  })
  .concat(jsdoc2mdDefinitions.map(def => {
    def.group = 'jsdoc2md'
    return def
  }))
  .concat(dmdDefinitions.map(function (def) {
    def.group = 'dmd'
    return def
  }))

module.exports = {
  definitions: definitions,
  usageSections: [
    {
      header: 'jsdoc-to-markdown',
      content: 'Generates markdown documentation from jsdoc-annotated source code.'
    },
    {
      header: 'Synopsis',
      content: [
        {
          cmmd: '$ jsdoc2md <jsdoc-options> [<dmd-options>]'
        },
        {
          cmmd: '$ jsdoc2md <jsdoc-options> [bold]{--jsdoc}'
        },
        {
          cmmd: '$ jsdoc2md <jsdoc-options> [bold]{--json}'
        },
        {
          cmmd: '$ jsdoc2md <jsdoc-options> [bold]{--namepaths}'
        },
        {
          cmmd: '$ jsdoc2md [bold]{--help}'
        },
        {
          cmmd: '$ jsdoc2md [bold]{--config}'
        }
      ]
    },
    {
      header: 'General options',
      content: 'Main options affecting mode. If none of the following are supplied, the tool will generate markdown docs.'
    },
    {
      optionList: jsdoc2mdDefinitions,
      hide: ['no-usage-stats', 'send']
    },
    {
      header: 'jsdoc options',
      content: 'Options regarding the input source code, passed directly to jsdoc.'
    },
    {
      optionList: jsdocDefinitions
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
          col1: 'Project repository:',
          col2: '[underline]{https://github.com/jsdoc2md/jsdoc-to-markdown}'
        }
      ]
    }
  ]
}
