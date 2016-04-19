$(document).ready(function(){
    
    $("#title").mousedown(function(){
        $(this).text("I'm Bob Bradberry");
        alert("You have entered bob bradberry");
    });
    
    $("#title").mouseleave(function(){ 
        $("#title").text("does it change?");
    });

});