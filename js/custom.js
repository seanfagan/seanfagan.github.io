$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

$(document).on('mouseenter', '#portrait', function(e) {
    var $portrait = $(e.target);
    var color_path = 'img/fagan-portrait-color.jpg';
    var greyscale_path = 'img/fagan-portrait-bw.jpg';

    if ($portrait.attr('src') == greyscale_path) {
      $portrait.attr('src', color_path);
    } else {
      $portrait.attr('src', greyscale_path);
    }
});

$(document).on('click', 'a.soundcloud', function(e) {
  var $link = $(e.target);
  var track = $link.data("track");
  $(e.target).replaceWith('<iframe width="100%" height="115" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + track + '&amp;auto_play=true&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false&amp;color=333333&amp;liking=false&amp;hide_cookies=true&amp;download=false"></iframe>');
});