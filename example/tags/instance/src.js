/** @namespace */
var SomeObject = {
  /**
   * yeah is now `SomeObject#yeah` rather than `SomeObject.yeah`.
   * @instance
   */
  yeah: null
}

/** Generates SomeObject instances. */
function yeahFactory (yeahValue) {
  var props = { yeah: yeahValue }
  return Object.create(SomeObject, props)
}
