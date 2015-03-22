# Source
```js
/**
Interface for a Currah Speech Synth

![currah](http://ecx.images-amazon.com/images/I/41NReuJn%2BGL._SX300_.jpg)
@interface
*/
var speech = {
    /**
    what to say
    @param {string} - the text to speak
    */
    say: function(text){}   
};
/**
a synth, that also implements speech
@implements {speech}
@namespace
*/
var synth = {
    /**
    play a demo piece, Beethoven or something.. 
    */
    demo: function(){},
    say: function(text){}
};

```

# jsdoc2md output
```markdown
<a name="speech"></a>
## speech
Interface for a Currah Speech Synth

![currah](http://ecx.images-amazon.com/images/I/41NReuJn%2BGL._SX300_.jpg)

**Kind**: global interface  
<a name="speech.say"></a>
### speech.say()
what to say

**Kind**: static method of <code>[speech](#speech)</code>  

| Type | Description |
| --- | --- |
| <code>string</code> | the text to speak |

<a name="synth"></a>
## synth : <code>object</code>
a synth, that also implements speech

**Kind**: global namespace  
<a name="synth.demo"></a>
### synth.demo()
play a demo piece, Beethoven or something..

**Kind**: static method of <code>[synth](#synth)</code>  
```

# Rendered
<a name="speech"></a>
## speech
Interface for a Currah Speech Synth

![currah](http://ecx.images-amazon.com/images/I/41NReuJn%2BGL._SX300_.jpg)

**Kind**: global interface  
<a name="speech.say"></a>
### speech.say()
what to say

**Kind**: static method of <code>[speech](#speech)</code>  

| Type | Description |
| --- | --- |
| <code>string</code> | the text to speak |

<a name="synth"></a>
## synth : <code>object</code>
a synth, that also implements speech

**Kind**: global namespace  
<a name="synth.demo"></a>
### synth.demo()
play a demo piece, Beethoven or something..

**Kind**: static method of <code>[synth](#synth)</code>  
