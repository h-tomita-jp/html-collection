$(function() {
  //tab切り替え
  $('ul.tab li').click(function() {
    var index = $('ul.tab li').index(this);
    if(index > 1){index -= 2;}
    $('.tab_content').css('display','none');
    $('.tab_content').eq(index).css('display','block');
    $('ul.tab li').removeClass('select');
    $('ul.tab li').addClass('not');
    $(this).addClass('select').removeClass('not');
  });
  //高さ揃え
  $('.plan_set a .text').matchHeight();
});

// ページトップのFLEXSLIDER処理
$('.bg_slider,.bg_slider_text').flexslider({
    animation: "fade",
    slideshowSpeed: 3500,
    animationSpeed: 1000,
    controlNav: false,
    directionNav: false,
});

// ページスクロールの結果、該当DIVに到達したらアニメーション開始
$(window).scroll(function() {
    var about = $('#about_area').offset().top;
    var aboutH = about - $(window).height();
    if ($(window).scrollTop() > aboutH) {
        $('#about_area h2').addClass('move');
        $('#about_area .col_L').addClass('move');
        $('#about_area .col_R').addClass('move');
        $('#about_area .link_area').addClass('move');
    }
    var athlete = $('#athlete_area').offset().top;
    var athleteH = athlete - $(window).height();
    if ($(window).scrollTop() > athleteH) {
        $('#athlete_area .bg_photo').addClass('move');
        $('#athlete_area ul.bg li').addClass('move');
        $('#athlete_area h2,#athlete_area .link_area').addClass('move');
        $('#athlete_area .photo li').addClass('delay');
    }
});
