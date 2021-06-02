(function($){
     $.fn.center=function(){
        var elem=this;
        var container=$(this).parent();

        var containerWidth=$(container).width();
        var elemWidth=$(elem).width();
        var left=(containerWidth-elemWidth)/2;

        $(elem).css({"position":"absolute","left":left,"top":"auto"});
     }
})(jQuery)