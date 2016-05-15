$(document).ready(function() {
    //menu opener
    $("#navbarBottom").hide();
    $("#navbarTopLi1").click(function() {
        $("#navbarBottom").slideToggle(1000,"linear");
    });
    
    //centers top image logo
    $(function() {
        function centerImage() {
            var liWidth=$("#navbarTopLi2").width();
            var imgWidth=$("#topImage").width();
            var leftMargin=Math.floor((liWidth-imgWidth)/2)+"px";
            $("#topImage").css("margin-left",leftMargin);
        }
        setInterval(centerImage, 100)
    });
    
    //image switcher
    $(function(){
       function slideSwitch(){
           var $active = $('#slideshow img.active');
           var $next = $active.next();

            if ( $active.length == 0 ) $active = $('#slideshow IMG:last');

            var $next =  $active.next().length ? $active.next()
            : $('#slideshow IMG:first');

           $active.addClass('last-active');

           $next.css({opacity: 0.0})
             .addClass('active')
             .animate({opacity:1.0}, 1000, function() {
                  $active.removeClass('active last-active');
             });
      }
      setInterval(slideSwitch, 5000 );
    });
});
