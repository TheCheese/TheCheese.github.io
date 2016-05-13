$(document).ready(function() {
    
    $("#navbarBottom").hide();
    $("#navbarTopLi1").click(function() {
        $("#navbarBottom").toggle();
    });
    
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