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
@class
@classdesc The main class of machine
*/
function Cloud(){
    /**
    @type {number}
    */
    this.eyes = 4;

    /**
    @type {string}
    */
    this.vibe = "sinister";
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
