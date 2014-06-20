/**
export a class
@module
*/

module.exports = Exported;

/**
@class
@classdesc the exported class
@param {number} - the input number
@alias module:class
*/
function Exported(num){};

/**
the static property
*/
Exported.prototype.staticProperty = true;

/**
the static methy meth
*/
Exported.prototype.methyMeth = function(){};
