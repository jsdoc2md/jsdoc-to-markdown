'use strict';

exports.render = render;
exports.renderSync = renderSync;
exports.getTemplateData = getTemplateData;
exports.getTemplateDataSync = getTemplateDataSync;
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
  var pick = require('lodash.pick');
  var jsdocApi = require('jsdoc-api');
  var jsdocParse = require('jsdoc-parse');
  var jsdocDefaults = {
    pedantic: true,
    cache: true
  };
  return jsdocApi.explain(Object.assign(jsdocDefaults, options)).then(function (jsdocData) {
    return jsdocParse(jsdocData, { sortBy: options['sort-by'] });
  });
}

function getTemplateDataSync(options) {
  options = options || {};
  var jsdocParse = require('jsdoc-parse');
  var jsdocApi = require('jsdoc-api');
  var jsdocDefaults = {
    pedantic: true,
    cache: true
  };
  var jsdocData = jsdocApi.explainSync(Object.assign(jsdocDefaults, options));
  return jsdocParse(jsdocData, options);
}

function clear() {
  var jsdocApi = require('jsdoc-api');
  return jsdocApi.cache.clear();
}