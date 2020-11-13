let box = document.querySelector(".box");
let button = document.querySelector("button");

function random(number){
  return Math.floor(Math.random() * (number+1));
}

button.onclick = function (){
  let randcol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  box.style.backgroundColor = randcol;
}
