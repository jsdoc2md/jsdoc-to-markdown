/**
@class
*/
function Hurl () {}

/**
 * Throw a snowball.
 *
 * @fires Hurl#snowball
 */
Hurl.prototype.snowball = function () {
  /**
   * Snowball event.
   *
   * @event Hurl#snowball
   * @type {object}
   * @property {boolean} isPacked - Indicates whether the snowball is tightly packed.
   */
  this.emit('snowball', {
    isPacked: this._snowball.isPacked
  })
}
