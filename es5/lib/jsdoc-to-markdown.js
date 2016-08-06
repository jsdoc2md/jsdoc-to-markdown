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
  var dmd = require('dmd');
  return this.getTemplateData(options).then(function (templateData) {
    return dmd(templateData, options);
  });
}

function renderSync(options) {
  options = options || {};
  var dmd = require('dmd');
  return dmd(this.getTemplateDataSync(options), options);
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
  return jsdocApi.cache.clear();
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