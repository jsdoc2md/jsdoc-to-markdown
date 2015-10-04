'use strict'
var render = require('../../render')

var src = __dirname + '/src.js'
render(
  {
    src: src,
    template: __dirname + '/../template.hbs',
    'global-index-format': 'none',
    source: src
  },
  __dirname + '/readme.md'
)
