#class-member-index = list

* [class: Animal](#Animal)
  * [new Animal(species, parents)](#new_Animal_new)
  * [animal.age](#Animal#age) → <code>number</code>
  * [animal.species](#Animal#species) → <code>[Species](#Species)</code>
  * [enum: Animal.eMood](#Animal.eMood)

-

* [class: Species](#Species)
  * [species.name](#Species#name) → <code>string</code>
  * [species.species](#Species#species) → <code>[Species](#Species)</code>
  * [Species.merge(one, two)](#Species.merge) ⇒ <code>[Species](#Species)</code>

-

* [class: UZILover](#UZILover) ⇐ <code>[Rapper](#Rapper)</code>
  * [new UZILover()](#new_UZILover_new)
  * [uziLover.wannaTryIt](#UZILover#wannaTryIt) → <code>string</code>
  * [uziLover.kill()](#UZILover#kill)
  * [uziLover.respect(done)](#UZILover#respect)
  * [uziLover.spit()](#UZILover#spit)
  * [uziLover.battle()](#UZILover#battle)
  * [uziLover.punch()](#UZILover#punch)
  * [const: uziLover.LOVE](#UZILover#LOVE) → <code>string</code>
  * [event: "pop" (zoop)](#UZILover#event_pop)
  * [event: "slap"](#UZILover#event_slap)
  * [enum: UZILover.enemy](#UZILover.enemy) → <code>number</code>
  * [~~UZILover.peace()~~](#UZILover.peace)
  * [callback: UZILover~onRespect](#UZILover..onRespect) → <code>function</code>

-

* [class: Rapper](#Rapper)
  * [rapper.spit()](#Rapper#spit)
  * [rapper.battle()](#Rapper#battle)

-


* [missle](#missle) → <code>object</code>
  * [.range](#missle.range) → <code>number</code>
  * [.ballistic](#missle.ballistic) → <code>boolean</code>
  * [.hydrogen](#missle.hydrogen)
  * [.megaton](#missle.megaton) → <code>number</code>


#class-member-index = grouped

* [class: Animal](#Animal)
  * [new Animal(species, parents)](#new_Animal_new)
  * _instance_
    * [.age](#Animal#age) → <code>number</code>
    * [.species](#Animal#species) → <code>[Species](#Species)</code>
  * _static_
    * [enum: .eMood](#Animal.eMood)

-

* [class: Species](#Species)
  * _instance_
    * [.name](#Species#name) → <code>string</code>
    * [.species](#Species#species) → <code>[Species](#Species)</code>
  * _static_
    * [.merge(one, two)](#Species.merge) ⇒ <code>[Species](#Species)</code>

-

* [class: UZILover](#UZILover) ⇐ <code>[Rapper](#Rapper)</code>
  * [new UZILover()](#new_UZILover_new)
  * _instance_
    * [.wannaTryIt](#UZILover#wannaTryIt) → <code>string</code>
    * [.kill()](#UZILover#kill)
    * [.respect(done)](#UZILover#respect)
    * [.punch()](#UZILover#punch)
    * [const: .LOVE](#UZILover#LOVE) → <code>string</code>
  * _static_
    * [enum: .enemy](#UZILover.enemy) → <code>number</code>
    * ~~[.peace()](#UZILover.peace)~~
  * _inherits_
    * [.spit()](#Rapper#spit)
    * [.battle()](#Rapper#battle)
  * _inner_
    * [callback: ~onRespect](#UZILover..onRespect) → <code>function</code>
  * _events_
    * ["pop" (zoop)](#UZILover#event_pop)
    * ["slap"](#UZILover#event_slap)

-

* [class: Rapper](#Rapper)
  * _instance_
    * [.spit()](#Rapper#spit)
    * [.battle()](#Rapper#battle)

-


* [missle](#missle) → <code>object</code>
  * [.range](#missle.range) → <code>number</code>
  * [.ballistic](#missle.ballistic) → <code>boolean</code>
  * [.hydrogen](#missle.hydrogen)
  * [.megaton](#missle.megaton) → <code>number</code>
