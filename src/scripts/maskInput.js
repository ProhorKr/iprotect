import IMask from 'imask'

const maskPhone = {
  mask: '+{7}(000)000-00-00'
}
const maskEmail = {
  mask: /^\S*@?\S*$/
}

window.onload = () => {
  var maskFormPhone = IMask(document.getElementById('form_phone'), maskPhone);
  var maskFormMail = IMask(document.getElementById('form_email'), maskEmail);
}

