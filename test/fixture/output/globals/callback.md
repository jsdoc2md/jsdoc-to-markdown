## Functions
<dl>
<dt><a href="#read">read(filename, done)</a></dt>
<dd></dd>
</dl>
## Typedefs
<dl>
<dt><a href="#onComplete">onComplete</a> : <code>function</code></dt>
<dd><p>Called when an async operation completes</p>
</dd>
</dl>
<a name="read"></a>
## read(filename, done)
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| filename | <code>string</code> | the filename |
| done | <code>[onComplete](#onComplete)</code> | the callback |

<a name="onComplete"></a>
## onComplete : <code>function</code>
Called when an async operation completes

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| err | <code>object</code> | an error, or `null` |
| result | <code>string</code> | the result info |

