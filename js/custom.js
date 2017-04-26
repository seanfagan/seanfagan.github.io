window.onload = function(){
  setupSoundCloudEmbeds();
}

function hoverOnAbout() {
  $("#portrait").attr('src', 'img/fagan-portrait-color.jpg');
}

function hoverOffAbout() {
  $("#portrait").attr('src', 'img/fagan-portrait-bw.jpg');
}

function setupSoundCloudEmbeds() {
  var iframes = $("iframe.soundcloud").get();
  $.each(iframes, function(index, iframe) {
    iframe.setAttribute("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" + iframe.dataset.track + "&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false&amp;color=333333&amp;liking=false&amp;hide_cookies=true&amp;download=false");
    iframe.setAttribute("scrolling", "no");
    iframe.setAttribute("frameborder", "no");
  });
}