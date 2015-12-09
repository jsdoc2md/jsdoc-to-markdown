# Source
```js
/**
@class
@classdesc Animals are multicellular, eukaryotic organisms of the kingdom Animalia (also called Metazoa). Their body plan eventually becomes fixed as they develop, although some undergo a process of metamorphosis later on in their lives. Most animals are motile, meaning they can move spontaneously and independently. All animals must ingest other organisms or their products for sustenance (see Heterotroph).

- some markdown
- in the module
- description

@summary It's an animal, yeah? 
@param {array} - an array of two parent {@link Animal} objects
@param {Species} - the species
*/
function Animal (species, parents) {
  /**
  the current age
  @type {number}
  @default
  */
  this.age = 0

  /**
  @type {Species}
  */
  this.species = species
}

/**
Animal moods
@enum 
*/
Animal.eMood = {
  /** chilling */
  satisfied: 0,
  /** pissed off */
  angry: 1,
  /** need to eat */
  hungry: 2
}

```

# jsdoc-parse output
```json
[
  {
    "id": "Animal()",
    "longname": "Animal",
    "name": "Animal",
    "kind": "constructor",
    "memberof": "Animal",
    "params": [
      {
        "type": {
          "names": [
            "array"
          ]
        },
        "description": "an array of two parent {@link Animal} objects",
        "name": "species"
      },
      {
        "type": {
          "names": [
            "Species"
          ]
        },
        "description": "the species",
        "name": "parents"
      }
    ],
    "order": 1
  },
  {
    "id": "Animal",
    "longname": "Animal",
    "name": "Animal",
    "scope": "global",
    "summary": "It's an animal, yeah?",
    "kind": "class",
    "description": "Animals are multicellular, eukaryotic organisms of the kingdom Animalia (also called Metazoa). Their body plan eventually becomes fixed as they develop, although some undergo a process of metamorphosis later on in their lives. Most animals are motile, meaning they can move spontaneously and independently. All animals must ingest other organisms or their products for sustenance (see Heterotroph).\n\n- some markdown\n- in the module\n- description",
    "meta": {
      "lineno": 13,
      "filename": "class-animal.js",
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/src"
    },
    "order": 0
  },
  {
    "id": "Animal#age",
    "longname": "Animal#age",
    "name": "age",
    "scope": "instance",
    "kind": "member",
    "description": "the current age",
    "memberof": "Animal",
    "type": {
      "names": [
        "number"
      ]
    },
    "defaultvalue": 0,
    "meta": {
      "lineno": 19,
      "filename": "class-animal.js",
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/src"
    },
    "order": 2
  },
  {
    "id": "Animal#species",
    "longname": "Animal#species",
    "name": "species",
    "scope": "instance",
    "kind": "member",
    "memberof": "Animal",
    "type": {
      "names": [
        "Species"
      ]
    },
    "meta": {
      "lineno": 24,
      "filename": "class-animal.js",
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/src"
    },
    "order": 3
  },
  {
    "id": "Animal.eMood",
    "longname": "Animal.eMood",
    "name": "eMood",
    "scope": "static",
    "kind": "member",
    "description": "Animal moods",
    "memberof": "Animal",
    "isEnum": true,
    "properties": [
      {
        "description": "chilling",
        "name": "satisfied",
        "longname": "Animal.eMood.satisfied",
        "kind": "member",
        "memberof": "Animal.eMood",
        "scope": "static",
        "defaultvalue": 0,
        "codeName": "satisfied"
      },
      {
        "description": "pissed off",
        "name": "angry",
        "longname": "Animal.eMood.angry",
        "kind": "member",
        "memberof": "Animal.eMood",
        "scope": "static",
        "defaultvalue": 1,
        "codeName": "angry"
      },
      {
        "description": "need to eat",
        "name": "hungry",
        "longname": "Animal.eMood.hungry",
        "kind": "member",
        "memberof": "Animal.eMood",
        "scope": "static",
        "defaultvalue": 2,
        "codeName": "hungry"
      }
    ],
    "meta": {
      "lineno": 31,
      "filename": "class-animal.js",
      "path": "/Users/lloyd/Documents/75lb/jsdoc-to-markdown/example/src"
    },
    "order": 4
  }
]
```

# without `--no-gfm` set

## dmd output
```hbs
<a name="Animal"></a>
### Animal
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
        * [.species](#Animal+species) : <code>Species</code>
    * _static_
        * [.eMood](#Animal.eMood)


-

<a name="new_Animal_new"></a>
#### new Animal(species, parents)

| Param | Type | Description |
| --- | --- | --- |
| species | <code>array</code> | an array of two parent [Animal](#Animal) objects |
| parents | <code>Species</code> | the species |


-

<a name="Animal+age"></a>
#### animal.age : <code>number</code>
the current age

**Kind**: instance property of <code>[Animal](#Animal)</code>  
**Default**: <code>0</code>  

-

<a name="Animal+species"></a>
#### animal.species : <code>Species</code>
**Kind**: instance property of <code>[Animal](#Animal)</code>  

-

<a name="Animal.eMood"></a>
#### Animal.eMood
Animal moods

**Kind**: static enum property of <code>[Animal](#Animal)</code>  
**Properties**

| Name | Default | Description |
| --- | --- | --- |
| satisfied | <code>0</code> | chilling |
| angry | <code>1</code> | pissed off |
| hungry | <code>2</code> | need to eat |


-

```

## rendered
<a name="Animal"></a>
### Animal
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
        * [.species](#Animal+species) : <code>Species</code>
    * _static_
        * [.eMood](#Animal.eMood)


-

<a name="new_Animal_new"></a>
#### new Animal(species, parents)

| Param | Type | Description |
| --- | --- | --- |
| species | <code>array</code> | an array of two parent [Animal](#Animal) objects |
| parents | <code>Species</code> | the species |


-

<a name="Animal+age"></a>
#### animal.age : <code>number</code>
the current age

**Kind**: instance property of <code>[Animal](#Animal)</code>  
**Default**: <code>0</code>  

-

<a name="Animal+species"></a>
#### animal.species : <code>Species</code>
**Kind**: instance property of <code>[Animal](#Animal)</code>  

-

<a name="Animal.eMood"></a>
#### Animal.eMood
Animal moods

**Kind**: static enum property of <code>[Animal](#Animal)</code>  
**Properties**

| Name | Default | Description |
| --- | --- | --- |
| satisfied | <code>0</code> | chilling |
| angry | <code>1</code> | pissed off |
| hungry | <code>2</code> | need to eat |


-



# with `--no-gfm` set
## dmd output
```hbs
<a name="Animal"></a>
### Animal
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
        * [.species](#Animal+species) : <code>Species</code>
    * _static_
        * [.eMood](#Animal.eMood)


* * *

<a name="new_Animal_new"></a>
#### new Animal(species, parents)
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>species</td><td><code>array</code></td><td><p>an array of two parent <a href="#Animal">Animal</a> objects</p>
</td>
    </tr><tr>
    <td>parents</td><td><code>Species</code></td><td><p>the species</p>
</td>
    </tr>  </tbody>
</table>


* * *

<a name="Animal+age"></a>
#### animal.age : <code>number</code>
the current age

**Kind**: instance property of <code>[Animal](#Animal)</code>  
**Default**: <code>0</code>  

* * *

<a name="Animal+species"></a>
#### animal.species : <code>Species</code>
**Kind**: instance property of <code>[Animal](#Animal)</code>  

* * *

<a name="Animal.eMood"></a>
#### Animal.eMood
Animal moods

**Kind**: static enum property of <code>[Animal](#Animal)</code>  
**Properties**

<table>
  <thead>
    <tr>
      <th>Name</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>satisfied</td><td><code>0</code></td><td>chilling</td>
    </tr><tr>
    <td>angry</td><td><code>1</code></td><td>pissed off</td>
    </tr><tr>
    <td>hungry</td><td><code>2</code></td><td>need to eat</td>
    </tr>  </tbody>
</table>


* * *

```

## rendered
<a name="Animal"></a>
### Animal
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
        * [.species](#Animal+species) : <code>Species</code>
    * _static_
        * [.eMood](#Animal.eMood)


* * *

<a name="new_Animal_new"></a>
#### new Animal(species, parents)
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>species</td><td><code>array</code></td><td><p>an array of two parent <a href="#Animal">Animal</a> objects</p>
</td>
    </tr><tr>
    <td>parents</td><td><code>Species</code></td><td><p>the species</p>
</td>
    </tr>  </tbody>
</table>


* * *

<a name="Animal+age"></a>
#### animal.age : <code>number</code>
the current age

**Kind**: instance property of <code>[Animal](#Animal)</code>  
**Default**: <code>0</code>  

* * *

<a name="Animal+species"></a>
#### animal.species : <code>Species</code>
**Kind**: instance property of <code>[Animal](#Animal)</code>  

* * *

<a name="Animal.eMood"></a>
#### Animal.eMood
Animal moods

**Kind**: static enum property of <code>[Animal](#Animal)</code>  
**Properties**

<table>
  <thead>
    <tr>
      <th>Name</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>satisfied</td><td><code>0</code></td><td>chilling</td>
    </tr><tr>
    <td>angry</td><td><code>1</code></td><td>pissed off</td>
    </tr><tr>
    <td>hungry</td><td><code>2</code></td><td>need to eat</td>
    </tr>  </tbody>
</table>


* * *

