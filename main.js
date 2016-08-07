'use strict'
var detect = require('feature-detect-es6')

require('core-js/es7/array')

if (detect.all('class', 'arrowFunction', 'let', 'const')) {
  module.exports = require('./src/lib/jsdoc-to-markdown')
} else {
  require('core-js/es6/object')
  module.exports = require('./es5/lib/jsdoc-to-markdown')
}
