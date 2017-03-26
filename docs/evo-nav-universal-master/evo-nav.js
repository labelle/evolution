$(document).ready(function(){
  
  // This set of variables is checked on document load.
  var navitemcount = $('.evo-navigation').attr('data-nav-item-count');
  var navitems = document.getElementsByClassName('evo-nav-item');
  var navitemindex = parseInt(navitemcount) - 1;  
  // Thses variables need to be checked here.  
  // They are also checked and updated within the window resize function below.
  var width_total = $('.evo-navigation').width();
  var width_left = $('.logo').width();
  var width_right = $('.nav-list').width();
  // This break point is important.  
  var mobile_nav_break_point = $('.evo-navigation').attr('data-mobile-nav-break-point');

  // Checking if screen size is below mobile nav break point.  768 is set in the style sheet as the max-media breakpoint. 
  if (width_total <= mobile_nav_break_point ) {
    // If the screen size is below mobile nav break point then we do nothing to the nav items other than hide the overflow nav.
    $('.evo-nav-overflow').addClass('hidden');

  } else {

    // If the screen size is wider than mobile nav break point then we have to check the total count of nav items and possibly place some in the overflow nav.
    // From there we hide and show as required.
    if (navitems.length > navitemcount) {
      $('.evo-nav-item').each(function() {
        $(this).addClass('showing');
      });
      $('.evo-navigation').each(function() {
        if(navitems.length < navitemindex) return;
        var hiddenElements = $('.evo-nav-item:gt(' + navitemindex + ')').removeClass('showing').addClass('hidden');
      });
      $('.evo-nav-item.hidden').each(function() {
        $(this).appendTo('.overflow-list').removeClass('hidden').addClass('overflow');
      });
    }
    // This is the function that adds items to the overflow nav on document load.  
    // Items being added on widow resize happen in the window resize function below.
    overflowcontrol(width_total, width_left, width_right);
  }

  // This is in charge of altering the DOM when a window resize is occurring.
  $(window).resize(function() {

    // This set of width variables is checked on window resize and so they need to be checked and updated as the window size changes.
    var width_total = $('.evo-navigation').width(); // Total width of the div
    var width_left = $('.logo').width(); // The left side width, this is the logo section
    var width_right = $('.nav-list').width(); // The right side, this includes the nav items
    var visible_nav_items = document.getElementsByClassName("showing"); // Returns a count of all visible nav items.  We will need this if the window size increases.

    if (width_total <= mobile_nav_break_point ) {
      // During a window resize, if the screen size has gone down to mobile size we will hide the overflow div.
      // This empties out the overflow nav and puts everything back into the mobile side nav.
      removeAllOverflowItems();
    }

    // If at any time more items want to show, we will remove them.
    // This was occuring on a very fast window resize.
    if (visible_nav_items.length > navitemcount && width_total > mobile_nav_break_point) {
      $('.showing').last().prependTo('.overflow-list').removeClass('showing').addClass('overflow');
    }

    // If the width goes below the width that the mobile menu appears it will continue to run the append elements function.
    // We only need this to work when the upper nav is showing.  When the side nav takes over then we can turn this off.
    if (width_left + width_right > (width_total - 100) && width_total > mobile_nav_break_point) {
      $('.showing').last().prependTo('.overflow-list').removeClass('showing').addClass('overflow');
    }

    // Need it to run as soon as window size moves beyond mobile nav break point, but also need it to not continue running.
    if (width_total > mobile_nav_break_point) {
      $('.evo-nav-overflow').removeClass('hidden');
      overflowcontrol(width_total, width_left, width_right);
    }

    // This number needs to be larger than the one in the function above.  
    // The reason is that when the nav items gets added back onto the nav-list it increases the width of the div being checked. 
    // If the window is still moving it will hide the returned nav item again because adding it made the div too large.
    // This could probably be tweaked to yeild a smoother result, maybe.
    if (width_left  + width_right < (width_total - 200)) {
      // Needs to check the visible nav items count, not hidden nav items. 
      if ( visible_nav_items.length < navitemcount) {
        $('.overflow').first().appendTo('.nav-item-container').removeClass('overflow').addClass('showing');
      }
    }
  });

  // Empties out the overflow nav.  This is called when the mobile nav break point is hit when a window resizes down.
  function removeAllOverflowItems() {
    $('.overflow').each(function() {
      $(this).removeClass('overflow').addClass('showing').appendTo('.nav-item-container');
    });
    $('.evo-nav-overflow').addClass('hidden');
  }

  // Places nav items into the overflow nav
  function overflowcontrol(width_total, width_left, width_right) {
    if (width_left  + width_right > (width_total - 100)) {
      $('.showing').last().prependTo('.overflow-list').removeClass('showing').addClass('overflow');
      var width_left = $('.logo').width();
      var width_right = $('.nav-list').width();
      // If the "if" conditional gets triggered we need to run this again.
      overflowcontrol(width_total, width_left, width_right);
    }
  }
});
