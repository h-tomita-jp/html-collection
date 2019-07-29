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
$(window).on("load", function() {
    $('.flexslider').flexslider({
        slideshowSpeed: 5000,
        animation: "fade",
        controlNav: false,
        directionNav: false,
        pauseOnHover: false,
        direction: "horizontal",
        reverse: false,
        animationSpeed: 1500,
        prevText: "&lt;",
        nextText: "&gt;",
        slideshow: true
    });
});

// image Resize
$(window).on("load resize", function() {
    if ($(window).width() > 900) {
        $(".js-mainVisual").css({ height: $(window).height() - 30 });
    }
    else {
        $(".js-mainVisual").css({ height: $(window).height() + 20 });
    }

    outerWidth = $(".js-mainVisual").width();
    outerHeight = $(".js-mainVisual").height();
    innerWidth = $(".flexslider").width();
    innerHeight = $(".flexslider").height();
    widthRatio = outerWidth / innerWidth;
    heightRatio = outerHeight / innerHeight;
    maxRatio = Math.max(widthRatio, heightRatio);
    zoomedWidth = Math.floor(innerWidth * maxRatio);
    zoomedHeight = Math.floor(innerHeight * maxRatio);
    topMargin = Math.floor((zoomedHeight - outerHeight) / -2);
    leftMargin = Math.floor((zoomedWidth - outerWidth) / -2);
    $(".flexslider").css({ width: zoomedWidth, height: zoomedHeight, top: topMargin, left: leftMargin });

});
