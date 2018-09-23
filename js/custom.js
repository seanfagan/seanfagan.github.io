/* Lightbox */
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

/* Grayscale animation */
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

/* Back to top animation */
$("#toTop").click(function () {
   $("html, body").animate({scrollTop: 0}, 500);
});
