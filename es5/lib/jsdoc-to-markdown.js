'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var version = require('../../package').version;
var UsageStats = require('usage-stats');
var jsdocApi = require('jsdoc-api');
var dmd = require('dmd');
var os = require('os');
var stats = require('./stats').stats;

exports.render = function (options) {
  return stats('render', options, render);
};
exports.renderSync = function (options) {
  return stats('renderSync', options, renderSync, true);
};
exports.getTemplateData = function (options) {
  return stats('getTemplateData', options, getTemplateData);
};
exports.getTemplateDataSync = function (options) {
  return stats('getTemplateDataSync', options, getTemplateDataSync, true);
};
exports.getJsdocData = function (options) {
  return stats('getJsdocData', options, getJsdocData);
};
exports.getJsdocDataSync = function (options) {
  return stats('getJsdocDataSync', options, getJsdocDataSync, true);
};
exports.clear = function () {
  return stats('clear', null, clear);
};

exports._usageStats = require('./stats').usageStats;

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
  options = options || {};
  var jsdocOptions = new JsdocOptions(options);
  return jsdocApi.explain(jsdocOptions);
}

function getJsdocDataSync(options) {
  options = options || {};
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