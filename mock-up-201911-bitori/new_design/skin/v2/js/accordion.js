$(function(){
	$(".accordionbox dt").on("click", function() {
		$(this).next().slideToggle();	
		// activeが存在する場合
		if ($(this).children(".accordion_icon").hasClass('active')) {
			// activeを削除
			$(this).children(".accordion_icon").removeClass('active');				
			// border-radiusを書き換え
			$(this).css('border-radius', '10px');
		}
		else {
			// border-radiusを書き換え
			$(this).css('border-radius', '10px 10px 0 0');
			// activeを追加
			$(this).children(".accordion_icon").addClass('active');			
		}			
	});
});