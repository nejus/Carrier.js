# Carrier.js

##### File Input Upload And Handling.
**Carrier.js**  s a light weight JavaScript/PHP Class that handle the file uploading easy and asynchronously.<br />
*Requiere JQuery.* <br />

*Version 1.0*

Running Example Here: http://nejus.com/open/Carriers.js/

#### Usage

**A basic implementation:**

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

#### License

(The MIT License)

Copyright (c) 2014 Miguel Conejeros &lt;mike@nejus.com&gt;<br />

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.