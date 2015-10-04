/**
@namespace
*/
var car = {
  /**
  the round things
  */
  wheels: 18,
  /**
  the electronics that always go wrong
  */
  sensors: 465,

  /**
  start the car
  @param {string}
  @param {function}
  */
  start: function (key, done) {
    /**
    decribes the current conditions
    @namespace
    */
    this.env = {
      /**
      what kind of day is it
      @type {string}
      @default
      */
      weather: 'choppy',
      /**
      road condition
      @type {string}
      @default
      */
      roads: 'wet'
    }
  }
}
