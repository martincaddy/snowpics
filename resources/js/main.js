$(document).ready(function(){
  // HEADER FUNCTION

     $(window).scroll(function () {
         var $header = $('.navbar');
         var $headerHeight = $(window).width() < 768 ? 135 : 50;
         $(window).scrollTop() >= $headerHeight
             ? $header.slideUp(150)
             : $header.slideDown(150)
     });

// IMAGE CAROUSEL FUNCTION

  $('.carousel').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });
  });