$(document).ready(function(){
	
	$('#picture .loading').hide();
	
	var carrier = new Carrier({
		dom:'#picture div',
		path:'../src/carrier/', 
		uploadto:'../../usage/uploads/',
		onStart:function(){
			$('#picture .loading').show();
		}, 
		onComplete:function(e){			
			$('#picture .loading').hide();
			$('#picture .pic').attr('src', 'uploads/'+e.file);
		}
	});
	
});