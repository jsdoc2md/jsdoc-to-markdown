'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var jsdocApi = require('jsdoc-api');
var dmd = require('dmd');
var os = require('os');
var UsageStats = require('app-usage-stats');
var DmdOptions = require('./dmd-options');
var JsdocOptions = require('./jsdoc-options');

var JsdocToMarkdownCore = function () {
  function JsdocToMarkdownCore() {
    _classCallCheck(this, JsdocToMarkdownCore);
  }

  _createClass(JsdocToMarkdownCore, [{
    key: 'render',
    value: function render(options) {
      options = options || {};
      var dmdOptions = new DmdOptions(options);
      return this.getTemplateData(options).then(function (templateData) {
        return dmd.async(templateData, dmdOptions);
      });
    }
  }, {
    key: 'renderSync',
    value: function renderSync(options) {
      options = options || {};
      var dmdOptions = new DmdOptions(options);
      return dmd(this.getTemplateDataSync(options), dmdOptions);
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

  return JsdocToMarkdownCore;
}();

var JsdocToMarkdown = function (_JsdocToMarkdownCore) {
  _inherits(JsdocToMarkdown, _JsdocToMarkdownCore);

  function JsdocToMarkdown() {
    _classCallCheck(this, JsdocToMarkdown);

    var _this = _possibleConstructorReturn(this, (JsdocToMarkdown.__proto__ || Object.getPrototypeOf(JsdocToMarkdown)).call(this));

    _this._usage = new UsageStats('UA-70853320-3', {
      name: 'jsdoc2md',
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
    _this._usage.loadSync();
    _this._interface = 'api';
    _this._sendOptions = { timeout: 2000 };

    process.on('exit', function () {
      return _this._usage.saveSync();
    });
    return _this;
  }

  _createClass(JsdocToMarkdown, [{
    key: '_hit',
    value: function _hit(method, options) {
      var metrics = Object.assign({ session: 1 }, options);
      for (var key in metrics) {
        metrics[key] = 1;
      }
      return this._usage.hit({ name: method.name, interface: this._interface }, metrics, this._sendOptions);
    }
  }, {
    key: '_stats',
    value: function _stats(method, options) {
      var _this2 = this;

      return Promise.all([this._hit(method, options), method.call(JsdocToMarkdownCore.prototype, options).catch(function (err) {
        _this2._usage.exception(err.stack, 1, {
          hitParams: new Map([['cd', method.name]])
        });
        return _this2._usage.send(_this2._sendOptions).then(function () {
          throw err;
        });
      })]).then(function (results) {
        return results[1];
      });
    }
  }, {
    key: '_statsSync',
    value: function _statsSync(method, options) {
      this._hit(method, options);
      try {
        return method.call(JsdocToMarkdownCore.prototype, options);
      } catch (err) {
        this._usage.exception(err.stack, 1, {
          hitParams: new Map([['cd', method.name]])
        });
        this._usage.send(this._sendOptions).catch(function (err) {});
      }
    }
  }, {
    key: 'render',
    value: function render(options) {
      return this._stats(_get(JsdocToMarkdown.prototype.__proto__ || Object.getPrototypeOf(JsdocToMarkdown.prototype), 'render', this), options);
    }
  }, {
    key: 'renderSync',
    value: function renderSync(options) {
      return this._statsSync(_get(JsdocToMarkdown.prototype.__proto__ || Object.getPrototypeOf(JsdocToMarkdown.prototype), 'renderSync', this), options);
    }
  }, {
    key: 'getTemplateData',
    value: function getTemplateData(options) {
      return this._stats(_get(JsdocToMarkdown.prototype.__proto__ || Object.getPrototypeOf(JsdocToMarkdown.prototype), 'getTemplateData', this), options);
    }
  }, {
    key: 'getTemplateDataSync',
    value: function getTemplateDataSync(options) {
      return this._statsSync(_get(JsdocToMarkdown.prototype.__proto__ || Object.getPrototypeOf(JsdocToMarkdown.prototype), 'getTemplateDataSync', this), options);
    }
  }, {
    key: 'getJsdocData',
    value: function getJsdocData(options) {
      return this._stats(_get(JsdocToMarkdown.prototype.__proto__ || Object.getPrototypeOf(JsdocToMarkdown.prototype), 'getJsdocData', this), options);
    }
  }, {
    key: 'getJsdocDataSync',
    value: function getJsdocDataSync(options) {
      return this._statsSync(_get(JsdocToMarkdown.prototype.__proto__ || Object.getPrototypeOf(JsdocToMarkdown.prototype), 'getJsdocDataSync', this), options);
    }
  }, {
    key: 'clear',
    value: function clear() {
      return this._stats(_get(JsdocToMarkdown.prototype.__proto__ || Object.getPrototypeOf(JsdocToMarkdown.prototype), 'clear', this));
    }
  }, {
    key: 'getNamepaths',
    value: function getNamepaths(options) {
      return this._stats(_get(JsdocToMarkdown.prototype.__proto__ || Object.getPrototypeOf(JsdocToMarkdown.prototype), 'getNamepaths', this), options);
    }
  }]);

  return JsdocToMarkdown;
}(JsdocToMarkdownCore);

module.exports = new JsdocToMarkdown();