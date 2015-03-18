/**
Interface for classes that represent a color.
@interface Colour
*/

/**
Get the color as an array of red, green, and blue values, represented as
decimal numbers between 0 and 1.
@function
@name Colour#rgb
@returns {Array<number>} An array containing the red, green, and blue values,
in that order.
*/

/**
Class representing a color with transparency information.
@class
@implements {Colour}
*/
function TransparentColor() {}

// inherits the documentation from `Color#rgb`
TransparentColor.prototype.rgb = function() {};

/**
Get the color as an array of red, green, blue, and alpha values, represented
as decimal numbers between 0 and 1.
@returns {Array<number>} An array containing the red, green, blue, and alpha
values, in that order.
*/
TransparentColor.prototype.rgba = function() {};
