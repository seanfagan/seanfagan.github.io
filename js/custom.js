var $root = $('html, body');
$('a.project').click(function() {
  var href = $.attr(this, 'href'),
      $myProject = $(href),
      $projects = $('.showcase');

  // Animate scrolling to showcase
  $root.animate({
      scrollTop: $('#project-showcase').offset().top
  }, 200);

  // Hide other projects, reveal chosen project
  $projects.not($myProject).addClass("hidden");
  $myProject.removeClass("hidden");
  return false;
});

var shuffleme = (function( $ ) {
  'use strict';
  var $grid = $('#grid'), //locate what we want to sort 
      $filterOptions = $('.portfolio-sorting li'),  //locate the filter categories
      $sizer = $grid.find('.shuffle_sizer'),    //sizer stores the size of the items

  init = function() {

    // None of these need to be executed synchronously
    setTimeout(function() {
      listen();
      setupFilters();
    }, 100);

    // instantiate the plugin
    $grid.shuffle({
      itemSelector: '[class*="col-"]',
      sizer: $sizer    
    });
  },

  setupFilters = function() {
    var $btns = $filterOptions.children();
    $btns.on('click', function(e) {
      e.preventDefault();
      var $this = $(this),
          isActive = $this.hasClass( 'active' ),
          group = isActive ? 'all' : $this.data('group');

      // Change which link is active
      if ( !isActive ) {
        $('.portfolio-sorting li a').removeClass('active');
      }
      $this.toggleClass('active');

      // Filter elements
      $grid.shuffle( 'shuffle', group );
    });

    $btns = null;
  },

  listen = function() {
    var debouncedLayout = $.throttle( 300, function() {
      $grid.shuffle('update');
    });
  };

  return {
    init: init
  };
}( jQuery ));

$(document).ready(function()
{
  shuffleme.init(); //filter portfolio
});