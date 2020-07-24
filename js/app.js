(function($) {
	"use strict"
	  $('#black').click(function(){
		$('#black').fadeToggle("slow");;
		$('.blogpost2').fadeToggle("slow");;
    black.style.display = "none";
    black.classList.remove('shadow');
    popup.classList.remove('popupaanimation');
    $('#fullpage').fullpage({});
    $.fn.fullpage.setMouseWheelScrolling(true);
    $.fn.fullpage.setAllowScrolling(true);
    $.fn.fullpage.setKeyboardScrolling(true, 'down');
    popup.style.display = 'none';
	});
})(jQuery);
var popup = document.getElementsByClassName('popup')[0],
    black = document.getElementsByClassName('black')[0];
function callback(mode,slide) {
  if (mode == 'on') {
    black.style.display = "block";
    black.classList.add('shadow');
    popup.classList.add('popupaanimation');
    if (slide == 'home'){
			black.style.top = "-100%";
      popup.style.top = "-75%";
    }
    if (slide == 'content') {
			black.style.top = "0";
      popup.style.top = "25%";
    }
    $('#fullpage').fullpage({});
    $.fn.fullpage.setMouseWheelScrolling(false);
    $.fn.fullpage.setAllowScrolling(false);
    $.fn.fullpage.setKeyboardScrolling(false, 'down');
    popup.style.display = 'block';
  }
}
