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
  
  var alpha = .5 - scrollY * 0.001
  if (alpha > 0) {
  	$("#header .row").css({
      "background": "linear-gradient(to bottom right, rgba(45,0,5," + alpha + "), rgba(35,5,60," + alpha + "))",
  	});
  }
});

$("#toTop").click(function () {
   $("html, body").animate({scrollTop: 0}, 1000);
});

$(document).on('click', 'a.soundcloud', function(e) {
  var $link = $(e.target);
  var track = $link.data("track");
  $(e.target).replaceWith('<iframe width="100%" height="115" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + track + '&amp;auto_play=true&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false&amp;color=333333&amp;liking=false&amp;hide_cookies=true&amp;download=false"></iframe>');
});
