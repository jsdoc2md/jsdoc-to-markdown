<a name="car"></a>
##car → <code>object</code>

* [car](#car) → <code>object</code>
  * [.env](#car#env) → <code>object</code>
    * [.weather](#car#env.weather) → <code>string</code>
    * [.roads](#car#env.roads) → <code>string</code>
  * [.wheels](#car.wheels)
  * [.sensors](#car.sensors)
  * [.start()](#car.start)

<a name="car#env"></a>
###car.env → <code>object</code>
decribes the current conditions


* [.env](#car#env) → <code>object</code>
  * [.weather](#car#env.weather) → <code>string</code>
  * [.roads](#car#env.roads) → <code>string</code>

<a name="car#env.weather"></a>
####env.weather → <code>string</code>
what kind of day is it

**Default**: `choppy`  
<a name="car#env.roads"></a>
####env.roads → <code>string</code>
road condition

**Default**: `wet`  
<a name="car.wheels"></a>
###car.wheels
the round things

<a name="car.sensors"></a>
###car.sensors
the electronics that always go wrong

<a name="car.start"></a>
###car.start()
start the car

| Param | Type | Description |
| ----- | ---- | ----------- |
|  | <code>string</code> |  |
|  | <code>function</code> |  |

