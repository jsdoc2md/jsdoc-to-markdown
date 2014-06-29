/**
factory module creating dodgy cloud. object-with-static-class.
@module
@alias heaven
*/

/**
@returns {module:heaven.Cloud}
*/
exports.createCloud = function(){};

/**
access to the Cloud class
*/
exports.Cloud = Cloud;

/**
@class 
@classdesc The main class of machine
@alias module:heaven.Cloud
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
