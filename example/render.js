'use strict'
var jsdoc2md = require('../')
var fs = require('fs')

module.exports = render

function render (options, output) {
  if (options.template) {
    options.template = fs.readFileSync(options.template, 'utf8')
  }
  if (options.source) {
    if (Array.isArray(options.source)) {
      var source = ''
      options.source.forEach(function (file) {
        source += fs.readFileSync(file, 'utf8')
      })
      options.source = source
    } else {
      options.source = fs.readFileSync(options.source, 'utf8')
    }
  }
  jsdoc2md(options)
    .on('error', function (err) {
      console.error(err.stack)
    })
    .pipe(fs.createWriteStream(output))
}
