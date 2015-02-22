#member-index = list
* [class: Animal](#Animal)
  * [new Animal(species, parents)](#new_Animal_new)
  * [animal.age](#Animal#age) → <code>number</code>
  * [animal.species](#Animal#species) → <code>[Species](#Species)</code>
  * [enum: Animal.eMood](#Animal.eMood)
-
* [class: six](#six)
  * [new six()](#new_six_new)
  * [const: six.six_one](#six#six_one) → <code>number</code>
  * [six.six_two()](#six#six_two) ⇒ <code>number</code>
  * [mixin: six.six_static_two](#six.six_static_two)
  * [six.six_static_three](#six.six_static_three) → <code>number</code>
  * [six.six_static_one](#six.six_static_one) → <code>object</code>
-
* [class: Species](#Species)
  * [species.name](#Species#name) → <code>string</code>
  * [species.species](#Species#species) → <code>[Species](#Species)</code>
  * [Species.merge(one, two)](#Species.merge) ⇒ <code>[Species](#Species)</code>
-
* [class: FurQ](#FurQ) ⇐ <code>[Rapper](#Rapper)</code>
  * [new FurQ()](#new_FurQ_new)
  * [furQ.wannaTryIt](#FurQ#wannaTryIt) → <code>string</code>
  * [const: furQ.LOVE](#FurQ#LOVE) → <code>string</code>
  * [furQ.spit()](#FurQ#spit)
  * [furQ.battle()](#FurQ#battle)
  * [furQ.punch()](#FurQ#punch)
  * [event: "pop" (zoop)](#FurQ#event_pop)
  * [event: "slap"](#FurQ#event_slap)
  * [furQ.kill()](#FurQ#kill)
  * [furQ.respect(done)](#FurQ#respect)
  * [enum: FurQ.enemy](#FurQ.enemy) → <code>number</code>
  * [~~FurQ.peace()~~](#FurQ.peace)
  * [callback: FurQ~onRespect](#FurQ..onRespect) → <code>function</code>
-
* [class: Rapper](#Rapper)
  * [rapper.spit()](#Rapper#spit)
  * [rapper.battle()](#Rapper#battle)
  * [Rapper.train()](#Rapper.train)
    * [class: ~School](#Rapper.train..School)
      * [new School()](#new_Rapper.train..School_new)
      * [school.bestStudent](#Rapper.train..School#bestStudent)
-
* [class: ~School](#Rapper.train..School)
  * [new School()](#new_Rapper.train..School_new)
  * [school.bestStudent](#Rapper.train..School#bestStudent)
-

* [missle](#missle) → <code>object</code>
  * [.range](#missle.range) → <code>number</code>
  * [.ballistic](#missle.ballistic) → <code>boolean</code>
  * [.hydrogen](#missle.hydrogen)
  * [.megaton](#missle.megaton) → <code>number</code>


#member-index = grouped
* [class: Animal](#Animal)
  * [new Animal(species, parents)](#new_Animal_new)
  * _instance_
    * [.age](#Animal#age) → <code>number</code>
    * [.species](#Animal#species) → <code>[Species](#Species)</code>
  * _static_
    * [enum: .eMood](#Animal.eMood)
-
* [class: six](#six)
  * [new six()](#new_six_new)
  * _instance_
    * [const: .six_one](#six#six_one) → <code>number</code>
    * [.six_two()](#six#six_two) ⇒ <code>number</code>
  * _static_
    * [mixin: .six_static_two](#six.six_static_two)
    * [.six_static_three](#six.six_static_three) → <code>number</code>
    * [.six_static_one](#six.six_static_one) → <code>object</code>
-
* [class: Species](#Species)
  * _instance_
    * [.name](#Species#name) → <code>string</code>
    * [.species](#Species#species) → <code>[Species](#Species)</code>
  * _static_
    * [.merge(one, two)](#Species.merge) ⇒ <code>[Species](#Species)</code>
-
* [class: FurQ](#FurQ) ⇐ <code>[Rapper](#Rapper)</code>
  * [new FurQ()](#new_FurQ_new)
  * _instance_
    * [.wannaTryIt](#FurQ#wannaTryIt) → <code>string</code>
    * [const: .LOVE](#FurQ#LOVE) → <code>string</code>
    * [.spit()](#FurQ#spit)
    * [.battle()](#FurQ#battle)
    * [.punch()](#FurQ#punch)
    * ["pop" (zoop)](#FurQ#event_pop)
    * ["slap"](#FurQ#event_slap)
    * _standard_
      * [.kill()](#FurQ#kill)
      * [.respect(done)](#FurQ#respect)
  * _static_
    * [enum: .enemy](#FurQ.enemy) → <code>number</code>
    * ~~[.peace()](#FurQ.peace)~~
  * _inner_
    * [callback: ~onRespect](#FurQ..onRespect) → <code>function</code>
-
* [class: Rapper](#Rapper)
  * _instance_
    * [.spit()](#Rapper#spit)
    * [.battle()](#Rapper#battle)
  * _static_
    * [.train()](#Rapper.train)
      * [class: ~School](#Rapper.train..School)
        * [new School()](#new_Rapper.train..School_new)
        * [.bestStudent](#Rapper.train..School#bestStudent)
-
* [class: ~School](#Rapper.train..School)
  * [new School()](#new_Rapper.train..School_new)
  * [.bestStudent](#Rapper.train..School#bestStudent)
-

* [missle](#missle) → <code>object</code>
  * [.range](#missle.range) → <code>number</code>
  * [.ballistic](#missle.ballistic) → <code>boolean</code>
  * [.hydrogen](#missle.hydrogen)
  * [.megaton](#missle.megaton) → <code>number</code>
