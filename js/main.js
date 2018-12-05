(function($) {
	"use strict"

	// Preloader
	$(window).on('load', function() {
		$("#preloader").delay(600).fadeOut();
	});

	// Mobile Toggle Btn
	$('.navbar-toggle').on('click',function(){
		$('#header').toggleClass('nav-collapse')
	});

	$('#bg_layer').fadeToggle("slow");;
	$('.blogpost2').fadeToggle("slow");;
	
	$('#open').click(function(){
		$('#bg_layer').fadeToggle("slow");
		$('.blogpost2').fadeToggle("slow");
	});
	$('#close').click(function(){
		$('#bg_layer').fadeToggle("slow");;
		$('.blogpost2').fadeToggle("slow");;
	});
	$('#bg_layer').click(function(){
		$('#bg_layer').fadeToggle("slow");;
		$('.blogpost2').fadeToggle("slow");;
	});
})(jQuery);
