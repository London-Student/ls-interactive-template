import style from '../styles/main.scss';

var template = require("../templates/main.handlebars");

document.addEventListener("DOMContentLoaded", function() {
  var div = document.createElement('div');
  div.innerHTML = template({message: "Welcome to London Student!"});
  document.body.appendChild(div);
});