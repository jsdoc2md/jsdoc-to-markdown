/**
In biology, a species (abbreviated sp., with the plural form species abbreviated spp.) is one of the basic units of biological classification and a taxonomic rank. A species is often defined as the largest group of organisms capable of interbreeding and producing fertile offspring. While in many cases this definition is adequate, the difficulty of defining species is known as the species problem. Differing measures are often used, such as similarity of DNA, morphology, or ecological niche. Presence of specific locally adapted traits may further subdivide species into "infraspecific taxa" such as subspecies (and in botany other taxa are used, such as varieties, subvarieties, and formae).
@module
*/

module.exports = Species

/**
@class
*/
function Species () {
  /**
  the species name
  @type {string}
  */
  this.name = ''

  /**
  @type {Species}
  */
  this.species = species
}

/**
merge two species into a new one
@param {Species} - first
@param {Species} - second
@returns {Species}
*/
Species.merge = function (one, two) {}
