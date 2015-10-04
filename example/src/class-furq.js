/**
@file
@copyright Chris Morris 1994
*/

/**
She's an Uzi lover.

![uzi](https://sampleface.co.uk/wp-content/uploads/2013/07/fur-q-uzi-lover.png)

@class
@classdesc C\*ck, b!tch, c\*ck, b!tch, m\*therf!cker. You gotta kill people, to respect people.
@see https://www.youtube.com/watch?v=1sxZ4tsp8gc
@public
@extends Rapper
@author Chris Morris
@borrows plant as #punch
@fires FurQ#pop
@fires FurQ#slap
@example var uziLover = require("FurQ")
*/
function FurQ () {
  /**
  kill
  @category standard
  @example var kill = uziLover.kill()
  @example uziLover.kill()
  */
  this.kill = function () {}
  /**
  * respect
  * @category standard
  * @param {FurQ~onRespect} - called on reciprocation of respect
  * @example
  * uziLover.respect(function(err, gain){
  *     console.log(gain)
  * })
  */
  this.respect = function (done) {}

  this.punch = function () {}

  /**
  @const {string}
  @default
  */
  this.LOVE = 'UZI'

  /**
  @type {string}
  @default
  @see "Uzi like a metal dick in my hand."
  @see "Magazine like a big testicle gland."
  */
  this.wannaTryIt = 'bitch'

  /**
  override
  */
  this.spit = function () {}

/**
fire weapon
@event FurQ#pop
@param zoop {boolean} - make 'zooping' sound as you fire
*/
/**
slap man
@event FurQ#slap
*/
}

/**
check if at peace
@deprecated
@example var peace = FurQ.peace()
*/
FurQ.peace = function () {}

/**
FUR-Q enemy types
@enum {number}
@readonly
*/
FurQ.enemy = {
  /**
  an awful individual
  */
  COCK: 0,
  BITCH: 1,
  MUTHAFUCKA: 2
}

/**
to plant ones fist in a buster's mush
*/
function plant () {}

/**
Passed to {@link FurQ#respect}
@callback FurQ~onRespect
@param err {Error} - an issue with the punch
@param gain {*} - the respect percentage gained
*/

/**
@class
*/
function Rapper () {
  /**
  spit
  */
  this.spit = function () {}
  /**
  battle
  */
  this.battle = function () {}
}
/**
train new rappers
*/
Rapper.train = function () {
  /**
  rap school
  @class
  */
  function School () {
    /**
    best student
    */
    this.bestStudent = null
  }
  return new School()
}
