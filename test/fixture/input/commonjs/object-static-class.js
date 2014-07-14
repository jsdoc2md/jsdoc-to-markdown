/**
factory module creating dodgy cloud. object-with-static-class.
@module heaven
*/

/**
@returns {module:heaven~Cloud}
*/
exports.createCloud = function(){};

/**
access to the Cloud class
@type {module:heaven~Cloud}
*/
exports.Cloud = Cloud;

/**
cloud constructor
@class
@classdesc The main class for a cloud
@param {object} - the options
*/
function Cloud(options){
    /**
    @type {number}
    @default
    */
    this.size = 4;

    /**
    @type {boolean}
    @default
    */
    this.rain = false;
}

/**
a class method
*/
Cloud.classMethod = function(){};

/**
a class constant
@const {number}
*/
Cloud.SPACES = 94;

/**
an inner constant
@const {boolean}
*/
var FACT = false;
