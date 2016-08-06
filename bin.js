#!/usr/bin/env node
'use strict'
var detect = require('feature-detect-es6')

if (detect.all('class', 'arrowFunction', 'let', 'const')) {
  module.exports = require('./src/bin/cli')
} else {
  require('core-js/es6/object')
  module.exports = require('./es5/bin/cli')
}
