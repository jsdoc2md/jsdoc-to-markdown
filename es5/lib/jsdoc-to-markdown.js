'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var jsdocApi = require('jsdoc-api');
var dmd = require('dmd');
var os = require('os');
var UsageStats = require('app-usage-stats');

var usage = new UsageStats('UA-70853320-4', 'jsdoc2md', {
  version: require('../../package').version,
  sendInterval: 1000 * 60 * 60 * 24,
  metricMap: {
    session: 1,
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
  },
  dimensionMap: {
    interface: 4
  }
});
usage.loadSync();
exports._interface = 'api';

exports.render = function (options) {
  return stats(render, options);
};

exports.renderSync = function (options) {
  return statsSync(renderSync, options);
};

exports.getTemplateData = function (options) {
  return stats(getTemplateData, options);
};

exports.getTemplateDataSync = function (options) {
  return statsSync(getTemplateDataSync, options);
};

exports.getJsdocData = function (options) {
  return stats(getJsdocData, options);
};

exports.getJsdocDataSync = function (options) {
  return statsSync(getJsdocDataSync, options);
};

exports.clear = function () {
  return stats(clear);
};

exports._usageStats = usage;

function render(options) {
  options = options || {};
  var dmdOptions = new DmdOptions(options);
  return getTemplateData(options).then(function (templateData) {
    return dmd.async(templateData, dmdOptions);
  });
}

function renderSync(options) {
  options = options || {};
  var dmdOptions = new DmdOptions(options);
  return dmd(getTemplateDataSync(options), dmdOptions);
}

function getTemplateData(options) {
  options = options || {};
  var jsdocParse = require('jsdoc-parse');
  return getJsdocData(options).then(jsdocParse);
}

function getTemplateDataSync(options) {
  options = options || {};
  var jsdocParse = require('jsdoc-parse');
  var jsdocData = getJsdocDataSync(options);
  return jsdocParse(jsdocData, options);
}

function getJsdocData(options) {
  var jsdocOptions = new JsdocOptions(options);
  return jsdocApi.explain(jsdocOptions);
}

function getJsdocDataSync(options) {
  var jsdocOptions = new JsdocOptions(options);
  return jsdocApi.explainSync(jsdocOptions);
}

function clear() {
  return jsdocApi.cache.clear().then(function () {
    return dmd.cache.clear();
  });
}

var JsdocOptions = function JsdocOptions(options) {
  _classCallCheck(this, JsdocOptions);

  options = options || {};

  this.cache = options.cache === undefined ? true : options.cache;

  this.files = options.files;

  this.source = options.source;

  this.configure = options.configure;

  this.html = options.html;
};

var DmdOptions = function DmdOptions(options) {
  _classCallCheck(this, DmdOptions);

  var arrayify = require('array-back');

  this.template = options.template || '{{>main}}';

  this['heading-depth'] = options['heading-depth'] || 2;

  this['example-lang'] = options['example-lang'] || 'js';

  this.plugin = arrayify(options.plugin);

  this.helper = arrayify(options.helper);

  this.partial = arrayify(options.partial);

  this['name-format'] = options['name-format'];

  this['no-gfm'] = options['no-gfm'];

  this.separators = options.separators;

  this['module-index-format'] = options['module-index-format'] || 'dl';

  this['global-index-format'] = options['global-index-format'] || 'dl';

  this['param-list-format'] = options['param-list-format'] || 'table';

  this['property-list-format'] = options['property-list-format'] || 'table';

  this['member-index-format'] = options['member-index-format'] || 'grouped';

  this.private = options.private;
};

process.on('exit', function () {
  usage.saveSync();
});

function stats(method, options) {
  var metrics = Object.assign({ session: 1 }, options);
  for (var key in metrics) {
    metrics[key] = 1;
  }
  var timeout = setTimeout(function () {
    return usage.abort();
  }, 2000);
  var endTimeout = function endTimeout() {
    return clearTimeout(timeout);
  };
  return Promise.all([usage.hit({ name: method.name, interface: exports._interface }, metrics).then(endTimeout).catch(endTimeout), method(options).catch(function (err) {
    usage.exception(err.stack, 1, {
      hitParams: new Map([['cd', method.name]])
    });
    return usage.send().then(function () {
      throw err;
    });
  })]).then(function (results) {
    return results[1];
  });
}

function statsSync(method, options) {
  var metrics = Object.assign({ session: 1 }, options);
  for (var key in metrics) {
    metrics[key] = 1;
  }
  var timeout = setTimeout(function () {
    return console.error('usage.abort');
  }, 2000);
  var endTimeout = function endTimeout() {
    return clearTimeout(timeout);
  };
  usage.hit({ name: method.name, interface: exports._interface }, metrics).then(endTimeout).catch(endTimeout);

  try {
    return method(options);
  } catch (err) {
    usage.exception(err.stack, 1, {
      hitParams: new Map([['cd', method.name]])
    });
    usage.send();
  }
}