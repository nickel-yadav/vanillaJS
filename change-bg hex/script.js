let box = document.querySelector(".box");
let button = document.querySelector("button");
let value = document.querySelector("#hex-text");
let alpha = ['a','b','c','d','e','f',0,1,2,3,4,5,6,7,8,9];
let hex = '#';

function random(array){
  let index = Math.floor(Math.random()*array.length);
  return array[index];
}

button.onclick = function(){
  for (let i=0; i<6; i++){
    let x = random(alpha);
    hex += x;
  }
  value.textContent = hex;
  box.style.backgroundColor = hex;
  hex = '#';

}
