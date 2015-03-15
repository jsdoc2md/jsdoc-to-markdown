<a name="car"></a>
## car : <code>object</code>
**Kind**: global namespace  

* [car](#car) : <code>object</code>
  * [.wheels](#car.wheels)
  * [.sensors](#car.sensors)
  * [.start()](#car.start)
    * [.env](#car.start#env) : <code>object</code>
      * [.weather](#car.start#env.weather) : <code>string</code>
      * [.roads](#car.start#env.roads) : <code>string</code>

<a name="car.wheels"></a>
### car.wheels
the round things

**Kind**: static property of <code>[car](#car)</code>  
<a name="car.sensors"></a>
### car.sensors
the electronics that always go wrong

**Kind**: static property of <code>[car](#car)</code>  
<a name="car.start"></a>
### car.start()
start the car

**Kind**: static method of <code>[car](#car)</code>  

| Type |
| --- |
| <code>string</code> | 
| <code>function</code> | 


* [.start()](#car.start)
  * [.env](#car.start#env) : <code>object</code>
    * [.weather](#car.start#env.weather) : <code>string</code>
    * [.roads](#car.start#env.roads) : <code>string</code>

<a name="car.start#env"></a>
#### start.env : <code>object</code>
decribes the current conditions

**Kind**: instance namespace of <code>[start](#car.start)</code>  

* [.env](#car.start#env) : <code>object</code>
  * [.weather](#car.start#env.weather) : <code>string</code>
  * [.roads](#car.start#env.roads) : <code>string</code>

<a name="car.start#env.weather"></a>
##### env.weather : <code>string</code>
what kind of day is it

**Default**: <code>&quot;choppy&quot;</code>  
**Kind**: static property of <code>[env](#car.start#env)</code>  
<a name="car.start#env.roads"></a>
##### env.roads : <code>string</code>
road condition

**Default**: <code>&quot;wet&quot;</code>  
**Kind**: static property of <code>[env](#car.start#env)</code>  
