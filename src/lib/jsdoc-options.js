'use strict'

class JsdocOptions {
  constructor (options) {
    Object.assign(this, options)
    if (options['no-cache']) {
      this.cache = !options['no-cache']
      delete this['no-cache']
    }
  }
}

module.exports = JsdocOptions
