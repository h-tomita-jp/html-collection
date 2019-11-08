function scrollin() {
  $('.fadein').each(function() {
    let elemPos = $(this).offset().top;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 200) {
      $(this).addClass('scrollin');
    }
  });
}

$(function() {

  setTimeout(function() {
    $('#preloader').fadeOut();
    $('.main-wrapper').addClass('main-wrapper-open');
  }, 1000);

  scrollin();

  $(window).scroll(function() {
    scrollin();
  });

  $('.works-slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    fade: true
  });
});
