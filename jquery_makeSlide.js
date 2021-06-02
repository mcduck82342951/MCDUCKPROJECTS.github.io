(function($){
  $.fn.imageParams={ 
     imageWidth: 65,
           imageHeight: 65
        }
  $.fn.makeSlide=function(params){
      alert("makeSlide is working");
      params=$.extend({},$.fn.imageParams,params);
      var width=(params.imageWidth/100)*screen.availWidth;
      var height=(params.imageHeight/100)*screen.availHeight;
      alert("makeSlideIsWorking");
      $(this).width(width).height(height);
      $(this).css("margin-top","20px");
      $(this).find("img").hide().width(width).height(height).css("border-radius","10%");
      $(this).find("img:nth-child(1)").show().addClass("slidingImage");
      setInterval(slide,8000,this);
  }

  function slide(cont){
    var images=$(cont).find("img");
    $(".slidingImage").slideUp(2000).removeClass("slidingImage");
    var numOfPics=$(images).length;
    var next=Math.floor(Math.random()*numOfPics);

    $(images[next]).show("puff",2000).addClass("slidingImage")
  }
})(jQuery)