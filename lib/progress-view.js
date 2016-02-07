'use strict'

class ProgressView {
  constructor (stream) {
    this.stream = stream
    this.epoch = Date.now()
  }
  write (message) {
    this.stream.write(`${(Date.now() - this.epoch).toPrecision(4)}: ${message}\n`)
  }
}

module.exports = new ProgressView(process.stderr)
