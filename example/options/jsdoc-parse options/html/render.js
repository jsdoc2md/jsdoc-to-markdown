'use strict'
var render = require('../../../render')

render(
  {
    src: __dirname + '/index.html',
    template: __dirname + '/template.hbs',
    html: true,
    source: __dirname + '/index.html'
  },
  __dirname + '/readme.md'
)
