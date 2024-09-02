import jsdocApi from 'jsdoc-api'
import dmd from 'dmd'
import DmdOptions from './lib/dmd-options.js'
import JsdocOptions from './lib/jsdoc-options.js'
import jsdocParse from 'jsdoc-parse'

/**
 * @module jsdoc-to-markdown
 * @example
 * import jsdoc2md from 'jsdoc-to-markdown'
 */

/**
 * @alias module:jsdoc-to-markdown
 * @typicalname jsdoc2md
*/
class JsdocToMarkdown {
  /**
   * Returns markdown documentation from jsdoc-annoted source code.
   *
   * @param [options] {object} - Accepts all {@link module:jsdoc-to-markdown#getJsdocData} options plus the following:
   * @param [options.data] {object[]} - Raw template data to use. Useful when you already have template data, obtained from `.getTemplateData()`. In the options, one of `files`, `source`, , `configure` or `data` must be supplied.
   * @param [options.template] {string} - The handlebars template the supplied documentation will be rendered into. Enables full control over the output.
   * @param [options.heading-depth] {number} - The initial heading depth. For example, with a value of `2` the top-level markdown headings look like `"## The heading"`.
   * @param [options.example-lang] {string} - Specifies the default language used in @example blocks (for [syntax-highlighting](https://help.github.com/articles/github-flavored-markdown/#syntax-highlighting) purposes). In gfm mode, each @example is wrapped in a fenced-code block. Example usage: `--example-lang js`. Use the special value `none` for no specific language. While using this option, you can override the supplied language for any @example by specifying the `@lang` subtag, e.g `@example @lang hbs`. Specifying `@example @lang off` will disable code blocks for that example.
   * @param [options.plugin] {string|string[]} - Use an installed package containing helper and/or partial overrides.
   * @param [options.helper] {string|string[]} - handlebars helper files to override or extend the default set.
   * @param [options.partial] {string|string[]} - handlebars partial files to override or extend the default set.
   * @param [options.name-format] {string} - Format identifier names as code (i.e. wrap function/property/class etc names in backticks).
   * @param [options.no-gfm] {boolean} - By default, dmd generates github-flavoured markdown. Not all markdown parsers render gfm correctly. If your generated docs look incorrect on sites other than Github (e.g. npmjs.org) try enabling this option to disable Github-specific syntax.
   * @param [options.separators] {boolean} - Put `<hr>` breaks between identifiers. Improves readability on bulky docs.
   * @param [options.module-index-format] {string} - none, grouped, table, dl.
   * @param [options.global-index-format] {} - none, grouped, table, dl.
   * @param [options.param-list-format] {} - Two options to render parameter lists: 'list' or 'table' (default). Table format works well in most cases but switch to list if things begin to look crowded / squashed.
   * @param [options.property-list-format] {} - list, table.
   * @param [options.member-index-format] {} - grouped, list
   * @param [options.clever-links] {boolean} - By default, all {@link} tags are rendered in plain text. If `--clever-links` is set, URL {@link} tags are rendered in plain text, otherwise monospace.
   * @param [options.monospace-links] {boolean} - By default, all {@link} tags are rendered in plain text. If `--monospace-links` is set, all links are rendered in monospace format. This setting is ignored if `--clever-links` is set.
   * @param [options.EOL] {string} - Specify ether `posix` or `win32`. Forces all line endings in the dmd output to use the specified EOL character - can help to avoid scenarios where files contain mixed line-endings.
   * @return {Promise<string>}
   * @fulfil {string} - the rendered docs
   * @category async
   * @example
   * Pass in filepaths (`**` glob matching supported) of javascript source files:
   * ```js
   * > const apiDocs = await jsdoc2md.render({ files: 'lib/*.js' })
   * ```
   */
  async render (options = {}) {
    const dmdOptions = new DmdOptions(options)
    if (options.data) {
      return dmd(options.data, dmdOptions)
    } else {
      const templateData = await this.getTemplateData(options)
      return dmd(templateData, dmdOptions)
    }
  }

  /**
   * Returns the template data (jsdoc-parse output) which is fed into the output template (dmd).
   *
   * @param [options] {object} - Identical options to {@link module:jsdoc-to-markdown#getJsdocData}.
   * @return {Promise<object[]>}
   * @fulfil {object[]} - the json data
   * @category async
   */
  async getTemplateData (options = {}) {
    const jsdocData = await this.getJsdocData(options)
    return jsdocParse(jsdocData)
  }

  /**
   * Returns raw data direct from the underlying [jsdoc3](https://github.com/jsdoc3/jsdoc).
   *
   * @param [options] {object} - the options
   * @param [options.no-cache] {boolean} - By default results are cached to speed up repeat invocations with the same input. Set to true to disable this.
   * @param [options.files] {string|string[]} - One or more filenames to process. Accepts globs (e.g. `*.js`). Either `files`, `source` or `configure` must be supplied.
   * @param [options.source] {string} - A string containing source code to process. One of `files`, `source` or `configure` must be supplied.
   * @param [options.configure] {string} - The path to the [jsdoc configuration file](https://jsdoc.app/about-configuring-jsdoc.html). Default: path/to/jsdoc/conf.json. One of `files`, `source` or `configure` must be supplied.
   * @return {Promise<object[]>}
   * @fulfil {object[]}
   * @category async
   */
  async getJsdocData (options) {
    const jsdocOptions = new JsdocOptions(options)
    return jsdocApi.explain(jsdocOptions)
  }

  /**
   * By default, the output of each invocation of the main generation methods (`render`, `getTemplateData` etc) is stored in the cache (your system's [temporary directory](https://nodejs.org/dist/latest-v6.x/docs/api/os.html#os_os_tmpdir)). Future jsdoc2md invocations with the same input options and source code will return the output immediately from cache, making the tool much faster/cheaper. If the input options or source code changes, fresh output will be generated. This method clears the cache, which you should never need to do unless the cache is failing for some reason. On Mac OSX, the system tmpdir clears itself every few days meaning your jsdoc2md cache will also be routinely cleared.
   * @returns {Promise}
   * @category async
   */
  async clear () {
    await jsdocApi.cache.clear()
    await dmd.cache.clear()
  }

  /**
   * Returns all [jsdoc namepaths](https://jsdoc.app/about-namepaths.html) found in the supplied source code.
   * @param {object} - options to pass to {@link module:jsdoc-to-markdown#getTemplateData}
   * @returns {object}
   * @category async
   */
  async getNamepaths (options) {
    const data = await this.getTemplateData(options)
    const namepaths = {}
    const kinds = [
      'module', 'class', 'constructor', 'mixin', 'member',
      'namespace', 'constant', 'function', 'event', 'typedef', 'external'
    ]
    for (const kind of kinds) {
      namepaths[kind] = data
        .filter(identifier => identifier.kind === kind)
        .map(identifier => identifier.longname)
    }
    return namepaths
  }
}

export default new JsdocToMarkdown()
