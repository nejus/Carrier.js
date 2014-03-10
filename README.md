Carrier - File Input Upload And Handling.
==================================================

Usage
-------------

A basic implementation:

    var carrier = new Carrier({
        dom:'#picture',
        path:'carrier/', 
        uploadto:'upload/',
        onStart:function(){}, 
        onComplete:function(e){}
    });
    
    <div id="picture" class="carrier">
		<div>
			<span>BROWSE IMAGE</span>
		</div>
		<img src="" class="pic">
	</div>
    
Inlude example at source CODE.
