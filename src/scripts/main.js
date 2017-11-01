import style from '../styles/main.scss';

var bodyTemplate = require("../templates/body.handlebars");
var headTemplate = require("../templates/head.handlebars");

document.addEventListener("DOMContentLoaded", function() {
  document.body.innerHTML = bodyTemplate({
    title: "London Student has given thousands of young journalists the chance to write and report on their campuses",
    message: "Welcome to London Student!"
  });
  document.head.innerHTML = document.head.innerHTML + headTemplate();
});
