const btn = document.getElementById('name');

let index = 0;

const colors = ['green', 'blue', 'purple', 'red', 'orange', 'yellow'];

btn.addEventListener('click', function ColourChange() {
  btn.style.color = colors[index];

  index = index >= colors.length - 1 ? 0 : index + 1;
});

const time = document.getElementById("time");

setInterval(function () {
  time.innerHTML = new Date();
}, 100);