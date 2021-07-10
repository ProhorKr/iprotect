import IMask from 'imask'

var maskOptions = {
  mask: '+{7}(000)000-00-00'
};
var maskTimerPhone = IMask(document.getElementById('form_timer-phone'), maskOptions);
var maskCalcPhone = IMask(document.getElementById('form_calc-tel'), maskOptions);
var maskPopupPhone = IMask(document.getElementById('form_popup-tel'), maskOptions);
var maskInstaPhone = IMask(document.getElementById('form_insta-phone'), maskOptions);
var maskInstaPhone2 = IMask(document.getElementById('form_insta-phone2'), maskOptions);