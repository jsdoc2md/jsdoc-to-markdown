'use strict'
var render = require('../../../render')
var path = require('path')

render(
  {
    src: __dirname + '/../../../src/commonJS/*.js',
    template: __dirname + '/template.hbs'
  },
  __dirname + '/readme.md'
)
