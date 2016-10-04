'use strict'

class JsdocOptions {
  constructor (options) {
    Object.assign(this, options)
    this.cache = options.cache === undefined ? true : options.cache
  }
}

module.exports = JsdocOptions
