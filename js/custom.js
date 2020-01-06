window.addEventListener('load', (event) => {
  /* Grayscale animation */
  $('.grayscale').addClass("ungrayscale");
});

/* Lightbox */
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

$(window).scroll(function() {
  /* Header scrolling fade */
  var scrollY = $(window).scrollTop();
  
  var alpha = .5 - scrollY * 0.002;
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
