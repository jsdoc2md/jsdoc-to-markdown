class JsdocOptions {
  constructor (options) {
    Object.assign(this, options)
    this.cache = !options['no-cache']
    delete this['no-cache']
    /* Remove the dmd `template` option - it will break jsdoc-api if passed in as the `template` option must be a filename */
    delete this.template
  }
}

export default JsdocOptions
