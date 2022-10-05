const font = document.getElementById("font");

const Fonts = [
  "Times New Roman",
  "Georgia",
  "Garamond",
  "Courier New",
  "Lucida Console",
  "Brush Script MT",
  "Lucida Handwriting",
  "Copperplate",
  "Helvetica",
];

let i = 0;

setInterval(function () {
  font.style.fontFamily = Fonts[i];
  i = (i + 1) % 9;
}, 750);

var audio = document.getElementById("audio");

var el = document.getElementById("sounds");

el.addEventListener("click", function () {
  audio.play();
});
