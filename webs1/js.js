$(window).scroll(function() {
  var wScroll = $(this).scrollTop();
  console.log(scroll);
  $(".title-h1").css({
    "transition": "transform 0s ease-in-out",
    "transform": "translate(0, " + (wScroll / 2) + "%)"
  })

  $(".amber").css({
    "transition": "transform 0s ease-in-out",
    "transform": "translate(0, -" + (wScroll / 24) + "%)"
  });

  if (wScroll > $(".three").offset().top / 1.7) {
    $(".three .sub-box").each(function() {
      $(".three .sub-box").addClass("showing");
    });
  }
});

$(".title-h1").hover(function() {
  $(this).css({
    "background-color": "white",
    "transition": "all 0.3 ease-in-out",
    "font-size": "1.2rem",
    "opacity": "0.7"
  });
  $(this).children().css({
    "transition": "all 0.3 ease-in-out",
    "color": "#666",
    "font-weight": "100"
  });
}, function() {
  $(this).css({
    "background": "none",
    "transition": "all 0.3 ease-in-out",
    "font-size": "1rem",
    "opacity": "1"
  });
  $(this).children().css({
    "transition": "all 0.3 ease-in-out",
    "color": "white",
    "text-decoration": "none",
    "font-weight": "bold"
  })
});
