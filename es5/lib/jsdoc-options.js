'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JsdocOptions = function JsdocOptions(options) {
  _classCallCheck(this, JsdocOptions);

  Object.assign(this, options);
  if (options['no-cache']) {
    this.cache = !options['no-cache'];
    delete this['no-cache'];
  }
};

module.exports = JsdocOptions;