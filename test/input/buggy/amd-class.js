/**
 * A module representing a jacket.
 * @module jacket
 */
define('jacket', function () {
    /**
     * @constructs module:jacket
     */
    function Jacket() {
    }

    /** Open and close your Jacket. */
    Jacket.prototype.zip = function() {
    }

    return Jacket;
});

/**
 * A module representing a blouse.
 * @module blouse
 */
define('blouse', function () {
    /**
     * @constructor
     * @alias module:blouse
     */
    function Blouse() {
    }

    /** Open and close your Blouse. */
    Blouse.prototype.zip = function() {
    }

    return Blouse;
});