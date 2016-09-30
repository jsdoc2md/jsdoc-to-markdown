'use strict'

/**
 * @typicalname options
 */
class DmdOptions {
  constructor (options) {
    const arrayify = require('array-back')

    /**
    * The template the supplied documentation will be rendered into. Use the default or supply your own template for full control over the output.
    * @type {string}
    * @default
    */
    this.template = options.template || '{{>main}}'

    /**
     * The initial heading depth. For example, with a value of `2` the top-level markdown headings look like `"## The heading"`.
     * @type number
     * @default
     */
    this['heading-depth'] = options['heading-depth'] || 2

    /**
     * Specifies the default language used in @example blocks (for [syntax-highlighting](https://help.github.com/articles/github-flavored-markdown/#syntax-highlighting) purposes). In gfm mode, each @example is wrapped in a fenced-code block. Example usage: `--example-lang js`. Use the special value `none` for no specific language. While using this option, you can override the supplied language for any @example by specifying the `@lang` subtag, e.g `@example @lang hbs`. Specifying `@example @lang off` will disable code blocks for that example.
     * @type {string}
     * @default
     */
    this['example-lang'] = options['example-lang'] || 'js'

    /**
     * Use an installed package containing helper and/or partial overrides
     * @type {array}
     */
    this.plugin = arrayify(options.plugin)

    /**
     * handlebars helper files to override or extend the default set
     * @type {array}
     */
    this.helper = arrayify(options.helper)

    /**
     * handlebars partial files to override or extend the default set
     * @type {array}
     */
    this.partial = arrayify(options.partial)

    /**
     * Format identifier names in the [code](http://daringfireball.net/projects/markdown/syntax#code) style, (i.e. format using backticks or `<code></code>`)
     * @type {string}
     */
    this['name-format'] = options['name-format']

    /**
     * By default, dmd generates github-flavoured markdown. Not all markdown parsers render gfm correctly. If your generated docs look incorrect on sites other than Github (e.g. npmjs.org) try enabling this option to disable Github-specific syntax.
     * @type {boolean}
     */
    this['no-gfm'] = options['no-gfm']

    /**
     * Put `<hr>` breaks between identifiers. Improves readability on bulky docs.
     * @type {boolean}
     * @default false
     */
    this.separators = options.separators

    /**
     * none, grouped, table, dl
     * @type {string}
     * @default
     */
    this['module-index-format'] = options['module-index-format'] || 'dl'

    /**
     * none, grouped, table, dl
     * @type {string}
     * @default
     */
    this['global-index-format'] = options['global-index-format'] || 'dl'

    /**
     * Two options to render parameter lists: 'list' or 'table' (default). Table format works well in most cases but switch to list if things begin to look crowded / squashed.
     * @type {string}
     * @default
     */
    this['param-list-format'] = options['param-list-format'] || 'table'

    /**
     * list, table
     * @type {string}
     * @default
     */
    this['property-list-format'] = options['property-list-format'] || 'table'

    /**
     * grouped, list
     * @type {string}
     * @default
     */
    this['member-index-format'] = options['member-index-format'] || 'grouped'

    /**
     * Show identifiers marked `@private` in the output.
     * @type {boolean}
     * @default false
     */
    this.private = options.private
  }
}

module.exports = DmdOptions
