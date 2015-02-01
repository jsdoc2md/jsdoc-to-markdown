/**
@namespace missle
*/
var missle = {
    /**
    missile range
    @default 100000
    @type {number}
    */
    range: 100000,

    /**
    ballistic
    @default true
    @type {boolean}
    */
    ballistic: true,
    /**
    hydrogen bomb?
    */
    hydrogen: true,

    /**
    number of megatons
    @default 200
    @type {number}
    */
    megaton: 200,
    destruction: "total"
};

/**
@namespace
@property openness {object} - openness
@property conscientiousness {object} - conscientiousness
@property extraversion {*} - extraversion
@property agreeableness {object} - agreeableness
@property neuroticism {object} - neuroticism
*/
var personality = {
    openness: "",
    conscientiousness: "", 
    extraversion: "", 
    agreeableness: "", 
    neuroticism: ""
};
