
$(document).ready(function() {


  const swiper = new Swiper('.main-slider', {
    // Optional parameters
    loop: true,
    autoplay: {
    	delay: 3000
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.slider__prev',
      prevEl: '.slider__next',
    },

  });

  $(".projects__tabs").tabs();

  const playButton =$("#video__play");
  const content = $('.video__content')
playButton.on("click", function() {
  if (video.paused == true) {
    // Play the video
    video.play();
    content.addClass('hidden')

  } else {
    // Pause the video
    video.pause();
     content.removeClass('hidden')
  }
});

})