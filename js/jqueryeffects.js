$(document).ready(function() {

  var navOffset = $("nav").offset().top; //Findout how far from the top the navbar is

  /* navbar-placeholder to prevent jumpy transitions - only for larger screens, on small screens collapsed varbar won't work because of the placeholder having a fixed height */
  var width = $(window).width();
  if (width > 778) {
    $("nav").wrap('<div class="navbar-placeholder"></div>');
    $(".navbar-placeholder").height($("nav").outerHeight());
    $(".navbar-placeholder").addClass("container-fluid");
  }

  
  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop();

    if (scrollPos >= navOffset) {

      $("nav").addClass("navbar-fixed-top");

    } else {

      $("nav").removeClass("navbar-fixed-top");
    }

  });

});
