# Carrier.js

## File Input Upload And Handling.

*Version 1.0*

Carrier.js is a light weight JavaScript Class that handle the file uploading easy and asynchronously.<br />
Requiere JQuery. <br />

Running Example Here<br />
http://nejus.com/open/Carriers.js/

### Usage

A basic implementation:
After JQuery loads... in the JS:
	
```js
var carrier = new Carrier({
    dom:'#picture',
    path:'carrier/', 
    uploadto:'upload/',
    onStart:function(){}, 
    onComplete:function(e){}
});
```
... And in the HTM:

```html
<div id="picture" class="carrier">
	<div>
		<span>BROWSE IMAGE</span>
	</div>
	<img src="" class="pic">
</div>
```   
    
Inlude example at source CODE.
