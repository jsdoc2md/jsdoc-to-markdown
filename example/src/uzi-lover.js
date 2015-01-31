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
@fires UZILover#pop
@fires UZILover#slap
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
    @default
    */
    this.LOVE = "UZI";
    
    /**
    @type {string}
    @default
    @see "Uzi like a metal dick in my hand."
    @see "Magazine like a big testicle gland."
    */
    this.wannaTryIt= "bitch";
    
    /**
    fire weapon
    @event UZILover#pop
    */
    /**
    slap man 
    @event UZILover#slap
    */
}

/**
check if at peace
@deprecated
*/
UZILover.peace = function(){};

/**
FUR-Q enemy types
@enum {number}
@readonly
*/
UZILover.enemy = {
    /**
    an awful individual
    */
    COCK: 0,
    BITCH: 1,
    MUTHAFUCKA: 2
};


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
