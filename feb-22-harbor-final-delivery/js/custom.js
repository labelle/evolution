

jQuery(document).ready(function($) {
  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop(),
        navbar = $('.navbar-default');

    if (scrollPos > 20) {
      navbar.addClass('navi');
    } else {
      navbar.removeClass('navi');
    }
  });
});

$(document).ready(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
  });
});

