'use strict'
var render = require('../../../render')
render(
  {
    src: __dirname + '/../../../src/commonJS/*.js',
    separators: true
  },
  __dirname + '/readme.md'
)
