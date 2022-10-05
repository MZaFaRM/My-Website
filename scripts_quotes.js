var n = 0;

var multiplier = 2;

const el = document.getElementById('nobody');

var audio = document.getElementById("audio");

const population = ["Somebody", "A couple", "A group of people", "A large number of people", "The population of Kerala", "The population of India", "The population of China", "The population of China and India combined", "The population of the rest of the world apart from China and India", "The population of the entire world but some people", "The Solar System", "The Inhabitants of the Milky Way Galaxy", "The Entire Universe", "The Multiverse", "The Omniverse", "The Omniverse Squared", "Infinity"];

el.addEventListener('click', function Plus_1(){
  blink();
  audio.play();
  n++;
  if (n < 3){
    el.innerHTML = population[n-1];
  }

  else{
    if (n % 5 == 0){
      multiplier++;
    }
    if (multiplier > 16){
      overflow();
      return;
    }
    el.innerHTML = population[multiplier];
  }
});

function overflow() {
  if (multiplier == 17){
    el.innerHTML = "You can stop now";
  setTimeout(function () {
    el.innerHTML = "Infinity";
}, 500);
  }
  else {
  el.innerHTML = "STOP";
  setTimeout(function () {
    el.innerHTML = "Infinity";
}, 500);
  }
}

function blink() {
  el.style.backgroundColor = "grey";
  el.style.color = "black";
  setTimeout(function () {
    el.style.backgroundColor = "transparent";
    el.style.color = "";
  }, 200);
}