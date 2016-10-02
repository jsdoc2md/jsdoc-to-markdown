'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JsdocOptions = function JsdocOptions(options) {
  _classCallCheck(this, JsdocOptions);

  options = options || {};

  this.cache = options.cache === undefined ? true : options.cache;

  this.files = options.files;

  this.source = options.source;

  this.data = options.data;

  this.configure = options.configure;

  this.html = options.html;
};

module.exports = JsdocOptions;