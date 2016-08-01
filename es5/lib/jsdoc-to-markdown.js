'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var jsdocParse = require('jsdoc-parse');
var dmd = require('dmd');

var Jsdoc2md = function () {
  function Jsdoc2md() {
    _classCallCheck(this, Jsdoc2md);
  }

  _createClass(Jsdoc2md, [{
    key: 'render',
    value: function render(src, options) {
      options = options || {};
      return getJsdoc(src, options).then(function (jsdocData) {
        return jsdocParse(jsdocData, options);
      }).then(function (templateData) {
        return dmd(templateData, options);
      }).catch(function (err) {
        console.error(err.stack);
      });
    }
  }, {
    key: 'renderSync',
    value: function renderSync(src, options) {
      options = options || {};
      var jsdocData = getJsdoc(src, options, true);
      var templateData = jsdocParse(jsdocData, options);
      return dmd(templateData, options);
    }
  }, {
    key: 'createRenderStream',
    value: function createRenderStream(src, options) {
      var PassThrough = require('stream').PassThrough;
      var stream = new PassThrough();
      options = options || {};
      this.render(src, options).then(stream.end.bind(stream));
      return stream;
    }
  }, {
    key: 'getJsdocData',
    value: function getJsdocData(src, options) {
      return getJsdoc.call(this, src, options).then(getJsdocParse.bind(this, options)).then(function (data) {
        return data;
      });
    }
  }, {
    key: 'getJsdocDataSync',
    value: function getJsdocDataSync(src, options) {
      var output = getJsdocParse.call(this, options, getJsdoc.call(this, src, options, true));
      return output;
    }
  }, {
    key: 'clear',
    value: function clear() {
      var jsdocApi = require('jsdoc-api');
      return jsdocApi.cache.clear();
    }
  }]);

  return Jsdoc2md;
}();

function getJsdoc(src, options, sync) {
  var jsdocApi = require('jsdoc-api');
  options = options || {};
  var jsdocOptions = { files: src, pedantic: true, cache: true };
  if (options.html) jsdocOptions.html = true;
  return sync ? jsdocApi.explainSync(jsdocOptions) : jsdocApi.explain(jsdocOptions);
}

function getJsdocParse(options, explainOutput) {
  options = options || {};
  return jsdocParse(explainOutput, options);
}

var jsdoc2md = new Jsdoc2md();
module.exports = jsdoc2md;