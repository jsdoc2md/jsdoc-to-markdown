'use strict';

var jsdocApi = require('jsdoc-api');
var path = require('path');

jsdocApi.cache.dir = path.join(require('os').tmpdir(), 'jsdoc2md');

module.exports = {
  render: function render(src, options) {
    var jsdocParse = require('jsdoc-parse');
    var dmd = require('dmd');
    options = options || {};
    return getJsdoc(src, options).then(function (jsdocData) {
      return jsdocParse(jsdocData, options);
    }).then(function (templateData) {
      return dmd(templateData, options);
    });
  },
  renderSync: function renderSync(src, options) {
    var jsdocParse = require('jsdoc-parse');
    var dmd = require('dmd');
    options = options || {};
    var jsdocData = getJsdoc(src, options, true);
    var templateData = jsdocParse(jsdocData, options);
    return dmd(templateData, options);
  },
  getTemplateData: function getTemplateData(src, options) {
    var jsdocParse = require('jsdoc-parse');
    return getJsdoc(src, options).then(function (jsdocData) {
      return jsdocParse(jsdocData, options);
    });
  },
  getTemplateDataSync: function getTemplateDataSync(src, options) {
    var jsdocParse = require('jsdoc-parse');
    return jsdocParse(getJsdoc(src, options, true), options);
  },
  getJsdocData: function getJsdocData(src, options) {
    return getJsdoc(src, options);
  },
  getJsdocDataSync: function getJsdocDataSync(src, options) {
    return getJsdoc(src, options, true);
  },
  clear: function clear() {
    return jsdocApi.cache.clear();
  }
};

function getJsdoc(src, options, sync) {
  options = options || {};
  var jsdocOptions = { files: src, pedantic: true, cache: true };
  if (options.html) jsdocOptions.html = true;
  return sync ? jsdocApi.explainSync(jsdocOptions) : jsdocApi.explain(jsdocOptions);
}