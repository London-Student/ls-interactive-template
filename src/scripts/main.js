import style from '../styles/main.scss';

const bodyTemplate = require("../templates/body.handlebars");
const headTemplate = require("../templates/head.handlebars");

let articleData = require('../../static/article.json');

document.addEventListener("DOMContentLoaded", function() {
  document.body.innerHTML = bodyTemplate(articleData);
  document.head.innerHTML = document.head.innerHTML + headTemplate(articleData);
});

const visualisation = require('../../static/scripts/visualisation.js');
visualisation();

