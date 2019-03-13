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
function magic(poly){
  var element = document.getElementById('Poly1');
  element.classList.add('letsdo');
  var element = document.getElementById('sert');
  element.classList.add('polygon-ready');
  element.classList.remove('polygon');
  var element = document.getElementById('Poly2');
  element.classList.add('letsdo2');
  var element = document.getElementById('contact');
  element.classList.add('polygon-ready');
  element.classList.remove('polygon');
  var element = document.getElementById('Poly3');
  element.classList.add('letsdo3');
  var element = document.getElementById('services');
  element.classList.add('polygon-ready');
  element.classList.remove('polygon');
  var element = document.getElementById('Poly4');
  element.classList.add('letsdo4');
  var element = document.getElementById('reviews');
  element.classList.add('polygon-ready');
  element.classList.remove('polygon');
  var element = document.getElementById('Poly5');
  element.classList.add('letsdo5');
  var element = document.getElementById('work');
  element.classList.add('polygon-ready');
  element.classList.remove('polygon');
  poly.style.backgroundImage = "url('image/"+poly.id+"-hover.png')";
}
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
