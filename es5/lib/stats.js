'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var version = require('../../package').version;
var UsageStats = require('usage-stats');
var jsdocApi = require('jsdoc-api');
var dmd = require('dmd');
var os = require('os');

var usageStats = new UsageStats('UA-70853320-3', {
  name: 'jsdoc2md',
  version: version
});
usageStats.defaults.set('cd1', process.version).set('cd2', os.type()).set('cd3', os.release()).set('cd4', 'api');

var path = require('path');
var tmpPath = path.resolve(os.tmpdir(), 'jsdoc2md');
var fs = require('fs');
var lastSent = getLastSent();

exports.usageStats = usageStats;
exports.stats = stats;

function stats(screenName, options, command, sync) {
  options = options || {};
  if (options['no-usage-stats']) {
    usageStats.disable();
    return command(options);
  } else {
    var _ret = function () {
      var metrics = new Map();
      if (options) {
        (function () {
          var metricMap = {
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
          };
          Object.keys(options).forEach(function (option) {
            var metricId = metricMap[option];
            if (metricId) metrics.set('cm' + metricId, 1);
          });
        })();
      }

      usageStats.enable();

      if (sync) {
        try {
          var output = command(options);
          usageStats.start().screenView(screenName, { hitParams: metrics });
          finished();
          return {
            v: output
          };
        } catch (err) {
          commandFailed(err);
        }
      } else {
        return {
          v: command(options).then(function (output) {
            usageStats.start().screenView(screenName, { hitParams: metrics });
            finished();
            return output;
          }).catch(function (err) {
            commandFailed(err);
          })
        };
      }
    }();

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
  }
}

function commandFailed(err) {
  usageStats.exception(err.message, 1);
  finished();
  throw err;
}

function getLastSent() {
  var lastSent = void 0;
  try {
    lastSent = Number(fs.readFileSync(tmpPath, 'utf8'));
  } catch (err) {
    if (err.code !== 'ENOENT') throw err;
    lastSent = 1;
  }
  return lastSent;
}

function finished() {
  usageStats.end();
  usageStats.save();
  if (usageStats.hitsQueued() >= 19) {
    (function () {
      var timeout = setTimeout(function () {
        usageStats.abort();
      }, 1500);
      usageStats.send().then(function (responses) {
        clearTimeout(timeout);
      }).catch(function (err) {
        clearTimeout(timeout);
      });
    })();
  }
}