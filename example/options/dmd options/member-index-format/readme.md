## `jsdoc2md --member-index-format list`
This format is inspired by the [node docs](http://nodejs.org/api/). 

* [Animal](#Animal)
    * [new Animal(species, parents)](#new_Animal_new)
    * [animal.age](#Animal+age) : <code>number</code>
    * [animal.species](#Animal+species) : <code>[Species](#Species)</code>
    * [Animal.eMood](#Animal.eMood)

-

* [FurQ](#FurQ) ⇐ <code>[Rapper](#Rapper)</code>
    * [new FurQ()](#new_FurQ_new)
    * [furQ.wannaTryIt](#FurQ+wannaTryIt) : <code>string</code>
    * [furQ.LOVE](#FurQ+LOVE) : <code>string</code>
    * [furQ.spit()](#FurQ+spit)
    * [furQ.battle()](#Rapper+battle)
    * [furQ.punch()](#FurQ+punch)
    * ["pop" (zoop)](#FurQ+event_pop)
    * ["slap"](#FurQ+event_slap)
    * [furQ.kill()](#FurQ+kill)
    * [furQ.respect(done)](#FurQ+respect)
    * [FurQ.enemy](#FurQ.enemy) : <code>enum</code>
    * ~~[FurQ.peace()](#FurQ.peace)~~
    * [FurQ~onRespect](#FurQ..onRespect) : <code>function</code>

-

* [Rapper](#Rapper)
    * [rapper.spit()](#Rapper+spit)
    * [rapper.battle()](#Rapper+battle)
    * [Rapper.train()](#Rapper.train)
        * [~School](#Rapper.train..School)
            * [new School()](#new_Rapper.train..School_new)
            * [school.bestStudent](#Rapper.train..School+bestStudent)

-

* [Species](#Species)
    * [species.name](#Species+name) : <code>string</code>
    * [species.species](#Species+species) : <code>[Species](#Species)</code>
    * [Species.merge(one, two)](#Species.merge) ⇒ <code>[Species](#Species)</code>

-

* [NewLines](#NewLines)
    * [newLines.numbers](#NewLines+numbers)
    * [newLines.method(input)](#NewLines+method) ⇒ <code>number</code>

-

* [~School](#Rapper.train..School)
    * [new School()](#new_Rapper.train..School_new)
    * [school.bestStudent](#Rapper.train..School+bestStudent)

-


* [missle](#missle) : <code>object</code>
    * [.range](#missle.range) : <code>number</code>
    * [.ballistic](#missle.ballistic) : <code>boolean</code>
    * [.hydrogen](#missle.hydrogen)
    * [.megaton](#missle.megaton) : <code>number</code>


## `jsdoc2md --member-index-format grouped`
If an object has members within two of more distinct scopes (instance, static or inner) then grouping will be shown. If all members are the same scope (e.g. instance) grouping is not used. 

* [Animal](#Animal)
    * [new Animal(species, parents)](#new_Animal_new)
    * _instance_
        * [.age](#Animal+age) : <code>number</code>
        * [.species](#Animal+species) : <code>[Species](#Species)</code>
    * _static_
        * [.eMood](#Animal.eMood)

-

* [FurQ](#FurQ) ⇐ <code>[Rapper](#Rapper)</code>
    * [new FurQ()](#new_FurQ_new)
    * _instance_
        * [.wannaTryIt](#FurQ+wannaTryIt) : <code>string</code>
        * [.LOVE](#FurQ+LOVE) : <code>string</code>
        * [.spit()](#FurQ+spit)
        * [.battle()](#Rapper+battle)
        * [.punch()](#FurQ+punch)
        * ["pop" (zoop)](#FurQ+event_pop)
        * ["slap"](#FurQ+event_slap)
        * _standard_
            * [.kill()](#FurQ+kill)
            * [.respect(done)](#FurQ+respect)
    * _static_
        * [.enemy](#FurQ.enemy) : <code>enum</code>
        * ~~[.peace()](#FurQ.peace)~~
    * _inner_
        * [~onRespect](#FurQ..onRespect) : <code>function</code>

-

* [Rapper](#Rapper)
    * _instance_
        * [.spit()](#Rapper+spit)
        * [.battle()](#Rapper+battle)
    * _static_
        * [.train()](#Rapper.train)
            * [~School](#Rapper.train..School)
                * [new School()](#new_Rapper.train..School_new)
                * [.bestStudent](#Rapper.train..School+bestStudent)

-

* [Species](#Species)
    * _instance_
        * [.name](#Species+name) : <code>string</code>
        * [.species](#Species+species) : <code>[Species](#Species)</code>
    * _static_
        * [.merge(one, two)](#Species.merge) ⇒ <code>[Species](#Species)</code>

-

* [NewLines](#NewLines)
    * [.numbers](#NewLines+numbers)
    * [.method(input)](#NewLines+method) ⇒ <code>number</code>

-

* [~School](#Rapper.train..School)
    * [new School()](#new_Rapper.train..School_new)
    * [.bestStudent](#Rapper.train..School+bestStudent)

-


* [missle](#missle) : <code>object</code>
    * [.range](#missle.range) : <code>number</code>
    * [.ballistic](#missle.ballistic) : <code>boolean</code>
    * [.hydrogen](#missle.hydrogen)
    * [.megaton](#missle.megaton) : <code>number</code>
