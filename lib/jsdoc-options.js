class JsdocOptions {
  constructor (options) {
    Object.assign(this, options)
    this.cache = !options['no-cache']
    delete this['no-cache']
  }
}

module.exports = JsdocOptions
