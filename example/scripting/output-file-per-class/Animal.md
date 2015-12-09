<a name="Animal"></a>
## Animal
Animals are multicellular, eukaryotic organisms of the kingdom Animalia (also called Metazoa). Their body plan eventually becomes fixed as they develop, although some undergo a process of metamorphosis later on in their lives. Most animals are motile, meaning they can move spontaneously and independently. All animals must ingest other organisms or their products for sustenance (see Heterotroph).

- some markdown
- in the module
- description

**Kind**: global class  
**Summary**: It's an animal, yeah?  

* [Animal](#Animal)
    * [new Animal(species, parents)](#new_Animal_new)
    * _instance_
        * [.age](#Animal+age) : <code>number</code>
        * [.species](#Animal+species) : <code>[Species](#Species)</code>
    * _static_
        * [.eMood](#Animal.eMood)

<a name="new_Animal_new"></a>
### new Animal(species, parents)

| Param | Type | Description |
| --- | --- | --- |
| species | <code>array</code> | an array of two parent [Animal](#Animal) objects |
| parents | <code>[Species](#Species)</code> | the species |

<a name="Animal+age"></a>
### animal.age : <code>number</code>
the current age

**Kind**: instance property of <code>[Animal](#Animal)</code>  
**Default**: <code>0</code>  
<a name="Animal+species"></a>
### animal.species : <code>[Species](#Species)</code>
**Kind**: instance property of <code>[Animal](#Animal)</code>  
<a name="Animal.eMood"></a>
### Animal.eMood
Animal moods

**Kind**: static enum property of <code>[Animal](#Animal)</code>  
**Properties**

| Name | Default | Description |
| --- | --- | --- |
| satisfied | <code>0</code> | chilling |
| angry | <code>1</code> | pissed off |
| hungry | <code>2</code> | need to eat |

