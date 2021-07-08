// Magnific popup for image

$(document).ready(function () {
  $(".project-popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});

// Magnific popup for video

$(document).ready(function () {
  $(".video").magnificPopup({
    type: "iframe",
  });
});

// Counter js
jQuery(document).ready(function ($) {
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});

// Slick Slider js

$(document).ready(function () {
  $(".slick_slider").slick({
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fas fa-arrow-right"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fas fa-arrow-left"></i></button>',
  });
});
