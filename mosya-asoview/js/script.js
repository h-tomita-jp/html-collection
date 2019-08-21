// .switch img name replace
// $(function(){
//   var $setElem = $('.switch'),
//       pcName = '_pc',
//       spName = '_sp',
//       replaceWidth = 768;

//   $setElem.each(function(){
//     var $this = $(this);
//     function imgSize(){
//       var windowWidth = parseInt(window.innerWidth);
//       if(windowWidth >= replaceWidth) {
//         $this.attr('src',$this.attr('src').replace(spName,pcName));
//       } else if(windowWidth < replaceWidth) {
//         $this.attr('src',$this.attr('src').replace(pcName,spName));
//       }
//     }
//     $(window).on('load resize', function(){imgSize();});
//   });
// });

$(function() {
  //tab
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

// function option_change(){
//   var link = document.sel2_form.sel2.value;
//   var a = '<a href="'+link+'"target="_blank">プランを見る</a>';
//   $('.select_wrap + .btn').empty();
//   $('.select_wrap + .btn').html(a);
// }

$('.bg_slider,.bg_slider_text').flexslider({
    animation: "fade",
    slideshowSpeed: 3500,
    animationSpeed: 1000,
    controlNav: false,
    directionNav: false,
});

// $(window).on('load resize', function() {
//     $('.bg_slider').addClass('open');
//     var bgH = $('.bg_area .bg02').height();
// });

// //kv周りの動き
// $(function() {
//     setTimeout(function() {
//         $('.bg_area .bg').addClass('open');
//         setTimeout(function() {
//             $('.bg_area .bg,.move_text').addClass('sec');
//             var i = 0;
//             setTimeout(function() {
//                 $('.main_title span').each(function() {
//                     $(this).delay(500 * i).queue(function() {
//                         $(this).addClass('delay');
//                     });
//                     i++;
//                 });
//                 setTimeout(function() {
//                     $('.bg_slider_text').find('span').addClass('delay');
//                 }, 1500);
//             }, 1000);
//             $('.bg h2').addClass('show');
//             setTimeout(function() {
//                 $('.text,.balloon').addClass('show');
//             }, 500);
//         }, 300);
//     }, 500);
// });

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
