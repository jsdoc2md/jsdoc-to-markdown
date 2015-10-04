'use strict'
var render = require('../../../render')
render(
  {
    src: __dirname + '/../../../src/class-furq.js',
    template: __dirname + '/template.hbs',
    'name-format': 'code'
  },
  __dirname + '/readme.md'
)
