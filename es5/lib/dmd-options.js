'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DmdOptions = function DmdOptions(options) {
  _classCallCheck(this, DmdOptions);

  Object.assign(this, options);
  this.noCache = options['no-cache'];
  delete this['no-cache'];
};

module.exports = DmdOptions;