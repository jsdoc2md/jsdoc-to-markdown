## Modules

<dl>
<dt><a href="#module_animal">animal</a></dt>
<dd><p>Animals are multicellular, eukaryotic organisms of the kingdom Animalia (also called Metazoa). Their body plan eventually becomes fixed as they develop, although some undergo a process of metamorphosis later on in their lives. Most animals are motile, meaning they can move spontaneously and independently. All animals must ingest other organisms or their products for sustenance (see Heterotroph).</p>
<table>
<thead>
<tr>
<th>yeah</th>
<th>desc</th>
</tr>
</thead>
<tbody>
<tr>
<td>some</td>
<td>markdown</td>
</tr>
<tr>
<td>in the</td>
<td>module</td>
</tr>
<tr>
<td>description</td>
<td></td>
</tr>
</tbody>
</table>
</dd>
<dt><a href="#module_builder">builder</a></dt>
<dd><p>Aside from humans, who are the most prolific and versatile builders, building behaviour is common in many mammals, birds, insects and arachnids. It is also seen in a few species of fish, reptiles, amphibians, molluscs, urochordates, crustaceans, annelids and some other arthropods. It is virtually absent from all the other animal phyla.</p>
</dd>
<dt><a href="#module_species">species</a></dt>
<dd><p>In biology, a species (abbreviated sp., with the plural form species abbreviated spp.) is one of the basic units of biological classification and a taxonomic rank. A species is often defined as the largest group of organisms capable of interbreeding and producing fertile offspring. While in many cases this definition is adequate, the difficulty of defining species is known as the species problem. Differing measures are often used, such as similarity of DNA, morphology, or ecological niche. Presence of specific locally adapted traits may further subdivide species into &quot;infraspecific taxa&quot; such as subspecies (and in botany other taxa are used, such as varieties, subvarieties, and formae).</p>
</dd>
</dl>

<a name="module_animal"></a>
## animal
Animals are multicellular, eukaryotic organisms of the kingdom Animalia (also called Metazoa). Their body plan eventually becomes fixed as they develop, although some undergo a process of metamorphosis later on in their lives. Most animals are motile, meaning they can move spontaneously and independently. All animals must ingest other organisms or their products for sustenance (see Heterotroph).

| yeah | desc |
| ---- | ---- |
| some | markdown |
| in the | module |
| description | |

**Example**  
```js
var animal = require("animal")
```

* [animal](#module_animal)
    * [~Animal](#module_animal..Animal)
        * [new Animal(species, parents)](#new_module_animal..Animal_new)
        * _instance_
            * [.age](#module_animal..Animal+age) : <code>number</code>
            * [.species](#module_animal..Animal+species) : <code>Species</code>
        * _static_
            * [.eMood](#module_animal..Animal.eMood)


-

<a name="module_animal..Animal"></a>
### animal~Animal
**Kind**: inner class of <code>[animal](#module_animal)</code>  

* [~Animal](#module_animal..Animal)
    * [new Animal(species, parents)](#new_module_animal..Animal_new)
    * _instance_
        * [.age](#module_animal..Animal+age) : <code>number</code>
        * [.species](#module_animal..Animal+species) : <code>Species</code>
    * _static_
        * [.eMood](#module_animal..Animal.eMood)


-

<a name="new_module_animal..Animal_new"></a>
#### new Animal(species, parents)

| Param | Type | Description |
| --- | --- | --- |
| species | <code>array</code> | an array of two parent [Animal](Animal) objects |
| parents | <code>Species</code> | the species |


-

<a name="module_animal..Animal+age"></a>
#### animal.age : <code>number</code>
the current age

**Kind**: instance property of <code>[Animal](#module_animal..Animal)</code>  
**Default**: <code>0</code>  

-

<a name="module_animal..Animal+species"></a>
#### animal.species : <code>Species</code>
**Kind**: instance property of <code>[Animal](#module_animal..Animal)</code>  

-

<a name="module_animal..Animal.eMood"></a>
#### Animal.eMood
Animal moods

**Kind**: static enum property of <code>[Animal](#module_animal..Animal)</code>  
**Properties**

| Name | Default | Description |
| --- | --- | --- |
| satisfied | <code>0</code> | chilling |
| angry | <code>1</code> | pissed off |
| hungry | <code>2</code> | need to eat |


-

<a name="module_builder"></a>
## builder
Aside from humans, who are the most prolific and versatile builders, building behaviour is common in many mammals, birds, insects and arachnids. It is also seen in a few species of fish, reptiles, amphibians, molluscs, urochordates, crustaceans, annelids and some other arthropods. It is virtually absent from all the other animal phyla.


* [builder](#module_builder)
    * [~builder](#module_builder..builder)
        * [.construct()](#module_builder..builder.construct)
        * [.repair()](#module_builder..builder.repair)


-

<a name="module_builder..builder"></a>
### builder~builder
**Kind**: inner mixin of <code>[builder](#module_builder)</code>  

* [~builder](#module_builder..builder)
    * [.construct()](#module_builder..builder.construct)
    * [.repair()](#module_builder..builder.repair)


-

<a name="module_builder..builder.construct"></a>
#### builder.construct()
construct something

**Kind**: static method of <code>[builder](#module_builder..builder)</code>  

-

<a name="module_builder..builder.repair"></a>
#### builder.repair()
repair something

**Kind**: static method of <code>[builder](#module_builder..builder)</code>  

-

<a name="module_species"></a>
## species
In biology, a species (abbreviated sp., with the plural form species abbreviated spp.) is one of the basic units of biological classification and a taxonomic rank. A species is often defined as the largest group of organisms capable of interbreeding and producing fertile offspring. While in many cases this definition is adequate, the difficulty of defining species is known as the species problem. Differing measures are often used, such as similarity of DNA, morphology, or ecological niche. Presence of specific locally adapted traits may further subdivide species into "infraspecific taxa" such as subspecies (and in botany other taxa are used, such as varieties, subvarieties, and formae).


* [species](#module_species)
    * [~Species](#module_species..Species)
        * _instance_
            * [.name](#module_species..Species+name) : <code>string</code>
            * [.species](#module_species..Species+species) : <code>Species</code>
        * _static_
            * [.merge(one, two)](#module_species..Species.merge) ⇒ <code>Species</code>


-

<a name="module_species..Species"></a>
### species~Species
**Kind**: inner class of <code>[species](#module_species)</code>  

* [~Species](#module_species..Species)
    * _instance_
        * [.name](#module_species..Species+name) : <code>string</code>
        * [.species](#module_species..Species+species) : <code>Species</code>
    * _static_
        * [.merge(one, two)](#module_species..Species.merge) ⇒ <code>Species</code>


-

<a name="module_species..Species+name"></a>
#### species.name : <code>string</code>
the species name

**Kind**: instance property of <code>[Species](#module_species..Species)</code>  

-

<a name="module_species..Species+species"></a>
#### species.species : <code>Species</code>
**Kind**: instance property of <code>[Species](#module_species..Species)</code>  

-

<a name="module_species..Species.merge"></a>
#### Species.merge(one, two) ⇒ <code>Species</code>
merge two species into a new one

**Kind**: static method of <code>[Species](#module_species..Species)</code>  

| Param | Type | Description |
| --- | --- | --- |
| one | <code>Species</code> | first |
| two | <code>Species</code> | second |


-

