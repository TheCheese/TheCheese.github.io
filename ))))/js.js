$("body").keydown(function(e){
  if(e.keyCode==39){
    nextText();
  }
  else if (e.keyCode==13) {
    $(".mainRowCol").html("");
  }
});

let next = function(){
  nextText();
}

let nextText = function () {
  $(".mainRowCol").append("<div class='textModule'><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum vitae laudantium qui saepe totam dolor eius similique debitis vel, magnam. Debitis cupiditate voluptatibus eum cumque praesentium ullam fugit hic similique?</p></div>");
}
  
