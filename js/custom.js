var year = new Date().getFullYear();
document.getElementById("copyright").textContent = year;

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});


$(window).scroll(function() {
  var windowH = $(window).height();
  var scrollY = $(window).scrollTop();
  $('.grayscale').each(function() {
    var imgPosition = $(this).offset().top;
    if (scrollY > imgPosition - windowH) {
      $(this).addClass("ungrayscale");
    }
  });
});


$(document).on('click', 'a.soundcloud', function(e) {
  var $link = $(e.target);
  var track = $link.data("track");
  $(e.target).replaceWith('<iframe width="100%" height="115" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + track + '&amp;auto_play=true&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false&amp;color=333333&amp;liking=false&amp;hide_cookies=true&amp;download=false"></iframe>');
});
