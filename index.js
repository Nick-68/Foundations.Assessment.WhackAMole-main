//turning images into an array to change the index of the mole
const imgs = document.querySelectorAll("img");
let imgArray = [...imgs];
let fromIndex = imgArray.indexOf("mole");

let holes = document.getElementById("imgholes");
const mole = document.getElementById("mole");

//working random number generator for mole
function getRandomNumber() {
  return Math.floor(Math.random() * 9);
}
let toIndex = getRandomNumber;
//Making the generated number = the mole index in the array

//score counter
let score = 0;

mole.addEventListener("click", function () {
  score++;
  let p = document.querySelector("#counter");
  p.innerText = score;
  if (score >= 10) {
    alert("Congrats you won!!!");
    
  }
});
//end counter

//splice(random index to be inserted at, how many being replaced
//0 for this game , what is being placed there mole image in this case)
//getting this to actually move was more difficult then i thought it would be.
function changePosition() {
//  let element = imgArray.splice(fromIndex, 1)[1];
  imgArray.splice(Math.floor(Math.random() * 9), 0, mole);
  console.log(imgArray);
}
let imgHoles = document.querySelector('#imgHoles')
mole.addEventListener('click', function(){
  imgArray.splice(Math.floor(Math.random() * 9), 1, 'img.mole')
  console.log(imgArray)
  imgHoles.innerHTML = imgArray;
});

//change position
