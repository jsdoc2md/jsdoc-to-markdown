'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var stats = require('jsdoc2md-stats');
var jsdocApi = require('jsdoc-api');
var dmd = require('dmd');
var DmdOptions = require('./dmd-options');
var JsdocOptions = require('./jsdoc-options');

var JsdocToMarkdown = function () {
  function JsdocToMarkdown() {
    _classCallCheck(this, JsdocToMarkdown);
  }

  _createClass(JsdocToMarkdown, [{
    key: 'render',
    value: function render(options) {
      options = options || {};
      var dmdOptions = new DmdOptions(options);
      if (options.data) {
        return dmd.async(options.data, dmdOptions);
      } else {
        return this.getTemplateData(options).then(function (templateData) {
          return dmd.async(templateData, dmdOptions);
        });
      }
    }
  }, {
    key: 'renderSync',
    value: function renderSync(options) {
      options = options || {};
      var dmdOptions = new DmdOptions(options);
      if (options.data) {
        return dmd(options.data, dmdOptions);
      } else {
        return dmd(this.getTemplateDataSync(options), dmdOptions);
      }
    }
  }, {
    key: 'getTemplateData',
    value: function getTemplateData(options) {
      options = options || {};
      var jsdocParse = require('jsdoc-parse');
      return this.getJsdocData(options).then(jsdocParse);
    }
  }, {
    key: 'getTemplateDataSync',
    value: function getTemplateDataSync(options) {
      options = options || {};
      var jsdocParse = require('jsdoc-parse');
      var jsdocData = this.getJsdocDataSync(options);
      return jsdocParse(jsdocData, options);
    }
  }, {
    key: 'getJsdocData',
    value: function getJsdocData(options) {
      var jsdocOptions = new JsdocOptions(options);
      return jsdocApi.explain(jsdocOptions);
    }
  }, {
    key: 'getJsdocDataSync',
    value: function getJsdocDataSync(options) {
      var jsdocOptions = new JsdocOptions(options);
      return jsdocApi.explainSync(jsdocOptions);
    }
  }, {
    key: 'clear',
    value: function clear() {
      return jsdocApi.cache.clear().then(function () {
        return dmd.cache.clear();
      });
    }
  }, {
    key: 'getNamepaths',
    value: function getNamepaths(options) {
      return this.getTemplateData(options).then(function (data) {
        var namepaths = {};
        var kinds = ['module', 'class', 'constructor', 'mixin', 'member', 'namespace', 'constant', 'function', 'event', 'typedef', 'external'];
        kinds.forEach(function (kind) {
          namepaths[kind] = data.filter(function (identifier) {
            return identifier.kind === kind;
          }).map(function (identifier) {
            return identifier.longname;
          });
        });
        return namepaths;
      });
    }
  }]);

  return JsdocToMarkdown;
}();

module.exports = new (stats(JsdocToMarkdown, require('../../package').version))();