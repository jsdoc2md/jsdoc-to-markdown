define('my/shirt', function () {
  /**
   * A module representing a shirt.
   * @exports my/shirt
   * @alias shirt
   * @version 1.0
   */
  var shirt = {
    /** A property of the module. */
    color: 'black',

    /**
    @constructor
    @param {number} - the size innit
    */
    Turtleneck: function (size) {
      /** A property of the class. */
      this.size = size
    }
  }

  return shirt
})
