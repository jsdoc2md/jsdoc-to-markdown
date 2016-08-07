'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

exports.render = render;
exports.renderSync = renderSync;
exports.getTemplateData = getTemplateData;
exports.getTemplateDataSync = getTemplateDataSync;
exports.getJsdocData = getJsdocData;
exports.getJsdocDataSync = getJsdocDataSync;
exports.clear = clear;

function render(options) {
  options = options || {};
  var dmd = require('dmd').async;
  var dmdOptions = new DmdOptions(options);
  return this.getTemplateData(options).then(function (templateData) {
    return dmd(templateData, dmdOptions);
  });
}

function renderSync(options) {
  options = options || {};
  var dmd = require('dmd');
  var dmdOptions = new DmdOptions(options);
  return dmd(this.getTemplateDataSync(options), dmdOptions);
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
  var jsdocApi = require('jsdoc-api');
  var jsdocOptions = new JsdocOptions(options);
  return jsdocApi.explain(jsdocOptions);
}

function getJsdocDataSync(options) {
  options = options || {};
  var jsdocApi = require('jsdoc-api');
  var jsdocOptions = new JsdocOptions(options);
  return jsdocApi.explainSync(jsdocOptions);
}

function clear() {
  var jsdocApi = require('jsdoc-api');
  var dmd = require('dmd');
  return jsdocApi.cache.clear().then(function () {
    return dmd.cache.clear();
  });
}

var JsdocOptions = function JsdocOptions(options) {
  _classCallCheck(this, JsdocOptions);

  options = options || {};
  this.cache = true;
  this.pedantic = true;

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
};