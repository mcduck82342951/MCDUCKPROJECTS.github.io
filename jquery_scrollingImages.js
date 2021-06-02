(function($){
	$.fn.imageParams={ 
	   imageWidth: 65,
           imageHeight: 65
        }
 
	$.fn.scrollImages=function(params){
		var container=this;
		params=$.extend({},$.fn.imageParams,params);
		imageWidth=params.imageWidth;
		imageHeight=params.imageHeight;

		var totalWidth=screen.availWidth*(imageWidth/100);
		var totalHeight=screen.availHeight*(imageHeight/100);

		var innerDiv=$(container).find("div");
		var numberOfPics=$(container).find("img").length;

		$(container).find("img").css({"width": totalWidth+"px",
                                      "height": totalHeight+"px",
                                      "border-radius": "10%" });

 		$(container).css({"width":totalWidth+"px",
                                  "height":totalHeight+"px",
                                  "overflow": "hidden",
                                  "transition-duration": "2s",
                                  "transition-property": "all"});

		var scaler=Math.floor(Math.sqrt(numberOfPics));
		var innerWidth=totalWidth*scaler; 
		var innerHeight=totalHeight*scaler;

	
		$(innerDiv).css({"width":innerWidth+"px",
                                 "height": innerHeight+"px",
                                 "overflow": "hidden",
                                 "transition-duration":"2s", 
                                 "transition-property":"all"});

		setInterval(scroll,5000,{"innerDiv":innerDiv,"container":container});			
	};

	function scroll(options){
		var container=options.container;
		var innerDiv=options.innerDiv;
		var numberOfPics=$(container).find("img").length;
		var random=Math.floor(Math.random()*numberOfPics);
		console.log(random);
		console.log($(innerDiv).attr("id")+">img:eq("+random+")");
		$(container).scrollTo($(innerDiv).find("img:eq("+random+")"),{duration: 3000});

	}

	


})(jQuery)