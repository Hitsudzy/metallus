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
function callback(mode) {
  if (mode == 'on') {
    var element = document.getElementsByClassName('popupCallback')[0];
    location.href = '#home';
    $('#fullpage').fullpage({});
    $.fn.fullpage.setMouseWheelScrolling(false);
    $.fn.fullpage.setAllowScrolling(false);
    $.fn.fullpage.setKeyboardScrolling(false, 'down');
    element.style.display = 'block';
  }
  if (mode == 'off') {
    var element = document.getElementsByClassName('popupCallback')[0];
    location.href = '#home';
    $('#fullpage').fullpage({});
    $.fn.fullpage.setMouseWheelScrolling(true);
    $.fn.fullpage.setAllowScrolling(true);
    $.fn.fullpage.setKeyboardScrolling(true, 'down');
    element.style.display = 'none';
  }
}
