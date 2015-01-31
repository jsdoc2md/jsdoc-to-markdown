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
@extends Animal
@author Chris Morris
@borrows plant as #punch

*/
function UZILover(){
    /**
    kill
    */
    this.kill = function(){};
    /**
    respect
    @param {UZILover~onRespect} - called on reciprocation of respect
    */
    this.respect = function(done){};
    
    this.punch = function(){};
    
    /**
    @const {string}
    */
    this.LOVE = "UZI";
    
    /**
    @type {string}
    @default "a big testicle gland"
    */
    this.magazineLike= "a big testicle gland";
}

/**
to plant ones fist in a buster's mush
*/
function plant(){};

/**
Passed to {@link UZILover#respect}
@callback UZILover~onRespect
@param {Error} - an issue with the punch
@param {number} - the respect percentage gained
*/
