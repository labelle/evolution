$(document).ready(function(){
  //mobile nav
  $('.navbutton.menu-offcanvas').on('click', function() {
      $('ul.nav-list').toggleClass('nav-open-canvas');
      $('.navbutton').toggleClass('nav-open-canvas');
  });

  $('.navbutton.menu-modal').on('click', function() {
      $('ul.nav-list').toggleClass('nav-open-modal');
      $('.navbutton').toggleClass('nav-open-modal');
  });

  //closes mobile nav on escape key hit
  $(document).keyup(function(e) {

      if(e.keyCode=== 27) {
          $('.navbutton.nav-open').click();
      }
  });
});
