(function($){
  $.fn.imageParams={ 
     		imageWidth: screen.availWidth,
          	imageHeight: screen.availHeight,
          	containerHeight: screen.availHeight,
          	containerWidth: screen.availHeight,
          	type: "slidePuff",
            event: "interval",
        }

  $.fn.makeSlide=function(params){
      var container=this;
      params=$.extend({},$.fn.imageParams,params);
      var width=params.imageWidth;
      var height=params.imageHeight;
      var containerHeight=params.containerHeight;
      var containerWidth=params.containerWidth;
      var type=params.type;
      var event=params.event;
      $(container).width(containerWidth).height(containerHeight);
      $(container).css("margin-top","20px");
      $(container).find("figure").hide().width(width).height(height).css("border-radius","10%");
      $(container).find("figure:nth-child(1)").show().addClass("changingObject");

     
      if(event=="interval"){
      		makeIntervalSlide(container);
      }else if(event=="click"){
      		makeClickableSlide(container,type);
      }


     function makeIntervalSlide(container){

      
      $(container).find("figure:nth-child(1)").show(); 
      k=Math.floor(Math.random()*4);

      switch(k){
      	  case 0: setInterval(slideBlind,7000,container);
      	  case 1: setInterval(slideBlind,8000,container);
      	  case 2: setInterval(slideBlind,9000,container);
      	  case 3: setInterval(slideBlind,10000,container);
      	  case 4: setInterval(slideBlind,11000,container);
      }
     }

     function makeClickableSlide(container,type){
     	$(container).click(function(){
     		switch(type){
     			case "blindSlide": slidePuff(container); break;
     			case "slideSlide": slideSlide(container); break;
     			case "shakeSlide": shakeSlide(container); break;
     			case "shakePuff": shakePuff(container); break;
     			case "puffShake": puffShake(container);  break;
     			case "slideBlind": puffShake(container); break;
     			case "foldBlind": foldBlind(container); break;
     			case "blindFold": blindFold(container); break
      			case "foldFold": foldFold(container); break;
     		}
     	});
     }
  }

  function blindSlide(cont){
    var images=$(cont).find("figure");
    $(cont).find("figure.changingObject").hide("blind",2000).removeClass(".changingObject");
    var numOfPics=$(images).length;
    var next=Math.floor(Math.random()*numOfPics);

    $(images[next]).delay(2500).show("slide",2000).addClass("changingObject");
  }

  function slidePuff(cont){
  	var images=$(cont).find("figure");
  	$(cont).find("figure.changingObject").hide("slide",2000).removeClass(".changingObject");
  	var numOfPics=$(images).length;
  	var next=Math.floor(Math.random()*numOfPics);

  	$(images[next]).delay(2500).show("puff",2000).addClass("changingObject");
  }

  function slideSlide(cont){
  	var images=$(cont).find("figure");
  	$(cont).find("figure.changingObject").slideUp(2000).removeClass("changingObject");
  	var numOfPics=$(images).length;
  	var next=Math.floor(Math.random()*numOfPics);

  	$(images[next]).delay(2500).show("slide",2000).addClass("changingObject");
  }

  function shakeSlide(cont){
  	var images=$(cont).find("figure");
  	$(cont).find("figure.changingObject").effect("shake",{times: 10},1000).hide("explode",{},1000).removeClass("changingObject")
  	var numOfPics=$(images).length;
  	var next=Math.floor(Math.random()*numOfPics);

  	$(images[next]).delay(2500).show("slide",2000).addClass("changingObject");
  }

  function slideBlind(cont){
  	var images=$(cont).find("figure");
  	$(cont).find("figure.changingObject").hide("slide",2000).removeClass("changingObject");
  	var numOfPics=$(images).length;
  	var next=Math.floor(Math.random()*numOfPics);

  	$(images[next]).delay(2500).show("blind",2000).addClass("changingObject");
  }

  function shakePuff(cont){
  	var images=$(cont).find("figure");
  	$(cont).find("figure.changingObject").effect("shake",{times: 10},1000).hide("explode",{},1000).removeClass("changingObject");
  	var numOfPics=$(images).length;
  	var next=Math.floor(Math.random()*numOfPics);

  	$(images[next]).delay(2500).show("puff",2000).addClass("changingObject");
  }

  function puffShake(cont){
  	var images=$(cont).find("figure");
  	$(cont).find("figure.changingObject").hide("puff",2000).removeClass("changingObject");
  	var numOfPics=$(images).length;
  	var next=Math.floor(Math.random()*numOfPics);

  	$(images[next]).delay(2500).effect("shake",{times: 1000},1000).show("explode",1000).addClass("changingObject");
  }

  function foldBlind(cont){
  	var images=$(cont).find("figure");
  	$(cont).find("figure.changingObject").hide("fold",2000).removeClass("changingObject");
  	var numOfPics=$(images).length;
  	var next=Math.floor(Math.random()*numOfPics);

  	$(images[next]).delay(2500).show("blind",2000).addClass("changingObject");
  }

  function blindFold(cont){
  	var images=$(cont).find("figure");
  	$(cont).find("figure.changingObject").hide("blind",2000).removeClass("changingObject");
  	var numOfPics=$(images).length;
  	var next=Math.floor(Math.random()*numOfPics);

  	$(images[next]).delay(2500).show("fold",2000).addClass("changingObject");
  }

  function foldFold(cont){
  	var images=$(cont).find("figure");
  	$(cont).find("figure.changingObject").hide("fold",2000).removeClass("changingObject");
  	var numOfPics=$(images).length;
  	var next=Math.floor(Math.random()*numOfPics);
  	$(images[next]).delay(2500).show("fold",2000).addClass("changingObject");
  }

  


})(jQuery)