// SPメニューオープン
$(".js-navigation").click(function() {
    $(".js-navigation").toggleClass('is-open');
});
        
// ブラウザ幅変更時SPメニュー自動クローズ
$(window).on('load resize', function() {
    $(".js-navigation").removeClass("is-open") 
});

// トップに移動
$('.js-backTop').click(function() {
    $('body, html').animate({
        scrollTop: 0
    }, 500);
});

// flexslider
$(window).on('load resize', function() {
    $(".flexslider").flexslider({
        //       slideshowSpeed: 5000,
        //       animation: "fade",
        //       controlNav: false,
        //       directionNav: false,
        //       pauseOnHover: false,
        //       direction: "horizontal",
        //       reverse: false,
        //       animationLoop: true,
        //       animationSpeed: 1500,
        //       prevText: "&lt;",
        //       nextText: "&gt;",
        //       slideshow: true
    });
});
