/**
 * @typicalname options
 */
class DmdOptions {
  constructor (options) {
    Object.assign(this, options)
    this.noCache = options['no-cache']
    delete this['no-cache']
  }
}

export default DmdOptions
