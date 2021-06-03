(function($){
	$.fn.imageParams={ 
	      imageWidth: screen.availWidth,
          imageHeight: screen.availHeight,
          outerContainerWidth: screen.availWidth,
          outerContainerHeight: screen.availHeight,
          innerContainerWidth: 3*screen.availWidth,
          innerContainerHeight: "auto",
    }
 
	$.fn.scrollImages=function(params){
		//alert("the functino is working now. All is ok");
		var container=this;
		params=$.extend({},$.fn.imageParams,params);
		imageWidth=params.imageWidth;
		imageHeight=params.imageHeight;
		outerWidth=params.outerContainerWidth;
		outerHeight=params.outerContainerHeight;
		innerWidth=params.innerContainerWidth;
		innerHeight=params.outerContainerHeight;

		var innerDiv=$(container).find("div");
		var numberOfPics=$(container).find("figure").length;

		$(container).find("figure").css({"width": imageWidth,
                                      "height": imageHeight,
                                      "border-radius": "10%" });

 		$(container).css({"width":outerWidth,
                                  "height":outerHeight,
                                  "overflow": "hidden",
                                  "transition-duration": "2s",
                                  "transition-property": "all",
                              	  "overflow":"hidden"});

		var scaler=Math.floor(Math.sqrt(numberOfPics));
	
		$(innerDiv).css({"width":innerWidth,
                                 "height": innerHeight,
                                 "overflow": "hidden",
                                 "transition-duration":"2s", 
                                 "transition-property":"all"});

		setInterval(scroll,5000,{"innerDiv":innerDiv,"container":container});			
	};

	function scroll(options){
		var container=options.container;
		var innerDiv=options.innerDiv;
		var numberOfPics=$(container).find("figure").length;
		var random=Math.floor(Math.random()*numberOfPics);
		console.log(random);
		console.log($(innerDiv).attr("id")+">figure:eq("+random+")");
		$(container).scrollTo("figure:eq("+random+")",{duration: 3000});

	}

	


})(jQuery)