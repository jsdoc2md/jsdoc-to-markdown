'use strict'

module.exports = createDecoration

function createDecoration (SuperClass) {
  return class Example extends SuperClass {
    static applyTo () { return 'function' }
    sigSuffix () {
      return super.sigSuffix() + ` [✈︎](http://www.bing.com)`
    }
  }
}
