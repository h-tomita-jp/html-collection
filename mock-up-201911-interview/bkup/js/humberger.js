$(function() {
    $('#humberger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.sp').addClass('active');
        } else {
            $('.sp').removeClass('active');
        }
    });
});
$(function() {
    $('nav.sp ul li a').click(function() {
        $(this).removeClass('active');
	$('#humberger').removeClass('active');
 
        if ($(this).hasClass('active')) {
            $('.sp').addClass('active');
        } else {
            $('.sp').removeClass('active');
        }
    });
});
