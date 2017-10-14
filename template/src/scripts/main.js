import style from '../styles/main.scss';

var template = require("../templates/test.handlebars");

document.addEventListener("DOMContentLoaded", function() {
  var div = document.createElement('div');
  div.innerHTML = template();
  document.body.appendChild(div);
});