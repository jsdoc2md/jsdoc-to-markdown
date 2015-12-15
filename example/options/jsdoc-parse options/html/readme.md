# Source
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf8">
    <script>
    /**
    something in the head
    @type {number}
    */
    var headVar = 1;
    
    /**
    a head obj
    @namespace
    @property name {string}
    @property age {number}
    */
    var headObj = {};
    </script>
  </head>
  <body class="main">
    <script>
    /**
    body global
    */
    var bodyGlobal = 1;
    
    </script>
  </body>
</html>

```

# jsdoc2md output
```markdown
## Members

<dl>
<dt><a href="#headVar">headVar</a> : <code>number</code></dt>
<dd><p>something in the head</p>
</dd>
<dt><a href="#bodyGlobal">bodyGlobal</a></dt>
<dd><p>body global</p>
</dd>
</dl>

## Objects

<dl>
<dt><a href="#headObj">headObj</a> : <code>object</code></dt>
<dd><p>a head obj</p>
</dd>
</dl>

<a name="headVar"></a>
## headVar : <code>number</code>
something in the head

**Kind**: global variable  
<a name="bodyGlobal"></a>
## bodyGlobal
body global

**Kind**: global variable  
<a name="headObj"></a>
## headObj : <code>object</code>
a head obj

**Kind**: global namespace  
**Properties**

| Name | Type |
| --- | --- |
| name | <code>string</code> | 
| age | <code>number</code> | 

```

# Rendered
## Members

<dl>
<dt><a href="#headVar">headVar</a> : <code>number</code></dt>
<dd><p>something in the head</p>
</dd>
<dt><a href="#bodyGlobal">bodyGlobal</a></dt>
<dd><p>body global</p>
</dd>
</dl>

## Objects

<dl>
<dt><a href="#headObj">headObj</a> : <code>object</code></dt>
<dd><p>a head obj</p>
</dd>
</dl>

<a name="headVar"></a>
## headVar : <code>number</code>
something in the head

**Kind**: global variable  
<a name="bodyGlobal"></a>
## bodyGlobal
body global

**Kind**: global variable  
<a name="headObj"></a>
## headObj : <code>object</code>
a head obj

**Kind**: global namespace  
**Properties**

| Name | Type |
| --- | --- |
| name | <code>string</code> | 
| age | <code>number</code> | 

