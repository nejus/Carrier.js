/*
 * CARRIER
 *
 * ASync file upload.
 *
 * @author	Miguel Conejeros - nejus
 * @email mike@nejus.com
 * @version	1.0
 * @date 03.2014
 *
 */

;(function(window){
	
	Carrier.prototype.id = null;
	Carrier.prototype.form = null;
	Carrier.prototype.path = null;
	Carrier.prototype.dom = null;
	Carrier.prototype.onStart = null;
	Carrier.prototype.onComplete = null;
	
	function Carrier (o){
		
		this.path = o.path;
		this.dom = o.dom;
		this.uploadto = o.uploadto;
		this.onStart = o.onStart;
		this.onComplete = o.onComplete;
		this.id = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
		
		var dom = $(this.dom);
		var iframe = $('<iframe name="carrierframe'+this.id+'" width="0" height="0"></iframe>');		
		var label = $('<label for="fileupload'+this.id+'"></label>');	
		var fileinput = $('<input id="fileupload'+this.id+'" name="carrierfile'+this.id+'" type="file" />');	
		this.form = $('<form id="carrierform'+this.id+'" enctype="multipart/form-data" method="post" action="'+this.path+'carrier.php?act=CARRIER_UPLOAD&id='+this.id+'&uploadto='+this.uploadto+'" target="carrierframe'+this.id+'"></form>');
		
		this.form.append();
		dom.append(this.form);
		this.form.append(label);
		this.form.append(fileinput);
		dom.append(iframe);

		iframe.on('load', $.proxy(this.onIFrameLoad, this));
		fileinput.on('change', this.onChange);
		fileinput.on('change', this.onStart);
		
		//dom.css({display:'inline'});
		iframe.css({width:'0px', height:'0px', margin:'0px', padding:'0px'});
		fileinput.css({position:'absolute', left:'-9999px'});
		label.css({cursor:'pointer'});
	}
	Carrier.prototype.onChange = function(e){
		$(e.currentTarget).parent().submit();
	}
	
	Carrier.prototype.onIFrameLoad = function(e){
		$.post(this.path+'carrier.php', {act:'CARRIER_STATUS', id:this.id}, $.proxy(function(r){
			this.onComplete(r);
		}, this), "json");
	}
	Carrier.prototype.reset = function(){
		/*
		$.post(this.path+'carrier.php', {act:'CARRIER_STATUS', id:this.id}, $.proxy(function(r){
			this.onComplete(r);
		}, this), "json");
		*/
	}	
	window.Carrier = Carrier;
	
})(window);

