import style from '../styles/main.scss';

var bodyTemplate = require("../templates/body.handlebars");
var headTemplate = require("../templates/head.handlebars");

document.addEventListener("DOMContentLoaded", function() {
  document.body.innerHTML = bodyTemplate({
    title: "London Student has given thousands of young journalists a chance",
    author: "Cale Tilford",
    datePublished: "Nov 6, 2017",
    paragraphs: [
      "Since 1979, London Student has given thousands of young journalists the chance to write and report on their campuses.",
      "Now we are an independent co-operative, run by our members. We believe students’ unions and universities are so bad at running student publications that we’re better off doing it ourselves.",
      "We want to produce journalism that’s undeniably relevant to our readers. London students care about what their tuition fees are being spent on, free speech, safety, the environment, activism and student politics."
    ],
    footnote: [
      "Sources: A great source for a great article",
      "Credits: Someone great who did a great thing"
    ]
  });
  document.head.innerHTML = document.head.innerHTML + headTemplate();
});
