/**
A missle object, with separate docs for each property.
@namespace missle
*/
var missle = {
  /**
  missile range
  @default
  @type {number}
  */
  range: 100000,

  /**
  ballistic
  @default
  @type {boolean}
  */
  ballistic: true,
  /**
  hydrogen bomb?
  */
  hydrogen: true,

  /**
  number of megatons
  @default
  @type {number}
  */
  megaton: 200,
  destruction: 'total'
}

/**
A personality object, documented using the more concise `@property` notation.
@namespace
@property openness {object} - openness
@property conscientiousness {object} - conscientiousness
@property extraversion {*} - extraversion
@property agreeableness {object} - agreeableness
@property neuroticism {object} - neuroticism
*/
var personality = {
  openness: '',
  conscientiousness: '',
  extraversion: '',
  agreeableness: '',
  neuroticism: ''
}
