'use strict'
const version = require('../../package').version
const UsageStats = require('usage-stats')
const jsdocApi = require('jsdoc-api')
const dmd = require('dmd')
const os = require('os')

const usageStats = new UsageStats('UA-70853320-3', {
  name: 'jsdoc2md',
  version: version
})
usageStats.defaults
  .set('cd1', process.version)
  .set('cd2', os.type())
  .set('cd3', os.release())
  .set('cd4', 'api')

const path = require('path')
const tmpPath = path.resolve(os.tmpdir(), 'jsdoc2md')
const fs = require('fs')
let lastSent = getLastSent()

/* exposed so the test suite can disable it */
exports.usageStats = usageStats
exports.stats = stats

function stats (screenName, options, command, sync) {
  options = options || {}
  if (options['no-usage-stats']) {
    /* when disabled, all usageStats methods are no-ops */
    usageStats.disable()
    return command(options)
  } else {
    const metrics = new Map()
    if (options) {
      const metricMap = {
        files: 1,
        source: 2,
        configure: 3,
        html: 4,
        template: 5,
        'heading-depth': 6,
        'example-lang': 7,
        plugin: 8,
        helper: 9,
        partial: 10,
        'name-format': 11,
        'no-gfm': 12,
        separators: 13,
        'module-index-format': 14,
        'global-index-format': 15,
        'param-list-format': 16,
        'property-list-format': 17,
        'member-index-format': 18,
        private: 19,
        cache: 20
      }
      Object.keys(options).forEach(option => {
        const metricId = metricMap[option]
        if (metricId) metrics.set(`cm${metricId}`, 1)
      })
    }

    usageStats
      .enable()
      .start()
      .screenView(screenName, { hitParams: metrics })

    if (sync) {
      try {
        const output = command(options)
        finished()
        return output
      } catch (err) {
        commandFailed(err)
      }
    } else {
      return command(options)
        .then(output => {
          finished()
          return output
        })
        .catch(err => {
          commandFailed(err)
        })
    }
  }
}

function commandFailed (err) {
  usageStats.exception(err.message, 1)
  finished()
  throw err
}

function getLastSent () {
  let lastSent
  try {
    lastSent = Number(fs.readFileSync(tmpPath, 'utf8'))
  } catch (err) {
    if (err.code !== 'ENOENT') throw err
    lastSent = 1
  }
  return lastSent
}

function finished () {
  usageStats.end()
  usageStats.save()
  if (usageStats.hitsQueued() >= 20) usageStats.send().catch(err => console.error(err.stack))
}
