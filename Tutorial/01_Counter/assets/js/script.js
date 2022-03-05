// console.log("oh hi mark");
var currentNumberWrapper = document.getElementById("currentNumber");
let currentNumber = 0;
// var addButton = document.getElementsByClassName("add")[0];
// var substractButton = document.getElementsByClassName("substract")[0];
// console.log(currentNumberWrapper);
// console.log(addButton);
// get by class name returns array, [0] is the element

function increment() {
  currentNumber = currentNumber + 1;
  // console.log(currentNumber);
  currentNumberWrapper.innerHTML = currentNumber;
  if (currentNumber > 0) {
    currentNumberWrapper.style.color = "#f8f8f2";
  }
}

function decrement() {
  currentNumber = currentNumber - 1;
  // console.log(currentNumber);
  currentNumberWrapper.innerHTML = currentNumber;
  if (currentNumber < 0) {
    currentNumberWrapper.style.color = "#ff5555";
  }
}
