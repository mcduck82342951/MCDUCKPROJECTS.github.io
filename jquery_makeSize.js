(function($){
	$.fn.putSize=function(params){
		var width=params.width;
		var height=params.height;
		var mainWidth=(width/100)*screen.availWidth; 
		var mainHeight=(height/100)*screen.availHeight;
		alert(width);
		alert(height);
		alert(mainWidth);
		alert(mainHeight);

		return $(this).width(mainWidth).height(mainHeight);
	}
})(jQuery)