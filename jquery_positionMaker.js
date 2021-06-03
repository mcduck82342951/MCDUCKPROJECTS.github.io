(function($){
     $.fn.center=function(){
     	alert("The centering function is working");
        var elem=this;
        var container=$(this).parent();

        var containerWidth=$(container).width();
        var elemWidth=$(elem).width();
        var left=(containerWidth-elemWidth)/2;

        $(elem).css({"position":"absolute","left":left,"top":"auto"});
     }
})(jQuery)