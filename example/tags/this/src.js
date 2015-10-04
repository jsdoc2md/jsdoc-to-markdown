/** @constructor */
function Greeter (name) {
  setName.apply(this, name)
}

/** @this Greeter */
function setName (name) {
  /** a great name */
  this.name = name
}
