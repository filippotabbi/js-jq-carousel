
$(document).ready(function(){
	$('.slider-wrapper .images img.active').show();
	var current_img=0;


	$('.next').click(function(){
		$('.slider-wrapper .images img').eq(current_img).hide();
		$('.nav > i').eq(current_img).removeClass('active');
		if(current_img<3)
			current_img++;
		else
			current_img=0;
		$('.slider-wrapper .images img').eq(current_img).fadeIn();
		$('.nav > i').eq(current_img).addClass('active');
	});

	$('.prev').click(function(){
		$('.slider-wrapper .images img').eq(current_img).hide();
		$('.nav > i').eq(current_img).removeClass('active');
		if(current_img>0)
			current_img--;
		else
			current_img=3;
		$('.slider-wrapper .images img').eq(current_img).fadeIn();
		$('.nav > i').eq(current_img).addClass('active');
	});

  
});
